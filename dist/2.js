(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/goods */ "./src/api/goods.js");
/* harmony import */ var _api_goods__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_goods__WEBPACK_IMPORTED_MODULE_1__);

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
  name: "GoodsCategoryDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    is_self: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      uploadImage: "http://shengshilian.yunzupu.online/api" + "/uploadImage",
      imgurl: "",
      categorys: null,
      ruleForm: {
        pid: 0,
        category_name: null,
        img: null,
        order: 1
      },
      rules: {
        pid: [{
          required: true,
          message: "请选择上级分类",
          trigger: "change"
        }],
        category_name: [{
          required: true,
          message: "请输入商品名称",
          trigger: "blur"
        }]
      }
    };
  },
  created: function created() {
    console.log({
      is_self: this.is_self
    });
    this.getCategorys(this.is_self);

    if (this.isEdit) {
      var id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    getCategorys: function getCategorys(is_self) {
      var _this = this;

      var query = {
        category_id: 0,
        is_self: is_self
      };
      console.log({
        query: query
      });

      Object(_api_goods__WEBPACK_IMPORTED_MODULE_1__["getCategorys"])(query).then(function (response) {
        console.log(response);
        _this.categorys = response.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    fetchData: function fetchData(id) {
      var _this2 = this;

      Object(_api_goods__WEBPACK_IMPORTED_MODULE_1__["getGoodsCategory"])(id).then(function (response) {
        _this2.ruleForm = response.data;
        console.log(_this2.ruleForm);
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleImgSuccess: function handleImgSuccess(res, file) {
      console.log(res, file);

      if (res.status_code === 200) {
        this.imgurl = res.data.url;
        this.ruleForm.img = res.data.path;
      } else {
        this.$message.error("上传失败!");
      }
    },
    beforeImgUpload: function beforeImgUpload(file) {
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
            Object(_api_goods__WEBPACK_IMPORTED_MODULE_1__["updateGoodsCategory"])(id, _this3.ruleForm).then(function (response) {
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
            Object(_api_goods__WEBPACK_IMPORTED_MODULE_1__["createGoodsCategory"])(_this3.ruleForm).then(function (response) {
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { label: "分类名称", prop: "category_name" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.ruleForm.category_name,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "category_name", $$v)
                  },
                  expression: "ruleForm.category_name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "上级分类", prop: "pid" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择上级分类" },
                  model: {
                    value: _vm.ruleForm.pid,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "pid", $$v)
                    },
                    expression: "ruleForm.pid"
                  }
                },
                [
                  _c("el-option", { key: 0, attrs: { label: "无", value: 0 } }),
                  _vm._v(" "),
                  _vm._l(_vm.categorys, function(item) {
                    return _c("el-option", {
                      key: item.category_id,
                      attrs: {
                        label: item.category_name,
                        value: item.category_id
                      }
                    })
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "分类图片" } },
            [
              _c(
                "el-upload",
                {
                  staticClass: "avatar-uploader",
                  attrs: {
                    name: "image",
                    action: _vm.uploadImage,
                    "show-file-list": false,
                    "on-success": _vm.handleImgSuccess,
                    "before-upload": _vm.beforeImgUpload
                  }
                },
                [
                  _vm.ruleForm.img
                    ? _c("img", {
                        staticClass: "avatar",
                        attrs: {
                          src: _vm.imgurl + _vm.ruleForm.img,
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
            { attrs: { label: "排序", prop: "order" } },
            [
              _c("el-input", {
                attrs: { placeholder: "排序" },
                model: {
                  value: _vm.ruleForm.order,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "order", $$v)
                  },
                  expression: "ruleForm.order"
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
                [_vm._v("确认")]
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

/***/ "./src/views/goods/components/GoodsCategoryDetail.vue":
/*!************************************************************!*\
  !*** ./src/views/goods/components/GoodsCategoryDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& */ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&");
/* harmony import */ var _GoodsCategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodsCategoryDetail.vue?vue&type=script&lang=js& */ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodsCategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c530dbf",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6c530dbf')) {
      api.createRecord('6c530dbf', component.options)
    } else {
      api.reload('6c530dbf', component.options)
    }
    module.hot.accept(/*! ./GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& */ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& */ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&");
(function () {
      api.rerender('6c530dbf', {
        render: _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/goods/components/GoodsCategoryDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsCategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodsCategoryDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsCategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/goods/components/GoodsCategoryDetail.vue?vue&type=template&id=6c530dbf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsCategoryDetail_vue_vue_type_template_id_6c530dbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=2.js.map