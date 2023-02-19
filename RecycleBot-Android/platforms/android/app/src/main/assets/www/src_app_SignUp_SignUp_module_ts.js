(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_SignUp_SignUp_module_ts"],{

/***/ 3989:
/*!*****************************************!*\
  !*** ./src/app/SignUp/SignUp.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp */ 584);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);














let SignUpPageModule = class SignUpPageModule {};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_SignUp__WEBPACK_IMPORTED_MODULE_2__.SignUp],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _SignUp__WEBPACK_IMPORTED_MODULE_2__.SignUp
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_SignUp__WEBPACK_IMPORTED_MODULE_2__.SignUp]
})], SignUpPageModule);


/***/ }),

/***/ 584:
/*!**********************************!*\
  !*** ./src/app/SignUp/SignUp.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUp": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _SignUp_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.html?ngResource */ 8003);
/* harmony import */ var _SignUp_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp.scss?ngResource */ 32);
/* harmony import */ var _SignUp_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignUp_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/custom/FormUtils */ 9899);

var _a, _b, _c, _d;









let SignUp = class SignUp {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  formUtils;
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
  signUpForm_el;
  signUpForm;
  markFormControlsAsTouched() {
    this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password']);
  }
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, formUtils) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.formUtils = formUtils;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ngOnInit() {
    this.pageNgOnInit__j_84();
  }
  ionViewDidEnter() {
    this.pageIonViewDidEnter__j_84();
  }
  pageNgOnInit__j_84(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this.formUtils.showPasswordOnClick('page-sign-up');
    })();
  }
  pageIonViewDidEnter__j_84(event, currentItem) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this2.signUpForm.reset();
    })();
  }
  signupformNgSubmit__j_94(event, currentItem) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.signUpForm.valid) {
        let __aio_tmp_val__;
        /* Invoke data service */
        _this3.invokeService_dbSignup();
      }
    })();
  }
  $aio_dataServices = {
    "dbSignup": "invokeService_dbSignup"
  };
  invokeService_dbSignup(cb) {
    var _this4 = this;
    this.Apperyio.getService("SignupService").then( /*#__PURE__*/function () {
      var _ref = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let params = {};
        let headers = {};
        let __aio_tmp_val__;
        _this4.$aio_changeDetector.detectChanges();
        /* Mapping */
        data = _this4.$aio_mappingHelper.updateData(data, [], _this4.$aio_mappingHelper.getComponentPropValue.call(_this4, 'signUpForm', 'ionic5form', 'formData'));
        /* Present Loading */
        yield (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let options = {
            'spinner': 'circles'
          };
          let controller = _this4.Apperyio.getController('LoadingController');
          const loading = yield controller.create(options);
          return yield loading.present();
        })();
        service.execute({
          data: data,
          params: params,
          headers: headers
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref3 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let mappingData = {};
            /* Mapping */
            yield _this4.$aio_mappingHelper.setServiceDataValue("sessionToken", [], _this4.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
            /* Dismiss loading */
            yield _this4.Apperyio.getController("LoadingController").dismiss();
            /* Navigate to Page */
            _this4.Apperyio.navigateTo('Home');
            _this4.mappingData = {
              ..._this4.mappingData,
              ...mappingData
            };
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }(),
        /*#__PURE__*/
        /* onerror */
        function () {
          var _ref4 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            /* Dismiss loading */
            yield _this4.Apperyio.getController("LoadingController").dismiss();
            /* Present Toast */
            yield (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              let options = {
                'color': 'danger',
                'duration': 1000,
                'message': 'Invalid user\u0027s data',
                'position': 'top',
                'buttons': []
              };
              let controller = _this4.Apperyio.getController('ToastController');
              const toast = yield controller.create(options);
              return yield toast.present();
            })();
          });
          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
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
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__.ExportedClass
  }];
  static propDecorators = {
    signUpForm_el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['signUpForm_el', {
        static: false
      }]
    }],
    signUpForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['signUpForm', {
        static: true
      }]
    }]
  };
};
SignUp = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _SignUp_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-sign-up',
  styles: [(_SignUp_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__.ExportedClass !== "undefined" && _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__.ExportedClass) === "function" ? _d : Object])], SignUp);


/***/ }),

/***/ 32:
/*!***********************************************!*\
  !*** ./src/app/SignUp/SignUp.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\nion-grid[_aio-5962610A] {\n  height: 100%;\n}\n\nion-row[_aio-9B8C13F7] {\n  height: 90%;\n}\n\ndiv[_aio-38AFCABC] {\n  width: 335px;\n  background-color: #ffffff;\n  text-align: left;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\ndiv[_aio-7664DDF9] {\n  border-style: solid;\n  border-color: #f4f4f4;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-bottom-width: 2px;\n}\n\nion-text[_aio-9A5B7FE3] {\n  font-size: 30px;\n  line-height: 38px;\n}\n\nform[_aio-BAAC2543] {\n  padding-top: 0px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n}\n\nion-button[_aio-7D8E3A7D] {\n  margin-top: 20px;\n}\n\nion-row[_aio-73B422EA] {\n  height: 10%;\n}\n\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/SignUp/SignUp.scss"],"names":[],"mappings":"AAGA,sBAAA;AACA;EACA,YAAA;AAFA;;AAIA;EACA,WAAA;AADA;;AAGA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;AAAA;;AAEA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,wBAAA;AACA;;AACA;EACA,eAAA;EACA,iBAAA;AAEA;;AAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;AAGA;;AADA;EACA,gBAAA;AAIA;;AAFA;EACA,WAAA;AAKA;;AAHA,gBAAA","sourcesContent":["/* Styles properties */\nion-grid[_aio-5962610A] {\n  height: 100%;\n}\n\nion-row[_aio-9B8C13F7] {\n  height: 90%;\n}\n\ndiv[_aio-38AFCABC] {\n  width: 335px;\n  background-color: #ffffff;\n  text-align: left;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\ndiv[_aio-7664DDF9] {\n  border-style: solid;\n  border-color: #f4f4f4;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-bottom-width: 2px;\n}\n\nion-text[_aio-9A5B7FE3] {\n  font-size: 30px;\n  line-height: 38px;\n}\n\nform[_aio-BAAC2543] {\n  padding-top: 0px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n}\n\nion-button[_aio-7D8E3A7D] {\n  margin-top: 20px;\n}\n\nion-row[_aio-73B422EA] {\n  height: 10%;\n}\n\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8003:
/*!***********************************************!*\
  !*** ./src/app/SignUp/SignUp.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content _aio-A642242D scrollY=\"false\" color=\"secondary\">\n    <ion-grid _aio-5962610A #j_86>\n        <ion-row _aio-9B8C13F7 #j_87 class=\"ion-justify-content-start ion-align-items-center\"\n        style=\"overflow: hidden; overflow-y: auto;\">\n            <ion-col _aio-8AD0D8D9 #j_88>\n                <ion-row _aio-B18DB5F4 #j_89 class=\"ion-justify-content-center\">\n                    <div _aio-38AFCABC #j_90>\n                        <div _aio-7664DDF9 #j_91>\n                            <ion-text _aio-9A5B7FE3 #j_92 color=\"primary\">\n                                Sign up\n                            </ion-text>\n                        </div>\n                        <div _aio-CC3C1A5D #j_93>\n                            <form _aio-BAAC2543 #signUpForm=\"ngForm\" #signUpForm_el [aioFormChange]=\"signUpForm\"\n                            class=\"form-component\" (ngSubmit)=\"signupformNgSubmit__j_94($event, currentItem)\">\n                                <ion-item _aio-2720D9F0 #j_95__ion4Item class=\"ion-no-padding\">\n                                    <ion-label _aio-2720D9F0 #j_95__ion4Label color=\"dark\" position=\"stacked\">\n                                        First name\n                                    </ion-label>\n                                    <ion-icon _aio-2720D9F0 #j_95__icon name=\"person\" slot=\"end\" color=\"light\">\n                                    </ion-icon>\n                                    <ion-input _aio-2720D9F0 #firstName=\"ngModel\" #firstName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                    autocomplete=\"new-password\" maxlength=\"50\" name=\"firstName\" type=\"text\" color=\"dark\"\n                                    minlength=\"1\" required=\"true\" aioControlValidation=\"pattern:^[a-zA-Z0-9 ]*$\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-text _aio-0472409F #j_96 color=\"danger\" *ngIf=\"firstName.touched && firstName.errors\"\n                                [ngClass]=\"{'visible': firstName.touched && firstName.errors}\">\n                                    {{firstName.errors &amp;&amp; firstName.errors.pattern ? 'Special characters are\n                                    not allowed' : 'Please enter a valid First name'}}\n                                </ion-text>\n                                <ion-item _aio-028B5F7D #j_97__ion4Item class=\"ion-no-padding\">\n                                    <ion-label _aio-028B5F7D #j_97__ion4Label color=\"dark\" position=\"stacked\">\n                                        Last name\n                                    </ion-label>\n                                    <ion-icon _aio-028B5F7D #j_97__icon name=\"person\" slot=\"end\" color=\"light\">\n                                    </ion-icon>\n                                    <ion-input _aio-028B5F7D #lastName=\"ngModel\" #lastName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                    autocomplete=\"new-password\" maxlength=\"50\" name=\"lastName\" type=\"text\" color=\"dark\"\n                                    minlength=\"1\" required=\"true\" aioControlValidation=\"pattern:^[a-zA-Z0-9 ]*$\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-text _aio-59EABC68 #j_98 color=\"danger\" *ngIf=\"lastName.touched && lastName.errors\"\n                                [ngClass]=\"{'visible': lastName.touched && lastName.errors}\">\n                                    {{lastName.errors &amp;&amp; lastName.errors.pattern ? 'Special characters are not\n                                    allowed' : 'Please enter a valid Last name'}}\n                                </ion-text>\n                                <ion-item _aio-D0F46AC3 #j_99__ion4Item class=\"ion-no-padding\">\n                                    <ion-label _aio-D0F46AC3 #j_99__ion4Label color=\"dark\" position=\"stacked\">\n                                        Username\n                                    </ion-label>\n                                    <ion-icon _aio-D0F46AC3 #j_99__icon name=\"mail\" slot=\"end\" color=\"light\">\n                                    </ion-icon>\n                                    <ion-input _aio-D0F46AC3 #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                    autocomplete=\"new-password\" maxlength=\"254\" name=\"username\" type=\"email\" color=\"dark\"\n                                    minlength=\"1\" required=\"true\" aioControlValidation=\"pattern:^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-text _aio-B91E6657 #j_100 color=\"danger\" *ngIf=\"username.touched && username.errors\"\n                                [ngClass]=\"{'visible': username.touched && username.errors}\">\n                                    Please enter a valid Email\n                                </ion-text>\n                                <ion-item _aio-702A36F6 #j_101__ion4Item class=\"ion-no-padding\">\n                                    <ion-label _aio-702A36F6 #j_101__ion4Label color=\"dark\" position=\"stacked\">\n                                        Password\n                                    </ion-label>\n                                    <ion-icon _aio-702A36F6 #j_101__icon name=\"eye\" slot=\"end\" color=\"light\" class=\"eye\">\n                                    </ion-icon>\n                                    <ion-input _aio-702A36F6 #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                    autocomplete=\"new-password\" maxlength=\"50\" name=\"password\" type=\"password\" color=\"dark\"\n                                    minlength=\"6\" required=\"true\" class=\"password\" aioControlValidation=\"pattern:^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[ -/:-@\\[-`{-~]).{6,50}$\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-text _aio-17E92E3C #j_102 color=\"danger\" *ngIf=\"password.touched && password.errors\"\n                                [ngClass]=\"{'visible': password.touched && password.errors}\">\n                                    {{password.errors &amp;&amp; password.errors.pattern ? 'Password must be at least\n                                    6 characters long, contain letters, numbers and symbols' : 'Please enter a valid\n                                    Password'}}\n                                </ion-text>\n                                <ion-button _aio-7D8E3A7D #j_103 expand=\"block\" size=\"large\" type=\"submit\" color=\"primary\"\n                                (click)=\"markFormControlsAsTouched()\">\n                                    Sign up\n                                </ion-button>\n                            </form>\n                        </div>\n                    </div>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        <ion-row _aio-73B422EA #j_104>\n            <ion-col _aio-0B0519C9 #j_105 class=\"ion-text-center\">\n                <div _aio-06721160 #j_106>\n                    <ion-text _aio-399AC8AE #j_107>\n                        By signing up you accept the\n                    </ion-text>\n                    <ion-text _aio-7972C229 #j_108 color=\"primary\" (click)=\"Apperyio.navigateTo('termsofservice')\">\n                        Terms of Service\n                    </ion-text>\n                    <ion-text _aio-3346C67D #j_109>\n                        and\n                    </ion-text>\n                    <ion-text _aio-E26298C8 #j_110 color=\"primary\" (click)=\"Apperyio.navigateTo('privacypolicy')\">\n                        Privacy Policy\n                    </ion-text>\n                </div>\n                <div _aio-0EDAD9BD #j_111>\n                    <ion-text _aio-A15439CE #j_112>\n                        Already have an account?\n                    </ion-text>\n                    <ion-text _aio-CF4E9357 #j_113 color=\"primary\" (click)=\"Apperyio.navigateTo('login')\">\n                        Sign in\n                    </ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_SignUp_SignUp_module_ts.js.map