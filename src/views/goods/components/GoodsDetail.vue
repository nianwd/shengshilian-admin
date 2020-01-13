<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="goods_name">
        <el-input v-model="ruleForm.goods_name"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="category_id">
        <el-select v-model="ruleForm.category_id" placeholder="请选择商品分类">
          <el-option v-for="item in categorys" :key="item.category_id" :label="item.category_name" :value="item.category_id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品主图">
        <el-upload
          class="avatar-uploader"
          name="image"
          :action="uploadImage"
          :show-file-list="false"
          :on-success="handleMainSuccess"
          :before-upload="beforeMainUpload"
        >
          <img
            v-if="ruleForm.main_img"
            :src="imgurl + ruleForm.main_img"
            width="200"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品组图">
        <el-upload
          :action="uploadImage"
          name="image"
          list-type="picture-card"
          :file-list="fileList"
          :on-preview="handlePictureCardPreview"
          :on-success="handleListSuccess"
          :on-remove="handleRemove"
          :limit="6"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品描述" prop="goods_desc">
        <el-input type="textarea" v-model="ruleForm.goods_desc"></el-input>
      </el-form-item>
      <el-form-item label="重量" prop="weight">
        <el-input v-model="ruleForm.weight" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="原价" prop="original_price">
        <el-input v-model="ruleForm.original_price" type size="medium"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stock">
        <el-input v-model="ruleForm.stock" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="上下架" prop="is_up">
        <el-switch v-model="ruleForm.is_up" @change="onchange" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="包邮" prop="is_free_shipping">
        <el-switch v-model="ruleForm.is_free_shipping" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getGoods, createGoods, updateGoods,getCategorys } from "@/api/goods";

export default {
  name: "GoodsDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      uploadImage: process.env.VUE_APP_BASE_API + "/uploadImage",
      imgurl: "",
      fileList: [],
      categorys:null,
      ruleForm: {
        goods_name: null,
        category_id: null,
        main_img: null,
        list_img: [],
        goods_desc: null,
        weight: null,
        original_price: null,
        price: null,
        stock: 0,
        is_up: 1,
        is_hot: 0,
        is_free_shipping: 0
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ],
        category_id: [
          { required: true, message: "请选择商品分类", trigger: "change" }
        ],
        main_img: [
          { required: true, message: "请上传商品主图", trigger: "change" }
        ],
        goods_desc: [
          { required: true, message: "请填写视频描述", trigger: "change" }
        ],
        price: [{ required: true, message: "请填写商品价格", trigger: "blur" }],
        stock: [{ required: true, message: "请填写商品库存", trigger: "blur" }]
      }
    };
  },
  created() {
      this.getCategorys()
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    getCategorys(){
        let query = {category_id:0,is_self:1}
        getCategorys(query)
        .then(response => {
            console.log(response)
          this.categorys = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchData(id) {
      getGoods(id)
        .then(response => {
          this.ruleForm = response.data;
          if(this.ruleForm.list_img.length > 0){
              for (let index = 0; index < this.ruleForm.list_img.length; index++) {
                    const element = this.ruleForm.list_img[index];
                    this.fileList.push({name:element,url:element})
                }
          }
          
          console.log(this.ruleForm)
        })
        .catch(err => {
          console.log(err);
        });
    },
    onchange(q) {
      console.log(q);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleListSuccess(res, file) {
      console.log(res, file);
      if (res.status_code === 200) {
        this.ruleForm.list_img.push(res.data.path);
        console.log(this.ruleForm.list_img)
      } else {
        this.$message.error("上传失败!");
      }
    },
    handleMainSuccess(res, file) {
      console.log(res, file);
      if (res.status_code === 200) {
        this.imgurl = res.data.url;
        this.ruleForm.main_img = res.data.path;
      } else {
        this.$message.error("上传失败!");
      }
    },
    beforeMainUpload(file) {
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
            updateGoods(id, this.ruleForm)
              .then(response => {
                console.log(response);
                if (response.status_code === 200) {
                  this.$notify({
                    title: "成功",
                    message: response.message,
                    type: "success",
                    duration: 2000
                  });
                  this.$router.go(-1)
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            createGoods(this.ruleForm)
              .then(response => {
                console.log(response);
                if (response.status_code === 200) {
                  this.$notify({
                    title: "成功",
                    message: response.message,
                    type: "success",
                    duration: 2000
                  });
                  this.$router.go(-1)
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
