(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_RecyclingLocations_RecyclingLocations_module_ts"],{

/***/ 4478:
/*!*****************************************************************!*\
  !*** ./src/app/RecyclingLocations/RecyclingLocations.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecyclingLocationsPageModule": () => (/* binding */ RecyclingLocationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _RecyclingLocations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecyclingLocations */ 1719);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);















let RecyclingLocationsPageModule = class RecyclingLocationsPageModule {};
RecyclingLocationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_RecyclingLocations__WEBPACK_IMPORTED_MODULE_2__.RecyclingLocations],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _agm_core__WEBPACK_IMPORTED_MODULE_13__.AgmCoreModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: '',
    component: _RecyclingLocations__WEBPACK_IMPORTED_MODULE_2__.RecyclingLocations
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_RecyclingLocations__WEBPACK_IMPORTED_MODULE_2__.RecyclingLocations]
})], RecyclingLocationsPageModule);


/***/ }),

/***/ 1719:
/*!**********************************************************!*\
  !*** ./src/app/RecyclingLocations/RecyclingLocations.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecyclingLocations": () => (/* binding */ RecyclingLocations)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _RecyclingLocations_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecyclingLocations.html?ngResource */ 5169);
/* harmony import */ var _RecyclingLocations_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecyclingLocations.scss?ngResource */ 4177);
/* harmony import */ var _RecyclingLocations_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RecyclingLocations_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);

var _a, _b, _c;







let RecyclingLocations = class RecyclingLocations {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  myPosition;
  lat;
  lng;
  aioChangeDetector;
  currentItem = null;
  mappingData = {};
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
  button1Click__j_19(event, currentItem) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      let _this = _this2;
      let onSuccess = position => {
        _this.lat = position.coords.latitude;
        _this.lng = position.coords.longitude;
      };
      function onError(error) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    })();
  }
  $aio_dataServices = {
    "GeoService1": "invokeService_GeoService1"
  };
  invokeService_GeoService1(cb) {
    this.Apperyio.getService("GeoService").then( /*#__PURE__*/function () {
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
RecyclingLocations = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _RecyclingLocations_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-recycling-locations',
  styles: [(_RecyclingLocations_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], RecyclingLocations);


/***/ }),

/***/ 4177:
/*!***********************************************************************!*\
  !*** ./src/app/RecyclingLocations/RecyclingLocations.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/RecyclingLocations/RecyclingLocations.scss"],"names":[],"mappings":"AAGA,sBAAA;AAEA,gBAAA","sourcesContent":["/* Styles properties */\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5169:
/*!***********************************************************************!*\
  !*** ./src/app/RecyclingLocations/RecyclingLocations.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-59862200>\n    <ion-toolbar _aio-3426E3A6 #j_21>\n        <ion-title _aio-9F13E864 #j_23>\n            Recycling Locations\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content _aio-7034A331 class=\"ion-padding\">\n    <agm-map _aio-9BAD6F4A #j_17 [latitude]=\"lat\" [longitude]=\"lng\" [gestureHandling]=\"'auto'\"\n    [mapTypeId]=\"'roadmap'\">\n        <agm-marker #j_18 [latitude]=\"lat\" [longitude]=\"lng\">\n        </agm-marker>\n    </agm-map>\n    <ion-button _aio-A7344AD3 #j_19 expand=\"block\" color=\"primary\" (click)=\"button1Click__j_19($event, currentItem)\">\n        Get Current Location\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-892F91BF>\n    <ion-toolbar _aio-C23F00AF #j_25>\n        <ion-title _aio-3B1530F3 #j_27>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_RecyclingLocations_RecyclingLocations_module_ts.js.map