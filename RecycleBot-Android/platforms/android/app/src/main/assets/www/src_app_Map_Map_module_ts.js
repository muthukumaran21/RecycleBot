(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Map_Map_module_ts"],{

/***/ 5580:
/*!***********************************!*\
  !*** ./src/app/Map/Map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
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
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ 2108);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);















let MapPageModule = class MapPageModule {};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_Map__WEBPACK_IMPORTED_MODULE_2__.Map],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _agm_core__WEBPACK_IMPORTED_MODULE_13__.AgmCoreModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: '',
    component: _Map__WEBPACK_IMPORTED_MODULE_2__.Map
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Map__WEBPACK_IMPORTED_MODULE_2__.Map]
})], MapPageModule);


/***/ }),

/***/ 2108:
/*!****************************!*\
  !*** ./src/app/Map/Map.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Map": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Map_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.html?ngResource */ 9972);
/* harmony import */ var _Map_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.scss?ngResource */ 983);
/* harmony import */ var _Map_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Map_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);

var _a, _b, _c;







let Map = class Map {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  markers;
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
    this.markers = [];
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ionViewDidEnter() {
    this.pageIonViewDidEnter__j_29();
  }
  pageIonViewDidEnter__j_29(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Invoke data service */
      _this.invokeService_geoService();
    })();
  }
  googlemapMapClick__j_31(event, currentItem) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      const self = _this2;
      const alert = yield _this2.Apperyio.getController("AlertController").create({
        header: 'Add Location',
        inputs: [{
          name: 'name',
          type: 'text',
          placeholder: 'Location Name'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: res => {
            if (res.name && res.name.length) {
              self.markers.push({
                name: res.name,
                latitude: event.coords.lat,
                longitude: event.coords.lng
              });
            } else {
              _this2.Apperyio.getController("ToastController").create({
                header: 'Warning',
                message: 'Name is required',
                position: 'bottom',
                color: 'danger',
                duration: 2000
              }).then(toast => toast.present());
              return false;
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  $aio_dataServices = {
    "geoService": "invokeService_geoService"
  };
  invokeService_geoService(cb) {
    var _this3 = this;
    this.Apperyio.getService("GeoService_Google_Map").then( /*#__PURE__*/function () {
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
            mappingData.j_31__center_latitude = () => _this3.$aio_mappingHelper.getSubdata(res, ["latitude"]);
            mappingData.j_31__center_longitude = () => _this3.$aio_mappingHelper.getSubdata(res, ["longitude"]);
            /* Run TypeScript */
            _this3.markers.push({
              name: 'You are here',
              latitude: res.latitude,
              longitude: res.longitude
            });
            _this3.mappingData = {
              ..._this3.mappingData,
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
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
Map = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _Map_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-map',
  styles: [(_Map_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], Map);


/***/ }),

/***/ 983:
/*!*****************************************!*\
  !*** ./src/app/Map/Map.scss?ngResource ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\n/* Custom SCSS */\n.full_screen {\n  height: 100%;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/Map/Map.scss"],"names":[],"mappings":"AAGA,sBAAA;AAEA,gBAAA;AACA;EACI,YAAA;EACA,WAAA;AAHJ","sourcesContent":["/* Styles properties */\n/* Custom SCSS */\n.full_screen {\n  height: 100%;\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9972:
/*!*****************************************!*\
  !*** ./src/app/Map/Map.html?ngResource ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-7F3D1D26>\n    <ion-toolbar _aio-D56CBFBA #j_37>\n        <ion-title _aio-FE476219 #j_39>\n            {{ 'Map' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content _aio-0A815510>\n    <agm-map _aio-CAAFC70E #j_31 [latitude]=\"__getMapping(currentItem, 'j_31__center_latitude', 40.1451, true)\"\n    [longitude]=\"__getMapping(currentItem, 'j_31__center_longitude', -99.6680, true)\"\n    [gestureHandling]=\"'auto'\" [mapTypeId]=\"'roadmap'\" class=\"full_screen\" (mapClick)=\"googlemapMapClick__j_31($event, currentItem)\">\n        <agm-marker #j_32 [latitude]=\"marker.latitude\" [longitude]=\"marker.longitude\" *ngFor=\"let marker of markers\">\n            <agm-info-window #j_33>\n                <ion-text _aio-CA7BB232 #j_34>\n                    <ion-text _aio-F1E1EDD7 #j_35>\n                        {{marker.name | translate}}\n                    </ion-text>\n                </ion-text>\n            </agm-info-window>\n        </agm-marker>\n    </agm-map>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Map_Map_module_ts.js.map