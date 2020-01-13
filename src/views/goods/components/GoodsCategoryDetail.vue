<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称" prop="category_name">
        <el-input v-model="ruleForm.category_name"></el-input>
      </el-form-item>
      <el-form-item label="上级分类" prop="pid">
        <el-select v-model="ruleForm.pid" placeholder="请选择上级分类">
          <el-option
            :key="0"
            label="无"
            :value="0"
          ></el-option>
          <el-option
            v-for="item in categorys"
            :key="item.category_id"
            :label="item.category_name"
            :value="item.category_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类图片">
        <el-upload
          class="avatar-uploader"
          name="image"
          :action="uploadImage"
          :show-file-list="false"
          :on-success="handleImgSuccess"
          :before-upload="beforeImgUpload"
        >
          <img
            v-if="ruleForm.img"
            :src="imgurl + ruleForm.img"
            width="200"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
  getGoodsCategory,
  createGoodsCategory,
  updateGoodsCategory,
  getCategorys
} from "@/api/goods";

export default {
  name: "GoodsCategoryDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    is_self: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      uploadImage: process.env.VUE_APP_BASE_API + "/uploadImage",
      imgurl: "",
      categorys: null,
      ruleForm: {
        pid: 0,
        category_name: null,
        img: null,
        order: 1
      },
      rules: {
        pid: [{ required: true, message: "请选择上级分类", trigger: "change" }],
        category_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    console.log({is_self:this.is_self})
    this.getCategorys(this.is_self);
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    getCategorys(is_self) {
      let query = { category_id: 0, is_self: is_self };
      console.log({query})
      getCategorys(query)
        .then(response => {
          console.log(response);
          this.categorys = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchData(id) {
      getGoodsCategory(id)
        .then(response => {
          this.ruleForm = response.data;
          
          console.log(this.ruleForm);
        })
        .catch(err => {
          console.log(err);
        });
    },
    
    handleImgSuccess(res, file) {
      console.log(res, file);
      if (res.status_code === 200) {
        this.imgurl = res.data.url;
        this.ruleForm.img = res.data.path;
      } else {
        this.$message.error("上传失败!");
      }
    },
    beforeImgUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.isEdit) {
            const id = this.$route.params && this.$route.params.id;
            this.ruleForm._method = "put";
            updateGoodsCategory(id, this.ruleForm)
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
            createGoodsCategory(this.ruleForm)
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
