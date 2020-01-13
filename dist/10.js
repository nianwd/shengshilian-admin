(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageCropper/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_dev_project_vue_project_vue_element_admin_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var _utils_language_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/language.js */ "./src/components/ImageCropper/utils/language.js");
/* harmony import */ var _utils_mimes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/mimes.js */ "./src/components/ImageCropper/utils/mimes.js");
/* harmony import */ var _utils_data2blob_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/data2blob.js */ "./src/components/ImageCropper/utils/data2blob.js");
/* harmony import */ var _utils_effectRipple_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/effectRipple.js */ "./src/components/ImageCropper/utils/effectRipple.js");
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
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      default: 'avatar'
    },
    // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      type: Number,
      default: 0
    },
    // 显示该控件与否
    value: {
      type: Boolean,
      default: true
    },
    // 上传地址
    url: {
      type: String,
      default: ''
    },
    // 其他要上传文件附带的数据，对象格式
    params: {
      type: Object,
      default: null
    },
    // Add custom headers
    headers: {
      type: Object,
      default: null
    },
    // 剪裁图片的宽
    width: {
      type: Number,
      default: 200
    },
    // 剪裁图片的高
    height: {
      type: Number,
      default: 200
    },
    // 不显示旋转功能
    noRotate: {
      type: Boolean,
      default: true
    },
    // 不预览圆形图片
    noCircle: {
      type: Boolean,
      default: false
    },
    // 不预览方形图片
    noSquare: {
      type: Boolean,
      default: false
    },
    // 单文件大小限制
    maxSize: {
      type: Number,
      default: 10240
    },
    // 语言类型
    langType: {
      type: String,
      default: 'zh'
    },
    // 语言包
    langExt: {
      type: Object,
      default: null
    },
    // 图片上传格式
    imgFormat: {
      type: String,
      default: 'png'
    },
    // 是否支持跨域
    withCredentials: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var imgFormat = this.imgFormat,
        langType = this.langType,
        langExt = this.langExt,
        width = this.width,
        height = this.height;
    var isSupported = true;
    var allowImgFormat = ['jpg', 'png'];
    var tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat;
    var lang = _utils_language_js__WEBPACK_IMPORTED_MODULE_5__["default"][langType] ? _utils_language_js__WEBPACK_IMPORTED_MODULE_5__["default"][langType] : _utils_language_js__WEBPACK_IMPORTED_MODULE_5__["default"]['en'];
    var mime = _utils_mimes_js__WEBPACK_IMPORTED_MODULE_6__["default"][tempImgFormat]; // 规范图片格式

    this.imgFormat = tempImgFormat;

    if (langExt) {
      Object.assign(lang, langExt);
    }

    if (typeof FormData !== 'function') {
      isSupported = false;
    }

    return {
      // 图片的mime
      mime: mime,
      // 语言包
      lang: lang,
      // 浏览器是否支持该控件
      isSupported: isSupported,
      // 浏览器是否支持触屏事件
      isSupportTouch: document.hasOwnProperty('ontouchstart'),
      // 步骤
      step: 1,
      // 1选择文件 2剪裁 3上传
      // 上传状态及进度
      loading: 0,
      // 0未开始 1正在 2成功 3错误
      progress: 0,
      // 是否有错误及错误信息
      hasError: false,
      errorMsg: '',
      // 需求图宽高比
      ratio: width / height,
      // 原图地址、生成图片地址
      sourceImg: null,
      sourceImgUrl: '',
      createImgUrl: '',
      // 原图片拖动事件初始值
      sourceImgMouseDown: {
        on: false,
        mX: 0,
        // 鼠标按下的坐标
        mY: 0,
        x: 0,
        // scale原图坐标
        y: 0
      },
      // 生成图片预览的容器大小
      previewContainer: {
        width: 100,
        height: 100
      },
      // 原图容器宽高
      sourceImgContainer: {
        // sic
        width: 240,
        height: 184 // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧，哈哈哈

      },
      // 原图展示属性
      scale: {
        zoomAddOn: false,
        // 按钮缩放事件开启
        zoomSubOn: false,
        // 按钮缩放事件开启
        range: 1,
        // 最大100
        rotateLeft: false,
        // 按钮向左旋转事件开启
        rotateRight: false,
        // 按钮向右旋转事件开启
        degree: 0,
        // 旋转度数
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0,
        // 最宽
        minHeight: 0,
        naturalWidth: 0,
        // 原宽
        naturalHeight: 0
      }
    };
  },
  computed: {
    // 进度条样式
    progressStyle: function progressStyle() {
      var progress = this.progress;
      return {
        width: progress + '%'
      };
    },
    // 原图样式
    sourceImgStyle: function sourceImgStyle() {
      var scale = this.scale,
          sourceImgMasking = this.sourceImgMasking;
      var top = scale.y + sourceImgMasking.y + 'px';
      var left = scale.x + sourceImgMasking.x + 'px';
      return {
        top: top,
        left: left,
        width: scale.width + 'px',
        height: scale.height + 'px',
        transform: 'rotate(' + scale.degree + 'deg)',
        // 旋转时 左侧原始图旋转样式
        '-ms-transform': 'rotate(' + scale.degree + 'deg)',
        // 兼容IE9
        '-moz-transform': 'rotate(' + scale.degree + 'deg)',
        // 兼容FireFox
        '-webkit-transform': 'rotate(' + scale.degree + 'deg)',
        // 兼容Safari 和 chrome
        '-o-transform': 'rotate(' + scale.degree + 'deg)' // 兼容 Opera

      };
    },
    // 原图蒙版属性
    sourceImgMasking: function sourceImgMasking() {
      var width = this.width,
          height = this.height,
          ratio = this.ratio,
          sourceImgContainer = this.sourceImgContainer;
      var sic = sourceImgContainer;
      var sicRatio = sic.width / sic.height; // 原图容器宽高比

      var x = 0;
      var y = 0;
      var w = sic.width;
      var h = sic.height;
      var scale = 1;

      if (ratio < sicRatio) {
        scale = sic.height / height;
        w = sic.height * ratio;
        x = (sic.width - w) / 2;
      }

      if (ratio > sicRatio) {
        scale = sic.width / width;
        h = sic.width / ratio;
        y = (sic.height - h) / 2;
      }

      return {
        scale: scale,
        // 蒙版相对需求宽高的缩放
        x: x,
        y: y,
        width: w,
        height: h
      };
    },
    // 原图遮罩样式
    sourceImgShadeStyle: function sourceImgShadeStyle() {
      var sourceImgMasking = this.sourceImgMasking,
          sourceImgContainer = this.sourceImgContainer;
      var sic = sourceImgContainer;
      var sim = sourceImgMasking;
      var w = sim.width === sic.width ? sim.width : (sic.width - sim.width) / 2;
      var h = sim.height === sic.height ? sim.height : (sic.height - sim.height) / 2;
      return {
        width: w + 'px',
        height: h + 'px'
      };
    },
    previewStyle: function previewStyle() {
      var ratio = this.ratio,
          previewContainer = this.previewContainer;
      var pc = previewContainer;
      var w = pc.width;
      var h = pc.height;
      var pcRatio = w / h;

      if (ratio < pcRatio) {
        w = pc.height * ratio;
      }

      if (ratio > pcRatio) {
        h = pc.width / ratio;
      }

      return {
        width: w + 'px',
        height: h + 'px'
      };
    }
  },
  watch: {
    value: function value(newValue) {
      if (newValue && this.loading !== 1) {
        this.reset();
      }
    }
  },
  created: function created() {
    // 绑定按键esc隐藏此插件事件
    document.addEventListener('keyup', this.closeHandler);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keyup', this.closeHandler);
  },
  methods: {
    // 点击波纹效果
    ripple: function ripple(e) {
      Object(_utils_effectRipple_js__WEBPACK_IMPORTED_MODULE_8__["default"])(e);
    },
    // 关闭控件
    off: function off() {
      var _this = this;

      setTimeout(function () {
        _this.$emit('input', false);

        _this.$emit('close');

        if (_this.step === 3 && _this.loading === 2) {
          _this.setStep(1);
        }
      }, 200);
    },
    // 设置步骤
    setStep: function setStep(no) {
      var _this2 = this;

      // 延时是为了显示动画效果呢，哈哈哈
      setTimeout(function () {
        _this2.step = no;
      }, 200);
    },

    /* 图片选择区域函数绑定
     ---------------------------------------------------------------*/
    preventDefault: function preventDefault(e) {
      e.preventDefault();
      return false;
    },
    handleClick: function handleClick(e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault();

          if (document.activeElement !== this.$refs) {
            this.$refs.fileinput.click();
          }
        }
      }
    },
    handleChange: function handleChange(e) {
      e.preventDefault();

      if (this.loading !== 1) {
        var files = e.target.files || e.dataTransfer.files;
        this.reset();

        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0]);
        }
      }
    },

    /* ---------------------------------------------------------------*/
    // 检测选择的文件是否合适
    checkFile: function checkFile(file) {
      var lang = this.lang,
          maxSize = this.maxSize; // 仅限图片

      if (file.type.indexOf('image') === -1) {
        this.hasError = true;
        this.errorMsg = lang.error.onlyImg;
        return false;
      } // 超出大小


      if (file.size / 1024 > maxSize) {
        this.hasError = true;
        this.errorMsg = lang.error.outOfSize + maxSize + 'kb';
        return false;
      }

      return true;
    },
    // 重置控件
    reset: function reset() {
      this.loading = 0;
      this.hasError = false;
      this.errorMsg = '';
      this.progress = 0;
    },
    // 设置图片源
    setSourceImg: function setSourceImg(file) {
      var _this3 = this;

      var fr = new FileReader();

      fr.onload = function (e) {
        _this3.sourceImgUrl = fr.result;

        _this3.startCrop();
      };

      fr.readAsDataURL(file);
    },
    // 剪裁前准备工作
    startCrop: function startCrop() {
      var _this4 = this;

      var width = this.width,
          height = this.height,
          ratio = this.ratio,
          scale = this.scale,
          sourceImgUrl = this.sourceImgUrl,
          sourceImgMasking = this.sourceImgMasking,
          lang = this.lang;
      var sim = sourceImgMasking;
      var img = new Image();
      img.src = sourceImgUrl;

      img.onload = function () {
        var nWidth = img.naturalWidth;
        var nHeight = img.naturalHeight;
        var nRatio = nWidth / nHeight;
        var w = sim.width;
        var h = sim.height;
        var x = 0;
        var y = 0; // 图片像素不达标

        if (nWidth < width || nHeight < height) {
          _this4.hasError = true;
          _this4.errorMsg = lang.error.lowestPx + width + '*' + height;
          return false;
        }

        if (ratio > nRatio) {
          h = w / nRatio;
          y = (sim.height - h) / 2;
        }

        if (ratio < nRatio) {
          w = h * nRatio;
          x = (sim.width - w) / 2;
        }

        scale.range = 0;
        scale.x = x;
        scale.y = y;
        scale.width = w;
        scale.height = h;
        scale.degree = 0;
        scale.minWidth = w;
        scale.minHeight = h;
        scale.maxWidth = nWidth * sim.scale;
        scale.maxHeight = nHeight * sim.scale;
        scale.naturalWidth = nWidth;
        scale.naturalHeight = nHeight;
        _this4.sourceImg = img;

        _this4.createImg();

        _this4.setStep(2);
      };
    },
    // 鼠标按下图片准备移动
    imgStartMove: function imgStartMove(e) {
      e.preventDefault(); // 支持触摸事件，则鼠标事件无效

      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }

      var et = e.targetTouches ? e.targetTouches[0] : e;
      var sourceImgMouseDown = this.sourceImgMouseDown,
          scale = this.scale;
      var simd = sourceImgMouseDown;
      simd.mX = et.screenX;
      simd.mY = et.screenY;
      simd.x = scale.x;
      simd.y = scale.y;
      simd.on = true;
    },
    // 鼠标按下状态下移动，图片移动
    imgMove: function imgMove(e) {
      e.preventDefault(); // 支持触摸事件，则鼠标事件无效

      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }

      var et = e.targetTouches ? e.targetTouches[0] : e;
      var _this$sourceImgMouseD = this.sourceImgMouseDown,
          on = _this$sourceImgMouseD.on,
          mX = _this$sourceImgMouseD.mX,
          mY = _this$sourceImgMouseD.mY,
          x = _this$sourceImgMouseD.x,
          y = _this$sourceImgMouseD.y,
          scale = this.scale,
          sourceImgMasking = this.sourceImgMasking;
      var sim = sourceImgMasking;
      var nX = et.screenX;
      var nY = et.screenY;
      var dX = nX - mX;
      var dY = nY - mY;
      var rX = x + dX;
      var rY = y + dY;
      if (!on) return;

      if (rX > 0) {
        rX = 0;
      }

      if (rY > 0) {
        rY = 0;
      }

      if (rX < sim.width - scale.width) {
        rX = sim.width - scale.width;
      }

      if (rY < sim.height - scale.height) {
        rY = sim.height - scale.height;
      }

      scale.x = rX;
      scale.y = rY;
    },
    // 按钮按下开始向右旋转
    startRotateRight: function startRotateRight(e) {
      var _this5 = this;

      var scale = this.scale;
      scale.rotateRight = true;

      var rotate = function rotate() {
        if (scale.rotateRight) {
          var degree = ++scale.degree;

          _this5.createImg(degree);

          setTimeout(function () {
            rotate();
          }, 60);
        }
      };

      rotate();
    },
    // 按钮按下开始向左旋转
    startRotateLeft: function startRotateLeft(e) {
      var _this6 = this;

      var scale = this.scale;
      scale.rotateLeft = true;

      var rotate = function rotate() {
        if (scale.rotateLeft) {
          var degree = --scale.degree;

          _this6.createImg(degree);

          setTimeout(function () {
            rotate();
          }, 60);
        }
      };

      rotate();
    },
    // 停止旋转
    endRotate: function endRotate() {
      var scale = this.scale;
      scale.rotateLeft = false;
      scale.rotateRight = false;
    },
    // 按钮按下开始放大
    startZoomAdd: function startZoomAdd(e) {
      var _this7 = this;

      var scale = this.scale;
      scale.zoomAddOn = true;

      var zoom = function zoom() {
        if (scale.zoomAddOn) {
          var range = scale.range >= 100 ? 100 : ++scale.range;

          _this7.zoomImg(range);

          setTimeout(function () {
            zoom();
          }, 60);
        }
      };

      zoom();
    },
    // 按钮松开或移开取消放大
    endZoomAdd: function endZoomAdd(e) {
      this.scale.zoomAddOn = false;
    },
    // 按钮按下开始缩小
    startZoomSub: function startZoomSub(e) {
      var _this8 = this;

      var scale = this.scale;
      scale.zoomSubOn = true;

      var zoom = function zoom() {
        if (scale.zoomSubOn) {
          var range = scale.range <= 0 ? 0 : --scale.range;

          _this8.zoomImg(range);

          setTimeout(function () {
            zoom();
          }, 60);
        }
      };

      zoom();
    },
    // 按钮松开或移开取消缩小
    endZoomSub: function endZoomSub(e) {
      var scale = this.scale;
      scale.zoomSubOn = false;
    },
    zoomChange: function zoomChange(e) {
      this.zoomImg(e.target.value);
    },
    // 缩放原图
    zoomImg: function zoomImg(newRange) {
      var _this9 = this;

      var sourceImgMasking = this.sourceImgMasking,
          scale = this.scale;
      var maxWidth = scale.maxWidth,
          maxHeight = scale.maxHeight,
          minWidth = scale.minWidth,
          minHeight = scale.minHeight,
          width = scale.width,
          height = scale.height,
          x = scale.x,
          y = scale.y;
      var sim = sourceImgMasking; // 蒙版宽高

      var sWidth = sim.width;
      var sHeight = sim.height; // 新宽高

      var nWidth = minWidth + (maxWidth - minWidth) * newRange / 100;
      var nHeight = minHeight + (maxHeight - minHeight) * newRange / 100; // 新坐标（根据蒙版中心点缩放）

      var nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x);
      var nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y); // 判断新坐标是否超过蒙版限制

      if (nX > 0) {
        nX = 0;
      }

      if (nY > 0) {
        nY = 0;
      }

      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth;
      }

      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight;
      } // 赋值处理


      scale.x = nX;
      scale.y = nY;
      scale.width = nWidth;
      scale.height = nHeight;
      scale.range = newRange;
      setTimeout(function () {
        if (scale.range === newRange) {
          _this9.createImg();
        }
      }, 300);
    },
    // 生成需求图片
    createImg: function createImg(e) {
      var mime = this.mime,
          sourceImg = this.sourceImg,
          _this$scale = this.scale,
          x = _this$scale.x,
          y = _this$scale.y,
          width = _this$scale.width,
          height = _this$scale.height,
          degree = _this$scale.degree,
          scale = this.sourceImgMasking.scale;
      var canvas = this.$refs.canvas;
      var ctx = canvas.getContext('2d');

      if (e) {
        // 取消鼠标按下移动状态
        this.sourceImgMouseDown.on = false;
      }

      canvas.width = this.width;
      canvas.height = this.height;
      ctx.clearRect(0, 0, this.width, this.height); // 将透明区域设置为白色底边

      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.translate(this.width * 0.5, this.height * 0.5);
      ctx.rotate(Math.PI * degree / 180);
      ctx.translate(-this.width * 0.5, -this.height * 0.5);
      ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
      this.createImgUrl = canvas.toDataURL(mime);
    },
    prepareUpload: function prepareUpload() {
      var url = this.url,
          createImgUrl = this.createImgUrl,
          field = this.field,
          ki = this.ki;
      this.$emit('crop-success', createImgUrl, field, ki);

      if (typeof url === 'string' && url) {
        this.upload();
      } else {
        this.off();
      }
    },
    // 上传图片
    upload: function upload() {
      var _this10 = this;

      var lang = this.lang,
          imgFormat = this.imgFormat,
          mime = this.mime,
          url = this.url,
          params = this.params,
          field = this.field,
          ki = this.ki,
          createImgUrl = this.createImgUrl;
      var fmData = new FormData();
      fmData.append(field, Object(_utils_data2blob_js__WEBPACK_IMPORTED_MODULE_7__["default"])(createImgUrl, mime), field + '.' + imgFormat); // 添加其他参数

      if (Object(E_dev_project_vue_project_vue_element_admin_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(params) === 'object' && params) {
        Object.keys(params).forEach(function (k) {
          fmData.append(k, params[k]);
        });
      } // 监听进度回调
      // const uploadProgress = (event) => {
      //   if (event.lengthComputable) {
      //     this.progress = 100 * Math.round(event.loaded) / event.total
      //   }
      // }
      // 上传文件


      this.reset();
      this.loading = 1;
      this.setStep(3);
      Object(_utils_request__WEBPACK_IMPORTED_MODULE_4__["default"])({
        url: url,
        method: 'post',
        data: fmData
      }).then(function (resData) {
        _this10.loading = 2;

        _this10.$emit('crop-upload-success', resData.data);
      }).catch(function (err) {
        if (_this10.value) {
          _this10.loading = 3;
          _this10.hasError = true;
          _this10.errorMsg = lang.fail;

          _this10.$emit('crop-upload-fail', err, field, ki);
        }
      });
    },
    closeHandler: function closeHandler(e) {
      if (this.value && (e.key === 'Escape' || e.keyCode === 27)) {
        this.off();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageCropper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ImageCropper */ "./src/components/ImageCropper/index.vue");
/* harmony import */ var _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PanThumb */ "./src/components/PanThumb/index.vue");
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
  name: 'AvatarUploadDemo',
  components: {
    ImageCropper: _components_ImageCropper__WEBPACK_IMPORTED_MODULE_0__["default"],
    PanThumb: _components_PanThumb__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    };
  },
  methods: {
    cropSuccess: function cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData.files.avatar;
    },
    close: function close() {
      this.imagecropperShow = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        }
      ],
      staticClass: "vue-image-crop-upload"
    },
    [
      _c("div", { staticClass: "vicp-wrap" }, [
        _c("div", { staticClass: "vicp-close", on: { click: _vm.off } }, [
          _c("i", { staticClass: "vicp-icon4" })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.step == 1,
                expression: "step == 1"
              }
            ],
            staticClass: "vicp-step1"
          },
          [
            _c(
              "div",
              {
                staticClass: "vicp-drop-area",
                on: {
                  dragleave: _vm.preventDefault,
                  dragover: _vm.preventDefault,
                  dragenter: _vm.preventDefault,
                  click: _vm.handleClick,
                  drop: _vm.handleChange
                }
              },
              [
                _c(
                  "i",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading != 1,
                        expression: "loading != 1"
                      }
                    ],
                    staticClass: "vicp-icon1"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon1-arrow" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "vicp-icon1-body" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "vicp-icon1-bottom" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading !== 1,
                        expression: "loading !== 1"
                      }
                    ],
                    staticClass: "vicp-hint"
                  },
                  [_vm._v(_vm._s(_vm.lang.hint))]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isSupported,
                        expression: "!isSupported"
                      }
                    ],
                    staticClass: "vicp-no-supported-hint"
                  },
                  [_vm._v(_vm._s(_vm.lang.noSupported))]
                ),
                _vm._v(" "),
                _vm.step == 1
                  ? _c("input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false"
                        }
                      ],
                      ref: "fileinput",
                      attrs: { type: "file" },
                      on: { change: _vm.handleChange }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.hasError,
                    expression: "hasError"
                  }
                ],
                staticClass: "vicp-error"
              },
              [
                _c("i", { staticClass: "vicp-icon2" }),
                _vm._v("\n        " + _vm._s(_vm.errorMsg) + "\n      ")
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vicp-operate" }, [
              _c("a", { on: { click: _vm.off, mousedown: _vm.ripple } }, [
                _vm._v(_vm._s(_vm.lang.btn.off))
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm.step == 2
          ? _c("div", { staticClass: "vicp-step2" }, [
              _c("div", { staticClass: "vicp-crop" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: true,
                        expression: "true"
                      }
                    ],
                    staticClass: "vicp-crop-left"
                  },
                  [
                    _c("div", { staticClass: "vicp-img-container" }, [
                      _c("img", {
                        ref: "img",
                        staticClass: "vicp-img",
                        style: _vm.sourceImgStyle,
                        attrs: { src: _vm.sourceImgUrl, draggable: "false" },
                        on: {
                          drag: _vm.preventDefault,
                          dragstart: _vm.preventDefault,
                          dragend: _vm.preventDefault,
                          dragleave: _vm.preventDefault,
                          dragover: _vm.preventDefault,
                          dragenter: _vm.preventDefault,
                          drop: _vm.preventDefault,
                          touchstart: _vm.imgStartMove,
                          touchmove: _vm.imgMove,
                          touchend: _vm.createImg,
                          touchcancel: _vm.createImg,
                          mousedown: _vm.imgStartMove,
                          mousemove: _vm.imgMove,
                          mouseup: _vm.createImg,
                          mouseout: _vm.createImg
                        }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "vicp-img-shade vicp-img-shade-1",
                        style: _vm.sourceImgShadeStyle
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "vicp-img-shade vicp-img-shade-2",
                        style: _vm.sourceImgShadeStyle
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vicp-range" }, [
                      _c("input", {
                        attrs: {
                          type: "range",
                          step: "1",
                          min: "0",
                          max: "100"
                        },
                        domProps: { value: _vm.scale.range },
                        on: { input: _vm.zoomChange }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "vicp-icon5",
                        on: {
                          mousedown: _vm.startZoomSub,
                          mouseout: _vm.endZoomSub,
                          mouseup: _vm.endZoomSub
                        }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "vicp-icon6",
                        on: {
                          mousedown: _vm.startZoomAdd,
                          mouseout: _vm.endZoomAdd,
                          mouseup: _vm.endZoomAdd
                        }
                      })
                    ]),
                    _vm._v(" "),
                    !_vm.noRotate
                      ? _c("div", { staticClass: "vicp-rotate" }, [
                          _c(
                            "i",
                            {
                              on: {
                                mousedown: _vm.startRotateLeft,
                                mouseout: _vm.endRotate,
                                mouseup: _vm.endRotate
                              }
                            },
                            [_vm._v("↺")]
                          ),
                          _vm._v(" "),
                          _c(
                            "i",
                            {
                              on: {
                                mousedown: _vm.startRotateRight,
                                mouseout: _vm.endRotate,
                                mouseup: _vm.endRotate
                              }
                            },
                            [_vm._v("↻")]
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: true,
                        expression: "true"
                      }
                    ],
                    staticClass: "vicp-crop-right"
                  },
                  [
                    _c("div", { staticClass: "vicp-preview" }, [
                      !_vm.noSquare
                        ? _c("div", { staticClass: "vicp-preview-item" }, [
                            _c("img", {
                              style: _vm.previewStyle,
                              attrs: { src: _vm.createImgUrl }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(_vm.lang.preview))])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.noCircle
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "vicp-preview-item vicp-preview-item-circle"
                            },
                            [
                              _c("img", {
                                style: _vm.previewStyle,
                                attrs: { src: _vm.createImgUrl }
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.lang.preview))])
                            ]
                          )
                        : _vm._e()
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vicp-operate" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        return _vm.setStep(1)
                      },
                      mousedown: _vm.ripple
                    }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.back))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "vicp-operate-btn",
                    on: { click: _vm.prepareUpload, mousedown: _vm.ripple }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.save))]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.step == 3
          ? _c("div", { staticClass: "vicp-step3" }, [
              _c("div", { staticClass: "vicp-upload" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 1,
                        expression: "loading === 1"
                      }
                    ],
                    staticClass: "vicp-loading"
                  },
                  [_vm._v(_vm._s(_vm.lang.loading))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "vicp-progress-wrap" }, [
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 1,
                        expression: "loading === 1"
                      }
                    ],
                    staticClass: "vicp-progress",
                    style: _vm.progressStyle
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.hasError,
                        expression: "hasError"
                      }
                    ],
                    staticClass: "vicp-error"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon2" }),
                    _vm._v("\n          " + _vm._s(_vm.errorMsg) + "\n        ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 2,
                        expression: "loading === 2"
                      }
                    ],
                    staticClass: "vicp-success"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon3" }),
                    _vm._v(
                      "\n          " + _vm._s(_vm.lang.success) + "\n        "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vicp-operate" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        return _vm.setStep(2)
                      },
                      mousedown: _vm.ripple
                    }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.back))]
                ),
                _vm._v(" "),
                _c("a", { on: { click: _vm.off, mousedown: _vm.ripple } }, [
                  _vm._v(_vm._s(_vm.lang.btn.close))
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("canvas", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: false,
              expression: "false"
            }
          ],
          ref: "canvas",
          attrs: { width: _vm.width, height: _vm.height }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "components-container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("pan-thumb", { attrs: { image: _vm.image } }),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticStyle: {
            position: "absolute",
            bottom: "15px",
            "margin-left": "40px"
          },
          attrs: { type: "primary", icon: "el-icon-upload" },
          on: {
            click: function($event) {
              _vm.imagecropperShow = true
            }
          }
        },
        [_vm._v("\n    Change Avatar\n  ")]
      ),
      _vm._v(" "),
      _c("image-cropper", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.imagecropperShow,
            expression: "imagecropperShow"
          }
        ],
        key: _vm.imagecropperKey,
        attrs: {
          width: 300,
          height: 300,
          url: "https://httpbin.org/post",
          "lang-type": "en"
        },
        on: { close: _vm.close, "crop-upload-success": _vm.cropSuccess }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", [
      _vm._v("This is based on\n    "),
      _c(
        "a",
        {
          staticClass: "link-type",
          attrs: { href: "//github.com/dai-siki/vue-image-crop-upload" }
        },
        [_vm._v(" vue-image-crop-upload")]
      ),
      _vm._v(
        ".\n    Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.\n  "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.avatar[data-v-1e1e8394]{\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes vicp_progress{0%{background-position-y:0}100%{background-position-y:40px}}@keyframes vicp_progress{0%{background-position-y:0}100%{background-position-y:40px}}@-webkit-keyframes vicp{0%{opacity:0;-webkit-transform:scale(0) translatey(-60px);transform:scale(0) translatey(-60px)}100%{opacity:1;-webkit-transform:scale(1) translatey(0);transform:scale(1) translatey(0)}}@keyframes vicp{0%{opacity:0;-webkit-transform:scale(0) translatey(-60px);transform:scale(0) translatey(-60px)}100%{opacity:1;-webkit-transform:scale(1) translatey(0);transform:scale(1) translatey(0)}}.vue-image-crop-upload{position:fixed;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10000;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,0.65);-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent}.vue-image-crop-upload .vicp-wrap{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);position:fixed;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10000;top:0;bottom:0;left:0;right:0;margin:auto;width:600px;height:330px;padding:25px;background-color:#fff;border-radius:2px;-webkit-animation:vicp 0.12s ease-in;animation:vicp 0.12s ease-in}.vue-image-crop-upload .vicp-wrap .vicp-close{position:absolute;right:-30px;top:-30px}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4{position:relative;display:block;width:30px;height:30px;cursor:pointer;-webkit-transition:-webkit-transform 0.18s;transition:-webkit-transform 0.18s;transition:transform 0.18s;transition:transform 0.18s, -webkit-transform 0.18s;-webkit-transform:rotate(0);transform:rotate(0)}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after,.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::before{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);content:\"\";position:absolute;top:12px;left:4px;width:20px;height:3px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:35px;height:170px;background-color:rgba(0,0,0,0.03);text-align:center;border:1px dashed rgba(0,0,0,0.08);overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1{display:block;margin:0 auto 6px;width:42px;height:42px;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow{display:block;margin:0 auto;width:0;height:0;border-bottom:14.7px solid rgba(0,0,0,0.3);border-left:14.7px solid transparent;border-right:14.7px solid transparent}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body{display:block;width:12.6px;height:14.7px;margin:0 auto;background-color:rgba(0,0,0,0.3)}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:12.6px;border:6px solid rgba(0,0,0,0.3);border-top:none}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint{display:block;padding:15px;font-size:14px;color:#666;line-height:30px}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint{display:block;position:absolute;top:0;left:0;padding:30px;width:100%;height:60px;line-height:30px;background-color:#eee;text-align:center;color:#666;font-size:14px}.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area:hover{cursor:pointer;border-color:rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.05)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop{overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left{float:left}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container{position:relative;display:block;width:240px;height:180px;background-color:#e5e5e0;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img{position:absolute;display:block;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade{-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);position:absolute;background-color:rgba(241,242,243,0.8)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1{top:0;left:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2{bottom:0;right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate{position:relative;width:240px;height:18px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i{display:block;width:18px;height:18px;border-radius:100%;line-height:18px;text-align:center;font-size:12px;font-weight:bold;background-color:rgba(0,0,0,0.08);color:#fff;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:hover{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);cursor:pointer;background-color:rgba(0,0,0,0.14)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:first-child{float:left}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:last-child{float:right}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range{position:relative;margin:30px 0 10px 0;width:240px;height:18px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{position:absolute;top:0;width:18px;height:18px;border-radius:100%;background-color:rgba(0,0,0,0.08)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:hover{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);cursor:pointer;background-color:rgba(0,0,0,0.14)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5{left:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5::before{position:absolute;content:\"\";display:block;left:3px;top:8px;width:12px;height:2px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::before{position:absolute;content:\"\";display:block;left:3px;top:8px;width:12px;height:2px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::after{position:absolute;content:\"\";display:block;top:3px;left:8px;width:2px;height:12px;background-color:#fff}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]{display:block;padding-top:5px;margin:0 auto;width:180px;height:8px;vertical-align:top;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:focus{outline:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-webkit-slider-thumb{-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);-webkit-appearance:none;appearance:none;margin-top:-3px;width:12px;height:12px;background-color:#61c091;border-radius:100%;border:none;-webkit-transition:0.2s;transition:0.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-moz-range-thumb{box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);-moz-appearance:none;appearance:none;width:12px;height:12px;background-color:#61c091;border-radius:100%;border:none;-webkit-transition:0.2s;-moz-transition:0.2s;transition:0.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-ms-thumb{box-shadow:0 2px 6px 0 rgba(0,0,0,0.18);appearance:none;width:12px;height:12px;background-color:#61c091;border:none;border-radius:100%;-webkit-transition:0.2s;-ms-transition:0.2s;transition:0.2s}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:active::-moz-range-thumb{box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:active::-ms-thumb{box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:active::-webkit-slider-thumb{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);box-shadow:0 1px 3px 0 rgba(0,0,0,0.23);margin-top:-4px;width:14px;height:14px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-webkit-slider-runnable-track{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);width:100%;height:6px;cursor:pointer;border-radius:2px;border:none;background-color:rgba(68,170,119,0.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-moz-range-track{box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);width:100%;height:6px;cursor:pointer;border-radius:2px;border:none;background-color:rgba(68,170,119,0.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-ms-track{box-shadow:0 1px 3px 0 rgba(0,0,0,0.12);width:100%;cursor:pointer;background:transparent;border-color:transparent;color:transparent;height:6px;border-radius:2px;border:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-ms-fill-lower{background-color:rgba(68,170,119,0.3)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]::-ms-fill-upper{background-color:rgba(68,170,119,0.15)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:focus::-webkit-slider-runnable-track{background-color:rgba(68,170,119,0.5)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:focus::-moz-range-track{background-color:rgba(68,170,119,0.5)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:focus::-ms-fill-lower{background-color:rgba(68,170,119,0.45)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=\"range\"]:focus::-ms-fill-upper{background-color:rgba(68,170,119,0.25)}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right{float:right}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview{height:150px;overflow:hidden}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item{position:relative;padding:5px;width:100px;height:100px;float:left;margin-right:16px}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item span{position:absolute;bottom:-30px;width:100%;font-size:14px;color:#bbb;display:block;text-align:center}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img{position:absolute;display:block;top:0;bottom:0;left:0;right:0;margin:auto;padding:3px;background-color:#fff;border:1px solid rgba(0,0,0,0.15);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle{margin-right:0}.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle img{border-radius:100%}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:35px;height:170px;background-color:rgba(0,0,0,0.03);text-align:center;border:1px dashed #ddd}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-loading{display:block;padding:15px;font-size:16px;color:#999;line-height:30px}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap{margin-top:12px;background-color:rgba(0,0,0,0.08);border-radius:3px}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress{position:relative;display:block;height:5px;border-radius:3px;background-color:#4a7;-webkit-box-shadow:0 2px 6px 0 rgba(68,170,119,0.3);box-shadow:0 2px 6px 0 rgba(68,170,119,0.3);-webkit-transition:width 0.15s linear;transition:width 0.15s linear;background-image:linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);background-size:40px 40px;-webkit-animation:vicp_progress 0.5s linear infinite;animation:vicp_progress 0.5s linear infinite}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress::after{content:\"\";position:absolute;display:block;top:-3px;right:-3px;width:9px;height:9px;border:1px solid rgba(245,246,247,0.7);-webkit-box-shadow:0 1px 4px 0 rgba(68,170,119,0.7);box-shadow:0 1px 4px 0 rgba(68,170,119,0.7);border-radius:100%;background-color:#4a7}.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error,.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success{height:100px;line-height:100px}.vue-image-crop-upload .vicp-wrap .vicp-operate{position:absolute;right:20px;bottom:20px}.vue-image-crop-upload .vicp-wrap .vicp-operate a{position:relative;float:left;display:block;margin-left:10px;width:100px;height:36px;line-height:36px;text-align:center;cursor:pointer;font-size:14px;color:#4a7;border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-image-crop-upload .vicp-wrap .vicp-operate a:hover{background-color:rgba(0,0,0,0.03)}.vue-image-crop-upload .vicp-wrap .vicp-error,.vue-image-crop-upload .vicp-wrap .vicp-success{display:block;font-size:14px;line-height:24px;height:24px;color:#d10;text-align:center;vertical-align:top}.vue-image-crop-upload .vicp-wrap .vicp-success{color:#4a7}.vue-image-crop-upload .vicp-wrap .vicp-icon3{position:relative;display:inline-block;width:20px;height:20px;top:4px}.vue-image-crop-upload .vicp-wrap .vicp-icon3::after{position:absolute;top:3px;left:6px;width:6px;height:10px;border-width:0 2px 2px 0;border-color:#4a7;border-style:solid;-webkit-transform:rotate(45deg);transform:rotate(45deg);content:\"\"}.vue-image-crop-upload .vicp-wrap .vicp-icon2{position:relative;display:inline-block;width:20px;height:20px;top:4px}.vue-image-crop-upload .vicp-wrap .vicp-icon2::after,.vue-image-crop-upload .vicp-wrap .vicp-icon2::before{content:\"\";position:absolute;top:9px;left:4px;width:13px;height:2px;background-color:#d10;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vue-image-crop-upload .vicp-wrap .vicp-icon2::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.e-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,0.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.e-ripple.z-active{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;transition:opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;transition:opacity 1.2s ease-out, transform 0.6s ease-out;transition:opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;transition:opacity 1.2s ease-out, transform 0.6s ease-out,\r -webkit-transform 0.6s ease-out}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("337a66f5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4b2658e0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/ImageCropper/index.vue":
/*!***********************************************!*\
  !*** ./src/components/ImageCropper/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d3e42236& */ "./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/ImageCropper/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d3e42236')) {
      api.createRecord('d3e42236', component.options)
    } else {
      api.reload('d3e42236', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=d3e42236& */ "./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d3e42236& */ "./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&");
(function () {
      api.rerender('d3e42236', {
        render: _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/ImageCropper/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ImageCropper/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/components/ImageCropper/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&":
/*!******************************************************************************!*\
  !*** ./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d3e42236& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ImageCropper/index.vue?vue&type=template&id=d3e42236&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3e42236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ImageCropper/utils/data2blob.js":
/*!********************************************************!*\
  !*** ./src/components/ImageCropper/utils/data2blob.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);



/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} mime [description]
 * @return {[blob]}      [description]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (data, mime) {
  data = data.split(',')[1];
  data = window.atob(data);
  var ia = new Uint8Array(data.length);

  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
  } // canvas.toDataURL 返回的默认格式就是 image/png


  return new Blob([ia], {
    type: mime
  });
});

/***/ }),

/***/ "./src/components/ImageCropper/utils/effectRipple.js":
/*!***********************************************************!*\
  !*** ./src/components/ImageCropper/utils/effectRipple.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 点击波纹效果
 *
 * @param  {[event]} e        [description]
 * @param  {[Object]} arg_opts [description]
 * @return {[bollean]}          [description]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e, arg_opts) {
  var opts = Object.assign({
    ele: e.target,
    // 波纹作用元素
    type: 'hit',
    // hit点击位置扩散center中心点扩展
    bgc: 'rgba(0, 0, 0, 0.15)' // 波纹颜色

  }, arg_opts);
  var target = opts.ele;

  if (target) {
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.e-ripple');

    if (!ripple) {
      ripple = document.createElement('span');
      ripple.className = 'e-ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
      target.appendChild(ripple);
    } else {
      ripple.className = 'e-ripple';
    }

    switch (opts.type) {
      case 'center':
        ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
        ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
        break;

      default:
        ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
    }

    ripple.style.backgroundColor = opts.bgc;
    ripple.className = 'e-ripple z-active';
    return false;
  }
});

/***/ }),

/***/ "./src/components/ImageCropper/utils/language.js":
/*!*******************************************************!*\
  !*** ./src/components/ImageCropper/utils/language.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  zh: {
    hint: '点击，或拖动图片至此处',
    loading: '正在上传……',
    noSupported: '浏览器不支持该功能，请使用IE10以上或其他现在浏览器！',
    success: '上传成功',
    fail: '图片上传失败',
    preview: '头像预览',
    btn: {
      off: '取消',
      close: '关闭',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '仅限图片格式',
      outOfSize: '单文件大小不能超过 ',
      lowestPx: '图片最低像素为（宽*高）：'
    }
  },
  'zh-tw': {
    hint: '點擊，或拖動圖片至此處',
    loading: '正在上傳……',
    noSupported: '瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！',
    success: '上傳成功',
    fail: '圖片上傳失敗',
    preview: '頭像預覽',
    btn: {
      off: '取消',
      close: '關閉',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '僅限圖片格式',
      outOfSize: '單文件大小不能超過 ',
      lowestPx: '圖片最低像素為（寬*高）：'
    }
  },
  en: {
    hint: 'Click or drag the file here to upload',
    loading: 'Uploading…',
    noSupported: 'Browser is not supported, please use IE10+ or other browsers',
    success: 'Upload success',
    fail: 'Upload failed',
    preview: 'Preview',
    btn: {
      off: 'Cancel',
      close: 'Close',
      back: 'Back',
      save: 'Save'
    },
    error: {
      onlyImg: 'Image only',
      outOfSize: 'Image exceeds size limit: ',
      lowestPx: 'Image\'s size is too low. Expected at least: '
    }
  },
  ro: {
    hint: 'Atinge sau trage fișierul aici',
    loading: 'Se încarcă',
    noSupported: 'Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.',
    success: 'S-a încărcat cu succes',
    fail: 'A apărut o problemă la încărcare',
    preview: 'Previzualizează',
    btn: {
      off: 'Anulează',
      close: 'Închide',
      back: 'Înapoi',
      save: 'Salvează'
    },
    error: {
      onlyImg: 'Doar imagini',
      outOfSize: 'Imaginea depășește limita de: ',
      loewstPx: 'Imaginea este prea mică; Minim: '
    }
  },
  ru: {
    hint: 'Нажмите, или перетащите файл в это окно',
    loading: 'Загружаю……',
    noSupported: 'Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры',
    success: 'Загрузка выполнена успешно',
    fail: 'Ошибка загрузки',
    preview: 'Предпросмотр',
    btn: {
      off: 'Отменить',
      close: 'Закрыть',
      back: 'Назад',
      save: 'Сохранить'
    },
    error: {
      onlyImg: 'Только изображения',
      outOfSize: 'Изображение превышает предельный размер: ',
      lowestPx: 'Минимальный размер изображения: '
    }
  },
  'pt-br': {
    hint: 'Clique ou arraste o arquivo aqui para carregar',
    loading: 'Carregando…',
    noSupported: 'Browser não suportado, use o IE10+ ou outro browser',
    success: 'Sucesso ao carregar imagem',
    fail: 'Falha ao carregar imagem',
    preview: 'Pré-visualizar',
    btn: {
      off: 'Cancelar',
      close: 'Fechar',
      back: 'Voltar',
      save: 'Salvar'
    },
    error: {
      onlyImg: 'Apenas imagens',
      outOfSize: 'A imagem excede o limite de tamanho: ',
      lowestPx: 'O tamanho da imagem é muito pequeno. Tamanho mínimo: '
    }
  },
  fr: {
    hint: 'Cliquez ou glissez le fichier ici.',
    loading: 'Téléchargement…',
    noSupported: 'Votre navigateur n\'est pas supporté. Utilisez IE10 + ou un autre navigateur s\'il vous plaît.',
    success: 'Téléchargement réussit',
    fail: 'Téléchargement echoué',
    preview: 'Aperçu',
    btn: {
      off: 'Annuler',
      close: 'Fermer',
      back: 'Retour',
      save: 'Enregistrer'
    },
    error: {
      onlyImg: 'Image uniquement',
      outOfSize: 'L\'image sélectionnée dépasse la taille maximum: ',
      lowestPx: 'L\'image sélectionnée est trop petite. Dimensions attendues: '
    }
  },
  nl: {
    hint: 'Klik hier of sleep een afbeelding in dit vlak',
    loading: 'Uploaden…',
    noSupported: 'Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.',
    success: 'Upload succesvol',
    fail: 'Upload mislukt',
    preview: 'Voorbeeld',
    btn: {
      off: 'Annuleren',
      close: 'Sluiten',
      back: 'Terug',
      save: 'Opslaan'
    },
    error: {
      onlyImg: 'Alleen afbeeldingen',
      outOfSize: 'De afbeelding is groter dan: ',
      lowestPx: 'De afbeelding is te klein! Minimale afmetingen: '
    }
  },
  tr: {
    hint: 'Tıkla veya yüklemek istediğini buraya sürükle',
    loading: 'Yükleniyor…',
    noSupported: 'Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın',
    success: 'Yükleme başarılı',
    fail: 'Yüklemede hata oluştu',
    preview: 'Önizle',
    btn: {
      off: 'İptal',
      close: 'Kapat',
      back: 'Geri',
      save: 'Kaydet'
    },
    error: {
      onlyImg: 'Sadece resim',
      outOfSize: 'Resim yükleme limitini aşıyor: ',
      lowestPx: 'Resmin boyutu çok küçük. En az olması gereken: '
    }
  },
  'es-MX': {
    hint: 'Selecciona o arrastra una imagen',
    loading: 'Subiendo...',
    noSupported: 'Tu navegador no es soportado, porfavor usa IE10+ u otros navegadores mas recientes',
    success: 'Subido exitosamente',
    fail: 'Sucedió un error',
    preview: 'Vista previa',
    btn: {
      off: 'Cancelar',
      close: 'Cerrar',
      back: 'Atras',
      save: 'Guardar'
    },
    error: {
      onlyImg: 'Unicamente imagenes',
      outOfSize: 'La imagen excede el tamaño maximo:',
      lowestPx: 'La imagen es demasiado pequeño. Se espera por lo menos:'
    }
  },
  de: {
    hint: 'Klick hier oder zieh eine Datei hier rein zum Hochladen',
    loading: 'Hochladen…',
    noSupported: 'Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser',
    success: 'Upload erfolgreich',
    fail: 'Upload fehlgeschlagen',
    preview: 'Vorschau',
    btn: {
      off: 'Abbrechen',
      close: 'Schließen',
      back: 'Zurück',
      save: 'Speichern'
    },
    error: {
      onlyImg: 'Nur Bilder',
      outOfSize: 'Das Bild ist zu groß: ',
      lowestPx: 'Das Bild ist zu klein. Mindestens: '
    }
  },
  ja: {
    hint: 'クリック・ドラッグしてファイルをアップロード',
    loading: 'アップロード中...',
    noSupported: 'このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。',
    success: 'アップロード成功',
    fail: 'アップロード失敗',
    preview: 'プレビュー',
    btn: {
      off: 'キャンセル',
      close: '閉じる',
      back: '戻る',
      save: '保存'
    },
    error: {
      onlyImg: '画像のみ',
      outOfSize: '画像サイズが上限を超えています。上限: ',
      lowestPx: '画像が小さすぎます。最小サイズ: '
    }
  }
});

/***/ }),

/***/ "./src/components/ImageCropper/utils/mimes.js":
/*!****************************************************!*\
  !*** ./src/components/ImageCropper/utils/mimes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'svg': 'image/svg+xml',
  'psd': 'image/photoshop'
});

/***/ }),

/***/ "./src/views/components-demo/avatar-upload.vue":
/*!*****************************************************!*\
  !*** ./src/views/components-demo/avatar-upload.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& */ "./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&");
/* harmony import */ var _avatar_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-upload.vue?vue&type=script&lang=js& */ "./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& */ "./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _avatar_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e1e8394",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1e1e8394')) {
      api.createRecord('1e1e8394', component.options)
    } else {
      api.reload('1e1e8394', component.options)
    }
    module.hot.accept(/*! ./avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& */ "./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& */ "./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&");
(function () {
      api.rerender('1e1e8394', {
        render: _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/components-demo/avatar-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=style&index=0&id=1e1e8394&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_style_index_0_id_1e1e8394_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71dc64ac-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"71dc64ac-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/components-demo/avatar-upload.vue?vue&type=template&id=1e1e8394&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_71dc64ac_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_upload_vue_vue_type_template_id_1e1e8394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map