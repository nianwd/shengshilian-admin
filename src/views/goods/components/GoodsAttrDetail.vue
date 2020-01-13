<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称" prop="attr_name">
        <el-input v-model="ruleForm.attr_name"></el-input>
      </el-form-item>
      
      <el-form-item label="排序" prop="order">
        <el-input v-model="ruleForm.order" placeholder="排序"></el-input>
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
  getGoodsAttr,
  createGoodsAttr,
  updateGoodsAttr,
} from "@/api/goods";

export default {
  name: "GoodsAttrDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        attr_name: null,
        order: 1
      },
      rules: {
        attr_name: [
          { required: true, message: "请输入商品属性名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    fetchData(id) {
      getGoodsAttr(id)
        .then(response => {
          this.ruleForm = response.data;
          
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
            updateGoodsAttr(id, this.ruleForm)
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
            createGoodsAttr(this.ruleForm)
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
