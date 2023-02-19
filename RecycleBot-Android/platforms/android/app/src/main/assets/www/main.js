(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Login_Login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Login/Login.module */ 6068)).then(m => m.LoginPageModule)
}, {
  path: 'signup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_SignUp_SignUp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./SignUp/SignUp.module */ 3989)).then(m => m.SignUpPageModule)
}, {
  path: 'privacypolicy',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_PrivacyPolicy_PrivacyPolicy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./PrivacyPolicy/PrivacyPolicy.module */ 1578)).then(m => m.PrivacyPolicyPageModule)
}, {
  path: 'termsofservice',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_TermsOfService_TermsOfService_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./TermsOfService/TermsOfService.module */ 5150)).then(m => m.TermsOfServicePageModule)
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Home_Home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Home/Home.module */ 7726)).then(m => m.HomePageModule)
}, {
  path: 'camera',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_camera_camera_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./camera/camera.module */ 7114)).then(m => m.cameraPageModule)
}, {
  path: 'recyclinglocations',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_RecyclingLocations_RecyclingLocations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./RecyclingLocations/RecyclingLocations.module */ 4478)).then(m => m.RecyclingLocationsPageModule)
}, {
  path: 'uploadphotoscreen',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_UploadPhotoScreen_UploadPhotoScreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./UploadPhotoScreen/UploadPhotoScreen.module */ 2427)).then(m => m.UploadPhotoScreenPageModule)
}, {
  path: 'map',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Map_Map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Map/Map.module */ 5580)).then(m => m.MapPageModule)
}, {
  path: 'Autocomplete',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_SignUp_SignUp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./SignUp/SignUp.module */ 3989)).then(m => m.SignUpPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3262);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _scripts_apperyio_apperyio_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/apperyio/apperyio.module */ 6890);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/custom-modules.module */ 4363);
/* harmony import */ var _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @tinkoff/ng-dompurify */ 3373);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app */ 3485);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _scripts_custom_GeoService_Impl_Google_Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/custom/GeoService_Impl_Google_Map */ 4817);
/* harmony import */ var _scripts_custom_GeoService_Impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/custom/GeoService_Impl */ 9059);
/* harmony import */ var _scripts_custom_Camera_Impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/custom/Camera_Impl */ 2629);
/* harmony import */ var _scripts_custom_FileReadService_Impl_File_Read__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/custom/FileReadService_Impl_File_Read */ 354);
/* harmony import */ var _scripts_custom_FileReadService_Impl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/custom/FileReadService_Impl */ 4034);
/* harmony import */ var _scripts_custom_Camera_Impl_Take_photo_and_upload_into_Appery_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/custom/Camera_Impl_Take_photo_and_upload_into_Appery_database */ 9269);
/* harmony import */ var _scripts_custom_Camera_Impl_Camera__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scripts/custom/Camera_Impl_Camera */ 138);
/* harmony import */ var _scripts_services_SignupService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/services/SignupService */ 4545);
/* harmony import */ var _scripts_services_LogoutService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scripts/services/LogoutService */ 9169);
/* harmony import */ var _scripts_services_LoginService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scripts/services/LoginService */ 200);
/* harmony import */ var _scripts_services_RESTService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scripts/services/RESTService */ 2184);
/* harmony import */ var _scripts_services_Photo_files_upload_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scripts/services/Photo__files_upload_service */ 8327);
/* harmony import */ var _scripts_services_recycleDB_files_upload_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scripts/services/recycleDB__files_upload_service */ 4308);
/* harmony import */ var _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scripts/custom/statesDictionary */ 5632);
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scripts/custom/FormUtils */ 9899);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 2027);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/device/ngx */ 4344);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 9056);















































var getIonicModuleConfig, getIonicStorageModuleConfig;
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_33__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_34__.NgModule)({
  declarations: [_app__WEBPACK_IMPORTED_MODULE_8__.app],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicModule.forRoot(typeof getIonicModuleConfig === "function" ? getIonicModuleConfig() : undefined), _agm_core__WEBPACK_IMPORTED_MODULE_39__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCfR3zPae0npHsjna6GoreJUsJVyye_xVA'
  }), _angular_common_http__WEBPACK_IMPORTED_MODULE_40__.HttpClientModule, _scripts_apperyio_apperyio_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_3__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_5__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__.CustomModulesModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_41__.IonicStorageModule.forRoot(typeof getIonicStorageModuleConfig === "function" ? getIonicStorageModuleConfig() : undefined), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_42__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_42__.TranslateLoader,
      useFactory: _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_7__.createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_40__.HttpClient]
    }
  })],
  bootstrap: [_app__WEBPACK_IMPORTED_MODULE_8__.app],
  entryComponents: [
    //app
  ],
  providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_31__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_30__.SplashScreen, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_28__.WebView, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_29__.Device, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_32__.Keyboard, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_34__.Sanitizer,
    useClass: _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_43__.NgDompurifySanitizer
  }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__.Geolocation, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_26__.Camera, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_27__.File, _scripts_custom_GeoService_Impl_Google_Map__WEBPACK_IMPORTED_MODULE_10__.ExportedClass, _scripts_custom_GeoService_Impl__WEBPACK_IMPORTED_MODULE_11__.ExportedClass, _scripts_custom_Camera_Impl__WEBPACK_IMPORTED_MODULE_12__.ExportedClass, _scripts_custom_FileReadService_Impl_File_Read__WEBPACK_IMPORTED_MODULE_13__.ExportedClass, _scripts_custom_FileReadService_Impl__WEBPACK_IMPORTED_MODULE_14__.ExportedClass, _scripts_custom_Camera_Impl_Take_photo_and_upload_into_Appery_database__WEBPACK_IMPORTED_MODULE_15__.ExportedClass, _scripts_custom_Camera_Impl_Camera__WEBPACK_IMPORTED_MODULE_16__.ExportedClass, _scripts_services_SignupService__WEBPACK_IMPORTED_MODULE_17__.ExportedClass, _scripts_services_LogoutService__WEBPACK_IMPORTED_MODULE_18__.ExportedClass, _scripts_services_LoginService__WEBPACK_IMPORTED_MODULE_19__.ExportedClass, _scripts_services_RESTService__WEBPACK_IMPORTED_MODULE_20__.ExportedClass, _scripts_services_Photo_files_upload_service__WEBPACK_IMPORTED_MODULE_21__.ExportedClass, _scripts_services_recycleDB_files_upload_service__WEBPACK_IMPORTED_MODULE_22__.ExportedClass, _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_23__.ExportedClass, _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_24__.ExportedClass]
})], AppModule);


/***/ }),

/***/ 3485:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html?ngResource */ 962);
/* harmony import */ var _app_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss?ngResource */ 8647);
/* harmony import */ var _app_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/apperyio/apperyio_mapping_helper */ 2535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
var _a, _b, _c, _d, _e, _f, _g;











let app = class app {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  platform;
  statusBar;
  splashScreen;
  menuCtrl;
  deviceType = 'web-browser';
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
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, platform, statusBar, splashScreen, menuCtrl) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.platform = platform;
    this.statusBar = statusBar;
    this.splashScreen = splashScreen;
    this.menuCtrl = menuCtrl;
    this.aioChangeDetector = this.$aio_changeDetector;
    this.deviceType = window.cordova ? 'mobile' : 'web-browser';
    // do not remove this code unless you know what you do
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
  }];
};
app = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _app_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'app-root',
  styles: [(_app_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform) === "function" ? _d : Object, typeof (_e = typeof _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar !== "undefined" && _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar) === "function" ? _e : Object, typeof (_f = typeof _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen !== "undefined" && _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen) === "function" ? _f : Object, typeof (_g = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController) === "function" ? _g : Object])], app);


/***/ }),

/***/ 3053:
/*!****************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientModule": () => (/* binding */ AppClientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _appclient_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appclient_service */ 2004);
/* harmony import */ var _appclient_generic_wrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appclient_generic_wrapper_service */ 1015);




let AppClientModule = class AppClientModule {};
AppClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  providers: [_appclient_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService, _appclient_generic_wrapper_service__WEBPACK_IMPORTED_MODULE_1__.AppClientGenericWrapperService]
})], AppClientModule);


/***/ }),

/***/ 1015:
/*!*********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient_generic_wrapper_service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientGenericWrapperService": () => (/* binding */ AppClientGenericWrapperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appclient_service */ 2004);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config_service */ 4121);
var _a, _b;





let AppClientGenericWrapperService = class AppClientGenericWrapperService {
  appClientService;
  apperyioConfigService;
  constructor(appClientService, apperyioConfigService) {
    this.appClientService = appClientService;
    this.apperyioConfigService = apperyioConfigService;
  }
  goOnline(serviceRequest) {
    return this.appClientService.goOnline();
  }
  goOffline(serviceRequest) {
    return this.appClientService.goOffline();
  }
  setSessionToken(serviceRequest) {
    return this.appClientService.setSessionToken(serviceRequest.token);
  }
  revertLocalChanges(serviceRequest) {
    return this.appClientService.revertLocalChanges();
  }
  retrySync(serviceRequest) {
    return this.appClientService.retrySync();
  }
  resetFailedSync(serviceRequest) {
    return this.appClientService.resetFailedSync();
  }
  getState(serviceRequest) {
    return this.appClientService.getState();
  }
  getInstance(serviceRequest) {
    return this.appClientService.mssdk();
  }
  getConflict(serviceRequest) {
    return this.appClientService.getConflict();
  }
  resolveConflict(serviceRequest) {
    return this.appClientService.resolveConflict(serviceRequest.data, serviceRequest.action);
  }
  signup(serviceRequest) {
    return this.appClientService.signup(serviceRequest.username, serviceRequest.password, serviceRequest.options);
  }
  updateUser(serviceRequest) {
    return this.appClientService.updateUser(serviceRequest.username, serviceRequest.password, serviceRequest.options);
  }
  removeUser(serviceRequest) {
    return this.appClientService.removeUser();
  }
  loginAnonymously(serviceRequest) {
    return this.appClientService.loginAnonymously();
  }
  login(serviceRequest) {
    return this.appClientService.login(serviceRequest.username, serviceRequest.password, serviceRequest.token, serviceRequest.options);
  }
  logout(serviceRequest) {
    return this.appClientService.logout();
  }
  getCurrentUser(serviceRequest) {
    return this.appClientService.getCurrentUser();
  }
  invoke(request, serviceSettings) {
    var cached = lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(request.cached) ? serviceSettings.cached : request.cached;
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(cached)) {
      cached = cached.toLowerCase() === "true";
    }
    request.requestType = serviceSettings.requestType;
    request.responseType = serviceSettings.responseType;
    request.nativeBinaryResponse = serviceSettings.nativeBinaryResponse;
    return this.appClientService.invoke(serviceSettings.method, serviceSettings.url, request, cached);
  }
  deleteUndefinedFields(options) {
    for (var field in options) {
      if (options[field] === undefined) {
        delete options[field];
      }
    }
    return options;
  }
  deleteUndefinedFieldsDeep(obj) {
    let result = obj;
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(obj)) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(result, function (value, index) {
        result[index] = this.deleteUndefinedFieldsDeep(value);
      }.bind(this));
      lodash__WEBPACK_IMPORTED_MODULE_0___default().remove(result, (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined));
    } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(obj)) {
      result = lodash__WEBPACK_IMPORTED_MODULE_0___default().omitBy(obj, (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined));
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(result, function (value, key) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(value)) {
          result[key] = this.deleteUndefinedFieldsDeep(value);
        }
      }.bind(this));
    }
    return result;
  }
  list(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var findOptions = {};
      var findWhere = {};
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.where) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.where)) {
        findWhere = this.deleteUndefinedFieldsDeep(options.where);
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.offset) && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.offset)) {
        findOptions["offset"] = options.offset;
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.limit) && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.limit)) {
        findOptions["limit"] = options.limit;
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.sortBy)) {
        findOptions["sort"] = options.sortBy;
      }
      findOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["cached"])) {
        findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
      }
      findOptions["clearCache"] = options.clearCache;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["clearCache"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["clearCache"])) {
        findOptions["clearCache"] = findOptions["clearCache"].toLowerCase() === "true";
      }
      return dao.find(findWhere, findOptions).then(function (data) {
        return data;
      });
    }.bind(this));
  }
  count(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var findOptions = {};
      var findWhere = {};
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.where) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.where)) {
        findWhere = this.deleteUndefinedFieldsDeep(options.where);
      }
      findOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["cached"])) {
        findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
      }
      return dao.getCount(findWhere, findOptions).then(function (data) {
        return data;
      });
    }.bind(this));
  }
  fetch(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.fetch();
    });
  }
  read(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var operationOptions = {};
      operationOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(operationOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(operationOptions["cached"])) {
        operationOptions["cached"] = operationOptions["cached"].toLowerCase() === "true";
      }
      return dao.get(options[config.primaryKeyName], operationOptions).then(function (data) {
        return data;
      });
    });
  }
  post(options, config) {
    this.deleteUndefinedFields(options);
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.create(options).then(function (data) {
        return data;
      });
    });
  }
  put(options, config) {
    this.deleteUndefinedFields(options);
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.update(options[config.primaryKeyName], options).then(function (data) {
        return data;
      });
    });
  }
  del(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.delete(options[config.primaryKeyName], {}, options).then(function (data) {
        return data;
      });
    });
  }
  clear(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.clearCache();
    });
  }
  ethSetPrivateKey(serviceRequest) {
    return this.appClientService.ethSetPrivateKey(serviceRequest.privateKey, serviceRequest.password);
  }
  ethCall(serviceRequest) {
    return this.appClientService.ethCall(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethContractSendTransaction(serviceRequest) {
    return this.appClientService.ethContractSendTransaction(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetBalance(serviceRequest) {
    return this.appClientService.ethGetBalance(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethTransferEther(serviceRequest) {
    return this.appClientService.ethTransferEther(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetTransaction(serviceRequest) {
    return this.appClientService.ethGetTransaction(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetTransactionReceipt(serviceRequest) {
    return this.appClientService.ethGetTransactionReceipt(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetAccount(serviceRequest) {
    return this.appClientService.ethGetAccount();
  }
  ethCreateAccount(serviceRequest) {
    return this.appClientService.ethCreateAccount(serviceRequest.password);
  }
  ethExportPrivateKey(serviceRequest) {
    return this.appClientService.ethExportPrivateKey(serviceRequest.password);
  }
  static ctorParameters = () => [{
    type: _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService
  }];
};
AppClientGenericWrapperService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService !== "undefined" && _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService) === "function" ? _a : Object, typeof (_b = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService) === "function" ? _b : Object])], AppClientGenericWrapperService);


/***/ }),

/***/ 2004:
/*!*****************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient_service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientService": () => (/* binding */ AppClientService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config_service */ 4121);

var _a;




let AppClientService = class AppClientService {
  apperyioConfigService;
  appClient;
  constructor(apperyioConfigService) {
    this.apperyioConfigService = apperyioConfigService;
  }
  loadAppClient() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.appClient) {
        return _this.appClient;
      }
      const {
        default: appClient
      } = yield import( /*webpackIgnore: true*/'./app_client.js');
      _this.appClient = appClient;
      return _this.appClient;
    })();
  }
  mssdk() {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadAppClient();
      var AppClientInitOptions = {
        "domain": _this2.apperyioConfigService.get("AppClientSettings.domain"),
        "apiExpressAexDomain": _this2.apperyioConfigService.get("AppClientSettings.aexDomain"),
        "apiKey": _this2.apperyioConfigService.get("AppClientSettings.apiKey"),
        "currentState": _this2.apperyioConfigService.get("AppClientSettings.currentState"),
        "handleNetworkState": _this2.apperyioConfigService.get("AppClientSettings.handleNetworkState"),
        "cacheTimeout": _this2.apperyioConfigService.get("AppClientSettings.cacheTimeout"),
        "requestTimeout": _this2.apperyioConfigService.get("AppClientSettings.requestTimeout"),
        "autoLogin": _this2.apperyioConfigService.get("AppClientSettings.autoLogin"),
        "autoSync": _this2.apperyioConfigService.get("AppClientSettings.autoSync"),
        "clearOnLogout": _this2.apperyioConfigService.get("AppClientSettings.clearOnLogout"),
        "backendTarget": _this2.apperyioConfigService.get("AppClientSettings.backendTarget"),
        "isDataValidationEnabled": false
      };
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.handleNetworkState) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.handleNetworkState)) {
        AppClientInitOptions.handleNetworkState = AppClientInitOptions.handleNetworkState.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.autoLogin) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.autoLogin)) {
        AppClientInitOptions.autoLogin = AppClientInitOptions.autoLogin.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.autoSync) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.autoSync)) {
        AppClientInitOptions.autoSync = AppClientInitOptions.autoSync.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.clearOnLogout) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.clearOnLogout)) {
        AppClientInitOptions.clearOnLogout = AppClientInitOptions.clearOnLogout.toLowerCase() === "true";
      }
      return _this2.appClient.init(AppClientInitOptions);
    })();
  }
  setStaticMetadata(metadata) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.loadAppClient();
      let result;
      result = _this3.appClient.setProjectMetadata(metadata);
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(result)) {
        return result.catch(e => Promise.resolve({
          status: "rejected",
          data: e
        }));
      } else {
        return Promise.resolve();
      }
    })();
  }
  instance() {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.loadAppClient();
      return Promise.resolve(_this4.appClient);
    })();
  }
  invokeAfterInit(func) {
    var _this5 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.loadAppClient();
      return _this5.mssdk()["catch"](function () {}).then(func.bind(_this5));
    })();
  }
  invokeAfterSuccessInit(func) {
    return this.mssdk().then(func);
  }
  invokeAppClientMethod(...params) {
    var _this6 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.loadAppClient();
      var promise;
      var method = params[0];
      var methodArguments = lodash__WEBPACK_IMPORTED_MODULE_1___default().tail(params);
      var appClientMethodExecutor = function () {
        return this.appClient[method].apply(this.appClient, methodArguments);
      }.bind(_this6);
      if (!_this6.appClient.isInitialized()) {
        promise = _this6.invokeAfterInit(appClientMethodExecutor);
      } else {
        promise = appClientMethodExecutor();
      }
      return promise;
    })();
  }
  goOnline() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.goOnline();
    });
  }
  goOffline() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.goOffline();
    });
  }
  setSessionToken(sessionToken) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.setSessionToken(sessionToken);
    });
  }
  revertLocalChanges() {
    return this.invokeAppClientMethod("revertLocalChanges");
  }
  retrySync() {
    return this.invokeAppClientMethod("retrySync");
  }
  resetFailedSync() {
    return this.invokeAppClientMethod("resetFailedSync");
  }
  getState() {
    return this.invokeAfterInit(function () {
      return {
        state: this.appClient.state
      };
    });
  }
  getConflict() {
    return this.invokeAppClientMethod("getConflict");
  }
  resolveConflict(data, action) {
    return this.invokeAppClientMethod("resolveConflict", data, action);
  }
  signup(username, password, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.signup(username, password, options);
    });
  }
  updateUser(username, password, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.updateUser(username, password, options);
    });
  }
  removeUser() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.removeUser();
    });
  }
  loginAnonymously() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.loginAnonymously();
    });
  }
  login(username, password, token, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.login(username, password, token, options);
    });
  }
  logout() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.logout();
    });
  }
  getCurrentUser() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.getCurrentUser();
    });
  }
  invoke(method, path, options, cached) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.invoke(method, path, options, cached);
    });
  }
  ethSetPrivateKey(privateKey, password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.setEthPrivateKey(privateKey, password);
    });
  }
  ethCall(methodName, options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethContractCall(methodName, options, settings);
    });
  }
  ethContractSendTransaction(methodName, options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethContractSendTransaction(methodName, options, settings);
    });
  }
  ethGetBalance(options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetBalance(options, settings);
    });
  }
  ethTransferEther(options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethTransferEther(options, settings);
    });
  }
  ethGetTransaction(hash, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetTransaction(hash, settings);
    });
  }
  ethGetTransactionReceipt(hash, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetTransactionReceipt(hash, settings);
    });
  }
  ethGetAccount() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetAccount();
    });
  }
  ethCreateAccount(password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethCreateAccount(password);
    });
  }
  ethExportPrivateKey(password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethExportPrivateKey(password);
    });
  }
  getModelDao(model) {
    return this.mssdk().then(function (success) {
      return success.dao(model);
    });
  }
  static ctorParameters = () => [{
    type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService
  }];
};
AppClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService) === "function" ? _a : Object])], AppClientService);


/***/ }),

/***/ 6890:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioModule": () => (/* binding */ ApperyioModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _appclient_appclient_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appclient/appclient.module */ 3053);
/* harmony import */ var _apperyio_restservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apperyio_restservice */ 2734);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config_service */ 4121);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entityapi_service */ 5877);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_helper */ 7845);
/* harmony import */ var _apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_mapping_helper */ 2535);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_data_helper */ 1265);
/* harmony import */ var _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apperyio_native_helper */ 6272);
/* harmony import */ var _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apperyio_preload_helper */ 2892);
/* harmony import */ var _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apperyio_theme_helper */ 9084);
/* harmony import */ var _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apperyio_social_login_helper */ 7526);
/* harmony import */ var _apperyio_push_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apperyio_push_helper */ 1277);
/* harmony import */ var _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apperyio_hot_push_helper */ 4798);
/* harmony import */ var _modal_screens_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal_screens_service */ 3905);

















let ApperyioModule = class ApperyioModule {};
ApperyioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientJsonpModule, _appclient_appclient_module__WEBPACK_IMPORTED_MODULE_0__.AppClientModule],
  providers: [_apperyio_restservice__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService, _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService, _entityapi_service__WEBPACK_IMPORTED_MODULE_3__.EntityApiService, _apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService, _apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService, _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioDataHelperService, _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioNativeHelperService, _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_8__.ApperyioPreloadHelperService, _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_9__.ApperyioThemeHelperService, _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__.ApperyioSocialLoginHelperService, _apperyio_push_helper__WEBPACK_IMPORTED_MODULE_11__.ApperyioPushHelperService, _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_12__.ApperyioHotPushHelperService, _modal_screens_service__WEBPACK_IMPORTED_MODULE_13__.ModalScreensService]
})], ApperyioModule);


/***/ }),

/***/ 1897:
/*!**********************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioConfigService": () => (/* reexport safe */ _config_service__WEBPACK_IMPORTED_MODULE_1__.ApperyioConfigService),
/* harmony export */   "ApperyioRestService": () => (/* reexport safe */ _apperyio_restservice__WEBPACK_IMPORTED_MODULE_0__.ApperyioRestService),
/* harmony export */   "EntityApiService": () => (/* reexport safe */ _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService)
/* harmony export */ });
/* harmony import */ var _apperyio_restservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apperyio_restservice */ 2734);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config_service */ 4121);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entityapi_service */ 5877);





/***/ }),

/***/ 1265:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_data_helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioDataHelperService": () => (/* binding */ ApperyioDataHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 4274);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);

var _a;






let ApperyioDataHelperService = class ApperyioDataHelperService {
  storage;
  constructor(storage) {
    this.storage = storage;
    this.setDefValues();
  }
  _variables = {};
  initialized = false;
  initializedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  setDefValues() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let keys;
      const variables = _models__WEBPACK_IMPORTED_MODULE_1__._aioDefStorageValues.variables;
      keys = Object.keys(variables);
      keys.forEach(key => {
        _this.setVariable(key, lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(variables[key]));
      });
      const storages = _models__WEBPACK_IMPORTED_MODULE_1__._aioDefStorageValues.storages;
      keys = Object.keys(storages);
      const finishInit = () => {
        _this.initialized = true;
        _this.initializedSubject.next();
        _this.initializedSubject.complete();
      };
      if (keys.length) {
        _this.storage.keys().then(storageKeys => {
          let setPromises = [];
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (storageKeys.indexOf(key) === -1) {
              setPromises.push(_this.setStorage(key, storages[key]));
            }
          }
          Promise.all(setPromises).then(() => {
            finishInit();
          }).catch(() => {
            finishInit();
          });
        }).catch(() => {
          finishInit();
        });
      } else {
        finishInit();
      }
    })();
  }
  setVariable(varName, value) {
    this._variables[varName] = value;
  }
  getVariable(varName) {
    return this._variables[varName];
  }
  setStorage(varName, value) {
    return this.storage.set(varName, value);
  }
  _getStorage(varName) {
    return this.storage.get(varName);
  }
  getStorage(varName) {
    if (this.initialized) {
      return this._getStorage(varName);
    } else {
      return new Promise(res => {
        this.initializedSubject.subscribe(() => {
          this.getStorage(varName).then(val => res(val));
        });
      });
    }
  }
  removeStorage(varName) {
    return this.storage.remove(varName);
  }
  clearStorage() {
    return this.storage.clear();
  }
  getStorageKeys() {
    return this.storage.keys();
  }
  static ctorParameters = () => [{
    type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
  }];
};
ApperyioDataHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage !== "undefined" && _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage) === "function" ? _a : Object])], ApperyioDataHelperService);

;

/***/ }),

/***/ 7845:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_helper.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioHelperService": () => (/* binding */ ApperyioHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entityapi_service */ 5877);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apperyio_data_helper */ 1265);
/* harmony import */ var _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_native_helper */ 6272);
/* harmony import */ var _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_preload_helper */ 2892);
/* harmony import */ var _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_theme_helper */ 9084);
/* harmony import */ var _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apperyio_hot_push_helper */ 4798);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config_service */ 4121);
/* harmony import */ var _modal_screens_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal_screens_service */ 3905);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apperyio_social_login_helper */ 7526);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

















let ApperyioHelperService = class ApperyioHelperService {
  injector;
  router;
  entityAPI;
  modalScreensSrv;
  sanitizer;
  data;
  native;
  preload;
  theme;
  user;
  hotPush;
  platform;
  config;
  translate;
  servicesMap;
  _services = {};
  controllers = {};
  projectInfo = _constants__WEBPACK_IMPORTED_MODULE_1__.projectInfo;
  vars = {};
  constructor(injector, router, entityAPI, modalScreensSrv, sanitizer, data, native, preload, theme, user, hotPush, platform, config, translate) {
    this.injector = injector;
    this.router = router;
    this.entityAPI = entityAPI;
    this.modalScreensSrv = modalScreensSrv;
    this.sanitizer = sanitizer;
    this.data = data;
    this.native = native;
    this.preload = preload;
    this.theme = theme;
    this.user = user;
    this.hotPush = hotPush;
    this.platform = platform;
    this.config = config;
    this.translate = translate;
    this._addSourcesErrorCheck();
    this._disableDefaultSanitizer();
    window._ = (lodash__WEBPACK_IMPORTED_MODULE_11___default());
  }
  /**
   * for preview add check when preview sources are unavailable (when app was changed and rebuild is needed)
   */
  _addSourcesErrorCheck() {
    if (window.location.href.includes("appery.io/app/view/")) {
      // it's preview
      var errorFn = console.error;
      var confirmShown = false;
      console.error = function (err) {
        var isChunkLoadError = false;
        for (var i = 0; i < arguments.length; i++) {
          var err = arguments[i];
          if (err && (err.name === "ChunkLoadError" || err.message && err.message.indexOf && (/Loading chunk ?.+ failed/.test(err.message) || err.message.indexOf("ChunkLoadError") !== -1))) {
            isChunkLoadError = true;
            break;
          }
        }
        if (isChunkLoadError) {
          if (!confirmShown) {
            confirmShown = true;
            if (window.confirm("Sources loading failed. Probably app was changed. Reload app?")) {
              confirmShown = true;
              window.location.reload();
            } else {
              setTimeout(() => confirmShown = false, 100);
            }
          }
        }
        errorFn.apply(console, arguments);
      };
    }
  }
  /**
   * DompurifySanitizer is used in the project
   */
  _disableDefaultSanitizer() {
    this.sanitizer.bypassSecurityTrustResourceUrl = val => val;
  }
  _importServices() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let services = yield __webpack_require__.e(/*! import() */ "src_app_scripts_services_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../services */ 7222));
      _this.servicesMap = services.services;
    })();
  }
  // router/navigation
  navigateTo(...options) {
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.routes[options[0]]) {
      let url = _constants__WEBPACK_IMPORTED_MODULE_1__.routes[options[0]];
      if (url[0] !== "." && url[0] !== "/") {
        url = "/" + url;
      }
      let optionalIndex = url.indexOf("/:");
      if (optionalIndex !== -1) {
        url = url.substring(0, optionalIndex);
      }
      options[0] = url;
    }
    return this.router.navigate(options);
  }
  getRouteParam(paramName) {
    return this.router.routerState.snapshot.root.firstChild.params[paramName];
  }
  // services
  getService(name) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.servicesMap) {
        yield _this2._importServices();
      }
      if (!_this2._services[name] && _this2.servicesMap[name]) {
        _this2._services[name] = _this2.injector.get(_this2.servicesMap[name]);
      }
      return _this2._services[name];
    })();
  }
  // controllers
  getController(name) {
    if (this.controllers[name]) {
      return this.controllers[name];
    }
    switch (name) {
      case "ActionSheetController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController);
        break;
      case "AlertController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController);
        break;
      case "PickerController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PickerController);
        break;
      case "MenuController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController);
        break;
      case "ModalController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController);
        break;
      case "PopoverController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController);
        break;
      case "LoadingController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController);
        break;
      case "ToastController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController);
        break;
      default:
        console.log(`ApperyioService. Controller ${name} not supported`);
        return;
    }
    return this.controllers[name];
  }
  // modal
  showModal(screenName, options) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!options) {
        options = {};
      }
      if (!screenName && !options.component) {
        console.log("ApperyioService showModal method: screenName missed");
        return;
      }
      if (!options.component && screenName) {
        options.component = yield _this3.modalScreensSrv.getModalScreen(screenName);
      }
      if (!options.component) {
        console.log("ApperyioService showModal method: nonexistent modal component");
        return;
      }
      const modalController = _this3.getController("ModalController");
      const modal = yield modalController.create(options);
      return modal;
    })();
  }
  entityAPIGet(name, defaults, default_undefined, skip_empty_objects) {
    return this.entityAPI.get(name, defaults, default_undefined, skip_empty_objects);
  }
  execDataService(context, serviceName, cb) {
    let func = context.$aio_dataServices[serviceName];
    if (func) {
      context[func](cb);
    } else {
      console.log("Service \"" + serviceName + "\" not found");
    }
  }
  getGSNameByImpl(srv) {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!srv) return;
      let srvClass = srv.constructor || srv;
      if (!_this4.servicesMap) {
        yield _this4._importServices();
      }
      if (_this4.servicesMap) {
        let keys = Object.keys(_this4.servicesMap);
        for (let i = 0; i < keys.length; i++) {
          if (_this4.servicesMap[keys[i]] === srvClass) {
            return keys[i];
          }
        }
      }
    })();
  }
  isAndroid() {
    return this.platform.is('android');
  }
  isIOS() {
    return this.platform.is('ios');
  }
  isMobile() {
    return this.platform.is('mobile');
  }
  isBrowser() {
    return !this.isMobile();
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
  }, {
    type: _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService
  }, {
    type: _modal_screens_service__WEBPACK_IMPORTED_MODULE_9__.ModalScreensService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer
  }, {
    type: _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService
  }, {
    type: _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService
  }, {
    type: _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService
  }, {
    type: _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService
  }, {
    type: _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__.ApperyioSocialLoginHelperService
  }, {
    type: _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_8__.ApperyioConfigService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
  }];
};
ApperyioHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router) === "function" ? _b : Object, typeof (_c = typeof _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService !== "undefined" && _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService) === "function" ? _c : Object, typeof (_d = typeof _modal_screens_service__WEBPACK_IMPORTED_MODULE_9__.ModalScreensService !== "undefined" && _modal_screens_service__WEBPACK_IMPORTED_MODULE_9__.ModalScreensService) === "function" ? _d : Object, typeof (_e = typeof _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer !== "undefined" && _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer) === "function" ? _e : Object, typeof (_f = typeof _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService !== "undefined" && _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService) === "function" ? _f : Object, typeof (_g = typeof _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService !== "undefined" && _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService) === "function" ? _g : Object, typeof (_h = typeof _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService !== "undefined" && _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService) === "function" ? _h : Object, typeof (_j = typeof _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService !== "undefined" && _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService) === "function" ? _j : Object, typeof (_k = typeof _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__.ApperyioSocialLoginHelperService !== "undefined" && _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__.ApperyioSocialLoginHelperService) === "function" ? _k : Object, typeof (_l = typeof _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService !== "undefined" && _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService) === "function" ? _l : Object, typeof (_m = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform) === "function" ? _m : Object, typeof (_o = typeof _config_service__WEBPACK_IMPORTED_MODULE_8__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_8__.ApperyioConfigService) === "function" ? _o : Object, typeof (_p = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService) === "function" ? _p : Object])], ApperyioHelperService);

;

/***/ }),

/***/ 4798:
/*!**************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_hot_push_helper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioHotPushHelperService": () => (/* binding */ ApperyioHotPushHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);

var _a, _b;





let ApperyioHotPushHelperService = class ApperyioHotPushHelperService {
  http;
  platform;
  projectInfo = _constants__WEBPACK_IMPORTED_MODULE_1__.projectInfo;
  constructor(http, platform) {
    this.http = http;
    this.platform = platform;
  }
  generateErrorMessage(error) {
    console.error('Error', error);
    return {
      status: "Error",
      message: error
    };
  }
  generateSuccessMessage(data) {
    let message = {
      status: "Success"
    };
    if (data) {
      console.info('Success', data);
      message.data = data;
    } else {
      console.info('Success');
    }
    return message;
  }
  getHotcodeUrl() {
    const platformGuid = this.projectInfo.guid;
    const platformMode = this.platform.is('android') ? 'android' : 'ios';
    return `https://upd.alpha.dev.appery.io/hotcode/${platformGuid}/${platformMode}/chcp.json`;
  }
  isCordovaUsed() {
    return window.cordova && window.chcp;
  }
  getAutoupdateVersion() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this.isCordovaUsed()) {
          yield window.chcp.getVersionInfo((error, data) => {
            result = error ? _this.generateErrorMessage(error) : _this.generateSuccessMessage(data);
          });
          return result;
        }
        return _this.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this.generateErrorMessage(error);
      }
    })();
  }
  getAutoupdateServerVersionSync() {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this2.isCordovaUsed()) {
          const response = yield _this2.http.get(_this2.getHotcodeUrl()).toPromise();
          return _this2.generateSuccessMessage(response);
        }
        return _this2.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this2.generateErrorMessage(error);
      }
    })();
  }
  autoupdateDownloadLatestVersion() {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this3.isCordovaUsed()) {
          const options = {
            'config-file': _this3.getHotcodeUrl()
          };
          yield window.chcp.fetchUpdate((error, data) => {
            result = error ? _this3.generateErrorMessage(error) : _this3.generateSuccessMessage(data);
          }, options);
          return result;
        }
        return _this3.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this3.generateErrorMessage(error);
      }
    })();
  }
  autoupdateInstallLatestVersion() {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this4.isCordovaUsed()) {
          const options = {
            'config-file': _this4.getHotcodeUrl()
          };
          yield window.chcp.installUpdate(error => {
            result = error ? _this4.generateErrorMessage(error) : _this4.generateSuccessMessage();
          }, options);
          return result;
        }
        return _this4.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this4.generateErrorMessage(error);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
  }];
};
ApperyioHotPushHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform) === "function" ? _b : Object])], ApperyioHotPushHelperService);

;

/***/ }),

/***/ 2535:
/*!*************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_mapping_helper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioMappingHelperService": () => (/* binding */ ApperyioMappingHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_data_helper */ 1265);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var _a;





let ApperyioMappingHelperService = class ApperyioMappingHelperService {
  $aio_dataHelper;
  constructor($aio_dataHelper) {
    this.$aio_dataHelper = $aio_dataHelper;
  }
  get IGNORED_VALUE() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.IGNORED_VALUE;
  }
  /**
   * element - ViewChild element
   * elementType - componentBeanName ("ion4button", "ion4input", "ion4card"...)
   * propertyName - property name ("value", "text", "label")
   **/
  getComponentPropValue(variableName, elementType, propertyName) {
    function getInnerText(element) {
      var el = element.el || element.nativeElement;
      if (el) {
        return Array.prototype.reduce.call(el.childNodes, (a, b) => {
          return a + (b.nodeType === b.TEXT_NODE ? b.textContent.trim() : '');
        }, '');
      }
      return '';
    }
    // get the element from a variable of the screen component
    let element = null;
    if (variableName) {
      element = this[variableName] || this[variableName + "_el"] || null;
    }
    if (!element) {
      return;
    }
    if (!propertyName) {
      return element;
    }
    if (propertyName === "className" || propertyName.endsWith(".className")) {
      var classList;
      if (element) {
        if (element.el) {
          // for Ionic 4 components
          classList = element.el.classList;
        } else if (element.nativeElement) {
          // for native html components
          classList = element.nativeElement.classList;
        } else if (element._elem && element._elem.nativeElement) {
          // for Google Map component
          classList = element._elem.nativeElement.classList;
        } else if (element.constructor && (element.constructor.name === "NgForm" || element.constructor.name === "NgModel")) {
          // for Angular form and controls
          element = this[variableName + "_el"];
          if (element) {
            classList = element.nativeElement.classList;
          }
        }
      }
      return classList ? classList.toString() : "";
    }
    let propValue;
    switch (elementType) {
      case "ionic5button":
        switch (propertyName) {
          case "text":
            propValue = element.el.textContent.trim();
            break;
          case "icon.name":
            propValue = element && element.name ? element.name : "";
            break;
          case "icon.customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5carditem":
        propValue = getInnerText(element);
        break;
      case "ionic5carditemtitle":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5googlemap":
        propValue = element[propertyName.split('.')[1]].toString();
        break;
      case "ionic5googlemapmarker":
        propValue = element.nativeElement.getAttribute('ng-reflect-' + propertyName.split('.')[1]);
        break;
      case "ionic5html":
        propValue = element.nativeElement.innerHTML;
        break;
      case "ionic5icon":
        switch (propertyName) {
          case "customIcon":
            propValue = element.src ? element.src : "";
            break;
          case "style":
            propValue = element.name ? element.name : "";
            break;
        }
        break;
      case "ionic5image":
        element = element.el || element.nativeElement || null;
        switch (propertyName) {
          case "altText":
            propValue = element && element.alt ? element.alt : "";
            break;
          case "imageSrc":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5input":
        switch (propertyName) {
          case "value":
            if (element.type === "file") {
              propValue = element.multiple ? element.el.children[0].files : element.el.children[0].files[0];
            } else {
              propValue = element.value || "";
            }
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
          case "icon.name":
            propValue = element && element.name ? element.name : "";
            break;
          case "icon.customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5textarea":
        switch (propertyName) {
          case "value":
            propValue = element.value || "";
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
          case "icon.name":
            propValue = element && element.name ? element.name : "";
            break;
          case "icon.customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5itemlabel":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5select":
        switch (propertyName) {
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5selectitem":
        switch (propertyName) {
          case "value":
            propValue = element.value || "";
            break;
          case "selectedText":
            propValue = element.selectedText || "";
            break;
        }
        break;
      case "ionic5selectoption":
        switch (propertyName) {
          case "selected":
            propValue = element.selected;
            break;
          case "text":
            propValue = element.el.textContent.trim();
            break;
          case "value":
            propValue = element.value;
            break;
        }
        break;
      case "ionic5spinner":
        propValue = element.name ? element.name : "";
        break;
      case "ionic5text":
        switch (propertyName) {
          case "wrapper":
            propValue = element.el.tagName;
            break;
          case "text":
            propValue = getInnerText(element);
            break;
        }
        break;
      case "ionic5search":
        propValue = element[propertyName];
        break;
      case "ionic5radiobutton":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
          case "checked":
            propValue = element.checked;
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5checkbox":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
          case "checked":
            propValue = element.checked;
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5toolbartitle":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5form":
        switch (propertyName) {
          case "formData":
            propValue = element && element.value ? element.value : {};
            break;
          case "isValid":
            propValue = element.valid;
            break;
          case "isInvalid":
            propValue = element.invalid;
            break;
        }
        break;
      case "ionic5radiogroup":
        propValue = element ? element.value : '';
        break;
      case "ionic5radiogroupheader":
        propValue = element ? element.el.textContent.trim() : '';
        break;
      case "ionic5datetime":
        switch (propertyName) {
          case "value":
            propValue = element && element.value ? element.value : "";
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5datatable":
        switch (propertyName) {
          case "count":
          case "offset":
            propValue = element && element[propertyName] ? element[propertyName] : 0;
            break;
          case "limit":
            propValue = element && element.limit ? element.limit : undefined;
            break;
          case "rows":
            propValue = element && element.rows ? element.rows : [];
            break;
        }
        break;
      case "ionic5link":
        element = element.el || element.nativeElement || null;
        switch (propertyName) {
          case "href":
            propValue = element ? element.href : "";
            break;
          case "text":
            propValue = element ? element.textContent.trim() : "";
            break;
        }
        break;
      case "listitemoption":
        {
          switch (propertyName) {
            case "icon.name":
              propValue = element && element.name ? element.name : "";
              break;
            case "icon.customIcon":
              propValue = element && element.src ? element.src : "";
              break;
          }
        }
        break;
      case "ionic5toggle":
        switch (propertyName) {
          case "checked":
            propValue = element.checked;
            break;
          case "value":
            propValue = element.value;
            break;
          case "ion4Label.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5range":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
          case "leftLabel.text":
          case "rightLabel.text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
          case "leftIcon.name":
          case "rightIcon.name":
            propValue = element && element.name ? element.name : "";
            break;
          case "leftIcon.customIcon":
          case "rightIcon.customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5filepicker":
        switch (propertyName) {
          case "value":
            propValue = element.getValue();
            break;
        }
        break;
      case "ionic5card":
      case "ionic5googlemapwindow":
      case "ionic5grid":
      case "ionic5gridcell":
      case "ionic5gridrow":
      case "indexscreen":
      case "ionic5menu":
      case "ionic5menucontent":
      case "ionic5menufooter":
      case "ionic5menuheader":
      case "ionic5splitpane":
      case "ionic5list":
      case "ionic5listitem":
      case "listitemoptions":
      case "ionic5content":
      case "ionic5footer":
      case "ionic5header":
      case "ionic5tabbar":
      case "ionic5tabbutton":
      case "ionic5tabs":
      case "screen":
      case "ionic5toolbar":
      case "ionic5toolbarbuttons":
        break;
    }
    return propValue;
  }
  getDataTableMapping(data, property, defaultValue) {
    const nestedObject = property.indexOf('.') != -1 ? property.split('.') : '',
      dataItem = nestedObject ? data[nestedObject[0]][nestedObject[1]] : data[property];
    if (data.isRowsMapping) {
      return dataItem;
    }
    if (defaultValue) {
      return defaultValue;
    }
    return dataItem;
  }
  isPropertyInMapping(mappingData, currentItem, property) {
    return property in (currentItem || mappingData || {});
  }
  getMapping(_mappingData, _currentItem, property, defaultValue, isVariable, isSelected) {
    const mappingData = _currentItem || _mappingData;
    let mappingValue;
    if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(_currentItem) && property in _currentItem) {
      mappingValue = lodash__WEBPACK_IMPORTED_MODULE_3___default().isFunction(_currentItem[property]) ? _currentItem[property]() : _currentItem[property];
      return isSelected ? !!mappingValue : mappingValue;
    } else {
      if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(_mappingData) && property in _mappingData) {
        mappingValue = lodash__WEBPACK_IMPORTED_MODULE_3___default().isFunction(_mappingData[property]) ? _mappingData[property]() : _mappingData[property];
        return isSelected ? !!mappingValue : mappingValue;
      }
    }
    if (mappingData && _currentItem) {
      return isSelected ? !!_currentItem : _currentItem;
    }
    if (defaultValue !== "" && defaultValue !== undefined && defaultValue !== null || isVariable) {
      if (typeof defaultValue == 'string') {
        return defaultValue.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
      }
      return defaultValue;
    }
    if (isSelected) {
      return false;
    }
    return '';
  }
  _getSubdata(data, path) {
    if (data && path && path.length) {
      try {
        let res = data;
        for (var i = 0; i < path.length; i++) {
          if (res) {
            res = res[path[i]];
          } else {
            return undefined;
          }
        }
        return res;
      } catch (e) {
        return undefined;
      }
    }
    return data;
  }
  getSubdata(data, path, defaultValue) {
    var value = this._getSubdata(data, path);
    if (value === null && defaultValue !== undefined) {
      return defaultValue;
    }
    return value !== undefined ? value : defaultValue;
  }
  getStorageValue(varName, path) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield _this.$aio_dataHelper.getStorage(varName);
      return _this._getSubdata(data, path);
    })();
  }
  getServiceDataValue(varName, path) {
    var data = this.$aio_dataHelper.getVariable(varName);
    return this._getSubdata(data, path);
  }
  _updateData(data, path, value) {
    if (path && path.length) {
      if (!data || typeof data !== "object") {
        data = {};
      }
      if (path.length == 1) {
        data[path[0]] = value;
      } else {
        let res = data;
        for (var i = 0; i < path.length - 1; i++) {
          if (!res[path[i]] || typeof res[path[i]] !== "object") {
            if (Number.isInteger(path[i + 1])) {
              res[path[i]] = [];
            } else {
              res[path[i]] = {};
            }
          }
          res = res[path[i]];
        }
        res[path[path.length - 1]] = value;
      }
    } else {
      data = value;
    }
    return data;
  }
  updateData(data, path, value) {
    return this._updateData(data, path, value);
  }
  setStorageValue(varName, path, value) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield _this2.$aio_dataHelper.getStorage(varName);
      yield _this2.$aio_dataHelper.setStorage(varName, _this2._updateData(data, path, value));
    })();
  }
  setServiceDataValue(varName, path, value) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = _this3.$aio_dataHelper.getVariable(varName);
      _this3.$aio_dataHelper.setVariable(varName, _this3._updateData(data, path, value));
    })();
  }
  static ctorParameters = () => [{
    type: _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService
  }];
};
ApperyioMappingHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService !== "undefined" && _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService) === "function" ? _a : Object])], ApperyioMappingHelperService);

;

/***/ }),

/***/ 6272:
/*!************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_native_helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioNativeHelperService": () => (/* binding */ ApperyioNativeHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 2027);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/device/ngx */ 4344);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 9056);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);
var _a, _b, _c, _d, _e, _f, _g, _h;










let ApperyioNativeHelperService = class ApperyioNativeHelperService {
  webView;
  device;
  splashScreen;
  statusBar;
  keyboard;
  geolocation;
  camera;
  file;
  audioinput;
  constructor(webView, device, splashScreen, statusBar, keyboard, geolocation, camera, file) {
    this.webView = webView;
    this.device = device;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.keyboard = keyboard;
    this.geolocation = geolocation;
    this.camera = camera;
    this.file = file;
    this.audioinput = window.audioinput;
  }
  static ctorParameters = () => [{
    type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView
  }, {
    type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
  }, {
    type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard
  }, {
    type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera
  }, {
    type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
  }];
};
ApperyioNativeHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView !== "undefined" && _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView) === "function" ? _a : Object, typeof (_b = typeof _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device !== "undefined" && _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen !== "undefined" && _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen) === "function" ? _c : Object, typeof (_d = typeof _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar !== "undefined" && _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar) === "function" ? _d : Object, typeof (_e = typeof _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard !== "undefined" && _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard) === "function" ? _e : Object, typeof (_f = typeof _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation !== "undefined" && _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation) === "function" ? _f : Object, typeof (_g = typeof _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera !== "undefined" && _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera) === "function" ? _g : Object, typeof (_h = typeof _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File !== "undefined" && _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File) === "function" ? _h : Object])], ApperyioNativeHelperService);

;

/***/ }),

/***/ 2892:
/*!*************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_preload_helper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioPreloadHelperService": () => (/* binding */ ApperyioPreloadHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ApperyioPreloadHelperService = class ApperyioPreloadHelperService {
  _loadedComponents = [];
  _loadedIcons = [];
  _hiddenDiv;
  createHiddenDiv() {
    if (!this._hiddenDiv) {
      this._hiddenDiv = document.createElement("div");
      this._hiddenDiv.style.display = "none";
      document.body.appendChild(this._hiddenDiv);
    }
  }
  components(components) {
    if (!this._hiddenDiv) {
      this.createHiddenDiv();
    }
    if (components && components.length) {
      let extraComponents = [];
      components.forEach(component => {
        switch (component) {
          case "ion-alert":
          case "ion-modal":
            extraComponents.push("ion-backdrop");
            break;
          case "ion-select":
            extraComponents = extraComponents.concat(["ion-alert", "ion-backdrop"]);
            break;
          case "ion-loading":
            extraComponents = extraComponents.concat(["ion-spinner", "ion-backdrop"]);
            break;
        }
      });
      components = [...components, ...extraComponents];
      components.forEach(component => {
        if (this._loadedComponents.indexOf(component) === -1) {
          let newComponent = document.createElement(component);
          this._hiddenDiv.appendChild(newComponent);
          setTimeout(() => {
            this._hiddenDiv.removeChild(newComponent);
          }, 1);
          this._loadedComponents.push(component);
        }
      });
    }
  }
  icons(icons) {
    if (!this._hiddenDiv) {
      this.createHiddenDiv();
    }
    if (icons && icons.length) {
      icons.forEach(icon => {
        if (this._loadedIcons.indexOf(icon) === -1) {
          let newComponent = document.createElement("ion-icon");
          newComponent.name = icon;
          this._hiddenDiv.appendChild(newComponent);
          setTimeout(() => {
            this._hiddenDiv.removeChild(newComponent);
          }, 1);
          this._loadedIcons.push(icon);
        }
      });
    }
  }
};
ApperyioPreloadHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioPreloadHelperService);

;

/***/ }),

/***/ 1277:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_push_helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioPushHelperService": () => (/* binding */ ApperyioPushHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ApperyioPushHelperService = class ApperyioPushHelperService {};
ApperyioPushHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioPushHelperService);

;

/***/ }),

/***/ 2734:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_restservice.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioRestService": () => (/* binding */ ApperyioRestService),
/* harmony export */   "paramsParse": () => (/* binding */ paramsParse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 9464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! x2js */ 1029);
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(x2js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apperyio_xml2js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_xml2js */ 197);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config_service */ 4121);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entityapi_service */ 5877);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ 7074);
var _a, _b, _c;










var xmlStr2json = _apperyio_xml2js__WEBPACK_IMPORTED_MODULE_2__.ApperyioXMLHelper.xmlStr2json;
var inst = new x2js__WEBPACK_IMPORTED_MODULE_1__({});
var json2xmlStr = inst.js2xml.bind(inst);
function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}
function transform2form(obj) {
  var str = [];
  for (var key in obj) {
    if (obj[key] instanceof Array) {
      for (var idx in obj[key]) {
        var subObj = obj[key][idx];
        for (var subKey in subObj) {
          str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
        }
      }
    } else {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return str.join("&");
}
;
/**
 * Check is there any files for upload
 * @param  {Object} request Request object
 *
 * @return {Boolean}         Result of checking. `True` if request contain files.
 */
function filesInRequest(request) {
  var result = request.aio_config && request.aio_config.requestType && request.aio_config.requestType.toLowerCase() == 'data';
  var data = request.data || {};
  if (Array.isArray(data)) {
    for (var i = 0, l = data.length; i < l; i++) {
      result = data[i] instanceof Blob;
      if (result) break;
    }
  } else {
    result = data instanceof Blob || data instanceof FormData || data instanceof FileList;
  }
  return result;
}
;
/**
 * Add File to FormData variable
 *
 * @param  {FormData} formData FormData instance
 * @param  {File|FileList} item File instance or FileList
 */
function appendItem(formData, item) {
  if (item) {
    if (item instanceof FileList) {
      for (var i = 0; i < item.length; i++) {
        appendItem(formData, item[i]);
      }
      return;
    }
    var name;
    if (item.name) {
      name = item.name;
    }
    formData.append(name, item);
  }
}
;
/**
 * Adjust request for uploading files.
 * For multiple files, also set (define) Content-Type to undefined
 *
 * @param  {Object} r request object (method modify argument)
 */
function adjustRequest4Files(r) {
  if (r.data instanceof FormData) {
    // If Content-Type was set, then use it, otherwise init property with undefined
    r.headers['Content-Type'] = r.headers['Content-Type'];
    return;
  }
  var formData = new FormData();
  if (r.data instanceof File) {
    r.data = [r.data];
  }
  if (Array.isArray(r.data) || r.data instanceof FileList) {
    r.headers['Content-Type'] = undefined;
    for (var i = 0, l = r.data.length; i < l; i++) {
      appendItem(formData, r.data[i]);
    }
  } else {
    r.headers['Content-Type'] = r.headers['Content-Type'] || r.data.type;
    return;
  }
  r.data = formData;
}
/**
  * Generate URL after parsing {template.entities} from system settings
  * @param  {String} template URL-template
  * @return {String}          URL-string
  */
/**
 * Generate URL after running {template.entities} as function
 * @param  {Function} template URL-template function
 * @return {String}          URL-string
 */
function url(template, options, allConfigData) {
  options = options ? {
    ...options,
    ...allConfigData
  } : {
    ...allConfigData
  }; //clone( arguments[ 1 ] || {}, true ),
  var R = /\{([\w\d_\$\.]+?)\}/,
    m = [],
    tmp = '',
    value;
  if (typeof template === "function") {
    return template.call(this, options);
  }
  m = template.match(R);
  tmp = template;
  while (m) {
    value = parsePath(m[1], options);
    if (value != undefined) {
      template = template.replace(m[0], value);
      tmp = template;
    } else {
      tmp = template.replace(m[0], m[0].replace('}', '\t\t}')); // mark processed bad expression
      template = tmp.concat('');
    }
    m = tmp.match(R);
  }
  if (value && value.toString() == template && ['number', 'boolean'].indexOf(typeof value) > -1) {
    template = value;
  } else if (typeof template == 'string') {
    template = template.replace(/\t\t\}/g, '}');
  }
  return template;
}
/**
 * Recursive parser for settings-objects. Invoke object properties and expand templates entries in value
 * @param  {Object} obj Settings object
 * @param  {Object} options OPTIONAL argument as additional dictionary for searching replaces
 * @return {Object}     Settings object
 */
function paramsParse(obj, options, allConfigData) {
  var options = arguments[1] || {},
    result = {};
  if (typeof obj === "string" || typeof obj === "function") {
    return url(obj, options, allConfigData);
  }
  if (typeof obj === "boolean" || obj === null || obj instanceof File || obj instanceof FileList || obj instanceof FormData || obj instanceof Blob || obj instanceof ArrayBuffer || typeof obj === "number" || typeof obj === "undefined") {
    result = obj;
  } else {
    if (Array.isArray(obj)) {
      result = [];
    }
    var props = Object.keys(obj);
    props = props.filter(function (k) {
      return obj[k] !== _constants__WEBPACK_IMPORTED_MODULE_5__.IGNORED_VALUE;
    });
    props.forEach(function (k) {
      result[k] = paramsParse(obj[k], options, allConfigData);
    });
  }
  return result;
}
let ApperyioRestService = class ApperyioRestService {
  http;
  ConfigService;
  EntityAPI;
  constructor(http, ConfigService, EntityAPI) {
    this.http = http;
    this.ConfigService = ConfigService;
    this.EntityAPI = EntityAPI;
  }
  prepareRequestData(exec_request) {
    var request = {},
      props,
      allConfigData = this.ConfigService.all() || {};
    request = exec_request;
    var $$request = paramsParse(request, request, allConfigData);
    var url = request.url;
    if (request.hasOwnProperty('headers') && request.headers && request.headers.hasOwnProperty('appery-proxy-url')) {
      url = request.headers['appery-proxy-url'];
    }
    if (request.hasOwnProperty('data') && request.data) {
      $$request = paramsParse($$request, request.data, allConfigData);
      props = Object.keys(request.data);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.data[k];
        }
      });
    }
    if (request.hasOwnProperty('params') && request.params) {
      props = Object.keys(request.params);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.params[k];
        }
      });
      $$request = paramsParse($$request, request.params, allConfigData);
    }
    if (request.hasOwnProperty('query') && request.query) {
      props = Object.keys(request.query);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.query[k];
        }
      });
      $$request = paramsParse($$request, request.query, allConfigData);
    }
    if (filesInRequest($$request)) {
      adjustRequest4Files($$request);
    }
    return $$request;
  }
  sendRequest(request) {
    var reqOpts = {};
    if (request.params) {
      reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams({
        fromObject: request.params
      });
    }
    if (request.headers) {
      var headers = {};
      for (var key in request.headers) {
        if (request.headers[key] !== undefined) {
          headers[key] = request.headers[key];
        }
      }
      reqOpts.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders(headers);
    }
    if (request.aio_config && request.aio_config.responseType) {
      switch (request.aio_config.responseType.toLowerCase()) {
        case "xml":
          reqOpts.responseType = "text";
          break;
        case "binary":
          reqOpts.responseType = "arraybuffer";
          break;
      }
    }
    if (request.aio_config && request.aio_config.requestType) {
      switch (request.aio_config.requestType.toLowerCase()) {
        case 'xml':
          {
            request.data = json2xmlStr(request.data);
            break;
          }
        case 'x-www-form-urlencoded':
          {
            request.data = transform2form(request.data);
            break;
          }
      }
    }
    if (request.aio_config.responseType === 'jsonp') {
      let url = request.url.indexOf("?") === -1 ? request.url + "?" : request.url;
      return this.http.jsonp(url + reqOpts.params.toString(), "callback");
    }
    switch (request.method.toLowerCase()) {
      case "post":
        return this.http.post(request.url, request.data || {}, reqOpts);
      case "put":
        return this.http.put(request.url, request.data || {}, reqOpts);
      case "patch":
        return this.http.patch(request.url, request.data || {}, reqOpts);
      case "delete":
        if (request.data === 0 || request.data === false || request.data && request.data.constructor !== Object || request.data && request.data.constructor === Object && Object.keys(request.data).length > 0) {
          reqOpts.body = request.data;
        }
        return this.http.delete(request.url, reqOpts);
      default:
        return this.http.get(request.url, reqOpts);
    }
  }
  run(request) {
    var aioConfig;
    if (request.hasOwnProperty('aio_config') && request.aio_config) {
      aioConfig = request.aio_config;
    }
    if (request.hasOwnProperty('echo') && request.echo) {
      var echo_data = request.echo;
      try {
        if (aioConfig) {
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'xml') {
            echo_data = xmlStr2json(request.echo);
          }
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'json') {
            echo_data = JSON.parse(request.echo);
          }
        }
      } catch (e) {
        echo_data = "Error while parsing echo data";
      }
      if (request.hasOwnProperty('transformResponse') && typeof request.transformResponse === "function") {
        echo_data = request.transformResponse.call(null, echo_data) || echo_data;
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        observer.next(echo_data);
        observer.complete();
      });
    }
    var $$request = this.prepareRequestData(request);
    return this.sendRequest($$request).map(res => {
      if (request.hasOwnProperty('aio_config') && request.aio_config && request.aio_config.hasOwnProperty('responseType')) {
        if (request.aio_config.responseType === 'xml') {
          res = xmlStr2json(res);
          if (request.aio_config.hasOwnProperty('serviceName')) {
            var response_model_name = request.aio_config.serviceName + '.response.body';
            var res = this.EntityAPI.get(response_model_name, res);
            return res[Object.keys(res)[0]];
          }
        }
        if (request.aio_config.responseType === 'binary') {
          var uarr = new Uint8Array(res);
          var strings = [],
            chunksize = 0xffff;
          var len = uarr.length;
          for (var i = 0; i * chunksize < len; i++) {
            strings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
          }
          return strings.join('');
        }
      }
      return res;
    });
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService
  }, {
    type: _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService
  }];
};
ApperyioRestService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService) === "function" ? _b : Object, typeof (_c = typeof _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService !== "undefined" && _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService) === "function" ? _c : Object])], ApperyioRestService);


/***/ }),

/***/ 7526:
/*!******************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_social_login_helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioSocialLoginHelperService": () => (/* binding */ ApperyioSocialLoginHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
var _a, _b;




let ApperyioSocialLoginHelperService = class ApperyioSocialLoginHelperService {
  http;
  platform;
  defaultDB;
  sessionTokens = {};
  providers = {
    twitter: {
      id: "twitter",
      baseUrl: "https://api.twitter.com/oauth/authenticate"
    },
    facebook: {
      id: "facebook",
      baseUrl: "https://www.facebook.com/dialog/oauth"
    },
    google: {
      id: "google",
      baseUrl: "https://accounts.google.com/o/oauth2/auth"
    }
  };
  statusNames = {
    unauthorized: "unauthorized",
    inProgress: "inProgress",
    authorized: "authorized",
    error: "error"
  };
  eventNames = {
    dbLoginStart: "dbloginstart",
    dbLoginEnd: "dbloginend"
  };
  host = "appery.io";
  dbBaseUrl = "https://api." + this.host + "/rest/1/db/";
  oauthUrl = this.dbBaseUrl + "oauth/";
  oauthLoginUrl = this.oauthUrl + "login/";
  oauthTokenUrl = this.oauthUrl + "token/";
  oauthLogout = this.oauthUrl + "logout?provider=<provider>";
  usersUrl = this.dbBaseUrl + "users/";
  loginUrl = this.dbBaseUrl + "login/";
  logoutUrl = this.dbBaseUrl + "logout/";
  checkLoginUrl = this.usersUrl + "me/";
  updateUserUrl = this.usersUrl + "<user_id>";
  constructor(http, platform) {
    this.http = http;
    this.platform = platform;
  }
  /**
   * Social login via google oauth provider.
   * @param {string} previewClientId  - Google client id, type "Web application".
   * @param {string} [callbackUrl]    - URL for redirecting after user grants access. Not required for login on device.
   * @param {string} [dbId]           - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginGoogle(previewClientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        this.loginGoogleOnDevice(resolve, reject, dbId, previewClientId);
      } else {
        this.loginOauth2_0(resolve, reject, dbId, previewClientId, this.providers.google.baseUrl, callbackUrl, this.providers.google.id, "profile", window);
      }
    });
  }
  /**
   * Social login via facebook oauth provider.
   * @param {string} clientId       - Social provider client id.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} [dbId]         - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginFB(clientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        this.loginFacebookOnDevice(resolve, reject, dbId, clientId);
      } else {
        this.loginOauth2_0(resolve, reject, dbId, clientId, this.providers.facebook.baseUrl, callbackUrl, this.providers.facebook.id, "", window);
      }
    });
  }
  /**
   * Social login via twitter oauth provider.
   * @param {string} clientId       - Social provider client id.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} [dbId]         - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginTwitter(clientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        const cordova = window.cordova;
        if (!cordova || !cordova.InAppBrowser) {
          reject("InAppBrowser Cordova Plugin is not installed");
        } else {
          this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl, this.providers.twitter.id, cordova.InAppBrowser);
        }
      } else {
        this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl, this.providers.twitter.id, window);
      }
    });
  }
  /**
   * Returns Appery.io database token.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string|null}
   */
  getToken(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].token;
    }
    return null;
  }
  /**
   * Returns Appery.io database User Id.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string|null}
   */
  getUserId(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].userId;
    }
    return null;
  }
  /**
   * Returns current login progress status.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string}
   */
  getStatus(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].status;
    }
    return this.statusNames.unauthorized;
  }
  /**
   * Sets default Database Id.
   * @param {string} dbId - Database Id.
   */
  setDefaultDB(dbId) {
    this.defaultDB = dbId;
  }
  /**
   * Creates user in Appery.io database.
   * @param {Object.<String, String>} options - Request data. Should contain at least "username" and "password" fields.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  createUser(options, dbId) {
    return new Promise((resolve, reject) => {
      this.internalLogin(resolve, reject, options, this.usersUrl, this.getDB(dbId), true);
    });
  }
  /**
   * Receives Appery.io database token.
   * @param {Object.<String, String>} options - Request parameters. Should contain "username" and "password" fields.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  login(options, dbId) {
    return new Promise((resolve, reject) => {
      this.internalLogin(resolve, reject, options, this.loginUrl, this.getDB(dbId), true);
    });
  }
  /**
   * Invalidates token in Appery.io database.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  logout(dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      this.http.get(this.logoutUrl, httpOptions).subscribe(res => {
        this.invalidate(dbId);
        resolve(res);
      }, reject);
    });
  }
  /**
   * Returns list of users in Appery.io database.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  findUsers(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, options, false);
      return this.http.get(this.usersUrl, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Checks if Appery.io database token is valid.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  isLogged(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      return this.http.get(this.checkLoginUrl, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Updates Appery.io database user.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  updateUser(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      let url = this.updateUserUrl.replace("<user_id>", this.getUserId(dbId));
      return this.http.put(url, options, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Deletes Appery.io database token. It doesn't invalidate token in Appery.io database.
   * Returns true if token existed.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {boolean}
   */
  invalidate(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      this.sessionTokens[dbId] = undefined;
      return true;
    }
    return false;
  }
  /**
   * Removes social id from Appery.io database.
   * @param {string}                  provider - Provider Id.
   * @param {string}                  [dbId]   - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  logoutOauth(provider, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      let url = this.oauthLogout.replace("<provider>", provider);
      return this.http.delete(url, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * If dbId is specified then returns dbId, if not then returns default database id.
   * @param {string} dbId - Database id. Optional if default database id is set.
   * @returns {string}
   */
  getDB(dbId) {
    if (dbId) {
      return dbId;
    } else {
      return this.defaultDB;
    }
  }
  /**
   * Social login via OAuth 2.0 Authorization Framework
   * @see {@link https://tools.ietf.org/html/rfc6749}
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   * @param {string} baseUrl        - Social provider authorization URL.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} socialnetwork  - Social provider id.
   * @param {string} scope          - Set of permissions that the application requests.
   * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
   */
  loginOauth2_0(resolve, reject, dbId, clientId, baseUrl, callbackUrl, socialnetwork, scope, window) {
    let self = this;
    const state = Math.random().toString(36).substring(2);
    const url = baseUrl + "?client_id=" + clientId + "&redirect_uri=" + callbackUrl + "&scope=" + scope + "&response_type=code&state=" + state;
    let ref;
    if (this.isPhoneGapApp()) {
      ref = window.open(url, '_blank', 'location=yes');
      ref.addEventListener("loadstart", handleDevice);
    } else {
      ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
      window.addEventListener('message', handlePreview);
    }
    function handleDevice(event) {
      if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      getAccessToken(event.url);
    }
    function handlePreview(event) {
      if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      window.removeEventListener('message', handlePreview);
      getAccessToken(event.data.url);
    }
    function getAccessToken(url) {
      let params = ApperyioSocialLoginHelperService.extractParams(url);
      if (state !== params["state"]) {
        return;
      }
      if (params['code']) {
        self.externalLogin(resolve, reject, params['code'], "", dbId, clientId, socialnetwork, callbackUrl);
      } else {
        reject("Access not granted");
      }
    }
  }
  /**
   * Social login via OAuth 1.0a Authorization Framework
   * @see {@link http://oauth.net/core/1.0a}
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   * @param {string} baseUrl        - Social provider authorization URL.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} socialnetwork  - Social provider id.
   * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
   */
  loginOauth1_0a(resolve, reject, dbId, clientId, baseUrl, callbackUrl, socialnetwork, window) {
    let ref;
    let self = this;
    const params = {
      provider: socialnetwork,
      appId: clientId,
      callback: callbackUrl
    };
    let httpOptions = this.getHttpOptions(dbId, params, true);
    this.http.get(this.oauthTokenUrl, httpOptions).subscribe(extractToken, error => {
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      this.setStatus(dbId, this.statusNames.error);
      reject(error);
    });
    function extractToken(success) {
      const token = success.token;
      const url = baseUrl + "?oauth_token=" + token;
      if (self.isPhoneGapApp()) {
        ref = window.open(url, '_blank', 'location=yes');
        ref.addEventListener("loadstart", handleDevice);
      } else {
        ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
        window.addEventListener('message', handlePreview);
      }
    }
    function handleDevice(event) {
      if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      getVerifier(event.url);
    }
    function handlePreview(event) {
      if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      window.removeEventListener('message', handlePreview);
      getVerifier(event.data.url);
    }
    function getVerifier(url) {
      let params = ApperyioSocialLoginHelperService.extractParams(url);
      if (params['oauth_token'] && params['oauth_verifier']) {
        self.externalLogin(resolve, reject, params['oauth_verifier'], params['oauth_token'], dbId, clientId, socialnetwork);
      } else {
        reject("Access not granted");
      }
    }
  }
  /**
   * Social login via Facebook Connect Cordova Plugin
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   */
  loginFacebookOnDevice(resolve, reject, dbId, clientId) {
    let self = this;
    if (!window["facebookConnectPlugin"] || !window["facebookConnectPlugin"].login) {
      reject("Facebook Connect Cordova Plugin is not installed");
    }
    window["facebookConnectPlugin"].login(["public_profile"], response => {
      self.externalLogin(resolve, reject, "", "", dbId, clientId, "facebook", null, response.authResponse.accessToken);
    }, reject);
  }
  /**
   * Social login via Google Sign-In Cordova Plugin
   * @see {@link https://github.com/EddyVerbruggen/cordova-plugin-googleplus}
   * @param {function} resolve    - function to resolve promise.
   * @param {function} reject     - function to reject promise.
   * @param {string} dbId         - Database id. Optional if default database id is set.
   * @param {string} webClientId  - Google web client id.
   */
  loginGoogleOnDevice(resolve, reject, dbId, webClientId) {
    let self = this;
    if (!window["plugins"] || !window["plugins"].googleplus) {
      reject("Google Sign-In Cordova Plugin is not installed");
    }
    window["plugins"].googleplus.login({
      'scopes': "profile",
      'webClientId': webClientId
    }, response => {
      self.externalLogin(resolve, reject, "", "", dbId, webClientId, "google", null, response.idToken);
    }, msg => {
      reject("Access not granted: " + msg);
    });
  }
  /**
   * Exchanges oauth provider token and verifier to Appery.io token.
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} verifier         - Oauth 1.0 verifier or Oauth 2.0 code.
   * @param {string} token            - Oauth 1.0 request token.
   * @param {string} dbId             - Database id. Optional if default database id is set.
   * @param {string} clientId         - Social provider client id.
   * @param {string} socialnetwork    - Social provider id.
   * @param {string} [callback]       - Callback URL. Only for OAuth 2.0.
   * @param {string} [accessToken]    - Access tokenif it's already known. Currently available only for Google
   */
  externalLogin(resolve, reject, verifier, token, dbId, clientId, socialnetwork, callback, accessToken) {
    const data = {
      "verifier": verifier,
      "token": token,
      "provider": socialnetwork,
      "appId": clientId,
      "callback": callback,
      "accessToken": accessToken
    };
    this.internalLogin(resolve, reject, data, this.oauthLoginUrl, this.getDB(dbId), false);
  }
  internalLogin(resolve, reject, data, url, dbId, withoutToken) {
    ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginStart);
    this.setStatus(dbId, this.statusNames.inProgress);
    let httpOptions = this.getHttpOptions(dbId, {}, withoutToken);
    this.http.post(url, data, httpOptions).subscribe(res => {
      let token = this.handleToken(res, dbId);
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      resolve(token);
    }, error => {
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      this.setStatus(dbId, this.statusNames.error);
      reject(error);
    });
  }
  /**
   * Creates HttpOptions object.
   * @param {string}                         dbId            - Database id. Optional if default database id is set.
   * @param {Object.<String, String>} params          - Request parameters.
   * @param {boolean}                        [withoutToken]  - Is token header should be omitted. Optional.
   * @returns {object}
   */
  getHttpOptions(dbId, params, withoutToken) {
    dbId = this.getDB(dbId);
    let headers = {
      'Content-Type': 'application/json',
      "X-Appery-Database-Id": dbId
    };
    if (!withoutToken && this.getToken(dbId)) {
      headers["X-Appery-Session-Token"] = this.getToken(dbId);
    }
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(headers),
      params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
        fromObject: params
      })
    };
  }
  /**
   * Sets current login progress status
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @param {string} status - Current login progress status.
   */
  setStatus(dbId, status) {
    dbId = this.getDB(dbId);
    if (!dbId) {
      return;
    }
    if (this.sessionTokens[dbId]) {
      this.sessionTokens[dbId].status = status;
    } else {
      this.sessionTokens[dbId] = {
        status: status
      };
    }
  }
  /**
   * Extracts Appery.io database token from response
   * @param {Object.<String, String>} data     - Parsed response body.
   * @param {string}                  dbId     - Database id.
   */
  handleToken(data, dbId) {
    this.sessionTokens[dbId] = {
      token: data.sessionToken,
      userId: data["_id"],
      status: this.statusNames.authorized
    };
    return data.sessionToken;
  }
  /**
   * Fires event
   * @param eventName
   */
  static fireEvent(eventName) {
    const event = new Event(eventName, {
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }
  /**
   * Extracts parameters from URL.
   * @see {@link http://tools.ietf.org/html/rfc3986#section-3.4}
   * @param {string} url
   * @returns {Object.<String, String>}
   */
  static extractParams(url) {
    let params = {},
      search;
    if (url.indexOf("?") === -1) {
      return params;
    }
    if (url.indexOf("#") > -1) {
      search = url.slice(url.indexOf("?"), url.indexOf("#"));
    } else {
      search = url.slice(url.indexOf("?"));
    }
    if (search.length > 1) {
      for (var pairIndex = 0, pairs = search.substr(1).split("&"); pairIndex < pairs.length; pairIndex++) {
        var pair = pairs[pairIndex].split("=");
        params[pair[0]] = pair[1];
      }
    }
    return params;
  }
  /**
   * Determines if the app runs on device.
   * @returns {boolean}
   */
  isPhoneGapApp() {
    return this.platform.is('cordova');
  }
  /**
   * Determines if the app runs on android.
   * @returns {boolean}
   */
  isAndroid() {
    return this.platform.is('android');
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform
  }];
};
ApperyioSocialLoginHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform) === "function" ? _b : Object])], ApperyioSocialLoginHelperService);


/***/ }),

/***/ 9084:
/*!***********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_theme_helper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioThemeHelperService": () => (/* binding */ ApperyioThemeHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ApperyioThemeHelperService = class ApperyioThemeHelperService {
  getCurrent() {
    return window.document.body.dataset.themeName || "";
  }
  set(themeName = "") {
    let currTheme = window.document.body.dataset.themeName || "";
    currTheme && window.document.body.classList.remove(currTheme);
    window.document.body.dataset.themeName = themeName;
    themeName && window.document.body.classList.add(themeName);
  }
};
ApperyioThemeHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioThemeHelperService);

;

/***/ }),

/***/ 197:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_xml2js.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioXMLHelper": () => (/* binding */ ApperyioXMLHelper)
/* harmony export */ });
function parseXML(node) {
  if (!node) return null;
  var txt = '',
    obj = null,
    att = null;
  var nt = node.nodeType,
    nn = node.localName || node.nodeName || '';
  var nv = node.content || node.nodeValue || '';
  if (node.childNodes && node.childNodes.length > 0) {
    node.childNodes.forEach((cn, n) => {
      var cnt = cn.nodeType,
        cnn = cn.localName || cn.nodeName || '',
        cnv = cn.content || cn.nodeValue || '';
      if (cnt == 8) {
        return; // ignore comment node
      } else if (cnt == 3 || cnt == 4 || !cnn) {
        // ignore white-space in between tags
        txt += cnv.trim();
      } else {
        obj = obj || {};
        if (obj[cnn]) {
          if (!Array.isArray(obj[cnn])) {
            obj[cnn] = [obj[cnn]];
          }
          obj[cnn].push(parseXML(cn));
        } else {
          obj[cnn] = parseXML(cn);
        }
      }
    });
  }
  if (node.attributes) {
    if (node.attributes.length > 0) {
      att = {};
      obj = obj || {};
      var a, atn, at, atv;
      for (a = 0; a < node.attributes; a++) {
        at = node.attributes[a];
        atn = '@' + (at.name || ''), atv = at.value;
        att[atn] = atv;
        if (obj[atn]) {
          obj[atn].push(atv);
        } else {
          obj[atn] = atv;
        }
      }
    }
  }
  if (obj && txt) {
    obj = {
      ...(obj || {}),
      ...(att || {})
    };
    txt = obj.content ? (typeof obj.content == 'object' ? obj.content : [obj.content || '']).concat([txt]) : txt;
    if (txt) obj.content = txt;
    txt = '';
  }
  var out = obj || txt;
  return out;
}
function xmlStr2json(xml) {
  if (!xml) return {};
  if (typeof xml == 'string') xml = parseXml(xml);
  if (!xml.nodeType) return;
  if (xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;
  var root = xml;
  var out = parseXML(root);
  xml = null;
  root = null;
  return out;
}
function parseXml(xml) {
  if (!xml || typeof xml !== "string") {
    return null;
  }
  var parser = new DOMParser(),
    domNode = null,
    parsererrorNS = null;
  var isIEParser = ("ActiveXObject" in window);
  // IE9+ now is here
  if (!isIEParser) {
    try {
      parsererrorNS = parser.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI;
    } catch (err) {
      parsererrorNS = null;
    }
  }
  try {
    domNode = parser.parseFromString(xml, "text/xml");
    if (parsererrorNS !== null && domNode.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
      domNode = null;
    }
  } catch (err) {
    domNode = null;
  }
  return domNode;
}
let ApperyioXMLHelper = {
  xmlStr2json
};

/***/ }),

/***/ 4121:
/*!****************************************************!*\
  !*** ./src/app/scripts/apperyio/config_service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioConfigService": () => (/* binding */ ApperyioConfigService)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 7074);

function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}
function addByPath(path, data, value) {
  let parts = path.split(".");
  let res = data;
  let i = 0;
  while (i < parts.length - 1) {
    if (!res[parts[i]] || typeof res[parts[i]] !== "object") {
      res[parts[i]] = {};
    }
    res = res[parts[i]];
    i++;
  }
  res[parts[parts.length - 1]] = value;
}
class ApperyioConfigService {
  constants;
  constructor() {
    this.constants = {
      ..._constants__WEBPACK_IMPORTED_MODULE_0__.constants
    };
  }
  add(exp, value) {
    addByPath(exp, this.constants, value);
  }
  all() {
    return {
      ...this.constants
    };
  }
  get(exp, defaultValue) {
    var result;
    if (this.constants[exp] !== undefined) {
      result = this.constants[exp];
    } else {
      try {
        result = parsePath(exp, this.constants);
      } catch (e) {
        result = defaultValue !== undefined ? defaultValue : undefined;
      }
    }
    return result;
  }
  remove(exp) {
    var result = this.get(exp);
    this.add(exp);
    return result;
  }
}
;

/***/ }),

/***/ 1371:
/*!*****************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio.declarables.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioDeclarablesModule": () => (/* binding */ ApperyioDeclarablesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apperyio_control_validation_directive */ 7146);
/* harmony import */ var _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apperyio_form_change_directive */ 1296);
/* harmony import */ var _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_password_show_directive */ 3984);
/* harmony import */ var _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apperyio_datatable_resizer_directive */ 86);
/* harmony import */ var _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_tester_buttons_component */ 1202);
/* harmony import */ var _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_file_picker_component */ 6776);
/* harmony import */ var _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_datetime_component */ 2295);












let ApperyioDeclarablesModule = class ApperyioDeclarablesModule {};
ApperyioDeclarablesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule],
  declarations: [_apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__["default"], _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_1__["default"], _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_2__["default"], _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_4__["default"], _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_5__["default"], _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_6__["default"]],
  exports: [_apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__["default"], _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_1__["default"], _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_2__["default"], _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_4__["default"], _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_5__["default"], _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_6__["default"]]
})], ApperyioDeclarablesModule);


/***/ }),

/***/ 7146:
/*!***************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_control_validation_directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio_helper */ 7845);
var _a, _b, _c;




/**
 * The directive allows to simply show validation errors text
 * For using it add the aioControlValidation directive to your form control component (e.g. Input)
 *
 * By default validation rules are defined by component properties
 * Advanced property aioControlValidation allows to add property independent validation rules
 * aioControlValidation="email|||requiredTrue|||minLength:2"
 * Multiple validation rules are separated with the "|||" symbols
 * Arguments of validation rules can be added with using the ":" symbol
 * aioControlValidation="pattern:[0-9]*"
 *
 * Avaliable validation rules:
 * min:<number>
 * max:<number>
 * required
 * requiredTrue - the control is valid only if it has boolean 'true' value
 * minLength:<number>
 * maxLength:<number>
 * pattern:<string>
 * email
 * digitsOnly
 * latinLettersOnly
 * strongPassword
 *
 * Set of custom rules (pattern based rules: digitsOnly, latinLettersOnly, strongPassword)
 * could be extended if needed. Custom rules could be set only via `aioControlValidation` Input property
 */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const EMAIL_REGEXP_STR = EMAIL_REGEXP.toString().slice(1, -1);
const HIDDEN_CLASS = "ion-hide";
let AioControlValidationDirective = class AioControlValidationDirective {
  el;
  model;
  Apperyio;
  aioControlValidation = '';
  aioValidationMessages = {};
  aioValidationMessageClass = '';
  aioValidationShowMessage = '';
  aioValidationFunction;
  getMessageText(key, defVal) {
    let message = this.aioValidationMessages[key],
      text;
    if (!message) {
      return defVal;
    }
    if (this.Apperyio.translate) {
      text = this.Apperyio.translate.instant(message);
    }
    return text || message;
  }
  /**
   * Text of displayed messages depending on validation type
   */
  ERROR_MESSAGES = {
    default: 'Incorrect value',
    pattern: ({
      requiredPattern
    }) => {
      let message = this.getMessageText("pattern", '');
      if (message) {
        return message;
      }
      if (this.defaultPetternsDescription[requiredPattern]) {
        return this.defaultPetternsDescription[requiredPattern];
      }
      return 'The value must match the pattern';
    },
    required: () => this.getMessageText("required", 'Value of the field is required'),
    aioValidationFunction: data => this.getMessageText("aioValidationFunction", data || 'Incorrect value'),
    customValidation: data => this.getMessageText("customValidation", data || 'Incorrect value'),
    min: ({
      min
    }) => this.getMessageText("min", `The number must not be less than ${min}`),
    max: ({
      max
    }) => this.getMessageText("max", `The number must not exceed ${max}`),
    minlength: ({
      requiredLength
    }) => this.getMessageText("minlength", `The number of characters must not be less than ${requiredLength}`),
    maxlength: ({
      requiredLength
    }) => this.getMessageText("maxlength", `The number of characters must not exceed ${requiredLength}`)
  };
  /**
   * Symbol for separating multiple validation rules:
   * aioControlValidation="required|||minLength:3|||email"
   */
  RULES_DELIMETER = '|||';
  /**
   * Regular expression for matching validator name and their arguments:
   * <validatorName>:<argument> (e.g. min:3)
   */
  RULE_REGEXP = /^([a-zA-Z]+)(?::(.*))?$/;
  errorElement;
  defaultPetterns = {
    "digitsOnly": {
      pattern: "^[0-9]+$",
      description: "Only digits are allowed"
    },
    "latinLettersOnly": {
      pattern: "^[a-zA-Z]+$",
      description: "Only latin letters are allowed"
    },
    "strongPassword": {
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\\.\\,;\\:_\\-~\\+\\=!@#$%^&*])[a-zA-Z0-9\\.\\,;\\:_\\-~\\+\\=!@#$%^&*]{8,30}$",
      description: "Password should be 8-30 symbols and should contain latin symbols, digits and special symbols (.;:_-~+=!@#$%^&*)"
    },
    "email": {
      pattern: EMAIL_REGEXP_STR,
      description: "Incorrect email"
    }
  };
  defaultPetternsDescription;
  generateDefaultPetternDescription() {
    this.defaultPetternsDescription = {};
    Object.keys(this.defaultPetterns).forEach(key => {
      this.defaultPetternsDescription[this.defaultPetterns[key].pattern] = this.defaultPetterns[key].description;
    });
  }
  constructor(el, model, Apperyio) {
    this.el = el;
    this.model = model;
    this.Apperyio = Apperyio;
    let markAsTouched = this.model.control.markAsTouched.bind(this.model.control);
    this.model.control.markAsTouched = () => {
      markAsTouched();
      if (!this.model.control._pendingTouched) {
        this.showError();
      }
    };
    this.generateDefaultPetternDescription();
  }
  ngOnInit() {
    this.refreshValidation();
  }
  /**
   * Sets existing validation rules up to date
   * Concates rules set as properties and rules defined with the "aioControlValidation" directive
   */
  refreshValidation() {
    const validators = [];
    this.concatRules().forEach(rule => {
      const validator = this.validatorFactory(rule);
      if (validator) {
        validators.push(validator);
      }
    });
    if (typeof this.aioValidationFunction === 'function') {
      validators.push(this.aioValidationFunction);
    }
    this.model.control.clearValidators();
    this.model.control.setValidators(validators);
    this.model.control.updateValueAndValidity();
  }
  /**
   * Returns concated array of rules
   * Rules specified with the aioControlValidation directive have higher priority
   */
  concatRules() {
    const advancedRules = this.aioControlValidation ? this.aioControlValidation.split(this.RULES_DELIMETER) : [];
    const propertyRules = this.getPropertyValidations();
    return advancedRules.concat(propertyRules.filter(rule => !this.aioControlValidation.includes(this.getRuleName(rule))));
  }
  /**
   * Returns name of rule
   * pattern:[0-9] -> pattern
   * @param rule
   */
  getRuleName(rule) {
    const ruleParts = rule.match(this.RULE_REGEXP);
    return ruleParts && ruleParts instanceof Array ? ruleParts[1] : rule;
  }
  /**
   * Transforms existing validation properties to validation rules
   */
  getPropertyValidations() {
    const validations = [];
    if (this.el.nativeElement.required) {
      validations.push('required');
    }
    if (this.el.nativeElement.pattern) {
      validations.push(`pattern:${this.el.nativeElement.pattern}`);
    }
    if (this.el.nativeElement.min) {
      validations.push(`min:${this.el.nativeElement.min}`);
    }
    if (this.el.nativeElement.max) {
      validations.push(`max:${this.el.nativeElement.max}`);
    }
    if (this.el.nativeElement.minlength) {
      validations.push(`minLength:${this.el.nativeElement.minlength}`);
    }
    return validations;
  }
  /**
   * Creates an Angular validator from passed validation rule
   * @param rule {String} - validation rule (e.g. required, minLength:2 etc.)
   */
  validatorFactory(rule) {
    let ruleParts = rule.match(this.RULE_REGEXP);
    if (ruleParts && ruleParts instanceof Array) {
      let ruleName = ruleParts[1] || '';
      let ruleData = ruleParts[2] || '';
      if (this.defaultPetterns[ruleName]) {
        let validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern;
        let validatorData = this.defaultPetterns[ruleName].pattern;
        return validator(validatorData);
      } else {
        let validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators[ruleName];
        if (validator) {
          let validatorData;
          if (ruleData) {
            if (ruleName === 'min' || ruleName === 'max' || ruleName === 'minLength' || ruleName === 'maxLength') {
              validatorData = parseFloat(ruleData);
            } else if (ruleName === 'pattern') {
              let regexStr = '';
              if (ruleData.charAt(0) !== '^') regexStr += '^';
              regexStr += ruleData;
              if (ruleData.charAt(ruleData.length - 1) !== '$') regexStr += '$';
              let regex;
              try {
                regex = new RegExp(regexStr);
              } catch (e) {
                console.warn("Validation error: wrong pattern", ruleData);
                return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.nullValidator;
              }
              validatorData = regex;
            }
          }
          return validatorData ? validator(validatorData) : validator;
        }
      }
    }
    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.nullValidator;
  }
  showError() {
    if (this.aioValidationShowMessage === "true" && this.model.invalid) {
      if (!this.errorElement) {
        // create container if needed
        this.errorElement = document.createElement("div");
        this.errorElement.classList.add(this.aioValidationMessageClass || "aio-validation-error");
        const referenceNode = this.el.nativeElement;
        if (referenceNode.parentNode.tagName === "ION-ITEM") {
          referenceNode.parentNode.after(this.errorElement);
        } else if (referenceNode.parentNode.tagName === "ION-COL" && referenceNode.parentNode.parentNode.tagName === "ION-ROW" && referenceNode.parentNode.parentNode.parentNode.tagName === "ION-ITEM") {
          referenceNode.parentNode.parentNode.parentNode.after(this.errorElement);
        } else {
          referenceNode.after(this.errorElement);
        }
      }
      // show the first error message
      this.errorElement.innerText = this.getFirstErrorMessage() || "";
      if (!this.errorElement.innerText) {
        this.clearErrorMessage();
      } else {
        this.errorElement.classList.remove(HIDDEN_CLASS);
      }
    }
  }
  onStatusChange(event) {
    if (this.aioValidationShowMessage === "true" && this.model.invalid) {
      if (event.type === 'ionBlur' && event.target.nodeName !== 'ION-SELECT' || event.type === 'ionCancel' && event.target.nodeName === 'ION-SELECT' || event.type === 'ionChange' && this.model.touched || event.type === 'ionChange' && (event.target.nodeName === 'ION-RADIO-GROUP' || event.target.nodeName === 'ION-CHECKBOX') && this.model.dirty) {
        this.showError();
      }
    } else {
      this.clearErrorMessage();
    }
  }
  /**
   * Returns a list of active validation errors
   */
  getFirstErrorMessage() {
    let key = Object.keys(this.model.errors)[0];
    return this.getErrorMessage(key, this.model.errors[key]);
  }
  /**
   * Returns an error message text from the configuration template by error name
   * If the template is missing, returns default message text
   * @param key {String} - Error name
   * @param data {Any} - Validation error object
   */
  getErrorMessage(key, data) {
    if (this.ERROR_MESSAGES.hasOwnProperty(key)) {
      return typeof this.ERROR_MESSAGES[key] === 'function' ? this.ERROR_MESSAGES[key](data) : this.ERROR_MESSAGES[key];
    }
    return this.ERROR_MESSAGES['default'];
  }
  clearErrorMessage() {
    if (this.errorElement) {
      this.errorElement.innerText = "";
      this.errorElement.classList.add(HIDDEN_CLASS);
    }
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel
  }, {
    type: _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
  static propDecorators = {
    aioControlValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationMessages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationMessageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationShowMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onStatusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionBlur', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionChange', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionCancel', ['$event']]
    }]
  };
};
AioControlValidationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
  selector: '[aioControlValidation]',
  inputs: ['aioControlValidation', 'aioValidationMessages', 'aioValidationMessageClass', 'aioValidationShowMessage', 'aioValidationFunction']
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef) === "function" ? _a : Object, typeof (_b = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel) === "function" ? _b : Object, typeof (_c = typeof _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _c : Object])], AioControlValidationDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioControlValidationDirective);

/***/ }),

/***/ 86:
/*!**************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datatable_resizer_directive.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
var _a;



const maxAttempts = 100;
let ApperyioDatatableResizerDirective = class ApperyioDatatableResizerDirective {
  table;
  constructor(table) {
    this.table = table;
  }
  fixWidth(attempt) {
    if (!this.table.element.parentElement // element is not rendered (because of *ngIf, etc.)
    || attempt > maxAttempts // something went wrong, just stop it 
    ) {
      return;
    }
    setTimeout(() => {
      if (!this.table.element.clientWidth) {
        // table is not visible yet. no sense to recalculate width
        this.fixWidth(attempt + 1);
        return;
      }
      setTimeout(() => {
        if (this.table.element.parentElement) {
          // element is still rendered
          const innerHeader = this.table.element.querySelector(".datatable-header .datatable-header-inner");
          if (!innerHeader || innerHeader.clientWidth !== this.table.element.clientWidth) {
            // recalculate few times because of bug with recalculation in case of smaller column width
            for (let i = 0; i < 10; i++) {
              this.table.recalculateColumns();
            }
            this.table.recalculate(); // full recalculate (not only columns)
            const column = this.table.headerComponent.getColumn(0);
            if (column) {
              this.table.onColumnResize({
                column: column,
                newValue: column.width
              });
            }
          }
        }
      }, 300);
    }, 100);
  }
  ngAfterViewInit() {
    // check if this directive is compatible with the current @swimlane/ngx-datatable version api
    if (this.table.element && this.table.recalculate && this.table.recalculateColumns && this.table.headerComponent && this.table.headerComponent.getColumn && this.table.onColumnResize) {
      this.fixWidth(0);
    }
  }
  static ctorParameters = () => [{
    type: _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent
  }];
};
ApperyioDatatableResizerDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
  selector: '[aioDatatableResizer]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [typeof (_a = typeof _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent !== "undefined" && _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent) === "function" ? _a : Object])], ApperyioDatatableResizerDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioDatatableResizerDirective);

/***/ }),

/***/ 2295:
/*!*****************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg!./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts */ 3437);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ApperyioDatetime = class ApperyioDatetime {
  datetimeInput;
  value;
  placeholder = "";
  presentation = "";
  formatOptions;
  locale = "";
  subscriptionOnChange;
  subscriptionOnBlur;
  id = Math.random().toString();
  constructor() {}
  ngAfterContentInit() {
    // contentChild is set
    this.subscriptionOnChange = this.datetimeInput.ionChange.subscribe(e => {
      this.value = e.detail.value;
      this.onChange(this.value);
    });
    this.subscriptionOnBlur = this.datetimeInput.ionBlur.subscribe(() => {
      this._onTouched();
    });
    if (this.datetimeInput.value) {
      setTimeout(() => {
        this.value = this.datetimeInput.value;
        this.onChange(this.value);
      }, 10);
    }
  }
  ngOnDestroy() {
    this.subscriptionOnChange && this.subscriptionOnChange.unsubscribe();
    this.subscriptionOnBlur && this.subscriptionOnBlur.unsubscribe();
  }
  writeValue(value) {
    this.value = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onChange(_) {}
  _onTouched() {}
  formatDate(value) {
    if (!value) {
      return "";
    }
    let options;
    if (!this.formatOptions) {
      switch (this.presentation) {
        case "date":
          options = {
            dateStyle: "medium"
          };
          break;
        case "date-time":
          options = {
            dateStyle: "medium",
            timeStyle: "short"
          };
          break;
        case "month":
          options = {
            month: "long"
          };
          break;
        case "month-year":
          options = {
            year: "numeric",
            month: "long"
          };
          break;
        case "time":
          options = {
            timeStyle: "short"
          };
          break;
        case "time-date":
          options = {
            dateStyle: "medium",
            timeStyle: "short"
          };
          break;
        case "year":
          options = {
            year: "numeric"
          };
          break;
        default:
          options = {
            dateStyle: "medium",
            timeStyle: "short"
          };
      }
    } else {
      options = this.formatOptions;
    }
    let res;
    try {
      res = new Date(value).toLocaleString(this.locale || 'en-US', options);
    } catch (e) {
      console.log(e);
      res = value;
    }
    return res;
  }
  static ctorParameters = () => [];
  static propDecorators = {
    datetimeInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonDatetime]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    presentation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formatOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ApperyioDatetime = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  template: `
        <ion-text class="placeholder" *ngIf="!value">{{placeholder || ('Select ' + (presentation === "time" ? 'time' : 'a date'))}}</ion-text>
        <ion-text *ngIf="value">{{formatDate(value)}}</ion-text>
        <button class="click-button" type="button" id="open-datetime{{id}}"></button>
        <ion-modal class="aio-datetime-modal" trigger="open-datetime{{id}}" [keepContentsMounted]="true">
            <ng-template>
                <ion-content>
                    <ng-content></ng-content>
                </ion-content>
            </ng-template>
        </ion-modal>
    `,
  selector: 'aio-datetime',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ApperyioDatetime),
    multi: true
  }],
  styles: [(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ApperyioDatetime);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioDatetime);

/***/ }),

/***/ 6776:
/*!********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA%3D%3D!./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts */ 5878);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





const DEF_NO_FILE_MSG = "No file chosen";
const DEF_FILES_MSG = "file(s)";
let ApperyioFilePicker = class ApperyioFilePicker {
  inputEl;
  _multiple = false;
  change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  disabled = false;
  type;
  showCount;
  showFiles;
  showRemoveIcon;
  buttonText;
  noFilesText;
  filesText;
  iconSize;
  imageSrc;
  multiple;
  accept;
  value;
  currValue = undefined;
  _setValue(value) {
    this.currValue = value;
    this.refreshFilesList();
    this.ngModelOnChange && setTimeout(() => {
      this.ngModelOnChange(value);
    }, 0);
  }
  _filesInfo = [];
  get filesInfo() {
    return this._filesInfo;
  }
  getValue() {
    return this.currValue;
  }
  isFile(value) {
    return value instanceof File;
  }
  setValue(value) {
    if (this._multiple) {
      if (!Array.isArray(value)) {
        value = this.isFile(value) ? [value] : [];
      }
      for (let i = 0; i < value.length; i++) {
        if (!this.isFile(value[i])) {
          this._setValue([]);
          return;
        }
      }
      if (!_.isEqual(this.currValue, value)) {
        this._setValue(value);
      }
    } else {
      if (!this.isFile(value)) {
        this._setValue(undefined);
        return;
      }
      if (!_.isEqual(this.currValue, value)) {
        this._setValue(value);
      }
    }
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this._multiple = changes.multiple.currentValue === 'true' || changes.multiple.currentValue === true;
      if (this._multiple) {
        this.inputEl.nativeElement.setAttribute("multiple", "true");
      } else {
        this.inputEl.nativeElement.removeAttribute("multiple");
      }
    }
    if (changes.value) {
      this.setValue(changes.value.currentValue);
    }
  }
  returnFileSize(number) {
    if (!number) return "-";
    if (number < 1024) {
      return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + 'MB';
    }
  }
  getFilesText() {
    return !this._filesInfo.length ? this.noFilesText || DEF_NO_FILE_MSG : this._filesInfo.length + " " + (this.filesText || DEF_FILES_MSG);
  }
  getFileInfo(file) {
    return {
      name: file.name,
      size: this.returnFileSize(file.size)
    };
  }
  refreshFilesList() {
    const value = this.currValue;
    if (!value) {
      this._filesInfo = [];
      return;
    }
    if (!this._multiple) {
      this._filesInfo = [this.getFileInfo(value)];
    } else {
      this._filesInfo = value.map(value => this.getFileInfo(value));
    }
  }
  removeFile(index) {
    if (this._multiple) {
      let value = this.currValue;
      value.splice(index, 1);
      this._setValue(value);
    } else {
      this._setValue(undefined);
    }
  }
  /**
   * A callback executed when the content of the editor changes. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ngModelOnChange;
  /**
   * A callback executed when the editor has been blurred. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ccOnTouched;
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    this.setValue(value);
    this.refreshFilesList();
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.ngModelOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.ccOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {}
  onChange($event) {
    $event.stopPropagation();
    const value = this._multiple ? Array.from(this.inputEl.nativeElement.files) : this.inputEl.nativeElement.files[0];
    this._setValue(value);
    this.inputEl.nativeElement.value = "";
    this.change.emit(new CustomEvent("ionChange", {
      detail: {
        value: this.currValue
      }
    }));
  }
  onSelect() {
    if (this.disabled === true || this.disabled.toLowerCase && this.disabled.toLowerCase() === "true") return;
    this.inputEl.nativeElement.click();
  }
  static propDecorators = {
    inputEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inputEl', {
        static: true
      }]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['ionChange']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showFiles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showRemoveIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    buttonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noFilesText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filesText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    iconSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    accept: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ApperyioFilePicker = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  template: `
        <input 
            #inputEl
            type="file"
            (change)="onChange($event)"
            style="width: 0px!important;height: 0px!important;pointer-events: none;"
            accept="{{accept || ''}}"
            >
        <ion-button 
            *ngIf="type !== 'image'"
            [disabled]="disabled"
            (click)="onSelect()"
            >
            {{buttonText || "Select file"}}
        </ion-button>
        <img 
            *ngIf="type === 'image'"
            [ngClass]="{disabled: disabled}"
            [src]="imageSrc"
            (click)="onSelect()">
        <span 
            *ngIf="showCount === 'true'"
            [ngClass]="{disabled: disabled}"
            class="files-count"
            >
            {{ getFilesText() }}
        </span>
        <div 
            *ngIf="showFiles === 'true' && filesInfo.length"
            [ngClass]="{disabled: disabled}"
            class="files-list"
            >
            <div
                class="file-info"
                *ngFor="let fileInfo of filesInfo; let i = index"
            >
                <span>
                    {{fileInfo.name}} ({{fileInfo.size}})
                </span>
                <ion-icon
                    *ngIf="showRemoveIcon === 'true'"
                    class="remove-icon"
                    name="close-circle-outline"
                    size="{{iconSize}}"
                    (click)="removeFile(i)">
                </ion-icon>
            </div>
        </div>
    `,
  selector: 'aio-file-picker',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ApperyioFilePicker),
    multi: true
  }],
  styles: [(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], ApperyioFilePicker);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioFilePicker);

/***/ }),

/***/ 1296:
/*!********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_form_change_directive.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
var _a;





class EventLike {
  currentTarget;
  target;
  constructor(value) {
    this.currentTarget = {
      value
    };
    this.target = {
      value
    };
  }
}
let AioFormChangeDirective = class AioFormChangeDirective {
  hostRef;
  ngForm;
  nativeForm;
  valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  constructor(hostRef) {
    this.hostRef = hostRef;
    this.nativeForm = this.hostRef.element.nativeElement;
  }
  ngOnInit() {
    this.subscriptions.add(this.createValueObservable().subscribe(value => {
      this.valueChange.emit(value);
    }));
    this.subscriptions.add(this.createStatusObservable().subscribe(status => {
      this.statusChange.emit(status);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Returns true, if the form has native browser behavior
   */
  isNativeForm() {
    return !!this.nativeForm && this.nativeForm.hasAttribute("ngNoForm");
  }
  /**
   * Event source of the (valueChange) output
   */
  createValueObservable() {
    if (this.isNativeForm()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.nativeForm, "change").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
        const formData = new FormData(event.currentTarget);
        const value = this.formDataToJSON(formData);
        return new EventLike(value);
      }));
    }
    return this.ngForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => new EventLike(value)));
  }
  /**
   * Event source of the (statusChange) output
   */
  createStatusObservable() {
    if (this.isNativeForm()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.nativeForm, "change").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
        const nativeForm = event.currentTarget;
        const status = nativeForm.checkValidity() ? "VALID" : "INVALID";
        return new EventLike(status);
      }));
    }
    return this.ngForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(status => new EventLike(status)));
  }
  formDataToJSON(formData) {
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }];
  static propDecorators = {
    ngForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["aioFormChange"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    statusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  };
};
AioFormChangeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "[aioFormChange]" // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef) === "function" ? _a : Object])], AioFormChangeDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioFormChangeDirective);

/***/ }),

/***/ 3984:
/*!**********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_password_show_directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio_helper */ 7845);
var _a, _b;



/**
 * The directive allows to simply show/hide password
 * For using it add the aioPasswordShow directive to ion-item wrapper of input
 */
const DEF_SHOW_ICON_NAME = 'eye';
const DEF_HIDE_ICON_NAME = 'eye-off';
let AioPasswordShowDirective = class AioPasswordShowDirective {
  el;
  Apperyio;
  aioPasswordShow = {};
  iconEl;
  inputEl;
  options;
  mode = "password";
  constructor(el, Apperyio) {
    this.el = el;
    this.Apperyio = Apperyio;
  }
  // ngAfterContentInit() {
  ngAfterViewInit() {
    this.options = this.aioPasswordShow && typeof this.aioPasswordShow === 'object' ? this.aioPasswordShow : {};
    this.iconEl = this.el.nativeElement.querySelector("ion-icon[data-action='show-hide']");
    if (!this.iconEl) {
      this.iconEl = this.el.nativeElement.querySelector("ion-icon[name='" + this.options.showIconName || 0);
    }
    if (!this.iconEl) {
      this.iconEl = this.el.nativeElement.querySelector("ion-icon");
    }
    if (!this.iconEl) {
      return;
    }
    if (this.options.showIconName) {
      this.iconEl.name = this.options.showIconName;
    }
    this.iconEl.addEventListener("click", () => this.toggleMode());
    this.Apperyio.preload.icons([this.options.hideIconName || DEF_HIDE_ICON_NAME]);
  }
  toggleMode() {
    this.mode = this.mode === "password" ? "text" : "password";
    if (this.mode === "password") {
      this.iconEl.name = this.options.showIconName || DEF_SHOW_ICON_NAME;
    } else {
      this.iconEl.name = this.options.hideIconName || DEF_HIDE_ICON_NAME;
    }
    if (!this.inputEl) {
      this.inputEl = this.el.nativeElement.querySelector("input");
    }
    let selectionStart = this.inputEl.selectionStart,
      selectionEnd = this.inputEl.selectionEnd;
    this.inputEl.type = this.mode;
    // restore cursor position/selection
    setTimeout(() => {
      this.inputEl.selectionStart = selectionStart;
      this.inputEl.selectionEnd = selectionEnd;
    }, 0);
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
  static propDecorators = {
    aioPasswordShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
AioPasswordShowDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[aioPasswordShow]' // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef) === "function" ? _a : Object, typeof (_b = typeof _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _b : Object])], AioPasswordShowDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioPasswordShowDirective);

/***/ }),

/***/ 1202:
/*!***********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA%3D!./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts */ 425);
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ApperyioTesterButtons = class ApperyioTesterButtons {
  hidden = true;
  hideBackButton = false;
  constructor() {
    if (location.href.includes("hot_reload=true") || location.href.includes("preview_build=true")) {
      if (window._aioTesterButtonHidden !== true) {
        this.hidden = false;
      }
      if (location.href.includes("preview_build=true")) {
        this.hideBackButton = true;
      }
    }
  }
  reload() {
    window.location.reload();
  }
  goBack() {
    window.location.href = window.navigator.vendor.includes("Apple") ? "ionic://localhost/" : "https://localhost/";
  }
  goToHomeScreen() {
    window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"));
  }
  hide() {
    if (confirm(`Hide the Controls menu buttons? \nNote that you will need to restart ${location.href.includes("hot_reload=true") ? "Appery.io Tester" : "the application"} to view your project updates and unhide the app controls?`)) {
      window._aioTesterButtonHidden = true;
      this.hidden = true;
    }
  }
  ngAfterContentChecked() {
    if (!this.hidden && window._aioTesterButtonHidden === true) {
      this.hidden = true;
    }
  }
  static ctorParameters = () => [];
};
ApperyioTesterButtons = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: `
    <ion-fab vertical="bottom" horizontal="end" slot="fixed" *ngIf="!hidden">
        <ion-fab-button color="light">
            <ion-icon name="share" src="assets/images/aio_tester_button.svg">
            </ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
            <ion-fab-button (click)="goBack()" *ngIf="!hideBackButton">
                <ion-icon name="arrow-back-circle-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="hide()">
                <ion-icon name="contract-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="goToHomeScreen()">
                <ion-icon name="home-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="reload()">
                <ion-icon name="reload-outline">
                </ion-icon>
            </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
    `,
  selector: 'aio-tester-buttons',
  styles: [(_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], ApperyioTesterButtons);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioTesterButtons);

/***/ }),

/***/ 5877:
/*!*******************************************************!*\
  !*** ./src/app/scripts/apperyio/entityapi_service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityApiService": () => (/* binding */ EntityApiService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 4274);


/**
 * General algorithm: create hash object where
 *  - Key is any path inside model
 *  - Value isolated function which returns already prepared entity
 *
 * This implementation avalible inside app as `Apperyio.EntityAPI('{ModelName.path}')`
 *
 * Instance exdends `Apperyio` instance in `Apperyio.js`
 *     by implement integration interface in `sentity.js with app/services/model.js`
 *
 * User documentation: https://docs.appery.io/docs/appbuilder-ionic-model#section-model-api
 */
function _type(model) {
  return model && (model.type || model.$ref);
}
var clone = (lodash__WEBPACK_IMPORTED_MODULE_0___default().clone),
  isArray = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray),
  each = (lodash__WEBPACK_IMPORTED_MODULE_0___default().each),
  keys = (lodash__WEBPACK_IMPORTED_MODULE_0___default().keys),
  union = (lodash__WEBPACK_IMPORTED_MODULE_0___default().union),
  map = (lodash__WEBPACK_IMPORTED_MODULE_0___default().map),
  isObject = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject),
  isFunction = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isFunction),
  TypeNotFoundError = function (message) {
    return {
      "name": "TypeNotFoundError",
      message: message
    };
  },
  NoModelError = function (message) {
    return {
      "name": "NoModelError",
      message: message
    };
  },
  // we supporting two syntaxes: `model.[i].property` and `model.[2].property`
  ARRAY_PATH_regex = /\[(i|\d+)\]/;
/**
 * EntityApiService base constructor for Instances of Model provided as argument
 */
class EntityApiService {
  default_undefined = true;
  models;
  _types;
  constructor() {
    this.models = _models__WEBPACK_IMPORTED_MODULE_1__.models || [];
    /**
     * Base types
     * @type {Object}
     */
    this._types = {
      "string": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "any": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "data": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "number": function (model) {
        return parseInt(model && model.default || 0, 10) || (this.default_undefined ? undefined : 0);
      },
      "boolean": function (model) {
        var result = model && lodash__WEBPACK_IMPORTED_MODULE_0___default().isBoolean(model.default) ? model.default : this.default_undefined ? undefined : false;
        if (typeof result == "string") {
          result = result.toLowerCase() === "true" || result === "1" || parseInt(result, 10) > 0;
        } else if (typeof result == "number") {
          result = result > 0;
        }
        return result;
      },
      "object": function (model) {
        var result = {};
        if (model && model.properties) {
          for (var key in model.properties) {
            result[key] = this._get(model.properties[key].type || model.properties[key].$ref, model.properties[key]);
          }
        }
        return result;
      },
      "array": function (model) {
        if (!model) {
          return [];
        }
        var result = model['default'] || [],
          self = this;
        if (isArray(model.items)) {
          // v2 version -- items is array
          each(model.items, function (item) {
            if (typeof item.index == "number") {
              // special model for item with concrete index
              result[item.index] = self._get(_type(item) || 'string', item);
            } else {
              // general or default item in array,
              // this model will be applied to all array items, except special indexed items
              result.__entity = self._get.bind(self, _type(item) || 'string', item);
            }
          });
          // in case when we for some reason don't have general model for items
          // we set it as `undefined`
          if (!result.__entity) {
            result.__entity = function () {
              return undefined;
            };
          }
        } else if (isObject(model.items)) {
          // v1 format - simple object for describing one model for items
          // pregenerate type
          this._get(_type(model.items), model.items);
          // create method for generating array items,
          // useful on merge step with given defaults
          result.__entity = this._get.bind(this, _type(model.items) || 'string', model.items);
        }
        return result;
      },
      "null": function (model) {
        return null;
      }
    };
  }
  /**
   * Retrieve instance of model specified by Name
   * @param  {String} name              Name of Model or Path to Model part
   * @param  {Object} defaults          Plain-object which will be merged to the instance
   * @param  {boolean} default_undefined If true, then any property in generated entity
   *                                     will be initialized by `undefined`, otherwise, by
   *                                     type specific empty value (0, "", false, {})
   * @param {boolean} skip_empty_objects  If true, then any empty property (empty arrays and objects
   *                                      without properties that differs from `undefined`)
   *                                      in generated entity will be set to `undefined`.
   * @return {Object}                   Instance of Model/Model part
   */
  get(name, defaults, default_undefined, skip_empty_objects) {
    var result = null;
    this.default_undefined = default_undefined || false;
    var isObjectDefaults = Object.prototype.toString.call(defaults) === "[object Object]";
    if (typeof defaults !== typeof undefined && !isObjectDefaults) {
      result = defaults;
    } else {
      result = this._get(name);
      if (isObjectDefaults) {
        result = this.__special_merge(result, defaults);
      }
      if (skip_empty_objects) {
        result = this._skip_empty_objects(lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(result));
      }
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeepWith(result, function (v) {
      if (isArray(v)) {
        var r = v.concat();
        r.__entity = v.__entity;
        return r;
      }
    });
  }
  /**
   * Recursive merge default value to Model Instance considering case with One Item in Array from XML
   * @privat
   * @param  {Object} from_model
   * @param  {Object} defaults
   * @return {Object}
   */
  __special_merge(from_model, defaults) {
    function merge(a, b) {
      var result, tmp;
      if (isObject(b)) {
        each(union(keys(a), keys(b)), function (k) {
          result = result || {};
          if (b.hasOwnProperty(k)) {
            // restoring array items
            if (isArray(a[k]) && a[k].hasOwnProperty('__entity')) {
              result[k] = [];
              for (let j = 0; j < a[k].length; j++) {
                result[k][j] = a[k][j];
              }
              var b_k = b[k];
              // now we restoring array items,
              // but if given default value is not an Array?
              // We should wrap it into Array
              if (!isArray(b_k)) {
                b_k = [b_k];
              }
              // Process each item in array one by one for Arrays with specific model for some items
              for (var b_i = 0, b_len = b_k.length; b_i < b_len; b_i++) {
                tmp = a[k][b_i] === undefined ? a[k].__entity(b_i) : clone(a[k][b_i]);
                if (isArray(b_k[b_i])) {
                  result[k][b_i] = map(b_k[b_i], merge.bind(null, tmp));
                } else {
                  result[k][b_i] = merge(tmp, b_k[b_i]);
                }
              }
            } else if (isObject(a[k])) {
              result[k] = merge(a[k], b[k]);
            } else {
              result[k] = b[k];
            }
          } else {
            result[k] = a[k];
          }
        });
      }
      result = result || a || b;
      return result;
    }
    return merge(from_model, defaults);
  }
  /**
   * Recursive check if object/array has no nonempty values then change it to "undefined"
   * @privat
   * @param  {Object} model
   * @return {Object}
   */
  _skip_empty_objects(model) {
    function isEmptyOblect(obj) {
      if (Object.prototype.toString.call(obj) === "[object Object]") {
        for (var key in obj) {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default().has(obj, key) && obj[key] !== undefined && !isFunction(obj[key])) {
            return false;
          }
        }
      } else if (isArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
          if (obj[i] !== undefined) {
            return false;
          }
        }
      }
      return true;
    }
    var filterEmpty = function filterEmpty(data) {
      var objKeys = keys(data);
      for (var i = 0; i < objKeys.length; i++) {
        if (isObject(data[objKeys[i]])) {
          data[objKeys[i]] = filterEmpty(data[objKeys[i]]);
        }
      }
      if (isObject(data) && isEmptyOblect(data)) {
        return undefined;
      }
      return data;
    };
    return filterEmpty(model);
  }
  /**
   * Get hash name for specified name and get params
   * @privat
   * @param  {String} name Name of type
   * @return {Object}
   */
  _get_hash_name(name) {
    return name + "/" + (!!this.default_undefined).toString();
  }
  /**
   * Internal retrieving Instance of Model
   * @privat
   * @param  {String} name Model name
   * @return {Object}
   */
  _get(name, md) {
    var hashName = this._get_hash_name(name);
    if (typeof this._types[hashName] == "function") {
      return this._types[hashName].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    if (typeof this._types[name] == "function") {
      return this._types[name].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      try {
        this._add(name);
      } catch (e) {
        if (e instanceof NoModelError) {
          throw TypeNotFoundError(e.message);
        }
        throw e;
      }
      return this._types[hashName].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
  /**
   * Expand user dot-path to internal path format for part of Model
   * @privat
   * @param  {String} name Path or Name of Model
   * @return {Array}      internal formatted path
   */
  _expand_path(name) {
    var new_path = [],
      m,
      path = name.split('.');
    new_path = [path.shift()];
    for (var i = 0, l = path.length; i < l; i++) {
      m = ARRAY_PATH_regex.exec(path[i]);
      if (isArray(m)) {
        new_path.push(['items', m[1]]);
      } else {
        new_path.push('properties');
        new_path.push(path[i]);
      }
    }
    return new_path;
  }
  /**
   * Internal method for adding new Models
   * @privat
   * @param {String} name Model name
   */
  _add(name) {
    var path = [],
      model;
    if (this.models[name] == undefined) {
      if (name.indexOf('.') > -1) {
        path = this._expand_path(name);
        model = clone(this.models[path.shift()]);
        var l = path.length;
        var i = 0;
        while (i < l) {
          var item = path[i],
            j,
            jl;
          if (isArray(item) && isArray(model.items)) {
            // new format of model
            if (parseInt(item[1], 10) == item[1]) {
              // array index is number
              for (j = 0, jl = model.items.length; j < jl; j++) {
                if (model.items[j].index == item[1]) {
                  model = model.items[j];
                  i++;
                  break;
                }
              }
            } else if (item[1] == "i") {
              //searching for first element without `index` property
              for (j = 0, jl = model.items.length; j < jl; j++) {
                if (!model.items[j].hasOwnProperty('index')) {
                  model = model.items[j];
                  i++;
                  break;
                }
              }
            }
          } else {
            if (isArray(item)) {
              // old array format (as object) but after new path-converter
              item = "items";
            }
            if (model.hasOwnProperty(item)) {
              model = model[item];
              i++;
            } else {
              model = this.models[_type(model)];
              if (typeof model == 'undefined') {
                throw NoModelError(_type(model) + ' not found');
              }
            }
          }
        }
      } else {
        throw NoModelError("Can't found `" + name + "` model");
      }
    } else {
      model = this.models[name];
    }
    this.__add(name, model);
  }
  /**
   * Compile and add new Model
   * @privat
   * @param  {String} name  Model name
   * @param  {Object} model Model description
   */
  __add(name, model) {
    this._types[this._get_hash_name(name)] = function (self, key, md) {
      var result = null;
      try {
        result = function (v) {
          return function () {
            return v;
          };
        }(self._get(_type(md), md));
      } catch (e) {
        if (e instanceof NoModelError) {
          result = self._add(key);
        } else {
          throw e;
        }
      }
      return result;
    }(this, name, model);
  }
  /**
   * Recursively remove all undefined values (in all nested levels) from object
   * @param  {Object}
   */
  removeUndefined(obj) {
    if (obj && isObject(obj)) {
      if (isArray(obj)) {
        obj = obj.filter(item => item !== undefined);
        for (var i = 0; i < obj.length; i++) {
          obj[i] = this.removeUndefined(obj[i]);
        }
      }
      for (var name in obj) {
        if (obj[name] === undefined) {
          delete obj[name];
        }
        if (obj[name] && isObject(obj[name])) {
          obj[name] = this.removeUndefined(obj[name]);
        }
      }
    }
    return obj;
  }
}
;

/***/ }),

/***/ 3905:
/*!***********************************************************!*\
  !*** ./src/app/scripts/apperyio/modal_screens_service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalScreensService": () => (/* binding */ ModalScreensService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let ModalScreensService = class ModalScreensService {
  modalScreens = {};
  getModalScreen(screenName) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.modalScreens[screenName];
    })();
  }
};
ModalScreensService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ModalScreensService);

;

/***/ }),

/***/ 3952:
/*!******************************************************!*\
  !*** ./src/app/scripts/apperyio/translate_module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioTranslateModule": () => (/* binding */ ApperyioTranslateModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);






function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let ApperyioTranslateModule = class ApperyioTranslateModule {};
ApperyioTranslateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule.forChild({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient]
    }
  })],
  exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
})], ApperyioTranslateModule);


/***/ }),

/***/ 2482:
/*!**********************************************!*\
  !*** ./src/app/scripts/components.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes.module */ 6972);
/* harmony import */ var _directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives.module */ 3543);








let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule],
  exports: [],
  entryComponents: []
})], ComponentsModule);


/***/ }),

/***/ 7074:
/*!**************************************!*\
  !*** ./src/app/scripts/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGNORED_VALUE": () => (/* binding */ IGNORED_VALUE),
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "projectInfo": () => (/* binding */ projectInfo),
/* harmony export */   "pushSettings": () => (/* binding */ pushSettings),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
const constants = {
  /**
   * recycleDB_settings
   * @property database_id       -
   */
  recycleDB_settings: {
    "database_id": "63f1bd1d0f0d317273a09ec2"
  },
  /**
   * Settings
   */
  Settings: {},
  /**
   * SecuritySettings
   * @property database_id       -
   */
  SecuritySettings: {
    "database_id": "63f101250f0d317273a0939e"
  },
  /**
   * Photo_settings
   * @property database_id       - Please enter ID of your Appery.io Data Base
   * @property master_key       - Use X-Appery-Master-Key for tests. Please use X-Appery-Session-Token instead of X-Appery-Master-Key in production
   */
  Photo_settings: {
    "database_id": "63f164ca0f0d317273a09ebf",
    "master_key": "2a44ac4b-7616-4d26-a921-5d1c2a634dfb"
  }
};
const routes = {
  "Screen1": "screen1",
  "Screen2": "screen2",
  "Screen1_46739": "chat_screen",
  "Screen1_13759": "screen1",
  "Login": "login",
  "SignUp": "signup",
  "Home": "home",
  "PrivacyPolicy": "privacypolicy",
  "TermsOfService": "termsofservice",
  "Autocomplete": "home",
  "Screen1_76990": "camera",
  "RecyclingLocations": "recyclinglocations",
  "UploadPhotoScreen": "uploadphotoscreen",
  "Map": "map",
  "signup": "Autocomplete"
};
const pushSettings = {
  appID: '9c21cc0b-e4c1-4ce0-a643-952287eed916',
  baseUrl: 'https://api.appery.io/rest/push/reg',
  baseSendUrl: 'https://api.appery.io/rest/push/msg',
  initOptions: {}
};
const projectInfo = {
  guid: '9c21cc0b-e4c1-4ce0-a643-952287eed916',
  name: 'RecycleBot',
  description: ''
};
const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");

/***/ }),

/***/ 6235:
/*!*****************************************************!*\
  !*** ./src/app/scripts/custom-components.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CustomComponentsModule = class CustomComponentsModule {};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  exports: [],
  imports: []
})], CustomComponentsModule);


/***/ }),

/***/ 4363:
/*!**************************************************!*\
  !*** ./src/app/scripts/custom-modules.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModulesModule": () => (/* binding */ CustomModulesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CustomModulesModule = class CustomModulesModule {};
CustomModulesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [],
  exports: []
})], CustomModulesModule);


/***/ }),

/***/ 2629:
/*!***********************************************!*\
  !*** ./src/app/scripts/custom/Camera_Impl.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 2027);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);

var _a, _b, _c, _d;








let CameraService = class CameraService {
  entityAPI;
  Apperyio;
  camera;
  webview;
  constructor(entityAPI, Apperyio, camera, webview) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.camera = camera;
    this.webview = webview;
  }
  getBoolean(val) {
    if (typeof val === "boolean") {
      return val;
    }
    if (typeof val === "string") {
      return val === "false" || !val ? false : true;
    }
    return !!val;
  }
  getOptions(requestData) {
    let options = {};
    let quality = parseInt(requestData.quality);
    if (quality && quality > 0 && quality <= 100) {
      options.quality = quality;
    }
    let destinationType = requestData.destinationType;
    if (this.camera.DestinationType[destinationType] == undefined) {
      destinationType = "FILE_URI";
    }
    options.destinationType = this.camera.DestinationType[destinationType];
    let sourceType = requestData.sourceType;
    if (this.camera.PictureSourceType[sourceType] == undefined) {
      sourceType = "CAMERA";
    }
    options.sourceType = this.camera.PictureSourceType[sourceType];
    let mediaType = requestData.mediaType;
    if (this.camera.MediaType[mediaType] == undefined) {
      mediaType = "PICTURE";
    }
    options.mediaType = this.camera.MediaType[mediaType];
    if (requestData.allowEdit != undefined) {
      options.allowEdit = this.getBoolean(requestData.allowEdit);
    }
    let encodingType = requestData.encodingType;
    if (this.camera.EncodingType[encodingType] == undefined) {
      encodingType = "JPEG";
    }
    options.encodingType = this.camera.EncodingType[encodingType];
    let targetWidth = parseInt(requestData.targetWidth);
    if (targetWidth && targetWidth > 0) {
      options.targetWidth = targetWidth;
    }
    let targetHeight = parseInt(requestData.targetHeight);
    if (targetHeight && targetHeight > 0) {
      options.targetHeight = targetHeight;
    }
    let cameraDirection = requestData.cameraDirection;
    if (this.camera.Direction[cameraDirection] == undefined) {
      cameraDirection = "BACK";
    }
    options.cameraDirection = this.camera.Direction[cameraDirection];
    if (requestData.correctOrientation != undefined) {
      options.correctOrientation = this.getBoolean(requestData.correctOrientation);
    }
    if (requestData.saveToPhotoAlbum != undefined) {
      options.saveToPhotoAlbum = this.getBoolean(requestData.saveToPhotoAlbum);
    }
    if (requestData.popoverOptions) {
      options.popoverOptions = requestData.popoverOptions;
    }
    return options;
  }
  execCordova(observer, options) {
    this.camera.getPicture(options).then(imageData => {
      if (options.destinationType === this.camera.DestinationType.DATA_URL && options.mediaType !== this.camera.MediaType.VIDEO) {
        observer.next({
          imageDataBase64: imageData
        });
      } else {
        observer.next({
          imageURI: imageData,
          fileSrc: this.webview.convertFileSrc(imageData)
        });
      }
      observer.complete();
    }, err => {
      observer.error(err);
    });
  }
  execPreview(observer, options) {
    let dummyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAaJJREFUaEPd2ltugzAUhGHTVcD+FwZvsIuUsTiIcDG+zIHj/FKqNJXwfEr7UJTGOfeZH24cR9e2LZ5W0zRNrus6//zPf53DC8MwLN/ZD1sF4ZvfCbwj66Pv+4/1sHG72RvOfmAZc7XVQ1ANmNDGFYIsY+62fUGQRUzMpgMEWcLEbjmFIAuYlA2XEPQmJvXsIAS9gck58xaCnsTknhUFQU9gSs6IhiBNTOm1kyBIA8O4ZjIEMTGsa2VBEGMAC4GyIahkCBOBiiAoZxAbgYohKGWYBgJRIChmoBYC0SAoNFQTgagQtB+M/6efuC9Ah6A9ZvvQQKAGX+YD6G3vOUma987W+1q1pwI53DxbUr0J6H/BiP3EH/sesR0c+hkjGiRmqCaGAkkZqIUphuQM08AUQUoGsTHZEMYQJiYLwhzAulYyhImQGNdMgmggpNJrR0M0EVLJGVGQJxBS7lm3kCcRUs6ZQcgbCCn17EvImwgpZcMpxAJCit1ygFhCSDGbviAWEdLdthViGSGFNnpIDQjpauvvfKhm+0INCGmPaZYnlX/wzLl/gQMOeWDLh1EAAAAASUVORK5CYII=",
      dummyImgPath = "assets/images/no-image.jpg";
    if (options.destinationType === this.camera.DestinationType.DATA_URL) {
      observer.next({
        imageDataBase64: dummyImg
      });
    } else {
      observer.next({
        imageURI: dummyImgPath,
        fileSrc: dummyImgPath
      });
    }
    observer.complete();
  }
  execEcho(observer, echo) {
    try {
      echo = JSON.parse(echo);
    } catch (e) {}
    observer.next(echo);
    observer.complete();
  }
  execute(reqOpts) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(observer => {
      try {
        (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let srvName = yield _this.Apperyio.getGSNameByImpl(_this);
          if (!srvName) {
            observer.error("Service was not found");
            return;
          }
          let service = _this.entityAPI.get(srvName),
            echo = service.echo;
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default().isUndefined(echo)) {
            let requestData = lodash__WEBPACK_IMPORTED_MODULE_2___default().extend({}, service.request.data, reqOpts.data);
            let options = _this.getOptions(requestData);
            if (!window.cordova) {
              _this.execPreview(observer, options);
            } else {
              _this.execCordova(observer, options);
            }
          } else {
            _this.execEcho(observer, echo);
          }
        })();
      } catch (e) {
        observer.error(e);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera
  }, {
    type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView
  }];
};
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera !== "undefined" && _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera) === "function" ? _c : Object, typeof (_d = typeof _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView !== "undefined" && _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView) === "function" ? _d : Object])], CameraService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 138:
/*!******************************************************!*\
  !*** ./src/app/scripts/custom/Camera_Impl_Camera.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 2027);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);

var _a, _b, _c, _d;








let CameraService = class CameraService {
  entityAPI;
  Apperyio;
  camera;
  webview;
  constructor(entityAPI, Apperyio, camera, webview) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.camera = camera;
    this.webview = webview;
  }
  getBoolean(val) {
    if (typeof val === "boolean") {
      return val;
    }
    if (typeof val === "string") {
      return val === "false" || !val ? false : true;
    }
    return !!val;
  }
  getOptions(requestData) {
    let options = {};
    let quality = parseInt(requestData.quality);
    if (quality && quality > 0 && quality <= 100) {
      options.quality = quality;
    }
    let destinationType = requestData.destinationType;
    if (this.camera.DestinationType[destinationType] == undefined) {
      destinationType = "FILE_URI";
    }
    options.destinationType = this.camera.DestinationType[destinationType];
    let sourceType = requestData.sourceType;
    if (this.camera.PictureSourceType[sourceType] == undefined) {
      sourceType = "CAMERA";
    }
    options.sourceType = this.camera.PictureSourceType[sourceType];
    let mediaType = requestData.mediaType;
    if (this.camera.MediaType[mediaType] == undefined) {
      mediaType = "PICTURE";
    }
    options.mediaType = this.camera.MediaType[mediaType];
    if (requestData.allowEdit != undefined) {
      options.allowEdit = this.getBoolean(requestData.allowEdit);
    }
    let encodingType = requestData.encodingType;
    if (this.camera.EncodingType[encodingType] == undefined) {
      encodingType = "JPEG";
    }
    options.encodingType = this.camera.EncodingType[encodingType];
    let targetWidth = parseInt(requestData.targetWidth);
    if (targetWidth && targetWidth > 0) {
      options.targetWidth = targetWidth;
    }
    let targetHeight = parseInt(requestData.targetHeight);
    if (targetHeight && targetHeight > 0) {
      options.targetHeight = targetHeight;
    }
    let cameraDirection = requestData.cameraDirection;
    if (this.camera.Direction[cameraDirection] == undefined) {
      cameraDirection = "BACK";
    }
    options.cameraDirection = this.camera.Direction[cameraDirection];
    if (requestData.correctOrientation != undefined) {
      options.correctOrientation = this.getBoolean(requestData.correctOrientation);
    }
    if (requestData.saveToPhotoAlbum != undefined) {
      options.saveToPhotoAlbum = this.getBoolean(requestData.saveToPhotoAlbum);
    }
    if (requestData.popoverOptions) {
      options.popoverOptions = requestData.popoverOptions;
    }
    return options;
  }
  execCordova(observer, options) {
    this.camera.getPicture(options).then(imageData => {
      if (options.destinationType === this.camera.DestinationType.DATA_URL && options.mediaType !== this.camera.MediaType.VIDEO) {
        observer.next({
          imageDataBase64: imageData
        });
      } else {
        observer.next({
          imageURI: imageData,
          fileSrc: this.webview.convertFileSrc(imageData)
        });
      }
      observer.complete();
    }, err => {
      observer.error(err);
    });
  }
  execPreview(observer, options) {
    let dummyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAaJJREFUaEPd2ltugzAUhGHTVcD+FwZvsIuUsTiIcDG+zIHj/FKqNJXwfEr7UJTGOfeZH24cR9e2LZ5W0zRNrus6//zPf53DC8MwLN/ZD1sF4ZvfCbwj66Pv+4/1sHG72RvOfmAZc7XVQ1ANmNDGFYIsY+62fUGQRUzMpgMEWcLEbjmFIAuYlA2XEPQmJvXsIAS9gck58xaCnsTknhUFQU9gSs6IhiBNTOm1kyBIA8O4ZjIEMTGsa2VBEGMAC4GyIahkCBOBiiAoZxAbgYohKGWYBgJRIChmoBYC0SAoNFQTgagQtB+M/6efuC9Ah6A9ZvvQQKAGX+YD6G3vOUma987W+1q1pwI53DxbUr0J6H/BiP3EH/sesR0c+hkjGiRmqCaGAkkZqIUphuQM08AUQUoGsTHZEMYQJiYLwhzAulYyhImQGNdMgmggpNJrR0M0EVLJGVGQJxBS7lm3kCcRUs6ZQcgbCCn17EvImwgpZcMpxAJCit1ygFhCSDGbviAWEdLdthViGSGFNnpIDQjpauvvfKhm+0INCGmPaZYnlX/wzLl/gQMOeWDLh1EAAAAASUVORK5CYII=",
      dummyImgPath = "assets/images/no-image.jpg";
    if (options.destinationType === this.camera.DestinationType.DATA_URL) {
      observer.next({
        imageDataBase64: dummyImg
      });
    } else {
      observer.next({
        imageURI: dummyImgPath,
        fileSrc: dummyImgPath
      });
    }
    observer.complete();
  }
  execEcho(observer, echo) {
    try {
      echo = JSON.parse(echo);
    } catch (e) {}
    observer.next(echo);
    observer.complete();
  }
  execute(reqOpts) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(observer => {
      try {
        (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let srvName = yield _this.Apperyio.getGSNameByImpl(_this);
          if (!srvName) {
            observer.error("Service was not found");
            return;
          }
          let service = _this.entityAPI.get(srvName),
            echo = service.echo;
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default().isUndefined(echo)) {
            let requestData = lodash__WEBPACK_IMPORTED_MODULE_2___default().extend({}, service.request.data, reqOpts.data);
            let options = _this.getOptions(requestData);
            if (!window.cordova) {
              _this.execPreview(observer, options);
            } else {
              _this.execCordova(observer, options);
            }
          } else {
            _this.execEcho(observer, echo);
          }
        })();
      } catch (e) {
        observer.error(e);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera
  }, {
    type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView
  }];
};
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera !== "undefined" && _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera) === "function" ? _c : Object, typeof (_d = typeof _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView !== "undefined" && _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView) === "function" ? _d : Object])], CameraService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 9269:
/*!******************************************************************************************!*\
  !*** ./src/app/scripts/custom/Camera_Impl_Take_photo_and_upload_into_Appery_database.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 2027);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);

var _a, _b, _c, _d;








let CameraService = class CameraService {
  entityAPI;
  Apperyio;
  camera;
  webview;
  constructor(entityAPI, Apperyio, camera, webview) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.camera = camera;
    this.webview = webview;
  }
  getBoolean(val) {
    if (typeof val === "boolean") {
      return val;
    }
    if (typeof val === "string") {
      return val === "false" || !val ? false : true;
    }
    return !!val;
  }
  getOptions(requestData) {
    let options = {};
    let quality = parseInt(requestData.quality);
    if (quality && quality > 0 && quality <= 100) {
      options.quality = quality;
    }
    let destinationType = requestData.destinationType;
    if (this.camera.DestinationType[destinationType] == undefined) {
      destinationType = "FILE_URI";
    }
    options.destinationType = this.camera.DestinationType[destinationType];
    let sourceType = requestData.sourceType;
    if (this.camera.PictureSourceType[sourceType] == undefined) {
      sourceType = "CAMERA";
    }
    options.sourceType = this.camera.PictureSourceType[sourceType];
    let mediaType = requestData.mediaType;
    if (this.camera.MediaType[mediaType] == undefined) {
      mediaType = "PICTURE";
    }
    options.mediaType = this.camera.MediaType[mediaType];
    if (requestData.allowEdit != undefined) {
      options.allowEdit = this.getBoolean(requestData.allowEdit);
    }
    let encodingType = requestData.encodingType;
    if (this.camera.EncodingType[encodingType] == undefined) {
      encodingType = "JPEG";
    }
    options.encodingType = this.camera.EncodingType[encodingType];
    let targetWidth = parseInt(requestData.targetWidth);
    if (targetWidth && targetWidth > 0) {
      options.targetWidth = targetWidth;
    }
    let targetHeight = parseInt(requestData.targetHeight);
    if (targetHeight && targetHeight > 0) {
      options.targetHeight = targetHeight;
    }
    let cameraDirection = requestData.cameraDirection;
    if (this.camera.Direction[cameraDirection] == undefined) {
      cameraDirection = "BACK";
    }
    options.cameraDirection = this.camera.Direction[cameraDirection];
    if (requestData.correctOrientation != undefined) {
      options.correctOrientation = this.getBoolean(requestData.correctOrientation);
    }
    if (requestData.saveToPhotoAlbum != undefined) {
      options.saveToPhotoAlbum = this.getBoolean(requestData.saveToPhotoAlbum);
    }
    if (requestData.popoverOptions) {
      options.popoverOptions = requestData.popoverOptions;
    }
    return options;
  }
  execCordova(observer, options) {
    this.camera.getPicture(options).then(imageData => {
      if (options.destinationType === this.camera.DestinationType.DATA_URL && options.mediaType !== this.camera.MediaType.VIDEO) {
        observer.next({
          imageDataBase64: imageData
        });
      } else {
        observer.next({
          imageURI: imageData,
          fileSrc: this.webview.convertFileSrc(imageData)
        });
      }
      observer.complete();
    }, err => {
      observer.error(err);
    });
  }
  execPreview(observer, options) {
    let dummyImg = "data:image/png;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QB7RXhpZgAASUkqAAgAAAACAA4BAgA/AAAAJgAAAJiCAgAOAAAAZQAAAAAAAABXYXJuaW5nIFNpZ24sIFN0b3JlLCBTaW5nbGUgV29yZCBObywgUGhvdG9ncmFwaHkgVGhlbWVzLCBWZWN0b3JBbGluYV9GZWRvcm92Yf/hBX5odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSJBbGluYV9GZWRvcm92YSIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iNTQ1OTg5OTE2IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5pc3RvY2twaG90by5jb20vbGVnYWwvbGljZW5zZS1hZ3JlZW1lbnQ/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5BbGluYV9GZWRvcm92YTwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+V2FybmluZyBTaWduLCBTdG9yZSwgU2luZ2xlIFdvcmQgTm8sIFBob3RvZ3JhcGh5IFRoZW1lcywgVmVjdG9yPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9waG90by9saWNlbnNlLWdtNTQ1OTg5OTE2LT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgr/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBk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",
      dummyImgPath = "assets/images/no-camera.jpeg";
    if (options.destinationType === this.camera.DestinationType.DATA_URL) {
      observer.next({
        imageDataBase64: dummyImg
      });
    } else {
      observer.next({
        imageURI: dummyImg,
        fileSrc: dummyImgPath
      });
    }
    observer.complete();
  }
  execEcho(observer, echo) {
    try {
      echo = JSON.parse(echo);
    } catch (e) {}
    observer.next(echo);
    observer.complete();
  }
  execute(reqOpts) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(observer => {
      try {
        (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let srvName = yield _this.Apperyio.getGSNameByImpl(_this);
          if (!srvName) {
            observer.error("Service was not found");
            return;
          }
          let service = _this.entityAPI.get(srvName),
            echo = service.echo;
          if (lodash__WEBPACK_IMPORTED_MODULE_2___default().isUndefined(echo)) {
            let requestData = lodash__WEBPACK_IMPORTED_MODULE_2___default().extend({}, service.request.data, reqOpts.data);
            let options = _this.getOptions(requestData);
            if (!window.cordova) {
              _this.execPreview(observer, options);
            } else {
              _this.execCordova(observer, options);
            }
          } else {
            _this.execEcho(observer, echo);
          }
        })();
      } catch (e) {
        observer.error(e);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera
  }, {
    type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView
  }];
};
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_4__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera !== "undefined" && _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera) === "function" ? _c : Object, typeof (_d = typeof _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView !== "undefined" && _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView) === "function" ? _d : Object])], CameraService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 4034:
/*!********************************************************!*\
  !*** ./src/app/scripts/custom/FileReadService_Impl.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ FileReadService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);

var _a, _b, _c;







const FORMATS = {
  STRING: 1,
  ARRAY_BUFFER: 2,
  BLOB: 3,
  FORM_DATA: 4
};
const DEFAULT_FORMAT = FORMATS.FORM_DATA;
const DEFAULT_FILE_NAME = "file.dat";
const DEFAULT_FILE_TYPE = "application/octet-stream";
const PREVIEW_DUMMY_TEXT = "Hello world";
let FileReadService = class FileReadService {
  entityAPI;
  Apperyio;
  file;
  constructor(entityAPI, Apperyio, file) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.file = file;
  }
  convertData(ab, format, type, name) {
    let result = ab;
    if (format === FORMATS.BLOB || format === FORMATS.FORM_DATA) {
      result = new Blob([ab], {
        type: type || DEFAULT_FILE_TYPE
      });
    }
    if (format === FORMATS.FORM_DATA) {
      const formData = new FormData();
      const fileName = name || DEFAULT_FILE_NAME;
      formData.append(fileName, result, fileName);
      result = formData;
    }
    return result;
  }
  readFile(file, observer, format, type, name) {
    const reader = new FileReader();
    reader.onload = () => {
      let result = reader.result;
      if (format !== FORMATS.STRING) {
        result = this.convertData(result, format, type || file.type, name || file.name);
      }
      observer.next({
        data: result
      });
      observer.complete();
    };
    reader.onerror = () => {
      reader.abort();
      observer.error('Error while reading file.');
    };
    if (format === FORMATS.STRING) {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }
  DataURIToArrayBuffer(dataURI) {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
    return ia;
  }
  execEcho(observer, echo, requestData, format, type, name) {
    let result = echo;
    if (format !== FORMATS.STRING) {
      let buf = new ArrayBuffer(echo.length * 2); // 2 bytes for each char
      let bufView = new Uint16Array(buf);
      for (var i = 0, strLen = echo.length; i < strLen; i++) {
        bufView[i] = echo.charCodeAt(i);
      }
      result = this.convertData(buf, format, requestData.blobType, requestData.formDataFileName);
    } else {
      let buf = this.DataURIToArrayBuffer(requestData.filePath);
      result = this.convertData(buf, FORMATS.FORM_DATA, type, name);
    }
    observer.next({
      data: result
    });
    observer.complete();
  }
  execute(reqOpts) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      try {
        (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let srvName = yield _this.Apperyio.getGSNameByImpl(_this);
          if (!srvName) {
            observer.error("Service was not found");
            return;
          }
          let service = _this.entityAPI.get(srvName),
            echo = service.echo,
            defaults = service.request.data,
            request = lodash__WEBPACK_IMPORTED_MODULE_1___default().extend({}, defaults, reqOpts),
            requestData = request.data,
            format = FORMATS[requestData.resultFormat] || DEFAULT_FORMAT;
          if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(echo)) {
            let file, inputEl;
            if (requestData.fileInput) {
              let file,
                inputEl = requestData.fileInput;
              if (requestData.fileInput.nativeElement) {
                inputEl = requestData.fileInput.nativeElement;
              }
              if (requestData.fileInput.el && requestData.fileInput.el.nodeName === "ION-INPUT") {
                inputEl = requestData.fileInput.el.getElementsByTagName("input")[0];
              }
              if (inputEl && inputEl.nodeName === "INPUT" && inputEl.type === "file" && inputEl.files) {
                file = inputEl.files[0];
              }
              if (requestData.fileInput instanceof Blob) {
                file = requestData.fileInput;
              }
              if (!file) {
                observer.error('Wrong type for `fileInput`');
                return;
              }
              _this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName);
              return;
            }
            if (requestData.filePath) {
              if (!window.cordova) {
                _this.execEcho(observer, '', requestData, FORMATS.STRING, 'image/png', 'no-camera.png');
              } else {
                _this.file.resolveLocalFilesystemUrl(requestData.filePath).then(entry => {
                  entry.file(file => _this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName));
                }).catch(err => {
                  observer.error('Error while reading file.');
                });
              }
            } else {
              observer.error('File path is empty');
            }
          } else {
            _this.execEcho(observer, echo, requestData, format, DEFAULT_FILE_TYPE, DEFAULT_FILE_NAME);
          }
        })();
      } catch (e) {
        observer.error(e);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService
  }, {
    type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
  }];
};
FileReadService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File !== "undefined" && _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File) === "function" ? _c : Object])], FileReadService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 354:
/*!******************************************************************!*\
  !*** ./src/app/scripts/custom/FileReadService_Impl_File_Read.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ FileReadService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);

var _a, _b, _c;







const FORMATS = {
  STRING: 1,
  ARRAY_BUFFER: 2,
  BLOB: 3,
  FORM_DATA: 4,
  DATA_URL: 5
};
const DEFAULT_FORMAT = FORMATS.FORM_DATA;
const DEFAULT_FILE_NAME = "file.dat";
const DEFAULT_FILE_TYPE = "application/octet-stream";
const PREVIEW_DUMMY_TEXT = "Hello world";
let FileReadService = class FileReadService {
  entityAPI;
  Apperyio;
  file;
  constructor(entityAPI, Apperyio, file) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.file = file;
  }
  convertData(ab, format, type, name) {
    let result = ab;
    if (format === FORMATS.BLOB || format === FORMATS.FORM_DATA) {
      result = new Blob([ab], {
        type: type || DEFAULT_FILE_TYPE
      });
    }
    if (format === FORMATS.FORM_DATA) {
      const formData = new FormData();
      const fileName = name || DEFAULT_FILE_NAME;
      formData.append(fileName, result, fileName);
      result = formData;
    }
    return result;
  }
  readFile(file, observer, format, type, name) {
    const reader = new FileReader();
    reader.onload = () => {
      let result = reader.result;
      if (format !== FORMATS.STRING) {
        result = this.convertData(result, format, type || file.type, name || file.name);
      }
      observer.next({
        data: result
      });
      observer.complete();
    };
    reader.onerror = () => {
      reader.abort();
      observer.error('Error while reading file.');
    };
    switch (format) {
      case FORMATS.STRING:
        reader.readAsText(file);
        break;
      case FORMATS.DATA_URL:
        reader.readAsDataURL(file);
        break;
      default:
        reader.readAsArrayBuffer(file);
    }
  }
  execEcho(observer, echo, requestData, format) {
    let result = echo;
    if (format !== FORMATS.STRING) {
      let buf = new ArrayBuffer(echo.length * 2); // 2 bytes for each char
      let bufView = new Uint16Array(buf);
      for (var i = 0, strLen = echo.length; i < strLen; i++) {
        bufView[i] = echo.charCodeAt(i);
      }
      result = this.convertData(buf, format, requestData.blobType, requestData.formDataFileName);
    }
    observer.next({
      data: result
    });
    observer.complete();
  }
  execute(reqOpts) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      try {
        (0,_srv_appery_jenkins_workspace_9c21cc0b_e4c1_4ce0_a643_952287eed916_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          let srvName = yield _this.Apperyio.getGSNameByImpl(_this);
          if (!srvName) {
            observer.error("Service was not found");
            return;
          }
          let service = _this.entityAPI.get(srvName),
            echo = service.echo,
            defaults = service.request.data,
            request = lodash__WEBPACK_IMPORTED_MODULE_1___default().extend({}, defaults, reqOpts),
            requestData = request.data,
            format = FORMATS[requestData.resultFormat] || DEFAULT_FORMAT;
          if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(echo)) {
            let file, inputEl;
            if (requestData.fileInput) {
              let file,
                inputEl = requestData.fileInput;
              if (requestData.fileInput.nativeElement) {
                inputEl = requestData.fileInput.nativeElement;
              }
              if (requestData.fileInput.el && requestData.fileInput.el.nodeName === "ION-INPUT") {
                inputEl = requestData.fileInput.el.getElementsByTagName("input")[0];
              }
              if (inputEl && inputEl.nodeName === "INPUT" && inputEl.type === "file" && inputEl.files) {
                file = inputEl.files[0];
              }
              if (requestData.fileInput instanceof Blob) {
                file = requestData.fileInput;
              }
              if (!file) {
                observer.error('Wrong type for `fileInput`');
                return;
              }
              _this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName);
              return;
            }
            if (requestData.filePath) {
              if (!window.cordova) {
                _this.execEcho(observer, PREVIEW_DUMMY_TEXT, requestData, format);
              } else {
                _this.file.resolveLocalFilesystemUrl(requestData.filePath).then(entry => {
                  entry.file(file => _this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName));
                }).catch(err => {
                  observer.error('Error while reading file.');
                });
              }
            } else {
              observer.error('File path is empty');
            }
          } else {
            _this.execEcho(observer, echo, requestData, format);
          }
        })();
      } catch (e) {
        observer.error(e);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService
  }, {
    type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
  }];
};
FileReadService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_3__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File !== "undefined" && _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File) === "function" ? _c : Object])], FileReadService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 9899:
/*!*********************************************!*\
  !*** ./src/app/scripts/custom/FormUtils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ FormUtils)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var _a;




let FormUtils = class FormUtils {
  Apperyio;
  key;
  cryptoJs = crypto_js__WEBPACK_IMPORTED_MODULE_1__;
  constructor(Apperyio) {
    this.Apperyio = Apperyio;
    this.key = this.Apperyio.config.get("SecuritySettings.database_id");
  }
  init(form) {
    if (form && localStorage['rememberMe']) {
      const encryptedCredentials = JSON.parse(localStorage['rememberMe']);
      const bytesUsername = this.cryptoJs.AES.decrypt(encryptedCredentials.username, this.key);
      const bytesPassword = this.cryptoJs.AES.decrypt(encryptedCredentials.password, this.key);
      form.controls.username.setValue(bytesUsername.toString(this.cryptoJs.enc.Utf8));
      form.controls.password.setValue(bytesPassword.toString(this.cryptoJs.enc.Utf8));
      form.controls.rememberme.setValue(true);
    } else if (form) {
      form.controls.username.setValue('');
      form.controls.password.setValue('');
      form.controls.rememberme.setValue(false);
    }
  }
  markFormControlsAsTouched(form, controlNames) {
    controlNames.forEach(controlName => {
      form.controls[controlName].markAsTouched();
    });
  }
  showPasswordOnClick(formName) {
    const eyeIcon = document.getElementsByTagName(formName)[0].getElementsByClassName('eye')[0];
    eyeIcon.addEventListener('click', event => {
      const passwordInput = document.getElementsByTagName(formName)[0].getElementsByClassName('password')[0];
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon['color'] = 'dark';
      } else {
        passwordInput.type = 'password';
        eyeIcon['color'] = 'light';
      }
    });
  }
  rememberMe(username, pwd) {
    const credentials = {
      username: this.cryptoJs.AES.encrypt(username, this.key).toString(),
      password: this.cryptoJs.AES.encrypt(pwd, this.key).toString()
    };
    localStorage['rememberMe'] = JSON.stringify(credentials);
  }
  forgotMe(event, form) {
    if (!event.detail.checked) {
      localStorage.removeItem('rememberMe');
      form.controls.username.setValue('');
      form.controls.password.setValue('');
    }
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
};
FormUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _a : Object])], FormUtils);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 9059:
/*!***************************************************!*\
  !*** ./src/app/scripts/custom/GeoService_Impl.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ GeoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
var _a, _b, _c;







let GeoService = class GeoService {
  entityAPI;
  Apperyio;
  http;
  constructor(entityAPI, Apperyio, http) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.http = http;
  }
  execute(reqOpts) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      try {
        var service = this.entityAPI.get('GeoService'),
          echo = service.echo,
          defaults = service.request.data,
          request,
          response;
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(echo)) {
          /**
           * Passed request data structure IS RECOMMENDED to match the default request, described in service!
           * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
           */
          request = lodash__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, reqOpts);
          /**
           * CUSTOM CODE for processing request and forming responce could be placed here
           * Response structure IS RECOMMENDED to match default response, described in service!
           * An example of forming an empty response:
           */
          navigator.geolocation.getCurrentPosition(position => {
            observer.next(position.coords);
            observer.complete();
          }, error => {
            console.log('error', error);
            observer.error(error);
          });
        } else {
          try {
            echo = JSON.parse(echo);
          } catch (error) {
            console.log('error', error);
            observer.error(error);
          }
          observer.next(echo);
          observer.complete();
        }
      } catch (error) {
        console.log('error', error);
        observer.error(error);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};
GeoService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _c : Object])], GeoService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 4817:
/*!**************************************************************!*\
  !*** ./src/app/scripts/custom/GeoService_Impl_Google_Map.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ GeoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
var _a, _b, _c;







let GeoService = class GeoService {
  entityAPI;
  Apperyio;
  http;
  constructor(entityAPI, Apperyio, http) {
    this.entityAPI = entityAPI;
    this.Apperyio = Apperyio;
    this.http = http;
  }
  execute(reqOpts) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      try {
        var service = this.entityAPI.get('GeoService'),
          echo = service.echo,
          defaults = service.request.data,
          request,
          response;
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(echo)) {
          /**
           * Passed request data structure IS RECOMMENDED to match the default request, described in service!
           * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
           */
          request = lodash__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, reqOpts);
          /**
           * CUSTOM CODE for processing request and forming responce could be placed here
           * Response structure IS RECOMMENDED to match default response, described in service!
           * An example of forming an empty response:
           */
          navigator.geolocation.getCurrentPosition(position => {
            observer.next(position.coords);
            observer.complete();
          }, error => {
            console.log('error', error);
            observer.error(error);
          });
        } else {
          try {
            echo = JSON.parse(echo);
          } catch (error) {
            console.log('error', error);
            observer.error(error);
          }
          observer.next(echo);
          observer.complete();
        }
      } catch (error) {
        console.log('error', error);
        observer.error(error);
      }
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService
  }, {
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};
GeoService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_2__.EntityApiService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_1__.ApperyioHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _c : Object])], GeoService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 5632:
/*!****************************************************!*\
  !*** ./src/app/scripts/custom/statesDictionary.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ SimpleFunction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio/apperyio_helper */ 7845);
var _a;



let SimpleFunction = class SimpleFunction {
  Apperyio;
  labelAttribute = 'name';
  objects = [{
    "name": "Plastic",
    "desc": "Plastic is recycleable"
  }, {
    "name": "Cardboard",
    "desc": "Cardboard is recycleable"
  }, {
    "name": "Paper",
    "desc": "Paper is recycleable"
  }];
  constructor(Apperyio) {
    this.Apperyio = Apperyio;
  }
  getResults(keyword) {
    keyword = keyword.toLowerCase();
    return this.objects.filter(object => {
      const value = object[this.labelAttribute].toLowerCase();
      return value.includes(keyword);
    });
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
};
SimpleFunction = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _a : Object])], SimpleFunction);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 3543:
/*!**********************************************!*\
  !*** ./src/app/scripts/directives.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



let DirectivesModule = class DirectivesModule {};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule],
  exports: []
})], DirectivesModule);


/***/ }),

/***/ 4274:
/*!***********************************!*\
  !*** ./src/app/scripts/models.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_aioDefStorageValues": () => (/* binding */ _aioDefStorageValues),
/* harmony export */   "models": () => (/* binding */ models)
/* harmony export */ });
/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
var models = {
  "MessageModel": {
    "type": "object",
    "properties": {
      "me": {
        "type": "boolean"
      },
      "message": {
        "type": "string"
      },
      "time": {
        "type": "string"
      }
    }
  },
  "String": {
    "type": "string"
  },
  "MessagesModel": {
    "type": "array",
    "items": [{
      "type": "MessageModel"
    }]
  },
  "Marker": {
    "type": "object",
    "properties": {
      "latitude": {
        "type": "string"
      },
      "longitude": {
        "type": "string"
      }
    }
  },
  "Number": {
    "type": "number"
  },
  "Any": {
    "type": "any"
  },
  "Function": {
    "type": "Function"
  },
  "Promise": {
    "type": "Promise"
  },
  "Boolean": {
    "type": "boolean"
  },
  "Observable": {
    "type": "Observable"
  },
  "SignupService": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/db/users"
      },
      "method": {
        "type": "string",
        "default": "post"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "password": {
                "type": "string"
              },
              "username": {
                "type": "string"
              }
            }
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "X-Appery-Database-Id": {
                "type": "string",
                "default": "{SecuritySettings.database_id}"
              },
              "Content-Type": {
                "type": "string",
                "default": "application/json"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "_id": {
                "type": "string"
              },
              "_updatedAt": {
                "type": "string"
              },
              "sessionToken": {
                "type": "string"
              },
              "_createdAt": {
                "type": "string"
              },
              "username": {
                "type": "string"
              }
            }
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      }
    }
  },
  "LogoutService": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/db/logout"
      },
      "method": {
        "type": "string",
        "default": "get"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {}
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "X-Appery-Session-Token": {
                "type": "string"
              },
              "X-Appery-Database-Id": {
                "type": "string",
                "default": "{SecuritySettings.database_id}"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      }
    }
  },
  "Photo__files_upload_service": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/db/files"
      },
      "method": {
        "type": "string",
        "default": "post"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "data": {
                "type": "data"
              }
            }
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "X-Appery-Database-Id": {
                "type": "string",
                "default": "{Photo_settings.database_id}"
              },
              "X-Appery-Master-Key": {
                "type": "string",
                "default": "{Photo_settings.master_key}"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "$": {
                "type": "object",
                "properties": {
                  "filename": {
                    "type": "string"
                  },
                  "fileurl": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      }
    }
  },
  "recycleDB__files_upload_service": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/db/files"
      },
      "method": {
        "type": "string",
        "default": "post"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "data": {
                "type": "data"
              }
            }
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "X-Appery-Master-Key": {
                "type": "string",
                "default": "db6af4e7-a3b2-4965-aa7b-db0254b3d9b1"
              },
              "X-Appery-Database-Id": {
                "type": "string",
                "default": "{recycleDB_settings.database_id}"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "$": {
                "type": "object",
                "properties": {}
              }
            }
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      }
    }
  },
  "LoginService": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/db/login"
      },
      "method": {
        "type": "string",
        "default": "post"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string"
              },
              "password": {
                "type": "string"
              }
            }
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "Content-Type": {
                "type": "string",
                "default": "application/json"
              },
              "X-Appery-Database-Id": {
                "type": "string",
                "default": "{SecuritySettings.database_id}"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {
              "sessionToken": {
                "type": "string"
              },
              "_id": {
                "type": "string"
              }
            }
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      }
    }
  },
  "RESTService": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string",
        "default": "https://api.appery.io/rest/1/proxy/tunnel"
      },
      "method": {
        "type": "string",
        "default": "post"
      },
      "request": {
        "type": "object",
        "properties": {
          "body": {
            "type": "any",
            "default": "{\n  \"requests\":[\n    {\n      \"image\":{\n        \"source\":{\n          \"imageUri\": \"https://www.gstatic.com/webp/gallery/4.webp\"\n        }\n      },\n      \"features\":[\n        {\n          \"type\":\"LABEL_DETECTION\",\n          \"maxResults\":1\n        }\n      ]\n    }\n  ]\n}"
          },
          "query": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {
              "Content-Type": {
                "type": "string",
                "default": "application/json"
              },
              "appery-transformation": {
                "type": "string",
                "default": "checkTunnel"
              },
              "appery-rest": {
                "type": "string",
                "default": "294ef3d5-cedb-4bf1-9427-aa7a3ad76702"
              },
              "appery-proxy-url": {
                "type": "string",
                "default": "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDmfHuJrAh9f-LmCsomTLXZSVXC56QGxBM"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "body": {
            "type": "object",
            "properties": {}
          },
          "headers": {
            "type": "object",
            "properties": {}
          }
        }
      },
      "echo": {
        "type": "string",
        "default": "{}"
      }
    }
  },
  "GeoService_Google_Map": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {}
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "latitude": {
                "type": "number",
                "default": null
              },
              "longitude": {
                "type": "number",
                "default": null
              }
            }
          }
        }
      }
    }
  },
  "GeoService": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {}
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "longitude": {
                "type": "number",
                "default": null
              },
              "latitude": {
                "type": "number",
                "default": null
              }
            }
          }
        }
      }
    }
  },
  "CameraService": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "saveToPhotoAlbum": {
                "type": "boolean",
                "default": null
              },
              "destinationType": {
                "type": "string",
                "default": "FILE_URI"
              },
              "allowEdit": {
                "type": "boolean",
                "default": null
              },
              "sourceType": {
                "type": "string",
                "default": "CAMERA"
              },
              "cameraDirection": {
                "type": "string",
                "default": "BACK"
              },
              "quality": {
                "type": "number",
                "default": 100
              },
              "mediaType": {
                "type": "string",
                "default": "PICTURE"
              },
              "targetWidth": {
                "type": "number",
                "default": null
              },
              "targetHeight": {
                "type": "number",
                "default": null
              },
              "popoverOptions": {
                "type": "any"
              },
              "correctOrientation": {
                "type": "boolean",
                "default": true
              },
              "encodingType": {
                "type": "string",
                "default": "JPEG"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "imageURI": {
                "type": "string"
              },
              "fileSrc": {
                "type": "string"
              },
              "imageDataBase64": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "FileReadService_File_Read": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "filePath": {
                "type": "string"
              },
              "fileInput": {
                "type": "any"
              },
              "resultFormat": {
                "type": "string",
                "default": "FORM_DATA"
              },
              "blobType": {
                "type": "string"
              },
              "formDataFileName": {
                "type": "string"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "data": {
                "type": "any"
              }
            }
          }
        }
      }
    }
  },
  "FileReadService": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "formDataFileName": {
                "type": "string"
              },
              "fileInput": {
                "type": "any"
              },
              "filePath": {
                "type": "string"
              },
              "resultFormat": {
                "type": "string",
                "default": "FORM_DATA"
              },
              "blobType": {
                "type": "string"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "data": {
                "type": "any"
              }
            }
          }
        }
      }
    }
  },
  "CameraService_Take_photo_and_upload_into_Appery_database": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "targetWidth": {
                "type": "number",
                "default": null
              },
              "saveToPhotoAlbum": {
                "type": "boolean",
                "default": null
              },
              "popoverOptions": {
                "type": "any"
              },
              "sourceType": {
                "type": "string",
                "default": "CAMERA"
              },
              "allowEdit": {
                "type": "boolean",
                "default": null
              },
              "cameraDirection": {
                "type": "string",
                "default": "BACK"
              },
              "correctOrientation": {
                "type": "boolean",
                "default": true
              },
              "encodingType": {
                "type": "string",
                "default": "JPEG"
              },
              "mediaType": {
                "type": "string",
                "default": "PICTURE"
              },
              "targetHeight": {
                "type": "number",
                "default": null
              },
              "quality": {
                "type": "number",
                "default": 100
              },
              "destinationType": {
                "type": "string",
                "default": "FILE_URI"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "imageURI": {
                "type": "string"
              },
              "imageDataBase64": {
                "type": "string"
              },
              "fileSrc": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "CameraService_Camera": {
    "type": "object",
    "properties": {
      "request": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "popoverOptions": {
                "type": "any"
              },
              "destinationType": {
                "type": "string",
                "default": "FILE_URI"
              },
              "encodingType": {
                "type": "string",
                "default": "JPEG"
              },
              "mediaType": {
                "type": "string",
                "default": "PICTURE"
              },
              "correctOrientation": {
                "type": "boolean",
                "default": true
              },
              "sourceType": {
                "type": "string",
                "default": "CAMERA"
              },
              "targetHeight": {
                "type": "number",
                "default": null
              },
              "allowEdit": {
                "type": "boolean",
                "default": null
              },
              "saveToPhotoAlbum": {
                "type": "boolean",
                "default": null
              },
              "quality": {
                "type": "number",
                "default": 100
              },
              "targetWidth": {
                "type": "number",
                "default": null
              },
              "cameraDirection": {
                "type": "string",
                "default": "BACK"
              }
            }
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "fileSrc": {
                "type": "string"
              },
              "imageDataBase64": {
                "type": "string"
              },
              "imageURI": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
};
/**
 * Data storage
 */
const _aioDefStorageValues = {
  variables: {},
  storages: {}
};

/***/ }),

/***/ 6972:
/*!*****************************************!*\
  !*** ./src/app/scripts/pipes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule],
  exports: []
})], PipesModule);


/***/ }),

/***/ 200:
/*!**************************************************!*\
  !*** ./src/app/scripts/services/LoginService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service LoginService
 */



let LoginService = class LoginService {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/db/login",
      method: "post",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("LoginService.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("LoginService.request.query", reqOpts.params, true)),
      data: this.entityAPI.get("LoginService.request.body", reqOpts.data, true, true) || "",
      aio_config: {
        requestType: "json",
        responseType: "json",
        serviceName: "LoginService"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], LoginService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 9169:
/*!***************************************************!*\
  !*** ./src/app/scripts/services/LogoutService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ LogoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service LogoutService
 */



let LogoutService = class LogoutService {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/db/logout",
      method: "get",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("LogoutService.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("LogoutService.request.query", reqOpts.params, true)),
      aio_config: {
        requestType: "",
        responseType: "json",
        serviceName: "LogoutService"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
LogoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], LogoutService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 8327:
/*!*****************************************************************!*\
  !*** ./src/app/scripts/services/Photo__files_upload_service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ Photo__files_upload_service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service Photo__files_upload_service
 */



let Photo__files_upload_service = class Photo__files_upload_service {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/db/files",
      method: "post",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("Photo__files_upload_service.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("Photo__files_upload_service.request.query", reqOpts.params, true)),
      data: this.entityAPI.get("Photo__files_upload_service.request.body", reqOpts.data, true, true) || "",
      aio_config: {
        requestType: "data",
        responseType: "json",
        serviceName: "Photo__files_upload_service"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
Photo__files_upload_service = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], Photo__files_upload_service);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 2184:
/*!*************************************************!*\
  !*** ./src/app/scripts/services/RESTService.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ RESTService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service RESTService
 */



let RESTService = class RESTService {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/proxy/tunnel",
      method: "post",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("RESTService.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("RESTService.request.query", reqOpts.params, true)),
      data: this.entityAPI.get("RESTService.request.body", reqOpts.data, true, true) || "",
      echo: this.entityAPI.get("RESTService.echo"),
      aio_config: {
        requestType: "json",
        responseType: "json",
        serviceName: "RESTService"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
RESTService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], RESTService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 4545:
/*!***************************************************!*\
  !*** ./src/app/scripts/services/SignupService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service SignupService
 */



let SignupService = class SignupService {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/db/users",
      method: "post",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("SignupService.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("SignupService.request.query", reqOpts.params, true)),
      data: this.entityAPI.get("SignupService.request.body", reqOpts.data, true, true) || "",
      aio_config: {
        requestType: "json",
        responseType: "json",
        serviceName: "SignupService"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
SignupService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], SignupService);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 4308:
/*!*********************************************************************!*\
  !*** ./src/app/scripts/services/recycleDB__files_upload_service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportedClass": () => (/* binding */ recycleDB__files_upload_service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apperyio/apperyio */ 1897);
var _a, _b;

/**
 * Module initializes rest service recycleDB__files_upload_service
 */



let recycleDB__files_upload_service = class recycleDB__files_upload_service {
  apperyioService;
  entityAPI;
  merge_requests(defaults, request) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith({}, defaults, request, function (a, b) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(b)) {
        return a;
      }
    });
  }
  constructor(apperyioService, entityAPI) {
    this.apperyioService = apperyioService;
    this.entityAPI = entityAPI;
  }
  execute(reqOpts) {
    /**
     * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
     * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
     * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
     * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                            to send to the server. If the return value of a function is null,
                                                            the header will not be sent.
     * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                            after the url. If the value is not a string, it will be JSONified.
     * @property {string|Object} data                     - Data to be sent as the request message data.
     * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
     * @property {Object.<string, string>} aio_config     - Apperyio configuration object
     * @property {string} requestType                     - Request type
     * @property {string} responseType                    - Response type
     * @property {string} serviceName                     - Service name
     */
    let config = {
      url: "https://api.appery.io/rest/1/db/files",
      method: "post",
      headers: this.entityAPI.removeUndefined(this.entityAPI.get("recycleDB__files_upload_service.request.headers", reqOpts.headers, true)),
      params: this.entityAPI.removeUndefined(this.entityAPI.get("recycleDB__files_upload_service.request.query", reqOpts.params, true)),
      data: this.entityAPI.get("recycleDB__files_upload_service.request.body", reqOpts.data, true, true) || "",
      aio_config: {
        requestType: "data",
        responseType: "json",
        serviceName: "recycleDB__files_upload_service"
      }
    };
    if (!reqOpts || typeof reqOpts !== "object") {
      reqOpts = {};
    }
    const request = this.merge_requests(config, reqOpts);
    return this.apperyioService.run({
      ...request,
      headers: this.prepareRequestHeaders(request.headers)
    });
  }
  /**
   * Creates a valid Angular headers object
   * (header is valid if it has a string value)
   * @param headers {any} - Request headers
   * @returns {any}
   */
  prepareRequestHeaders(headers = {}) {
    // do not include headers with the "undefined" value
    headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().pickBy(headers, value => !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && !(typeof value === 'symbol'));
    // convert a value of every header to string
    return headers = lodash__WEBPACK_IMPORTED_MODULE_0___default().mapValues(headers, value => String(value));
  }
  static ctorParameters = () => [{
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService
  }, {
    type: _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService
  }];
};
recycleDB__files_upload_service = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService) === "function" ? _a : Object, typeof (_b = typeof _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService !== "undefined" && _apperyio_apperyio__WEBPACK_IMPORTED_MODULE_1__.EntityApiService) === "function" ? _b : Object])], recycleDB__files_upload_service);
/*
    Service class should be exported as ExportedClass
*/


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
// Very important content




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4933,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 425:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA%3D!./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n    :host {\n        --ion-color-light: #ffffff;\n        --ion-color-light-tint: var(--ion-color-light);\n        --ion-color-light-shade: var(--ion-color-light);\n        --button-color: var(--aio-tester-button-color, #09b300);\n        position: fixed;\n        right: 0px;\n        bottom: 5px;\n        z-index: 1000;\n    }\n    ion-fab-button {\n        --color: var(--button-color);\n        --ion-color-light-contrast: var(--button-color);\n    }\n    ion-fab-list {\n        background: var(--ion-color-light);\n        border-radius: 25px;\n    }\n    ion-icon {\n        pointer-events: none;\n    }\n   ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts"],"names":[],"mappings":";IACI;QACI,0BAA0B;QAC1B,8CAA8C;QAC9C,+CAA+C;QAC/C,uDAAuD;QACvD,eAAe;QACf,UAAU;QACV,WAAW;QACX,aAAa;IACjB;IACA;QACI,4BAA4B;QAC5B,+CAA+C;IACnD;IACA;QACI,kCAAkC;QAClC,mBAAmB;IACvB;IACA;QACI,oBAAoB;IACxB","sourcesContent":["\n    :host {\n        --ion-color-light: #ffffff;\n        --ion-color-light-tint: var(--ion-color-light);\n        --ion-color-light-shade: var(--ion-color-light);\n        --button-color: var(--aio-tester-button-color, #09b300);\n        position: fixed;\n        right: 0px;\n        bottom: 5px;\n        z-index: 1000;\n    }\n    ion-fab-button {\n        --color: var(--button-color);\n        --ion-color-light-contrast: var(--button-color);\n    }\n    ion-fab-list {\n        background: var(--ion-color-light);\n        border-radius: 25px;\n    }\n    ion-icon {\n        pointer-events: none;\n    }\n   "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5878:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA%3D%3D!./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        :host {\n            align-items: center;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        :host img {\n            cursor: pointer;\n        }\n        :host .disabled {\n            opacity: .5;\n        }\n        :host .files-count {\n            margin-left: 1em;\n        }\n        :host .files-list {\n            width: 100%;\n        }\n        :host .file-info {\n            align-items: center;\n            display: flex;\n        }\n        :host .file-info span {\n            padding: 4px;\n            word-break: break-word;\n        }\n        :host .remove-icon {\n            cursor: pointer;\n            min-width: 40px;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts"],"names":[],"mappings":";QACQ;YACI,mBAAmB;YACnB,aAAa;YACb,eAAe;QACnB;QACA;YACI,eAAe;QACnB;QACA;YACI,WAAW;QACf;QACA;YACI,gBAAgB;QACpB;QACA;YACI,WAAW;QACf;QACA;YACI,mBAAmB;YACnB,aAAa;QACjB;QACA;YACI,YAAY;YACZ,sBAAsB;QAC1B;QACA;YACI,eAAe;YACf,eAAe;QACnB","sourcesContent":["\n        :host {\n            align-items: center;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        :host img {\n            cursor: pointer;\n        }\n        :host .disabled {\n            opacity: .5;\n        }\n        :host .files-count {\n            margin-left: 1em;\n        }\n        :host .files-list {\n            width: 100%;\n        }\n        :host .file-info {\n            align-items: center;\n            display: flex;\n        }\n        :host .file-info span {\n            padding: 4px;\n            word-break: break-word;\n        }\n        :host .remove-icon {\n            cursor: pointer;\n            min-width: 40px;\n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3437:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMnB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgMTJweCk7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tc3RhcnQsIDEycHgpOwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1lbmQsIDEycHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsgCiAgICAgICAgfQogICAg!./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        :host {\n            margin-top: var(--margin-top, 12px);\n            margin-bottom: var(--margin-bottom, 12px);\n            margin-left: var(--margin-start, 12px);\n            margin-right: var(--margin-end, 12px);\n        }\n        \n        :host ion-text {\n            color: var(--placeholder-color);\n        }\n        \n        :host .click-button {\n            left: 0px;\n            top: 0px;\n            margin: 0px;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            border: 0px;\n            background: transparent;\n            cursor: pointer;\n            -webkit-appearance: none;\n                    appearance: none;\n            outline: none;\n            z-index: 1;\n        }\n            \n        .aio-datetime-modal {\n            --border-radius: 8px;\n            --width: 325px;\n            --height: 434px; \n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts"],"names":[],"mappings":";QACQ;YACI,mCAAmC;YACnC,yCAAyC;YACzC,sCAAsC;YACtC,qCAAqC;QACzC;;QAEA;YACI,+BAA+B;QACnC;;QAEA;YACI,SAAS;YACT,QAAQ;YACR,WAAW;YACX,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,WAAW;YACX,uBAAuB;YACvB,eAAe;YACf,wBAAgB;oBAAhB,gBAAgB;YAChB,aAAa;YACb,UAAU;QACd;;QAEA;YACI,oBAAoB;YACpB,cAAc;YACd,eAAe;QACnB","sourcesContent":["\n        :host {\n            margin-top: var(--margin-top, 12px);\n            margin-bottom: var(--margin-bottom, 12px);\n            margin-left: var(--margin-start, 12px);\n            margin-right: var(--margin-end, 12px);\n        }\n        \n        :host ion-text {\n            color: var(--placeholder-color);\n        }\n        \n        :host .click-button {\n            left: 0px;\n            top: 0px;\n            margin: 0px;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            border: 0px;\n            background: transparent;\n            cursor: pointer;\n            appearance: none;\n            outline: none;\n            z-index: 1;\n        }\n            \n        .aio-datetime-modal {\n            --border-radius: 8px;\n            --width: 325px;\n            --height: 434px; \n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8647:
/*!*************************************!*\
  !*** ./src/app/app.scss?ngResource ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\n/* Custom SCSS */\nion-app.mobile .aio-mobile-hide,\nion-app.web-browser .aio-web-browser-hide,\n.aioHidden {\n  display: none !important;\n}\n\n.aio-validation-error {\n  color: var(--ion-color-danger);\n  padding: 5px 15px;\n}\n\nion-item.item-label-stacked.item-input > ion-icon[slot=start],\nion-item.item-label-stacked.item-input > ion-icon[slot=end],\nion-item.item-label-floating.item-input > ion-icon[slot=start],\nion-item.item-label-floating.item-input > ion-icon[slot=end],\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-top: auto;\n}\n\nion-item.item-label-stacked.item-textarea > ion-icon[slot=start],\nion-item.item-label-stacked.item-textarea > ion-icon[slot=end],\nion-item.item-label-floating.item-textarea > ion-icon[slot=start],\nion-item.item-label-floating.item-textarea > ion-icon[slot=end] {\n  margin-top: 10px;\n}\n\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-bottom: 10px;\n}\n\n/* Fix Ionic 5 issues */\nion-item ion-reorder:not([slot]) {\n  z-index: 100;\n}\n\n/** ngx-datatable fix pagination **/\n@media only screen and (max-width: 500px) {\n  .ngx-datatable.material .datatable-footer .page-count {\n    white-space: nowrap;\n  }\n  .ngx-datatable.material .datatable-footer .pager {\n    white-space: nowrap;\n  }\n}\n/*\n* Appery.io component.\n*/\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\nion-img::part(image) {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  width: auto;\n}\n\nion-toolbar.ios ion-title.title-large {\n  text-align: center;\n}\n\nagm-map {\n  width: 100%;\n  height: 250px;\n}\n\nagm-map agm-map {\n  width: 200px;\n  height: 150px;\n}\n\nion-menu::part(container) {\n  box-sizing: border-box;\n}\n\n/* [ETST-42825 Ionic Input Margin Bug] Temporary fix for ion-input width */\n:not(ion-item) > ion-input.sc-ion-input-ios-h,\n:not(ion-item) > ion-input.sc-ion-input-md-h {\n  width: auto;\n}", "",{"version":3,"sources":["webpack://./src/app/app.scss","webpack://./src/scss/__aio_components.scss"],"names":[],"mappings":"AAGA,sBAAA;AAEA,gBAAA;ACJA;;;EAGC,wBAAA;ADED;;ACAA;EACC,8BAAA;EACA,iBAAA;ADGD;;ACDA;;;;;;EAMC,gBAAA;ADID;;ACFA;;;;EAIC,gBAAA;ADKD;;ACHA;;EAEC,mBAAA;ADMD;;ACJA,uBAAA;AACA;EACC,YAAA;ADOD;;ACLA,mCAAA;AACA;EAEE;IACC,mBAAA;EDOD;ECLA;IACC,mBAAA;EDOD;AACF;ACFA;;CAAA;AAGA;EACC,cAAA;EACA,eAAA;EACA,YAAA;ADID;;ACFA;EACC,kBAAA;ADKD;;ACHA;EACC,kBAAA;ADMD;;ACJA;EACC,sBAAA;ADOD;;ACLA;EACC,WAAA;ADQD;;ACNA;EACC,kBAAA;ADSD;;ACPA;EACC,WAAA;EACA,aAAA;ADUD;;ACRA;EACC,YAAA;EACA,aAAA;ADWD;;ACTA;EACC,sBAAA;ADYD;;ACVA,0EAAA;AACA;;EAEC,WAAA;ADaD","sourcesContent":["/* Styles properties */\n/* Custom SCSS */\nion-app.mobile .aio-mobile-hide,\nion-app.web-browser .aio-web-browser-hide,\n.aioHidden {\n  display: none !important;\n}\n\n.aio-validation-error {\n  color: var(--ion-color-danger);\n  padding: 5px 15px;\n}\n\nion-item.item-label-stacked.item-input > ion-icon[slot=start],\nion-item.item-label-stacked.item-input > ion-icon[slot=end],\nion-item.item-label-floating.item-input > ion-icon[slot=start],\nion-item.item-label-floating.item-input > ion-icon[slot=end],\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-top: auto;\n}\n\nion-item.item-label-stacked.item-textarea > ion-icon[slot=start],\nion-item.item-label-stacked.item-textarea > ion-icon[slot=end],\nion-item.item-label-floating.item-textarea > ion-icon[slot=start],\nion-item.item-label-floating.item-textarea > ion-icon[slot=end] {\n  margin-top: 10px;\n}\n\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-bottom: 10px;\n}\n\n/* Fix Ionic 5 issues */\nion-item ion-reorder:not([slot]) {\n  z-index: 100;\n}\n\n/** ngx-datatable fix pagination **/\n@media only screen and (max-width: 500px) {\n  .ngx-datatable.material .datatable-footer .page-count {\n    white-space: nowrap;\n  }\n  .ngx-datatable.material .datatable-footer .pager {\n    white-space: nowrap;\n  }\n}\n/*\n* Appery.io component.\n*/\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\nion-img::part(image) {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  width: auto;\n}\n\nion-toolbar.ios ion-title.title-large {\n  text-align: center;\n}\n\nagm-map {\n  width: 100%;\n  height: 250px;\n}\n\nagm-map agm-map {\n  width: 200px;\n  height: 150px;\n}\n\nion-menu::part(container) {\n  box-sizing: border-box;\n}\n\n/* [ETST-42825 Ionic Input Margin Bug] Temporary fix for ion-input width */\n:not(ion-item) > ion-input.sc-ion-input-ios-h,\n:not(ion-item) > ion-input.sc-ion-input-md-h {\n  width: auto;\n}",null],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 962:
/*!*************************************!*\
  !*** ./src/app/app.html?ngResource ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app class=\"{{deviceType}}\">\n    <ion-router-outlet id=\"main-content\">\n    </ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map