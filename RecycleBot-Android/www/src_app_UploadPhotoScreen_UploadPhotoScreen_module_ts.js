(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_UploadPhotoScreen_UploadPhotoScreen_module_ts"],{

/***/ 2427:
/*!***************************************************************!*\
  !*** ./src/app/UploadPhotoScreen/UploadPhotoScreen.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPhotoScreenPageModule": () => (/* binding */ UploadPhotoScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _UploadPhotoScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadPhotoScreen */ 101);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);














let UploadPhotoScreenPageModule = class UploadPhotoScreenPageModule {};
UploadPhotoScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_UploadPhotoScreen__WEBPACK_IMPORTED_MODULE_2__.UploadPhotoScreen],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _UploadPhotoScreen__WEBPACK_IMPORTED_MODULE_2__.UploadPhotoScreen
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_UploadPhotoScreen__WEBPACK_IMPORTED_MODULE_2__.UploadPhotoScreen]
})], UploadPhotoScreenPageModule);


/***/ }),

/***/ 101:
/*!********************************************************!*\
  !*** ./src/app/UploadPhotoScreen/UploadPhotoScreen.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPhotoScreen": () => (/* binding */ UploadPhotoScreen)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _UploadPhotoScreen_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadPhotoScreen.html?ngResource */ 553);
/* harmony import */ var _UploadPhotoScreen_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadPhotoScreen.scss?ngResource */ 1076);
/* harmony import */ var _UploadPhotoScreen_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UploadPhotoScreen_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);

var _a, _b, _c;







let UploadPhotoScreen = class UploadPhotoScreen {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  src;
  imageURI;
  data;
  imagedata;
  aioChangeDetector;
  currentItem = null;
  mappingData = {
    "j_75__visible": false
  };
  __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
    return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
  }
  __isPropertyInMapping(_currentItem, property) {
    return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
  }
  __setMapping(data = {}, keyName, propName) {
    const changes = data.detail || {};
    if (propName) {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
    } else {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
    }
    this.$aio_changeDetector.detectChanges();
  }
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ionViewDidEnter() {
    this.pageIonViewDidEnter__j_71();
  }
  pageIonViewDidEnter__j_71(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      if (!_this.Apperyio.config.get("Photo_settings.database_id")) {
        const alert = yield _this.Apperyio.getController("AlertController").create({
          header: 'Missed parameter',
          subHeader: '',
          message: 'Please specify Photo_settings.database_id setting.',
          buttons: ['OK']
        });
        yield alert.present();
      } else if (!_this.Apperyio.config.get("Photo_settings.master_key")) {
        const alert = yield _this.Apperyio.getController("AlertController").create({
          header: 'Missed parameter',
          subHeader: '',
          message: 'Please specify Photo_settings.master_key setting.',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }
  takephotobuttonClick__j_73(event, currentItem) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Invoke data service */
      _this2.invokeService_CameraService3();
    })();
  }
  uploadphotobuttonClick__j_75(event, currentItem) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Invoke data service */
      _this3.invokeService_FileReadService1();
    })();
  }
  $aio_dataServices = {
    "CameraService3": "invokeService_CameraService3",
    "FileReadService1": "invokeService_FileReadService1",
    "recycleDB__files_upload_service1": "invokeService_recycleDB__files_upload_service1"
  };
  invokeService_CameraService3(cb) {
    var _this4 = this;
    this.Apperyio.getService("CameraService").then( /*#__PURE__*/function () {
      var _ref = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let __aio_tmp_val__;
        service.execute({
          data: data
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref2 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let mappingData = {};
            /* Mapping */
            _this4.imageURI = _this4.$aio_mappingHelper.updateData(_this4.imageURI, [], _this4.$aio_mappingHelper.getSubdata(res, ["imageURI"]));
            mappingData.j_74__imageSrc = () => _this4.$aio_mappingHelper.getSubdata(res, ["fileSrc"]);
            mappingData.j_74__visible = () => _this4.$aio_mappingHelper.getSubdata(res, ["imageURI"]);
            mappingData.j_75__visible = () => _this4.$aio_mappingHelper.getSubdata(res, ["imageURI"]);
            _this4.mappingData = {
              ..._this4.mappingData,
              ...mappingData
            };
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), err => {
          console.log(err);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  invokeService_FileReadService1(cb) {
    var _this5 = this;
    this.Apperyio.getService("FileReadService").then( /*#__PURE__*/function () {
      var _ref3 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let __aio_tmp_val__;
        _this5.$aio_changeDetector.detectChanges();
        /* Mapping */
        data = _this5.$aio_mappingHelper.updateData(data, ["filePath"], _this5.$aio_mappingHelper.getSubdata(_this5.imageURI, []));
        /* Present Loading */
        yield (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let options = {
            'animated': true,
            'keyboardClose': true,
            'message': 'Please wait ...',
            'showBackdrop': true,
            'spinner': 'crescent'
          };
          let controller = _this5.Apperyio.getController('LoadingController');
          const loading = yield controller.create(options);
          return yield loading.present();
        })();
        service.execute({
          data: data
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref5 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let mappingData = {};
            /* Mapping */
            _this5.imagedata = _this5.$aio_mappingHelper.updateData(_this5.imagedata, [], _this5.$aio_mappingHelper.getSubdata(res, ["data"]));
            /* Invoke data service */
            _this5.invokeService_recycleDB__files_upload_service1();
            _this5.mappingData = {
              ..._this5.mappingData,
              ...mappingData
            };
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x4) {
            return _ref5.apply(this, arguments);
          };
        }(), err => {
          console.log(err);
        });
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  invokeService_recycleDB__files_upload_service1(cb) {
    var _this6 = this;
    this.Apperyio.getService("recycleDB__files_upload_service").then( /*#__PURE__*/function () {
      var _ref6 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let params = {};
        let headers = {};
        let __aio_tmp_val__;
        _this6.$aio_changeDetector.detectChanges();
        /* Mapping */
        data = _this6.$aio_mappingHelper.updateData(data, [], _this6.$aio_mappingHelper.getSubdata(_this6.imagedata, []));
        service.execute({
          data: data,
          params: params,
          headers: headers
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref7 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let mappingData = {};
            /* Dismiss loading */
            yield _this6.Apperyio.getController("LoadingController").dismiss();
            _this6.mappingData = {
              ..._this6.mappingData,
              ...mappingData
            };
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x6) {
            return _ref7.apply(this, arguments);
          };
        }(), err => {
          console.log(err);
        });
      });
      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
UploadPhotoScreen = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _UploadPhotoScreen_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-upload-photo-screen',
  styles: [(_UploadPhotoScreen_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], UploadPhotoScreen);


/***/ }),

/***/ 1076:
/*!*********************************************************************!*\
  !*** ./src/app/UploadPhotoScreen/UploadPhotoScreen.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/UploadPhotoScreen/UploadPhotoScreen.scss"],"names":[],"mappings":"AAGA,sBAAA;AAEA,gBAAA","sourcesContent":["/* Styles properties */\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 553:
/*!*********************************************************************!*\
  !*** ./src/app/UploadPhotoScreen/UploadPhotoScreen.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-C3A43B06>\n    <ion-toolbar _aio-E832F93D #j_78>\n        <ion-title _aio-836BB054 #j_80>\n            Take and upload photo\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content _aio-6FC49545 class=\"ion-padding\">\n    <ion-button _aio-A6197135 #j_73 expand=\"block\" (click)=\"takephotobuttonClick__j_73($event, currentItem)\">\n        Take Photo\n    </ion-button>\n    <ion-img _aio-A13F504A #j_74 src=\"{{__getMapping(currentItem, 'j_74__imageSrc', 'assets/images/a_1_1676765517.jpg', false)}}\"\n    alt=\"Image error\" [class.aioHidden]=\"!__getMapping(currentItem, 'j_74__visible', true)\">\n    </ion-img>\n    <ion-button _aio-E3D4AB07 #j_75 expand=\"block\" (click)=\"uploadphotobuttonClick__j_75($event, currentItem)\"\n    [class.aioHidden]=\"!__getMapping(currentItem, 'j_75__visible', true)\" *ngIf=\"imageURI\">\n        Upload photo\n    </ion-button>\n    <ion-button _aio-0B65D5C1 #j_76 routerDirection=\"forward\" [routerLink]=\"['/recyclinglocations']\">\n        NEXT\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_UploadPhotoScreen_UploadPhotoScreen_module_ts.js.map