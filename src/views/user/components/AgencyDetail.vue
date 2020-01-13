<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="代理名称" prop="agency_name">
        <el-input v-model="ruleForm.agency_name"></el-input>
      </el-form-item>

      <el-form-item label="代理级别" prop="agency_level">
        <el-select v-model="ruleForm.agency_level" placeholder="请选择上级分类">
          <el-option
            v-for="item in agencyLevelOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地区" size="medium">
        <el-cascader
          v-model="areas"
          :options="treeAreas"
          :props="{ value: 'code',label: 'name' }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="详细地址" prop="agency_address">
        <el-input v-model="ruleForm.agency_address" placeholder="详细地址"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  getAgency,
  createAgency,
  updateAgency,
  getTreeAreas
} from "@/api/user";

const agencyLevelOptions = [
  { id: 1, name: "一级代理" },
  { id: 2, name: "二级代理" },
  { id: 3, name: "三级代理" }
];

export default {
  name: "AgencyDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      agencyLevelOptions,
      areas: null,
      treeAreas: [],
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        agency_name: null,
        agency_level: 3,
        province: null,
        city: null,
        area: null,
        agency_address: null
      },
      rules: {
        agency_name: [
          { required: true, message: "请输入代理名称", trigger: "blur" }
        ],
        agency_level: [
          { required: true, message: "请选择代理级别", trigger: "change" }
        ]
      }
    };
  },
  created() {
    this.getTreeAreas();
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    getTreeAreas() {
      getTreeAreas()
        .then(response => {
          console.log(response);
          this.treeAreas = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleChange(value) {
        if(value.length == 3){
            this.ruleForm.province = value[0]
            this.ruleForm.city = value[1]
            this.ruleForm.area = value[2]
        }
    //   console.log(value.length);
    },
    fetchData(id) {
      getAgency(id)
        .then(response => {
          this.ruleForm = response.data;
            if(response.data.area_code){
                this.areas = [response.data.province_code,response.data.city_code,response.data.area_code]
            }
          console.log(this.ruleForm);
        })
        .catch(err => {
          console.log(err);
        });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.isEdit) {
            const id = this.$route.params && this.$route.params.id;
            this.ruleForm._method = "put";
            updateAgency(id, this.ruleForm)
              .then(response => {
                console.log(response);
                if (response.status_code === 200) {
                  this.$notify({
                    title: "成功",
                    message: response.message,
                    type: "success",
                    duration: 2000
                  });
                  this.$router.go(-1);
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            createAgency(this.ruleForm)
              .then(response => {
                console.log(response);
                if (response.status_code === 200) {
                  this.$notify({
                    title: "成功",
                    message: response.message,
                    type: "success",
                    duration: 2000
                  });
                  this.$router.go(-1);
                }
              })
              .catch(err => {
                console.log(err);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
</style>
