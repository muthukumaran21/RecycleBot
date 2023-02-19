(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_TermsOfService_TermsOfService_module_ts"],{

/***/ 5150:
/*!*********************************************************!*\
  !*** ./src/app/TermsOfService/TermsOfService.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsOfServicePageModule": () => (/* binding */ TermsOfServicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _TermsOfService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TermsOfService */ 5870);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);














let TermsOfServicePageModule = class TermsOfServicePageModule {};
TermsOfServicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_TermsOfService__WEBPACK_IMPORTED_MODULE_2__.TermsOfService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _TermsOfService__WEBPACK_IMPORTED_MODULE_2__.TermsOfService
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_TermsOfService__WEBPACK_IMPORTED_MODULE_2__.TermsOfService]
})], TermsOfServicePageModule);


/***/ }),

/***/ 5870:
/*!**************************************************!*\
  !*** ./src/app/TermsOfService/TermsOfService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsOfService": () => (/* binding */ TermsOfService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _TermsOfService_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermsOfService.html?ngResource */ 6196);
/* harmony import */ var _TermsOfService_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermsOfService.scss?ngResource */ 4897);
/* harmony import */ var _TermsOfService_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TermsOfService_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);
var _a, _b, _c;







let TermsOfService = class TermsOfService {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
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
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }];
};
TermsOfService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  template: _TermsOfService_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'page-terms-of-service',
  styles: [(_TermsOfService_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef) === "function" ? _c : Object])], TermsOfService);


/***/ }),

/***/ 4897:
/*!***************************************************************!*\
  !*** ./src/app/TermsOfService/TermsOfService.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\ndiv[_aio-B0506D33] {\n  width: 335px;\n  background-color: #ffffff;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-text[_aio-ECD25CBC] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\nion-text[_aio-C875B106] {\n  display: block;\n  font-size: 14px;\n  line-height: 26px;\n  margin-top: 20px;\n}\n\n/* Custom SCSS */\n.terms-wrapper {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.terms-wrapper .terms-panel {\n  /*background-color: #ffffff;\n  border-radius: 8px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 335px;*/\n  /*.title {\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 23px;\n  }*/\n  /*.description {\n      font-size: 14px;\n      line-height: 26px;\n      margin-top: 20px;\n      max-height: 60vh;\n      overflow-y: auto;\n  }*/\n}\n.terms-wrapper .terms-panel ion-button {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}", "",{"version":3,"sources":["webpack://./src/app/TermsOfService/TermsOfService.scss"],"names":[],"mappings":"AAGA,sBAAA;AACA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;AAFA;;AAIA;EACA,eAAA;EACA,gBAAA;AADA;;AAGA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAAA;;AAEA,gBAAA;AACA;EACI,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EACI;;;;;gBAAA;EAOA;;;;IAAA;EAMA;;;;;;IAAA;AAKR;AAGQ;EACI,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AADZ","sourcesContent":["/* Styles properties */\ndiv[_aio-B0506D33] {\n  width: 335px;\n  background-color: #ffffff;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-text[_aio-ECD25CBC] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\nion-text[_aio-C875B106] {\n  display: block;\n  font-size: 14px;\n  line-height: 26px;\n  margin-top: 20px;\n}\n\n/* Custom SCSS */\n.terms-wrapper {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.terms-wrapper .terms-panel {\n  /*background-color: #ffffff;\n  border-radius: 8px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 335px;*/\n  /*.title {\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 23px;\n  }*/\n  /*.description {\n      font-size: 14px;\n      line-height: 26px;\n      margin-top: 20px;\n      max-height: 60vh;\n      overflow-y: auto;\n  }*/\n}\n.terms-wrapper .terms-panel ion-button {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6196:
/*!***************************************************************!*\
  !*** ./src/app/TermsOfService/TermsOfService.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content _aio-3922F6A0 class=\"content\" scrollY=\"false\" color=\"secondary\">\n    <div _aio-203D5960 #j_43 class=\"ion-page ion-justify-content-center ion-align-items-center\">\n        <div _aio-B0506D33 #j_44>\n            <ion-text _aio-ECD25CBC #j_45 color=\"dark\">\n                Terms of Service\n            </ion-text>\n            <ion-text _aio-C875B106 #j_46 color=\"dark\" style=\"overflow-y: auto; height: 60vh\">\n                This General Privacy Policy (also referred to as the ‘Privacy Policy’) provides\n                information on the collection, use, and sharing (collectively referred to ‘processing’\n                or ‘process’) as of personal information by Corporation and its affiliates in connection\n                with your use of websites, mobile applications, and social media pages that link\n                to this Privacy Policy, your interactions with during in-person meetings or at events,\n                and in the context of other offline sales and marketing activities. This Privacy\n                Policy also explains the privacy rights you have in relation to these processing\n                activities.This General Privacy Policy (also referred to as the ‘Privacy Policy’)\n                provides information on the collection, use, and sharing (collectively referred to\n                ‘processing’ or ‘process’) as of personal information by Corporation and its affiliates\n                in connection with your use of websites, mobile applications, and social media pages\n                that link to this Privacy Policy, your interactions with during in-person meetings\n                or at events, and in the context of other offline sales and marketing activities.\n                This Privacy Policy also explains the privacy rights you have in relation to these\n                processing activities.\n            </ion-text>\n            <ion-button _aio-2869C8B7 #j_47 expand=\"block\" color=\"primary\" [routerLink]=\"['/signup']\">\n                Ok\n            </ion-button>\n        </div>\n    </div>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_TermsOfService_TermsOfService_module_ts.js.map