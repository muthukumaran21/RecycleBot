(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_camera_camera_module_ts"],{

/***/ 7114:
/*!*****************************************!*\
  !*** ./src/app/camera/camera.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cameraPageModule": () => (/* binding */ cameraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ 6318);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);














let cameraPageModule = class cameraPageModule {};
cameraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_camera__WEBPACK_IMPORTED_MODULE_2__.camera],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _camera__WEBPACK_IMPORTED_MODULE_2__.camera
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_camera__WEBPACK_IMPORTED_MODULE_2__.camera]
})], cameraPageModule);


/***/ }),

/***/ 6318:
/*!**********************************!*\
  !*** ./src/app/camera/camera.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camera": () => (/* binding */ camera)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.html?ngResource */ 2603);
/* harmony import */ var _camera_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.scss?ngResource */ 7608);
/* harmony import */ var _camera_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_camera_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);

var _a, _b, _c;







let camera = class camera {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  aioChangeDetector;
  currentItem = null;
  mappingData = {
    "j_10__visible": false
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
  $aio_dataServices = {
    "CameraService1": "invokeService_CameraService1"
  };
  invokeService_CameraService1(cb) {
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
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
camera = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _camera_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-camera',
  styles: [(_camera_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], camera);


/***/ }),

/***/ 7608:
/*!***********************************************!*\
  !*** ./src/app/camera/camera.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\nion-content[_aio-92A86E20] {\n  --padding-top: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n}\n\nion-button[_aio-34D5D18A] {\n  margin-bottom: 20px;\n}\n\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/camera/camera.scss"],"names":[],"mappings":"AAGA,sBAAA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;AAFA;;AAIA;EACA,mBAAA;AADA;;AAGA,gBAAA","sourcesContent":["/* Styles properties */\nion-content[_aio-92A86E20] {\n  --padding-top: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n}\n\nion-button[_aio-34D5D18A] {\n  margin-bottom: 20px;\n}\n\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2603:
/*!***********************************************!*\
  !*** ./src/app/camera/camera.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-99AFB6FE>\n    <ion-toolbar _aio-5F46A859 #j_12>\n        <ion-title _aio-0D7C7095 #j_13>\n            Camera\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content _aio-92A86E20>\n    <ion-button _aio-34D5D18A #j_9 expand=\"block\">\n        Take a Photo\n    </ion-button>\n    <img _aio-E957042A #j_10 src=\"assets/images/a_1.jpg\" alt=\"Image error\" [class.aioHidden]=\"!__getMapping(currentItem, 'j_10__visible', true)\">\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_camera_camera_module_ts.js.map