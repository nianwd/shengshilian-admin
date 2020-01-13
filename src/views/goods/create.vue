<template>
    <goods-detail :is-edit="false" />
</template>

<script>
    import GoodsDetail from './components/GoodsDetail'

    export default {
        name: "create",
        components: { GoodsDetail },
        // data() {
        //     return {
        //         dialogImageUrl: '',
        //         dialogVisible: false,
        //         uploadImage: '/api/uploadImage',
        //         imgurl: '',
        //         ruleForm: {
        //             goods_name: null,
        //             category_id: null,
        //             main_img: null,
        //             list_img: [],
        //             goods_desc: null,
        //             weight: null,
        //             original_price: null,
        //             price: null,
        //             stock: 0,
        //             is_up: '1',
        //             is_hot: '0',
        //             is_free_shipping: '0',
        //         },
        //         rules: {
        //             goods_name: [
        //                 { required: true, message: '请输入商品名称', trigger: 'blur' },
        //             ],
        //             category_id: [
        //                 { required: true, message: '请选择商品分类', trigger: 'change' }
        //             ],
        //             main_img: [
        //                 { required: true, message: '请上传商品主图', trigger: 'change' }
        //             ],
        //             goods_desc: [
        //                 { required: true, message: '请填写视频描述', trigger: 'change' }
        //             ],
        //             price: [
        //                 { required: true, message: '请填写商品价格', trigger: 'blur' }
        //             ],
        //             stock: [
        //                 { required: true, message: '请填写商品库存', trigger: 'blur' }
        //             ],
        //         }
        //     };
        // },
        // methods: {
        //     onchange(q){
        //         console.log(q)
        //     },
        //     handleRemove(file, fileList) {
        //         console.log(file, fileList);
        //     },
        //     handlePictureCardPreview(file) {
        //         this.dialogImageUrl = file.url;
        //         this.dialogVisible = true;
        //     },
        //     handleMainSuccess(res, file) {
        //         console.log(res,file)
        //         if(res.status_code === 200){
        //             this.imgurl = res.data.url;
        //             this.ruleForm.main_img = res.data.path;
        //         }else{
        //             this.$message.error('上传失败!');
        //         }
        //     },
        //     beforeMainUpload(file) {
        //         const isLt2M = file.size / 1024 / 1024 < 2;
        //
        //         if (!isLt2M) {
        //             this.$message.error('上传头像图片大小不能超过 2MB!');
        //         }
        //         return isLt2M;
        //     },
        //     submitForm(formName) {
        //         this.$refs[formName].validate((valid) => {
        //             if (valid) {
        //
        //             } else {
        //                 console.log('error submit!!');
        //                 return false;
        //             }
        //         });
        //     },
        //     resetForm(formName) {
        //         this.$refs[formName].resetFields();
        //     }
        // }
    }
</script>

<style scoped>

</style>
