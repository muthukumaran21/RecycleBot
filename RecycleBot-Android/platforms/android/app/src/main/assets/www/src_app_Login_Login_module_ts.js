(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Login_Login_module_ts"],{

/***/ 6068:
/*!***************************************!*\
  !*** ./src/app/Login/Login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ 9488);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);














let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_Login__WEBPACK_IMPORTED_MODULE_2__.Login],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _Login__WEBPACK_IMPORTED_MODULE_2__.Login
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Login__WEBPACK_IMPORTED_MODULE_2__.Login]
})], LoginPageModule);


/***/ }),

/***/ 9488:
/*!********************************!*\
  !*** ./src/app/Login/Login.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Login_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.html?ngResource */ 8250);
/* harmony import */ var _Login_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.scss?ngResource */ 4438);
/* harmony import */ var _Login_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/custom/FormUtils */ 9899);

var _a, _b, _c, _d;









let Login = class Login {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  formUtils;
  imageUri;
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
  loginForm_el;
  loginForm;
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, formUtils) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.formUtils = formUtils;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ngOnInit() {
    this.pageNgOnInit__j_115();
  }
  ionViewDidEnter() {
    this.pageIonViewDidEnter__j_115();
  }
  pageNgOnInit__j_115(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      const databaseId = _this.Apperyio.config.get("SecuritySettings.database_id");
      if (databaseId == 'SPECIFY YOUR DATABASE ID') {
        const alert = yield _this.Apperyio.getController("AlertController").create({
          header: 'Alert',
          subHeader: 'Database Id is not specified',
          message: 'Please open SecuritySettings and specify your database id as database_id property',
          buttons: ['OK']
        });
        yield alert.present();
      }
      _this.formUtils.showPasswordOnClick('page-login');
    })();
  }
  pageIonViewDidEnter__j_115(event, currentItem) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this2.formUtils.init(_this2.loginForm.form);
    })();
  }
  loginformNgSubmit__j_123(event, currentItem) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.loginForm.valid) {
        let __aio_tmp_val__;
        /* Invoke data service */
        _this3.invokeService_dbLogin();
      }
    })();
  }
  signinbuttonClick__j_131(event, currentItem) {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this4.formUtils.markFormControlsAsTouched(_this4.loginForm.form, ['username', 'password']);
    })();
  }
  signuptextClick__j_133(event, currentItem) {
    var _this5 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this5.Apperyio.navigateTo('SignUp');
    })();
  }
  $aio_dataServices = {
    "dbLogin": "invokeService_dbLogin",
    "CameraService2": "invokeService_CameraService2"
  };
  invokeService_dbLogin(cb) {
    var _this6 = this;
    this.Apperyio.getService("LoginService").then( /*#__PURE__*/function () {
      var _ref = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
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
        data = _this6.$aio_mappingHelper.updateData(data, [], _this6.$aio_mappingHelper.getComponentPropValue.call(_this6, 'loginForm', 'ionic5form', 'formData'));
        /* Present Loading */
        yield (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let options = {
            'spinner': 'circles'
          };
          let controller = _this6.Apperyio.getController('LoadingController');
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
            yield _this6.$aio_mappingHelper.setServiceDataValue("sessionToken", [], _this6.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
            /* Dismiss loading */
            yield _this6.Apperyio.getController("LoadingController").dismiss();
            /* Run TypeScript */
            if (_this6.loginForm.form && _this6.loginForm.form.controls.rememberme.value) {
              _this6.formUtils.rememberMe(_this6.loginForm.form.controls.username.value, _this6.loginForm.form.controls.password.value);
            }
            /* Navigate to Page */
            _this6.Apperyio.navigateTo('Home');
            _this6.mappingData = {
              ..._this6.mappingData,
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
            yield _this6.Apperyio.getController("LoadingController").dismiss();
            /* Present Toast */
            yield (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              let options = {
                'color': 'danger',
                'duration': 1000,
                'message': 'Invalid user\u0027s credentials',
                'position': 'top',
                'buttons': []
              };
              let controller = _this6.Apperyio.getController('ToastController');
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
  invokeService_CameraService2(cb) {
    this.Apperyio.getService("CameraService").then( /*#__PURE__*/function () {
      var _ref6 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
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
          var _ref7 = (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x5) {
            return _ref7.apply(this, arguments);
          };
        }(), err => {
          console.log(err);
        });
      });
      return function (_x4) {
        return _ref6.apply(this, arguments);
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
    loginForm_el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['loginForm_el', {
        static: false
      }]
    }],
    loginForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['loginForm', {
        static: true
      }]
    }]
  };
};
Login = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _Login_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-login',
  styles: [(_Login_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__.ExportedClass !== "undefined" && _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_5__.ExportedClass) === "function" ? _d : Object])], Login);


/***/ }),

/***/ 4438:
/*!*********************************************!*\
  !*** ./src/app/Login/Login.scss?ngResource ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\ndiv[_aio-22EA3DBE] {\n  width: 335px;\n  background-color: #ffffff;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\ndiv[_aio-859927DE] {\n  border-style: solid;\n  border-color: #f4f4f4;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-bottom-width: 2px;\n}\n\nion-text[_aio-F9E2D4A1] {\n  display: block;\n  font-size: 30px;\n}\n\nion-text[_aio-D58A8D89] {\n  display: block;\n  font-size: 18px;\n  margin-top: 5px;\n}\n\ndiv[_aio-B7AFDD2A] {\n  padding-top: 0px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n}\n\nion-text[_aio-B818C10A] {\n  display: inline-block;\n  margin-top: 5px;\n}\n\nion-row[_aio-DDD52F4B] {\n  margin-top: 20px;\n}\n\nion-label[_aio-2CD11264] {\n  margin-left: 10px;\n}\n\nion-button[_aio-EC4949C2] {\n  margin-top: 20px;\n}\n\ndiv[_aio-7E8AFA4B] {\n  text-align: right;\n  margin-top: 20px;\n}\n\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/Login/Login.scss"],"names":[],"mappings":"AAGA,sBAAA;AACA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;AAFA;;AAIA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,wBAAA;AADA;;AAGA;EACA,cAAA;EACA,eAAA;AAAA;;AAEA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AACA;;AACA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;AAEA;;AAAA;EACA,qBAAA;EACA,eAAA;AAGA;;AADA;EACA,gBAAA;AAIA;;AAFA;EACA,iBAAA;AAKA;;AAHA;EACA,gBAAA;AAMA;;AAJA;EACA,iBAAA;EACA,gBAAA;AAOA;;AALA,gBAAA","sourcesContent":["/* Styles properties */\ndiv[_aio-22EA3DBE] {\n  width: 335px;\n  background-color: #ffffff;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\ndiv[_aio-859927DE] {\n  border-style: solid;\n  border-color: #f4f4f4;\n  padding-top: 30px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  border-bottom-width: 2px;\n}\n\nion-text[_aio-F9E2D4A1] {\n  display: block;\n  font-size: 30px;\n}\n\nion-text[_aio-D58A8D89] {\n  display: block;\n  font-size: 18px;\n  margin-top: 5px;\n}\n\ndiv[_aio-B7AFDD2A] {\n  padding-top: 0px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n}\n\nion-text[_aio-B818C10A] {\n  display: inline-block;\n  margin-top: 5px;\n}\n\nion-row[_aio-DDD52F4B] {\n  margin-top: 20px;\n}\n\nion-label[_aio-2CD11264] {\n  margin-left: 10px;\n}\n\nion-button[_aio-EC4949C2] {\n  margin-top: 20px;\n}\n\ndiv[_aio-7E8AFA4B] {\n  text-align: right;\n  margin-top: 20px;\n}\n\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8250:
/*!*********************************************!*\
  !*** ./src/app/Login/Login.html?ngResource ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content _aio-C98E93DC scrollY=\"false\" color=\"secondary\">\n    <div _aio-AC5B0F52 #j_117 class=\"ion-page ion-justify-content-center ion-align-items-center\">\n        <div _aio-22EA3DBE #j_118>\n            <div _aio-859927DE #j_119>\n                <ion-text _aio-F9E2D4A1 #j_120 color=\"primary\">\n                    Glad to see you!\n                </ion-text>\n                <ion-text _aio-D58A8D89 #j_121 color=\"dark\">\n                    Log in to continue\n                </ion-text>\n            </div>\n            <div _aio-B7AFDD2A #j_122>\n                <form _aio-5848E983 #loginForm=\"ngForm\" #loginForm_el [aioFormChange]=\"loginForm\"\n                class=\"form-component\" (ngSubmit)=\"loginformNgSubmit__j_123($event, currentItem)\">\n                    <ion-item _aio-3189AC1B #j_124__ion4Item class=\"ion-no-padding\">\n                        <ion-label _aio-3189AC1B #j_124__ion4Label color=\"dark\" position=\"stacked\">\n                            Username\n                        </ion-label>\n                        <ion-icon _aio-3189AC1B #j_124__icon name=\"person\" slot=\"end\" color=\"light\" class=\"input-icon\">\n                        </ion-icon>\n                        <ion-input _aio-3189AC1B #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                        autocomplete=\"new-password\" maxlength=\"254\" name=\"username\" readonly=\"false\" type=\"email\"\n                        color=\"dark\" minlength=\"1\" required=\"true\" aioControlValidation=\"maxLength:254|||pattern:^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-text _aio-B818C10A #j_125 color=\"danger\" *ngIf=\"username.touched && username.errors\"\n                    [ngClass]=\"{'visible': username.touched && username.errors}\">\n                        Please enter a valid Email\n                    </ion-text>\n                    <ion-item _aio-B38ACAE3 #j_126__ion4Item class=\"ion-no-padding\">\n                        <ion-label _aio-B38ACAE3 #j_126__ion4Label color=\"dark\" position=\"stacked\">\n                            Password\n                        </ion-label>\n                        <ion-icon _aio-B38ACAE3 #j_126__icon name=\"eye\" slot=\"end\" color=\"light\" class=\"eye\">\n                        </ion-icon>\n                        <ion-input _aio-B38ACAE3 #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                        autocomplete=\"new-password\" name=\"password\" readonly=\"false\" type=\"password\" color=\"dark\"\n                        required=\"true\" class=\"password\" aioControlValidation>\n                        </ion-input>\n                    </ion-item>\n                    <ion-text _aio-66E065CB #j_127 color=\"danger\" *ngIf=\"password.touched && password.errors && password.errors.required\"\n                    [ngClass]=\"{'visible': password.touched && password.errors && password.errors.required}\">\n                        Please enter a Password\n                    </ion-text>\n                    <ion-row _aio-DDD52F4B #j_128 class=\"ion-no-border ion-align-items-center\">\n                        <ion-checkbox _aio-1CB720EB #rememberme=\"ngModel\" #rememberme_el [ngModel]=\"false\"\n                        mode=\"ios\" name=\"rememberme\" value=\"rememberme\" (ionChange)=\"this.formUtils.forgotMe($event, this.loginForm.form)\">\n                        </ion-checkbox>\n                        <ion-label _aio-2CD11264 #j_130 color=\"dark\">\n                            Keep me logged in\n                        </ion-label>\n                    </ion-row>\n                    <ion-button _aio-EC4949C2 #j_131 expand=\"block\" size=\"large\" type=\"submit\" color=\"primary\"\n                    (click)=\"signinbuttonClick__j_131($event, currentItem)\">\n                        Sign in\n                    </ion-button>\n                </form>\n                <div _aio-7E8AFA4B #j_132>\n                    <ion-text _aio-312BFF14 #j_133 color=\"primary\" (click)=\"signuptextClick__j_133($event, currentItem)\">\n                        Sign up\n                    </ion-text>\n                </div>\n            </div>\n        </div>\n    </div>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Login_Login_module_ts.js.map