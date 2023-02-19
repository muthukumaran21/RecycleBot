(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Home_Home_module_ts"],{

/***/ 7726:
/*!*************************************!*\
  !*** ./src/app/Home/Home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 3952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 1371);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ 6746);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 6972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 3543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 2482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 4363);
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic4-auto-complete */ 6629);















let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_Home__WEBPACK_IMPORTED_MODULE_2__.Home],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_13__.AutoCompleteModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: '',
    component: _Home__WEBPACK_IMPORTED_MODULE_2__.Home
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Home__WEBPACK_IMPORTED_MODULE_2__.Home]
})], HomePageModule);


/***/ }),

/***/ 6746:
/*!******************************!*\
  !*** ./src/app/Home/Home.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Home_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.html?ngResource */ 6239);
/* harmony import */ var _Home_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.scss?ngResource */ 6106);
/* harmony import */ var _Home_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 7845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 2535);
/* harmony import */ var _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/custom/statesDictionary */ 5632);
var _a, _b, _c, _d;








let Home = class Home {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  statesDictionary;
  state;
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
  stateSelected(event) {
    this.state = event;
  }
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, statesDictionary) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.statesDictionary = statesDictionary;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_4__.ExportedClass
  }];
};
Home = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _Home_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'page-home',
  styles: [(_Home_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_4__.ExportedClass !== "undefined" && _scripts_custom_statesDictionary__WEBPACK_IMPORTED_MODULE_4__.ExportedClass) === "function" ? _d : Object])], Home);


/***/ }),

/***/ 6629:
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoCompleteComponent": () => (/* binding */ AutoCompleteComponent),
/* harmony export */   "AutoCompleteModule": () => (/* binding */ AutoCompleteModule),
/* harmony export */   "AutoCompleteOptions": () => (/* binding */ AutoCompleteOptions),
/* harmony export */   "AutoCompleteStyles": () => (/* binding */ AutoCompleteStyles),
/* harmony export */   "BoldPrefix": () => (/* binding */ BoldPrefix)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 7792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4661);











const _c0 = ["searchbarElem"];
const _c1 = ["inputElem"];
function AutoCompleteComponent_ng_template_0_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 14);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r13.frontIcon)("slot", "start");
  }
}
function AutoCompleteComponent_ng_template_0_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 15);
  }
  if (rf & 2) {
    const attrs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().attrs;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", attrs_r12.removeButtonIcon)("slot", attrs_r12.removeButtonSlot);
  }
}
function AutoCompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_0_ion_icon_1_Template, 1, 2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoCompleteComponent_ng_template_0_ion_icon_4_Template, 1, 2, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attrs_r12 = ctx.attrs;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](attrs_r12.removeButtonClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", attrs_r12.removeButtonColor)("outline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.frontIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attrs_r12.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", attrs_r12.removeButtonIcon);
  }
}
function AutoCompleteComponent_div_2_div_1_ng_template_1_Template(rf, ctx) {}
const _c2 = function (a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    label: a1,
    removeButtonClasses: a2,
    removeButtonColor: a3,
    removeButtonIcon: a4,
    removeButtonSlot: a5
  };
};
const _c3 = function (a0) {
  return {
    attrs: a0
  };
};
function AutoCompleteComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoCompleteComponent_div_2_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const item_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.removeItem(item_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.selectionTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c2, item_r17, ctx_r16.getLabel(item_r17), ctx_r16.removeButtonClasses, ctx_r16.removeButtonColor, ctx_r16.removeButtonIcon, ctx_r16.removeButtonSlot)));
  }
}
function AutoCompleteComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_div_2_div_1_Template, 2, 11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selected);
  }
}
function AutoCompleteComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "boldprefix");
  }
  if (rf & 2) {
    const attrs_r21 = ctx.attrs;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, attrs_r21.label, attrs_r21.keyword), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AutoCompleteComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.autocompleteOptions.noItems, "\n");
  }
}
function AutoCompleteComponent_ng_template_11_Template(rf, ctx) {}
function AutoCompleteComponent_ng_template_12_ul_0_li_1_ng_template_1_Template(rf, ctx) {}
const _c4 = function (a0) {
  return {
    "focus": a0
  };
};
const _c5 = function (a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    label: a1,
    keyword: a2,
    formValue: a3,
    labelAttribute: a4,
    formValueAttribute: a5
  };
};
function AutoCompleteComponent_ng_template_12_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AutoCompleteComponent_ng_template_12_ul_0_li_1_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const index_r28 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.focusedOption = index_r28);
    })("click", function AutoCompleteComponent_ng_template_12_ul_0_li_1_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const suggestion_r27 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.handleSelectTap($event, suggestion_r27));
    })("tap", function AutoCompleteComponent_ng_template_12_ul_0_li_1_Template_li_tap_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const suggestion_r27 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.handleSelectTap($event, suggestion_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_12_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r27 = ctx.$implicit;
    const index_r28 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, ctx_r26.focusedOption === index_r28))("ngStyle", ctx_r26.styles.listItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r26.template || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](6, _c5, suggestion_r27, ctx_r26.getLabel(suggestion_r27), ctx_r26.keyword, ctx_r26.getFormValue(suggestion_r27), ctx_r26.getLabel(suggestion_r27), ctx_r26.getFormValue(suggestion_r27))));
  }
}
function AutoCompleteComponent_ng_template_12_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_12_ul_0_li_1_Template, 2, 15, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attrs_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().attrs;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r24.listStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, attrs_r23.data, 0, attrs_r23.maxResults));
  }
}
function AutoCompleteComponent_ng_template_12_ul_1_ng_template_2_Template(rf, ctx) {}
const _c6 = function (a0) {
  return {
    keyword: a0
  };
};
function AutoCompleteComponent_ng_template_12_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20)(1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoCompleteComponent_ng_template_12_ul_1_ng_template_2_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r25.listStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r25.styles.listItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r25.emptyTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c6, ctx_r25.keyword)));
  }
}
function AutoCompleteComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoCompleteComponent_ng_template_12_ul_0_Template, 3, 6, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_12_ul_1_Template, 3, 8, "ul", 19);
  }
  if (rf & 2) {
    const attrs_r23 = ctx.attrs;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r11.disabled || attrs_r23.maxSelected !== null && attrs_r23.selected.length >= attrs_r23.maxSelected) && attrs_r23.data.length > 0 && attrs_r23.showSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.suggestions.length === 0 && ctx_r11.showSuggestions);
  }
}
const _c7 = function (a0, a1) {
  return {
    "hidden": a0,
    "loading": a1
  };
};
const _c8 = function (a0, a1, a2) {
  return {
    "hidden": a0,
    "loading": a1,
    "disabled": a2
  };
};
const _c9 = function (a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    keyword: a1,
    maxResults: a2,
    maxSelected: a3,
    selected: a4,
    showSuggestions: a5
  };
};
class AutoCompleteOptions {
  constructor() {
    this.animated = false;
    this.color = null;
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.cancelButtonIcon = 'arrow-round-back';
    this.cancelButtonText = 'Cancel';
    this.clearIcon = 'close-circle';
    this.clearInput = false;
    this.clearOnEdit = false;
    this.debounce = 250;
    this.mode = 'md';
    this.noItems = 'No items found.';
    this.placeholder = 'Search';
    this.searchIcon = 'search';
    this.showCancelButton = false;
    this.spellcheck = 'off';
    this.type = 'search';
    this.value = '';
  }
}
class AutoCompleteStyles {
  constructor() {
    this.list = {};
    this.listItem = {};
    this.searchbar = {};
  }
}
var AutoCompleteComponent_1;
let AutoCompleteComponent = AutoCompleteComponent_1 = class AutoCompleteComponent {
  /**
   * Create a new instance
   */
  constructor() {
    this.alwaysShowList = false;
    this.autoFocusSuggestion = true;
    this.enableBrowserAutoComplete = false;
    this.clearInvalidInput = true;
    this.disabled = false;
    this.exclude = [];
    this.frontIcon = false;
    this.hideListOnSelection = true;
    this.location = 'auto';
    this.maxResults = 8;
    this.maxSelected = null;
    this.multi = false;
    this.name = '';
    this.removeButtonClasses = '';
    this.removeButtonColor = 'primary';
    this.removeButtonIcon = 'close-circle';
    this.removeButtonSlot = 'end';
    this.removeDuplicateSuggestions = true;
    this.selectOnTabOut = true;
    this.styles = new AutoCompleteStyles();
    this.useIonInput = false;
    this.autocompleteOptions = new AutoCompleteOptions();
    this.onTouchedCallback = false;
    this.onChangeCallback = false;
    this.hasFocus = false;
    this.isLoading = false;
    this.focusedOption = -1;
    this.showSuggestions = false;
    this.showListChanged = false;
    this.autoBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.autoFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ionAutoInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.keyword = '';
    this.suggestions = [];
    this.autocompleteOptions = new AutoCompleteOptions();
    this.defaultOpts = new AutoCompleteOptions();
    this.selected = [];
  }
  get model() {
    let model = this.selected;
    if (!this.multi && typeof this.selected.length !== 'undefined') {
      if (this.selected.length === 0) {
        model = null;
      } else {
        model = this.selected[0];
      }
    }
    return model;
  }
  set model(selected) {
    if (typeof selected !== 'undefined' && selected !== null) {
      this.selected = selected;
      this.keyword = this.getLabel(selected);
    }
  }
  set options(options) {
    this.autocompleteOptions = new AutoCompleteOptions();
    const keys = Object.keys(this.autocompleteOptions);
    const keysLength = keys.length;
    for (let i = 0; i < keysLength; i++) {
      const key = keys[i];
      if (typeof options[key] !== 'undefined') {
        this.autocompleteOptions[key] = options[key];
      }
    }
  }
  set eager(eager) {
    if (eager) {
      this.getItems(null, false);
    }
  }
  get showList() {
    return this.showSuggestions;
  }
  set showList(value) {
    if (typeof value === 'undefined') {
      return;
    }
    if (this.showSuggestions === value) {
      return;
    }
    this.showSuggestions = value === true;
    this.showListChanged = true;
  }
  /**
   *
   */
  ngAfterViewChecked() {
    if (this.showListChanged) {
      this.showListChanged = false;
      this.showSuggestions ? this.itemsShown.emit() : this.itemsHidden.emit();
    }
  }
  ngDoCheck() {
    if (!this.hasFocus) {
      if (this.clearInvalidInput && (this.selected === null || this.multi)) {
        if (this.keyword !== '') {
          this.keyword = '';
        }
        if (this.inputElem && this.inputElem.nativeElement) {
          if (this.inputElem.nativeElement.children && this.inputElem.nativeElement.children.length !== 0) {
            if (this.inputElem.nativeElement.children[0].children && this.inputElem.nativeElement.children[0].children.length !== 0) {
              if (this.inputElem.nativeElement.children[0].children[0].value) {
                this.inputElem.nativeElement.children[0].children[0].value = '';
              }
            }
          }
        }
        if (this.searchbarElem && this.searchbarElem.nativeElement) {
          if (this.searchbarElem.nativeElement.children && this.searchbarElem.nativeElement.children.length !== 0) {
            if (this.searchbarElem.nativeElement.children[0].children) {
              if (this.searchbarElem.nativeElement.children[0].children.length !== 0) {
                if (this.searchbarElem.nativeElement.children[0].children[0].value) {
                  this.searchbarElem.nativeElement.children[0].children[0].value = '';
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * Handle document click
   *
   * @param event
   *
   * @private
   */
  documentClickHandler(event) {
    if (this.searchbarElem && this.searchbarElem.nativeElement && !this.searchbarElem.nativeElement.contains(event.target) || this.inputElem && this.inputElem.nativeElement && this.inputElem.nativeElement.contains(event.target)) {
      this.hideItemList();
    }
  }
  /**
   * Get value from form
   *
   * @param selection
   *
   * @private
   */
  getFormValue(selection) {
    if (selection == null || typeof this.dataProvider === 'function') {
      return null;
    }
    let attr = this.dataProvider.formValueAttribute == null ? this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;
    if (typeof selection === 'object' && attr) {
      return selection[attr];
    }
    return selection;
  }
  /**
   * Get element's position on screen
   *
   * @param el
   *
   * @private
   */
  _getPosition(el) {
    let xPos = 0;
    let yPos = 0;
    while (el) {
      if (el.tagName === 'BODY') {
        const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        const yScroll = el.scrollTop || document.documentElement.scrollTop;
        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
  clickClear() {
    this.clearValue(true);
    this.itemsCleared.emit(true);
  }
  /**
   * Clear current input value
   *
   * @param hideItemList
   */
  clearValue(hideItemList = false) {
    this.keyword = '';
    this.selection = null;
    this.formValue = null;
    if (hideItemList) {
      this.hideItemList();
    }
    this.focusedOption = -1;
    return;
  }
  /**
   * Get items for auto-complete
   *
   * @param event
   * @param show
   */
  getItems(event, show) {
    this.isLoading = true;
    if (this.promise) {
      clearTimeout(this.promise);
    }
    this.promise = setTimeout(() => {
      if (event) {
        this.keyword = event.detail.target.value;
      }
      let result;
      if (this.showResultsFirst && this.keyword.trim() === '') {
        this.keyword = '';
      }
      if (typeof this.dataProvider === 'function') {
        result = this.dataProvider(this.keyword);
        this.setSuggestions(result, show);
        this.isLoading = false;
      } else {
        result = this.dataProvider.getResults(this.keyword);
        if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject) {
          result = result.asObservable();
        } else if (result instanceof Promise) {
          result = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(result);
        }
        if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable) {
          result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this.isLoading = false;
          })).subscribe(results => {
            this.setSuggestions(results, show);
          }, error => console.error(error));
        } else {
          this.setSuggestions(result, show);
          this.isLoading = false;
        }
      }
      this.ionAutoInput.emit(this.keyword);
    }, this.autocompleteOptions.debounce);
  }
  /**
   * Get an item's label
   *
   * @param selection
   */
  getLabel(selection) {
    if (selection == null || typeof this.dataProvider === 'function') {
      return '';
    }
    let attr = this.dataProvider.formValueAttribute == null ? this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;
    let value = selection;
    if (this.dataProvider.getItemLabel) {
      value = this.dataProvider.getItemLabel(value);
    }
    if (!this.multi && typeof value !== 'undefined' && Object.prototype.toString.call(value) === '[object Array]') {
      if (value.length === 0) {
        return '';
      } else {
        value = value[0];
      }
    }
    if (typeof value === 'object' && attr) {
      return value[attr] || '';
    }
    return value || '';
  }
  /**
   * Get current selection
   */
  getSelection() {
    if (this.multi) {
      return this.selection;
    } else {
      return this.selected;
    }
  }
  /**
   * Get menu style
   */
  listStyles() {
    const listLocationStyles = this.listLocationStyles();
    return Object.assign({}, listLocationStyles, this.styles.list);
  }
  listLocationStyles() {
    let location = this.location;
    if (this.location === 'auto') {
      const elementY = this._getPosition(this.searchbarElem.nativeElement).y;
      const windowY = window.innerHeight;
      if (elementY > windowY - elementY) {
        location = 'top';
      } else {
        location = 'bottom';
      }
    }
    if (location === 'bottom') {
      return {};
    } else {
      return {
        'bottom': '37px'
      };
    }
  }
  /**
   * Get current input value
   */
  getValue() {
    return this.formValue;
  }
  /**
   * Handles tab key press.
   * If `selectOnTabOut` is `true`, will select currently focused item
   *
   * @param event
   */
  handleTabOut(event) {
    if (this.selectOnTabOut && this.suggestions.length !== 0) {
      if (this.focusedOption !== -1) {
        this.selectItem(this.suggestions[this.focusedOption]);
      } else {
        this.hideItemList();
      }
    } else {
      this.hideItemList();
    }
    this.onBlur(event);
  }
  /**
   * Handle tap
   *
   * @param event
   */
  handleTap(event) {
    if (this.showResultsFirst || this.keyword.length > 0) {
      this.getItems();
    }
  }
  /**
   * Handle tap when selecting an item
   *
   * @param $event
   * @param suggestion
   */
  handleSelectTap($event, suggestion) {
    if (typeof suggestion !== 'undefined') {
      this.selectItem(suggestion);
      if ($event.srcEvent) {
        if ($event.srcEvent.stopPropagation) {
          $event.srcEvent.stopPropagation();
        }
        if ($event.srcEvent.preventDefault) {
          $event.srcEvent.preventDefault();
        }
      } else if ($event.preventDefault) {
        $event.preventDefault();
      }
    }
    return false;
  }
  /**
   * Hide item list
   */
  hideItemList() {
    if (this.showSuggestions === false && this.alwaysShowList === false) {
      this.showListChanged = true;
    }
    this.showSuggestions = this.alwaysShowList;
    this.focusedOption = -1;
  }
  highlightItem(direction) {
    if (this.showSuggestions === false) {
      this.showItemList();
    }
    let max = this.suggestions.length - 1;
    if (max > this.maxResults) {
      max = this.maxResults - 1;
    }
    if (direction < 0) {
      if (this.focusedOption === -1 || this.focusedOption === max) {
        this.focusedOption = 0;
      } else {
        this.focusedOption++;
      }
    } else if (direction > 0) {
      if (this.focusedOption === -1 || this.focusedOption === 0) {
        this.focusedOption = max;
      } else {
        this.focusedOption--;
      }
    }
  }
  /**
   * Fired when the input focused
   */
  onFocus(event) {
    this.hasFocus = true;
    this.getItems();
    event = this._reflectName(event);
    this.autoFocus.emit(event);
    this.focus.emit(event);
  }
  /**
   * Fired when the input focused
   */
  onBlur(event) {
    this.hasFocus = false;
    event = this._reflectName(event);
    this.autoBlur.emit(event);
    this.blur.emit(event);
  }
  _reflectName(event) {
    if (typeof event.srcElement.attributes['ng-reflect-name'] === 'object') {
      event.srcElement.name = event.srcElement.attributes['ng-reflect-name'].value;
    }
    return event;
  }
  /**
   * Register onChangeCallback
   *
   * @param fn
   */
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  /**
   * Register onTouchedCallback
   *
   * @param fn
   */
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  /**
   * Remove already selected suggestions
   *
   * @param suggestions
   */
  removeDuplicates(suggestions) {
    const selectedCount = this.selected ? this.selected.length : 0;
    const suggestionCount = suggestions.length;
    for (let i = 0; i < selectedCount; i++) {
      const selectedLabel = this.getLabel(this.selected[i]);
      for (let j = 0; j < suggestionCount; j++) {
        const suggestedLabel = this.getLabel(suggestions[j]);
        if (selectedLabel === suggestedLabel) {
          suggestions.splice(j, 1);
        }
      }
    }
    return suggestions;
  }
  removeExcluded(suggestions) {
    const excludedCount = this.exclude.length;
    for (let i = 0; i < excludedCount; i++) {
      let excludeLabel = this.exclude[i];
      if (typeof excludeLabel === 'object') {
        excludeLabel = this.getLabel(excludeLabel);
      }
      const suggestionCount = suggestions.length;
      for (let j = 0; j < suggestionCount; j++) {
        const suggestedLabel = this.getLabel(suggestions[j]);
        if (excludeLabel === suggestedLabel) {
          suggestions.splice(j, 1);
          break;
        }
      }
    }
    return suggestions;
  }
  /**
   * Remove item from selected
   *
   * @param selection
   * @param notify?
   */
  removeItem(selection, notify) {
    const count = this.selected ? this.selected.length : 0;
    for (let i = 0; i < count; i++) {
      const item = this.selected[i];
      const selectedLabel = this.getLabel(selection);
      const itemLabel = this.getLabel(item);
      if (selectedLabel === itemLabel) {
        this.selected.splice(i, 1);
      }
    }
    notify = typeof notify === 'undefined' ? true : notify;
    if (notify) {
      this.itemRemoved.emit(selection);
      this.itemsChange.emit(this.selected);
    }
    this.modelChange.emit(this.selected);
  }
  /**
   * Select item from list
   *
   * @param selection
   **/
  selectItem(selection) {
    this.keyword = this.getLabel(selection);
    this.formValue = this.getFormValue(selection);
    this.hideItemList();
    this.updateModel(this.formValue);
    if (this.hideListOnSelection) {
      this.hideItemList();
    }
    if (this.multi) {
      if (this.maxSelected === null || this.selected.length <= this.maxSelected) {
        this.clearValue();
        this.selected.push(selection);
        this.itemsChange.emit(this.selected);
      } else {
        return;
      }
    } else {
      this.selection = selection;
      this.selected = [selection];
      this.itemsChange.emit(selection);
    }
    this.itemSelected.emit(selection);
    this.modelChange.emit(this.selected);
  }
  /**
   * Set focus of searchbar
   */
  setFocus() {
    if (this.useIonInput && this.inputElem) {
      this.inputElem.nativeElement.setFocus();
    } else if (this.searchbarElem) {
      this.searchbarElem.nativeElement.setFocus();
    }
  }
  /**
   * Set suggestions
   *
   * @param suggestions
   * @param show
   */
  setSuggestions(suggestions, show) {
    if (this.removeDuplicateSuggestions) {
      suggestions = this.removeDuplicates(suggestions);
      suggestions = this.removeExcluded(suggestions);
    }
    this.suggestions = suggestions;
    if (show || typeof show === 'undefined') {
      this.showItemList();
    }
    if (this.autoFocusSuggestion) {
      if (this.suggestions.length !== 0) {
        this.focusedOption = 0;
      }
    }
  }
  /**
   * Set current input value
   *
   * @param selection
   */
  setValue(selection) {
    this.formValue = this.getFormValue(selection);
    this.keyword = this.getLabel(selection);
    return;
  }
  /**
   * Show item list
   */
  showItemList() {
    if (this.showSuggestions === false) {
      this.showListChanged = true;
    }
    this.showSuggestions = true;
  }
  /**
   * Update the model
   */
  updateModel(enteredText) {
    if (enteredText !== this.formValue) {
      this.formValue = enteredText;
      if (!this.multi) {
        this.selected = null;
      }
    }
    if (this.onChangeCallback) {
      this.onChangeCallback(this.formValue);
    }
    this.modelChange.emit(this.selected);
  }
  /**
   * Write value
   *
   * @param value
   */
  writeValue(value) {
    if (value !== this.selection) {
      this.selection = value || null;
      this.formValue = this.getFormValue(this.selection);
      this.keyword = this.getLabel(this.selection);
    }
  }
};
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) {
  return new (t || AutoCompleteComponent)();
};
AutoCompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AutoCompleteComponent,
  selectors: [["ion-auto-complete"]],
  viewQuery: function AutoCompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchbarElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElem = _t.first);
    }
  },
  hostBindings: function AutoCompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoCompleteComponent_click_HostBindingHandler($event) {
        return ctx.documentClickHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    alwaysShowList: "alwaysShowList",
    autoFocusSuggestion: "autoFocusSuggestion",
    enableBrowserAutoComplete: "enableBrowserAutoComplete",
    clearInvalidInput: "clearInvalidInput",
    disabled: "disabled",
    exclude: "exclude",
    frontIcon: "frontIcon",
    hideListOnSelection: "hideListOnSelection",
    location: "location",
    maxResults: "maxResults",
    maxSelected: "maxSelected",
    multi: "multi",
    name: "name",
    removeButtonClasses: "removeButtonClasses",
    removeButtonColor: "removeButtonColor",
    removeButtonIcon: "removeButtonIcon",
    removeButtonSlot: "removeButtonSlot",
    removeDuplicateSuggestions: "removeDuplicateSuggestions",
    selectOnTabOut: "selectOnTabOut",
    styles: "styles",
    useIonInput: "useIonInput",
    keyword: "keyword",
    model: "model",
    options: "options",
    eager: "eager",
    dataProvider: "dataProvider",
    emptyTemplate: "emptyTemplate",
    selectionTemplate: "selectionTemplate",
    showResultsFirst: "showResultsFirst",
    listTemplate: "listTemplate",
    template: "template"
  },
  outputs: {
    autoBlur: "autoBlur",
    autoFocus: "autoFocus",
    blur: "blur",
    focus: "focus",
    ionAutoInput: "ionAutoInput",
    itemsChange: "itemsChange",
    itemsCleared: "itemsCleared",
    itemsHidden: "itemsHidden",
    itemRemoved: "itemRemoved",
    itemSelected: "itemSelected",
    itemsShown: "itemsShown",
    modelChange: "modelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: AutoCompleteComponent_1,
    multi: true
  }])],
  decls: 14,
  vars: 49,
  consts: [["defaultSelection", ""], [4, "ngIf"], [3, "autocomplete", "name", "ngModel", "placeholder", "type", "clearOnEdit", "clearInput", "color", "mode", "disabled", "ngClass", "ngStyle", "ionInput", "tap", "ngModelChange", "keydown.tab", "keydown.shift.tab", "keyup.arrowDown", "keyup.arrowUp", "keyup.enter", "keyup.escape", "ionFocus", "ionBlur"], ["inputElem", ""], [3, "autocomplete", "name", "animated", "ngModel", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "showCancelButton", "debounce", "placeholder", "autocorrect", "mode", "searchIcon", "spellcheck", "type", "ngClass", "ngStyle", "ionInput", "tap", "ngModelChange", "keydown.tab", "keydown.shift.tab", "keyup.arrowDown", "keyup.arrowUp", "keyup.enter", "keyup.escape", "ionClear", "ionFocus", "ionBlur"], ["searchbarElem", ""], ["defaultTemplate", ""], ["class", "ion-text-center"], ["defaultEmptyTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultList", ""], [3, "color", "outline"], ["color", "primary", 3, "name", "slot", 4, "ngIf"], [3, "name", "slot", 4, "ngIf"], ["color", "primary", 3, "name", "slot"], [3, "name", "slot"], ["class", "selected-items", 3, "click", 4, "ngFor", "ngForOf"], [1, "selected-items", 3, "click"], [3, "innerHTML"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "ngClass", "ngStyle", "mouseenter", "click", "tap", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "mouseenter", "click", "tap"]],
  template: function AutoCompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoCompleteComponent_ng_template_0_Template, 5, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoCompleteComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function AutoCompleteComponent_Template_ion_input_ionInput_3_listener($event) {
        return ctx.getItems($event);
      })("tap", function AutoCompleteComponent_Template_ion_input_tap_3_listener($event) {
        return ctx.handleTap($event);
      })("ngModelChange", function AutoCompleteComponent_Template_ion_input_ngModelChange_3_listener($event) {
        return ctx.keyword = $event;
      })("ngModelChange", function AutoCompleteComponent_Template_ion_input_ngModelChange_3_listener($event) {
        return ctx.updateModel($event);
      })("keydown.tab", function AutoCompleteComponent_Template_ion_input_keydown_tab_3_listener($event) {
        return ctx.handleTabOut($event);
      })("keydown.shift.tab", function AutoCompleteComponent_Template_ion_input_keydown_shift_tab_3_listener() {
        return ctx.hideItemList();
      })("keyup.arrowDown", function AutoCompleteComponent_Template_ion_input_keyup_arrowDown_3_listener() {
        return ctx.highlightItem(-1);
      })("keyup.arrowUp", function AutoCompleteComponent_Template_ion_input_keyup_arrowUp_3_listener() {
        return ctx.highlightItem(1);
      })("keyup.enter", function AutoCompleteComponent_Template_ion_input_keyup_enter_3_listener($event) {
        return ctx.handleSelectTap($event, ctx.suggestions[ctx.focusedOption]);
      })("keyup.escape", function AutoCompleteComponent_Template_ion_input_keyup_escape_3_listener() {
        return ctx.hideItemList();
      })("ionFocus", function AutoCompleteComponent_Template_ion_input_ionFocus_3_listener($event) {
        return ctx.onFocus($event);
      })("ionBlur", function AutoCompleteComponent_Template_ion_input_ionBlur_3_listener($event) {
        return ctx.onBlur($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-searchbar", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function AutoCompleteComponent_Template_ion_searchbar_ionInput_5_listener($event) {
        return ctx.getItems($event);
      })("tap", function AutoCompleteComponent_Template_ion_searchbar_tap_5_listener($event) {
        return ctx.handleTap($event);
      })("ngModelChange", function AutoCompleteComponent_Template_ion_searchbar_ngModelChange_5_listener($event) {
        return ctx.keyword = $event;
      })("ngModelChange", function AutoCompleteComponent_Template_ion_searchbar_ngModelChange_5_listener($event) {
        return ctx.updateModel($event);
      })("keydown.tab", function AutoCompleteComponent_Template_ion_searchbar_keydown_tab_5_listener($event) {
        return ctx.handleTabOut($event);
      })("keydown.shift.tab", function AutoCompleteComponent_Template_ion_searchbar_keydown_shift_tab_5_listener() {
        return ctx.hideItemList();
      })("keyup.arrowDown", function AutoCompleteComponent_Template_ion_searchbar_keyup_arrowDown_5_listener() {
        return ctx.highlightItem(-1);
      })("keyup.arrowUp", function AutoCompleteComponent_Template_ion_searchbar_keyup_arrowUp_5_listener() {
        return ctx.highlightItem(1);
      })("keyup.enter", function AutoCompleteComponent_Template_ion_searchbar_keyup_enter_5_listener($event) {
        return ctx.handleSelectTap($event, ctx.suggestions[ctx.focusedOption]);
      })("keyup.escape", function AutoCompleteComponent_Template_ion_searchbar_keyup_escape_5_listener() {
        return ctx.hideItemList();
      })("ionClear", function AutoCompleteComponent_Template_ion_searchbar_ionClear_5_listener() {
        return ctx.clickClear();
      })("ionFocus", function AutoCompleteComponent_Template_ion_searchbar_ionFocus_5_listener($event) {
        return ctx.onFocus($event);
      })("ionBlur", function AutoCompleteComponent_Template_ion_searchbar_ionBlur_5_listener($event) {
        return ctx.onBlur($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutoCompleteComponent_ng_template_7_Template, 2, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AutoCompleteComponent_ng_template_9_Template, 1, 1, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AutoCompleteComponent_ng_template_11_Template, 0, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutoCompleteComponent_ng_template_12_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multi);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocomplete", ctx.enableBrowserAutoComplete ? "on" : "off")("name", ctx.name)("ngModel", ctx.keyword)("placeholder", ctx.autocompleteOptions.placeholder == null ? ctx.defaultOpts.placeholder : ctx.autocompleteOptions.placeholder)("type", ctx.autocompleteOptions.type == null ? ctx.defaultOpts.type : ctx.autocompleteOptions.type)("clearOnEdit", ctx.autocompleteOptions.clearOnEdit == null ? ctx.defaultOpts.clearOnEdit : ctx.autocompleteOptions.clearOnEdit)("clearInput", ctx.autocompleteOptions.clearInput == null ? ctx.defaultOpts.clearInput : ctx.autocompleteOptions.clearInput)("color", ctx.autocompleteOptions.color == null ? null : ctx.autocompleteOptions.color)("mode", ctx.autocompleteOptions.mode == null ? ctx.defaultOpts.mode : ctx.autocompleteOptions.mode)("disabled", ctx.disabled || ctx.maxSelected !== null && ctx.selected.length >= ctx.maxSelected)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c7, !ctx.useIonInput, ctx.isLoading))("ngStyle", ctx.styles.searchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocomplete", ctx.enableBrowserAutoComplete ? "on" : "off")("name", ctx.name)("animated", ctx.autocompleteOptions.animated == null ? ctx.defaultOpts.animated : ctx.autocompleteOptions.animated)("ngModel", ctx.keyword)("cancelButtonIcon", ctx.autocompleteOptions.cancelButtonIcon == null ? ctx.defaultOpts.cancelButtonIcon : ctx.autocompleteOptions.cancelButtonIcon)("cancelButtonText", ctx.autocompleteOptions.cancelButtonText == null ? ctx.defaultOpts.cancelButtonText : ctx.autocompleteOptions.cancelButtonText)("clearIcon", ctx.autocompleteOptions.clearIcon == null ? ctx.defaultOpts.clearIcon : ctx.autocompleteOptions.clearIcon)("color", ctx.autocompleteOptions.color == null ? null : ctx.autocompleteOptions.color)("showCancelButton", ctx.autocompleteOptions.showCancelButton == null ? ctx.defaultOpts.showCancelButton ? "always" : "never" : ctx.autocompleteOptions.showCancelButton ? "always" : "never")("debounce", ctx.autocompleteOptions.debounce == null ? ctx.defaultOpts.debounce : ctx.autocompleteOptions.debounce)("placeholder", ctx.autocompleteOptions.placeholder == null ? ctx.defaultOpts.placeholder : ctx.autocompleteOptions.placeholder)("autocorrect", ctx.autocompleteOptions.autocorrect == null ? ctx.defaultOpts.autocorrect : ctx.autocompleteOptions.autocorrect)("mode", ctx.autocompleteOptions.mode == null ? ctx.defaultOpts.mode : ctx.autocompleteOptions.mode)("searchIcon", ctx.autocompleteOptions.searchIcon == null ? ctx.defaultOpts.searchIcon : ctx.autocompleteOptions.searchIcon)("spellcheck", ctx.autocompleteOptions.spellcheck == null ? ctx.defaultOpts.spellcheck : ctx.autocompleteOptions.spellcheck)("type", ctx.autocompleteOptions.type == null ? ctx.defaultOpts.type : ctx.autocompleteOptions.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](36, _c8, ctx.useIonInput, ctx.isLoading, ctx.disabled || ctx.maxSelected !== null && ctx.selected.length >= ctx.maxSelected))("ngStyle", ctx.styles.searchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.listTemplate || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](40, _c9, ctx.suggestions, ctx.keyword, ctx.maxResults, ctx.maxSelected, ctx.selected, ctx.showSuggestions)));
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, BoldPrefix];
  },
  styles: ["ion-auto-complete[_ngcontent-%COMP%]{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{padding:1px!important}ion-auto-complete[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   input.searchbar-input[_ngcontent-%COMP%]{pointer-events:none;cursor:default}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ion-auto-complete-item[_ngcontent-%COMP%]{height:40px;width:100%}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border:none}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.focus[_ngcontent-%COMP%], ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{cursor:pointer;background:#f1f1f1}ion-auto-complete[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}ion-auto-complete[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   input.searchbar-input[_ngcontent-%COMP%]{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete[_ngcontent-%COMP%]   .searchbar-clear-button.sc-ion-searchbar-md[_ngcontent-%COMP%]{right:34px}ion-auto-complete[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{float:left}"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "alwaysShowList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "autoFocusSuggestion", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "enableBrowserAutoComplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "clearInvalidInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "dataProvider", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "emptyTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "exclude", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "frontIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "hideListOnSelection", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "keyword", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "location", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "maxResults", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "maxSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "multi", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "removeButtonClasses", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "removeButtonColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "removeButtonIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "removeButtonSlot", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "removeDuplicateSuggestions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "selectionTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "selectOnTabOut", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "showResultsFirst", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "styles", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "listTemplate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "template", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "useIonInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "model", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "options", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "modelChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], AutoCompleteComponent.prototype, "eager", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "blur", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "autoFocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "autoBlur", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "focus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "ionAutoInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemsChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemsCleared", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemsHidden", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemRemoved", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], AutoCompleteComponent.prototype, "itemsShown", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('searchbarElem', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
  static: false
})], AutoCompleteComponent.prototype, "searchbarElem", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('inputElem', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
  static: false
})], AutoCompleteComponent.prototype, "inputElem", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('document:click', ['$event'])], AutoCompleteComponent.prototype, "documentClickHandler", null);

/**
 * Bolds the beginning of the matching string in the item
 */
let BoldPrefix = class BoldPrefix {
  transform(value, keyword) {
    if (!keyword) {
      return value;
    }
    let escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return value.replace(new RegExp(escaped_keyword, 'gi'), function (str) {
      return str.bold();
    });
  }
};
BoldPrefix.ɵfac = function BoldPrefix_Factory(t) {
  return new (t || BoldPrefix)();
};
BoldPrefix.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "boldprefix",
  type: BoldPrefix,
  pure: true
});
BoldPrefix.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BoldPrefix,
  factory: function (t) {
    return BoldPrefix.ɵfac(t);
  }
});
var AutoCompleteModule_1;
let AutoCompleteModule = AutoCompleteModule_1 = class AutoCompleteModule {
  static forRoot() {
    return {
      ngModule: AutoCompleteModule_1,
      providers: []
    };
  }
};
AutoCompleteModule.ɵfac = function AutoCompleteModule_Factory(t) {
  return new (t || AutoCompleteModule)();
};
AutoCompleteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutoCompleteModule
});
AutoCompleteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: AutoCompleteComponent_1,
        multi: true
      }],
      selector: 'ion-auto-complete',
      template: "<ng-template #defaultSelection\n             let-attrs=\"attrs\">\n    <ion-chip class=\"{{ attrs.removeButtonClasses }}\"\n              [color]=\"attrs.removeButtonColor\"\n              [outline]=\"true\">\n        <ion-icon *ngIf=\"frontIcon\"\n                  [name]=\"frontIcon\"\n                  [slot]=\"'start'\"\n                  color=\"primary\"></ion-icon>\n\n        <ion-label>{{ attrs.label }}</ion-label>\n\n        <ion-icon *ngIf=\"attrs.removeButtonIcon\"\n                  [name]=\"attrs.removeButtonIcon\"\n                  [slot]=\"attrs.removeButtonSlot\"></ion-icon>\n    </ion-chip>\n</ng-template>\n\n<div *ngIf=\"multi\">\n    <div *ngFor=\"let item of selected\"\n         class=\"selected-items\"\n         (click)=\"removeItem(item)\">\n        <ng-template [ngTemplateOutlet]=\"selectionTemplate || defaultSelection\"\n                     [ngTemplateOutletContext]=\"{\n                            attrs: {\n                              data:                item,\n                              label:               getLabel(item),\n                              removeButtonClasses: removeButtonClasses,\n                              removeButtonColor:   removeButtonColor,\n                              removeButtonIcon:    removeButtonIcon,\n                              removeButtonSlot:    removeButtonSlot\n                            }\n                         }\"></ng-template>\n    </div>\n</div>\n\n<ion-input #inputElem\n           [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n           [name]=\"name\"\n           (ionInput)=\"getItems($event)\"\n           (tap)=\"handleTap($event)\"\n           [(ngModel)]=\"keyword\"\n           (ngModelChange)=\"updateModel($event)\"\n           [placeholder]=\"autocompleteOptions.placeholder == null ? defaultOpts.placeholder : autocompleteOptions.placeholder\"\n           [type]=\"autocompleteOptions.type == null ? defaultOpts.type : autocompleteOptions.type\"\n           [clearOnEdit]=\"autocompleteOptions.clearOnEdit == null ? defaultOpts.clearOnEdit : autocompleteOptions.clearOnEdit\"\n           [clearInput]=\"autocompleteOptions.clearInput == null ? defaultOpts.clearInput : autocompleteOptions.clearInput\"\n           [color]=\"autocompleteOptions.color == null ? null : autocompleteOptions.color\"\n           [mode]=\"autocompleteOptions.mode == null ? defaultOpts.mode : autocompleteOptions.mode\"\n           [disabled]=\"disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)\"\n           [ngClass]=\"{ 'hidden': !useIonInput, 'loading': isLoading }\"\n           [ngStyle]=\"styles.searchbar\"\n           (keydown.tab)=\"handleTabOut($event)\"\n           (keydown.shift.tab)=\"hideItemList()\"\n           (keyup.arrowDown)=\"highlightItem(-1)\"\n           (keyup.arrowUp)=\"highlightItem(1)\"\n           (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n           (keyup.escape)=\"hideItemList()\"\n           (ionFocus)=\"onFocus($event)\"\n           (ionBlur)=\"onBlur($event)\"></ion-input>\n\n<ion-searchbar #searchbarElem\n               [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n               [name]=\"name\"\n               [animated]=\"autocompleteOptions.animated == null ? defaultOpts.animated : autocompleteOptions.animated\"\n               (ionInput)=\"getItems($event)\"\n               (tap)=\"handleTap($event)\"\n               [(ngModel)]=\"keyword\"\n               (ngModelChange)=\"updateModel($event)\"\n               [cancelButtonIcon]=\"autocompleteOptions.cancelButtonIcon == null ? defaultOpts.cancelButtonIcon : autocompleteOptions.cancelButtonIcon\"\n               [cancelButtonText]=\"autocompleteOptions.cancelButtonText == null ? defaultOpts.cancelButtonText : autocompleteOptions.cancelButtonText\"\n               [clearIcon]=\"autocompleteOptions.clearIcon == null ? defaultOpts.clearIcon : autocompleteOptions.clearIcon\"\n               [color]=\"autocompleteOptions.color == null ? null : autocompleteOptions.color\"\n               [showCancelButton]=\"autocompleteOptions.showCancelButton == null ?\n                                        (defaultOpts.showCancelButton ? 'always' : 'never') :\n                                        (autocompleteOptions.showCancelButton ? 'always' : 'never')\"\n               [debounce]=\"autocompleteOptions.debounce == null ? defaultOpts.debounce : autocompleteOptions.debounce\"\n               [placeholder]=\"autocompleteOptions.placeholder == null ? defaultOpts.placeholder : autocompleteOptions.placeholder\"\n               [autocorrect]=\"autocompleteOptions.autocorrect == null ? defaultOpts.autocorrect : autocompleteOptions.autocorrect\"\n               [mode]=\"autocompleteOptions.mode == null ? defaultOpts.mode : autocompleteOptions.mode\"\n               [searchIcon]=\"autocompleteOptions.searchIcon == null ? defaultOpts.searchIcon : autocompleteOptions.searchIcon\"\n               [spellcheck]=\"autocompleteOptions.spellcheck == null ? defaultOpts.spellcheck : autocompleteOptions.spellcheck\"\n               [type]=\"autocompleteOptions.type == null ? defaultOpts.type : autocompleteOptions.type\"\n               [ngClass]=\"{ 'hidden': useIonInput, 'loading': isLoading, 'disabled': disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected) }\"\n               [ngStyle]=\"styles.searchbar\"\n               (keydown.tab)=\"handleTabOut($event)\"\n               (keydown.shift.tab)=\"hideItemList()\"\n               (keyup.arrowDown)=\"highlightItem(-1)\"\n               (keyup.arrowUp)=\"highlightItem(1)\"\n               (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n               (keyup.escape)=\"hideItemList()\"\n               (ionClear)=\"clickClear()\"\n               (ionFocus)=\"onFocus($event)\"\n               (ionBlur)=\"onBlur($event)\"></ion-searchbar>\n\n<ng-template #defaultTemplate\n             let-attrs=\"attrs\">\n    <span [innerHTML]='attrs.label | boldprefix:attrs.keyword'></span>\n</ng-template>\n\n<ng-template #defaultEmptyTemplate\n             let-attrs=\"attrs\"\n             class=\"ion-text-center\">\n    {{ autocompleteOptions.noItems }}\n</ng-template>\n\n<ng-template [ngTemplateOutlet]=\"listTemplate || defaultList\"\n             [ngTemplateOutletContext]=\"{\n                        attrs: {\n                            data:            suggestions,\n                            keyword:         keyword,\n                            maxResults:      maxResults,\n                            maxSelected:     maxSelected,\n                            selected:        selected,\n                            showSuggestions: showSuggestions\n                          }\n                        }\"></ng-template>\n\n<ng-template #defaultList\n             let-attrs=\"attrs\">\n    <ul *ngIf=\"!(disabled || (attrs.maxSelected !== null && attrs.selected.length >= attrs.maxSelected)) && attrs.data.length > 0 && attrs.showSuggestions\"\n        [ngStyle]=\"listStyles()\">\n        <li *ngFor=\"let suggestion of attrs.data| slice:0:attrs.maxResults; let index = index\"\n            [ngClass]=\"{ 'focus': focusedOption === index }\"\n            [ngStyle]=\"styles.listItem\"\n            (mouseenter)=\"focusedOption = index\"\n            (click)=\"handleSelectTap($event, suggestion)\"\n            (tap)=\"handleSelectTap($event, suggestion)\">\n            <ng-template [ngTemplateOutlet]=\"template || defaultTemplate\"\n                         [ngTemplateOutletContext]=\"{\n                            attrs:{\n                              data:               suggestion,\n                              label:              getLabel(suggestion),\n                              keyword:            keyword,\n                              formValue:          getFormValue(suggestion),\n                              labelAttribute:     getLabel(suggestion),\n                              formValueAttribute: getFormValue(suggestion)\n                            }\n                         }\"></ng-template>\n        </li>\n    </ul>\n\n    <ul *ngIf=\"suggestions.length === 0 && showSuggestions\"\n        [ngStyle]=\"listStyles()\">\n        <li [ngStyle]=\"styles.listItem\">\n            <ng-template [ngTemplateOutlet]=\"emptyTemplate || defaultEmptyTemplate\"\n                         [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          keyword: keyword\n                        }\n                     }\"></ng-template>\n        </li>\n    </ul>\n</ng-template>\n",
      styles: ["ion-auto-complete{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete ion-searchbar{padding:1px!important}ion-auto-complete .disabled input.searchbar-input{pointer-events:none;cursor:default}ion-auto-complete ul{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete ul li{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete ul ion-auto-complete-item{height:40px;width:100%}ion-auto-complete ul li:last-child{border:none}ion-auto-complete ul li.focus,ion-auto-complete ul li:focus{cursor:pointer;background:#f1f1f1}ion-auto-complete .hidden{display:none}ion-auto-complete .loading input.searchbar-input{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete .searchbar-clear-button.sc-ion-searchbar-md{right:34px}ion-auto-complete .selected-items{float:left}"]
    }]
  }], function () {
    return [];
  }, {
    alwaysShowList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoFocusSuggestion: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableBrowserAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearInvalidInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exclude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frontIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideListOnSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    location: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxResults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeButtonClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeButtonIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeButtonSlot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeDuplicateSuggestions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectOnTabOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useIonInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    autoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ionAutoInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemRemoved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    modelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    keyword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    eager: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    /**
     * Handle document click
     *
     * @param event
     *
     * @private
     */
    documentClickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:click', ['$event']]
    }],
    dataProvider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showResultsFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchbarElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchbarElem', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: false
      }]
    }],
    inputElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputElem', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: false
      }]
    }]
  });
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoldPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'boldprefix'
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [AutoCompleteComponent, BoldPrefix],
      exports: [AutoCompleteComponent, BoldPrefix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutoCompleteModule, {
    declarations: function () {
      return [AutoCompleteComponent, BoldPrefix];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule];
    },
    exports: function () {
      return [AutoCompleteComponent, BoldPrefix];
    }
  });
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6106:
/*!*******************************************!*\
  !*** ./src/app/Home/Home.scss?ngResource ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles properties */\nion-content[_aio-803E88FA] {\n  --padding-top: 20px;\n  --padding-end: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n}\n\n/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/Home/Home.scss"],"names":[],"mappings":"AAGA,sBAAA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;AAFA;;AAIA,gBAAA","sourcesContent":["/* Styles properties */\nion-content[_aio-803E88FA] {\n  --padding-top: 20px;\n  --padding-end: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n}\n\n/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7792:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 6239:
/*!*******************************************!*\
  !*** ./src/app/Home/Home.html?ngResource ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-490CB7BC>\n    <ion-toolbar _aio-5FE46C02 #j_68>\n        <ion-title _aio-679EF68F #j_70>\n            Home\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content _aio-803E88FA>\n    <div _aio-BB39350C #j_51>\n        What would you like to recycle?\n    </div>\n    <div _aio-59792CA8 #j_52>\n        <span *ngIf=\"false\">\n            <ion-img _aio-D14A685C #j_53 src=\"assets/images/autocomplete.png\">\n            </ion-img>\n        </span>\n        <ion-auto-complete [dataProvider]=\"statesDictionary\" (itemSelected)=\"stateSelected($event)\">\n        </ion-auto-complete>\n    </div>\n    <h2 _aio-F7E505AF #j_54>\n    </h2>\n    <ion-grid _aio-28CCDC8D #j_55 *ngIf=\"state\">\n        <ion-row _aio-401F7C5B #j_56>\n            <ion-col _aio-81451E0F #j_57>\n                <ion-text _aio-3860C432 #j_58>\n                    Name:\n                </ion-text>\n            </ion-col>\n            <ion-col _aio-D90F7750 #j_59>\n                <ion-text _aio-F31D8D51 #j_60>\n                    {{ state.name }}\n                </ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row _aio-1700A81C #j_61>\n            <ion-col _aio-A1D3889D #j_62>\n                <ion-text _aio-A02C39C3 #j_63>\n                    Description:\n                </ion-text>\n            </ion-col>\n            <ion-col _aio-76C69AC0 #j_64>\n                <ion-text _aio-EC06ED59 #j_65>\n                    {{ state.desc}}\n                </ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-button _aio-6BB439D6 #j_66 routerDirection=\"forward\" [routerLink]=\"['/uploadphotoscreen']\">\n        Next\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Home_Home_module_ts.js.map