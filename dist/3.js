(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_goods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/goods */ "./src/api/goods.js");
/* harmony import */ var _api_goods__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_goods__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GoodsDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      uploadImage: "http://shengshilian.yunzupu.online/api" + "/uploadImage",
      imgurl: "",
      fileList: [],
      categorys: null,
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
        goods_name: [{
          required: true,
          message: "请输入商品名称",
          trigger: "blur"
        }],
        category_id: [{
          required: true,
          message: "请选择商品分类",
          trigger: "change"
        }],
        main_img: [{
          required: true,
          message: "请上传商品主图",
          trigger: "change"
        }],
        goods_desc: [{
          required: true,
          message: "请填写视频描述",
          trigger: "change"
        }],
        price: [{
          required: true,
          message: "请填写商品价格",
          trigger: "blur"
        }],
        stock: [{
          required: true,
          message: "请填写商品库存",
          trigger: "blur"
        }]
      }
    };
  },
  created: function created() {
    this.getCategorys();

    if (this.isEdit) {
      var id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    getCategorys: function getCategorys() {
      var _this = this;

      var query = {
        category_id: 0,
        is_self: 1
      };

      Object(_api_goods__WEBPACK_IMPORTED_MODULE_0__["getCategorys"])(query).then(function (response) {
        console.log(response);
        _this.categorys = response.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    fetchData: function fetchData(id) {
      var _this2 = this;

      Object(_api_goods__WEBPACK_IMPORTED_MODULE_0__["getGoods"])(id).then(function (response) {
        _this2.ruleForm = response.data;

        if (_this2.ruleForm.list_img.length > 0) {
          for (var index = 0; index < _this2.ruleForm.list_img.length; index++) {
            var element = _this2.ruleForm.list_img[index];

            _this2.fileList.push({
              name: element,
              url: element
            });
          }
        }

        console.log(_this2.ruleForm);
      }).catch(function (err) {
        console.log(err);
      });
    },
    onchange: function onchange(q) {
      console.log(q);
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleListSuccess: function handleListSuccess(res, file) {
      console.log(res, file);

      if (res.status_code === 200) {
        this.ruleForm.list_img.push(res.data.path);
        console.log(this.ruleForm.list_img);
      } else {
        this.$message.error("上传失败!");
      }
    },
    handleMainSuccess: function handleMainSuccess(res, file) {
      console.log(res, file);

      if (res.status_code === 200) {
        this.imgurl = res.data.url;
        this.ruleForm.main_img = res.data.path;
      } else {
        this.$message.error("上传失败!");
      }
    },
    beforeMainUpload: function beforeMainUpload(file) {
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      return isLt2M;
    },
    submitForm: function submitForm(formName) {
      var _this3 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this3.isEdit) {
            var id = _this3.$route.params && _this3.$route.params.id;
            _this3.ruleForm._method = "put";
            Object(_api_goods__WEBPACK_IMPORTED_MODULE_0__["updateGoods"])(id, _this3.ruleForm).then(function (response) {
              console.log(response);

              if (response.status_code === 200) {
                _this3.$notify({
                  title: "成功",
                  message: response.message,
                  type: "success",
                  duration: 2000
                });

                _this3.$router.go(-1);
              }
            }).catch(function (err) {
              console.log(err);
            });
          } else {
            Object(_api_goods__WEBPACK_IMPORTED_MODULE_0__["createGoods"])(_this3.ruleForm).then(function (response) {
              console.log(response);

              if (response.status_code === 200) {
                _this3.$notify({
                  title: "成功",
                  message: response.message,
                  type: "success",
                  duration: 2000
                });

                _this3.$router.go(-1);
              }
            }).catch(function (err) {
              console.log(err);
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c(
        "el-form",
        {
          ref: "ruleForm",
          staticClass: "demo-ruleForm",
          attrs: {
            model: _vm.ruleForm,
            rules: _vm.rules,
            "label-width": "100px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "商品名称", prop: "goods_name" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.ruleForm.goods_name,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "goods_name", $$v)
                  },
                  expression: "ruleForm.goods_name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "商品分类", prop: "category_id" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择商品分类" },
                  model: {
                    value: _vm.ruleForm.category_id,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "category_id", $$v)
                    },
                    expression: "ruleForm.category_id"
                  }
                },
                _vm._l(_vm.categorys, function(item) {
                  return _c("el-option", {
                    key: item.category_id,
                    attrs: {
                      label: item.category_name,
                      value: item.category_id
                    }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "商品主图" } },
            [
              _c(
                "el-upload",
                {
                  staticClass: "avatar-uploader",
                  attrs: {
                    name: "image",
                    action: _vm.uploadImage,
                    "show-file-list": false,
                    "on-success": _vm.handleMainSuccess,
                    "before-upload": _vm.beforeMainUpload
                  }
                },
                [
                  _vm.ruleForm.main_img
                    ? _c("img", {
                        staticClass: "avatar",
                        attrs: {
                          src: _vm.imgurl + _vm.ruleForm.main_img,
                          width: "200"
                        }
                      })
                    : _c("i", {
                        staticClass: "el-icon-plus avatar-uploader-icon"
                      })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "商品组图" } },
            [
              _c(
                "el-upload",
                {
                  attrs: {
                    action: _vm.uploadImage,
                    name: "image",
                    "list-type": "picture-card",
                    "file-list": _vm.fileList,
                    "on-preview": _vm.handlePictureCardPreview,
                    "on-success": _vm.handleListSuccess,
                    "on-remove": _vm.handleRemove,
                    limit: 6
                  }
                },
                [_c("i", { staticClass: "el-icon-plus" })]
              ),
              _vm._v(" "),
              _c(
                "el-dialog",
                {
                  attrs: { visible: _vm.dialogVisible },
                  on: {
                    "update:visible": function($event) {
                      _vm.dialogVisible = $event
                    }
                  }
                },
                [
                  _c("img", {
                    attrs: { width: "100%", src: _vm.dialogImageUrl, alt: "" }
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "商品描述", prop: "goods_desc" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.ruleForm.goods_desc,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "goods_desc", $$v)
                  },
                  expression: "ruleForm.goods_desc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "重量", prop: "weight" } },
            [
              _c("el-input", {
                attrs: { size: "medium" },
                model: {
                  value: _vm.ruleForm.weight,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "weight", $$v)
                  },
                  expression: "ruleForm.weight"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "原价", prop: "original_price" } },
            [
              _c("el-input", {
                attrs: { type: "", size: "medium" },
                model: {
                  value: _vm.ruleForm.original_price,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "original_price", $$v)
                  },
                  expression: "ruleForm.original_price"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "价格", prop: "price" } },
            [
              _c("el-input", {
                attrs: { size: "medium" },
                model: {
                  value: _vm.ruleForm.price,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "price", $$v)
                  },
                  expression: "ruleForm.price"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "库存", prop: "stock" } },
            [
              _c("el-input", {
                attrs: { size: "medium" },
                model: {
                  value: _vm.ruleForm.stock,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "stock", $$v)
                  },
                  expression: "ruleForm.stock"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "上下架", prop: "is_up" } },
            [
              _c("el-switch", {
                attrs: { "active-value": 1, "inactive-value": 0 },
                on: { change: _vm.onchange },
                model: {
                  value: _vm.ruleForm.is_up,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "is_up", $$v)
                  },
                  expression: "ruleForm.is_up"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "包邮", prop: "is_free_shipping" } },
            [
              _c("el-switch", {
                attrs: { "active-value": 1, "inactive-value": 0 },
                model: {
                  value: _vm.ruleForm.is_free_shipping,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "is_free_shipping", $$v)
                  },
                  expression: "ruleForm.is_free_shipping"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.submitForm("ruleForm")
                    }
                  }
                },
                [_vm._v("发布")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/goods/components/GoodsDetail.vue":
/*!****************************************************!*\
  !*** ./src/views/goods/components/GoodsDetail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& */ "./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&");
/* harmony import */ var _GoodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodsDetail.vue?vue&type=script&lang=js& */ "./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "96b15bbe",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('96b15bbe')) {
      api.createRecord('96b15bbe', component.options)
    } else {
      api.reload('96b15bbe', component.options)
    }
    module.hot.accept(/*! ./GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& */ "./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& */ "./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&");
(function () {
      api.rerender('96b15bbe', {
        render: _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/goods/components/GoodsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodsDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsDetail.vue?vue&type=template&id=96b15bbe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsDetail_vue_vue_type_template_id_96b15bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=3.js.map