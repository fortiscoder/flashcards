(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class AppComponent {
    constructor(router) {
        this.home = { 'active': false };
        this.flashcards = { 'active': false };
        this.settings = { 'active': false };
        router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                let r = e;
                switch (r.url) {
                    case '/home':
                        this.home = { 'active': true };
                        break;
                    case '/flashcard':
                        this.flashcards = { 'active': true };
                        break;
                    case '/settings':
                        this.settings = { 'active': true };
                }
            }
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", 3, "ngClass"], ["href", "/home", 1, "nav-link"], [1, "sr-only"], ["href", "/flashcard", 1, "nav-link"], ["href", "/settings", 1, "nav-link"], [1, "container"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Flashcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Flashcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " \u00A9 2017 Scottie Wilcoxson. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.flashcards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.settings);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#footer[_ngcontent-%COMP%]{\n    position:fixed;\n    bottom:0;\n    left:0;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTtJQUNSLE1BQU07R0FDUCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlcntcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OjA7XG4gICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/flashcard/flashcard.component */ "./src/app/components/flashcard/flashcard.component.ts");
/* harmony import */ var _components_flashcard_setting_flashcard_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/flashcard-setting/flashcard-setting.component */ "./src/app/components/flashcard-setting/flashcard-setting.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/quiz-setting.service */ "./src/app/services/quiz-setting.service.ts");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/quiz.service */ "./src/app/services/quiz.service.ts");





// Components




// Services




// Route Configuration
const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'flashcard', component: _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardComponent"] },
    { path: 'settings', component: _components_flashcard_setting_flashcard_setting_component__WEBPACK_IMPORTED_MODULE_7__["FlashcardSettingComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }
];
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_quiz_service__WEBPACK_IMPORTED_MODULE_10__["QuizService"],
        _services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_9__["QuizSettingService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardComponent"],
        _components_flashcard_setting_flashcard_setting_component__WEBPACK_IMPORTED_MODULE_7__["FlashcardSettingComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardComponent"],
                    _components_flashcard_setting_flashcard_setting_component__WEBPACK_IMPORTED_MODULE_7__["FlashcardSettingComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [
                    _services_quiz_service__WEBPACK_IMPORTED_MODULE_10__["QuizService"],
                    _services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_9__["QuizSettingService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/flashcard-setting/flashcard-setting.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/flashcard-setting/flashcard-setting.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FlashcardSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardSettingComponent", function() { return FlashcardSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quiz-setting.service */ "./src/app/services/quiz-setting.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function FlashcardSettingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Settings Updated!\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FlashcardSettingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Error saving: ", ctx_r13.errmsg, "\n");
} }
class FlashcardSettingComponent {
    constructor(settingSvc) {
        this.settingSvc = settingSvc;
        this.success = false;
        this.failure = false;
        this.errmsg = "";
    }
    ngOnInit() {
        this.maxQuestions = this.settingSvc.TotalQuestions;
        this.highestNumber = this.settingSvc.MaxNumber;
        this.success = false;
        this.failure = false;
    }
    onSave() {
        console.log('Save clicked...');
        // Clear panels
        this.success = false;
        this.failure = false;
        this.settingSvc.MaxNumber = this.highestNumber;
        this.settingSvc.TotalQuestions = this.maxQuestions;
        this.settingSvc.Save().subscribe(result => {
            // Changes saved.... Alert the user...
            this.success = true;
        }, (error) => {
            let err = error;
            this.errmsg = err.message;
            this.failure = true;
        });
    }
}
FlashcardSettingComponent.??fac = function FlashcardSettingComponent_Factory(t) { return new (t || FlashcardSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_1__["QuizSettingService"])); };
FlashcardSettingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FlashcardSettingComponent, selectors: [["app-flashcard-setting"]], decls: 11, vars: 4, consts: [["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "totalQuestions"], ["type", "number", "id", "totalQuestions", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "highestNumber"], ["type", "number", "id", "highestNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function FlashcardSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, FlashcardSettingComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FlashcardSettingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Number of Quiz Questions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FlashcardSettingComponent_Template_input_ngModelChange_5_listener($event) { return ctx.maxQuestions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Highest Number in Equation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FlashcardSettingComponent_Template_input_ngModelChange_8_listener($event) { return ctx.highestNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FlashcardSettingComponent_Template_button_click_9_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.success == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.failure == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.maxQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.highestNumber);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxhc2hjYXJkLXNldHRpbmcvZmxhc2hjYXJkLXNldHRpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FlashcardSettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flashcard-setting',
                templateUrl: './flashcard-setting.component.html',
                styleUrls: ['./flashcard-setting.component.css']
            }]
    }], function () { return [{ type: _services_quiz_setting_service__WEBPACK_IMPORTED_MODULE_1__["QuizSettingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/flashcard/flashcard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/flashcard/flashcard.component.ts ***!
  \*************************************************************/
/*! exports provided: FlashcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardComponent", function() { return FlashcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/operation-type.enum */ "./src/app/types/operation-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["answerField"];
function FlashcardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Error saving: ", ctx_r0.errmsg, "\n");
} }
function FlashcardComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.warningMsg, "\n");
} }
function FlashcardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Choose an operation and click the \"Start Quiz\" button to start.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "You can click the \"Settings\" link to adjust the quiz settings below:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Number of quiz questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Highest number in equations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Your settings are saved in your browser so you do not have to set them ever ytime you visit the site.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FlashcardComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FlashcardComponent_div_19_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.userAnswer = $event; })("keyup.enter", function FlashcardComponent_div_19_Template_input_keyup_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.moveNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FlashcardComponent_div_19_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.moveNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Question ", ctx_r3.index + 1, " of ", ctx_r3.totals, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.operatorIndicator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.userAnswer);
} }
function FlashcardComponent_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const q_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", q_r11.Equation(), " = ", q_r11.Response, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](q_r11.ResultIcon);
} }
function FlashcardComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FlashcardComponent_div_20_div_5_Template, 5, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" You got ", ctx_r4.score, "% correct! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.questions);
} }
class FlashcardComponent {
    constructor(quizSvc) {
        this.quizSvc = quizSvc;
        this.totals = 0;
        this.quizRunning = false;
        this.questions = [];
        this.selectedOp = "Addition";
        // Messages
        this.hasWarning = false;
        this.failure = false;
        // Question index
        this.index = 0;
        // Forms
        this.opForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            opControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("Addition")
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.createSubscription$.unsubscribe();
    }
    startQuiz() {
        // Clear messages
        this.failure = false;
        this.hasWarning = false;
        this.quizComplete = false;
        // Reset index
        this.index = 0;
        let op;
        switch (this.opForm.get("opControl").value) {
            case "Subtraction":
                op = _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["OperationType"].Subtract;
                break;
            case "Multiplication":
                op = _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["OperationType"].Multiply;
                break;
            case "Division":
                op = _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["OperationType"].Divide;
                break;
            default:
                op = _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["OperationType"].Add;
                break;
        }
        // Create the quiz
        this.createSubscription$ = this.quizSvc.CreateQuiz(op).subscribe(q => {
            this.questions = q;
            this.totals = this.questions.length;
            this.index = 0;
        }, (error) => {
            let err = error;
            this.errmsg = err.message;
            this.failure = true;
        }, () => {
            if (this.questions.length > 0) {
                this.quizRunning = true;
                this.setupQuestion();
            }
            else {
                this.warningMsg = "There are no questions in this quiz. Please check the settings.";
                this.hasWarning = true;
            }
        });
    }
    moveNext() {
        // move on...
        // see if the current question is correct...
        this.questions[this.index].Result = this.userAnswer == this.questions[this.index].Value() ? _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["QuestionResult"].Correct : _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["QuestionResult"].Incorrect;
        this.questions[this.index].Response = this.userAnswer;
        this.index++;
        if (this.index < this.questions.length) {
            // Setup next question
            this.setupQuestion();
        }
        else {
            // Done...
            this.quizRunning = false;
            this.quizComplete = true;
            this.score = this.calculateScore();
        }
    }
    // Helper method to setup the question
    setupQuestion() {
        this.x = this.questions[this.index].TopNumber;
        this.y = this.questions[this.index].BottomNumber;
        this.operatorIndicator = this.questions[this.index].GetOperator();
        this.userAnswer = 0;
        if (this.answer) {
            let field = this.answer.nativeElement;
            field.blur();
            field.focus();
        }
    }
    calculateScore() {
        let numCorrect = this.questions.filter(q => q.Result === _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["QuestionResult"].Correct).length;
        let result = this.totals > 0 ? ((numCorrect / this.totals) * 100) : 0;
        return result;
    }
}
FlashcardComponent.??fac = function FlashcardComponent_Factory(t) { return new (t || FlashcardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"])); };
FlashcardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FlashcardComponent, selectors: [["app-flashcard"]], viewQuery: function FlashcardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.answer = _t.first);
    } }, decls: 21, vars: 8, consts: [["novalidate", "", 1, "form-inline", 3, "formGroup"], [1, "form-group"], ["id", "op", "formControlName", "opControl", 1, "form-control"], [1, "btn", "btn-primary", 3, "hidden", "click"], ["href", "settings", "role", "button", "aria-disabled", "true", "alt", "Settings", 1, "btn", "btn-secondary"], ["aria-hidden", "true", 1, "fa", "fa-cog"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "flashcard col-6", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-warning"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "flashcard", "col-6"], [1, "row"], [1, "col-6"], [1, "row", "endOfProblem"], [1, "col-1"], [1, "operator"], [1, "col-3"], ["type", "number", "onfocus", "this.select()", 1, "answer", 3, "ngModel", "ngModelChange", "keyup.enter"], ["answerField", ""], [1, "btn", "btn-primary", 3, "click"], [1, "card-text"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-2", "equation"], ["aria-hidden", "true"]], template: function FlashcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Addition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Subtraction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Multiplication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FlashcardComponent_Template_button_click_11_listener() { return ctx.startQuiz(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Start Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, FlashcardComponent_div_16_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, FlashcardComponent_div_17_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, FlashcardComponent_div_18_Template, 15, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, FlashcardComponent_div_19_Template, 27, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, FlashcardComponent_div_20_Template, 6, 2, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.opForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.quizRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totals, " question(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.failure == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasWarning == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.quizRunning == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.quizRunning == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.quizComplete);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@media only screen and (max-device-width: 480px) {\n\n}\n\n    div.flashcard[_ngcontent-%COMP%] {\n        box-shadow: 10px 10px 10px grey;\n        margin-top: 100px;\n        padding-top: 20px;\n        padding-left: 100px;\n        height: 400px;\n    }\n\n    div.flashcard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    div.operator[_ngcontent-%COMP%] {\n        font-family: Arial, Helvetica, sans-serif;\n        font-size: 2em;\n        position: absolute;\n        bottom: 2px;\n        left:0;\n    }\n\n    .answer[_ngcontent-%COMP%] {\n        font-size: 2.5em;\n        margin-left: 25px;\n        width: 80px;\n    }\n\n    div.problem[_ngcontent-%COMP%] {\n    border: 1px solid black;\n    width:200;\n}\n\n    div.equation[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n    .correct[_ngcontent-%COMP%] {\n    color: green;\n}\n\n    .incorrect[_ngcontent-%COMP%] {\n    color: red;\n}\n\n    div.endOfProblem[_ngcontent-%COMP%] {\n    border-bottom: 2px solid black;\n    margin-bottom: 10px;\n}\n\n    .btn[_ngcontent-%COMP%] {\n    margin-left:4px;\n    margin-right:4px;\n}\n\n    form[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmQvZmxhc2hjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0lBRUk7UUFDSSwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFDQTtRQUNJLHlDQUF5QztRQUN6QyxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO0lBQ1Y7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFHSjtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0FBQ2hCOztJQUVBO0lBQ0ksVUFBVTtBQUNkOztJQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZsYXNoY2FyZC9mbGFzaGNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG5cbn1cblxuICAgIGRpdi5mbGFzaGNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBncmV5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICAgIGRpdi5mbGFzaGNhcmQgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGRpdi5vcGVyYXRvciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgbGVmdDowO1xuICAgIH1cblxuICAgIC5hbnN3ZXIge1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuXG5cbmRpdi5wcm9ibGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDoyMDA7XG59XG5cbmRpdi5lcXVhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb3JyZWN0IHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmNvcnJlY3Qge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmRpdi5lbmRPZlByb2JsZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnRuIHtcbiAgICBtYXJnaW4tbGVmdDo0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcbn1cblxuZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FlashcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flashcard',
                templateUrl: './flashcard.component.html',
                styleUrls: ['./flashcard.component.css']
            }]
    }], function () { return [{ type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }]; }, { answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["answerField"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Welcome to Scottie's Flashcard Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " This site was built for my own kids to help them with solving simple math equations using flashcards. My hope is that it will also be a help to you.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/quiz-setting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/quiz-setting.service.ts ***!
  \**************************************************/
/*! exports provided: QuizSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSettingService", function() { return QuizSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class QuizSettingService {
    constructor() {
        this.TOTAL_Q_KEY = "totalQuestions";
        this.HIGH_NUM = "highestNumber";
        try {
            let tVal = localStorage.getItem(this.TOTAL_Q_KEY);
            let hVal = localStorage.getItem(this.HIGH_NUM);
            this.TotalQuestions = tVal != null ? +tVal : 0;
            this.MaxNumber = hVal != null ? +hVal : 0;
        }
        catch (er) {
            this.TotalQuestions = 0;
            this.MaxNumber = 0;
        }
    }
    Save() {
        let result = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((sub) => {
            try {
                localStorage.setItem(this.TOTAL_Q_KEY, this.TotalQuestions.toString());
                localStorage.setItem(this.HIGH_NUM, this.MaxNumber.toString());
            }
            catch (er) {
                throw new Error(er);
            }
            sub.next(true);
            sub.complete();
        });
        return result;
    }
}
QuizSettingService.??fac = function QuizSettingService_Factory(t) { return new (t || QuizSettingService)(); };
QuizSettingService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: QuizSettingService, factory: QuizSettingService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](QuizSettingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _quiz_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-setting.service */ "./src/app/services/quiz-setting.service.ts");
/* harmony import */ var _types_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/question */ "./src/app/types/question.ts");
/* harmony import */ var _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/operation-type.enum */ "./src/app/types/operation-type.enum.ts");







class QuizService {
    constructor(settingSvc) {
        this.settingSvc = settingSvc;
        this.Questions = [];
        this.INTERATION_THREADHOLD = 10;
        this.currentIndex = 0;
    }
    MoveNext() {
        this.currentIndex++;
        if (this.currentIndex < this.Questions.length) {
            return this.Questions[this.currentIndex];
        }
        else {
            this.currentIndex = 0; //Reset index...
            return null;
        }
    }
    MoveBack() {
        this.currentIndex--;
        if (this.currentIndex >= 0) {
            return this.Questions[this.currentIndex];
        }
        else {
            this.currentIndex = 0; //Reset index...
            return null;
        }
    }
    GetCurrentQuestion() {
        return this.Questions[this.currentIndex];
    }
    MoveFirst() {
        this.currentIndex = 0;
    }
    CreateQuiz(operation) {
        let o = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((x) => {
            this.generateQuestions(operation);
            x.next(this.Questions);
            x.complete();
        });
        return o;
    }
    generateQuestions(operation) {
        var q;
        var counter;
        for (let i = 0; i < this.settingSvc.TotalQuestions; i++) {
            counter = 0;
            do {
                // Generate question
                let top;
                let bottom;
                top = this.generateRandomNumber();
                bottom = this.generateRandomNumber();
                if ((operation == _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_4__["OperationType"].Subtract || operation == _types_operation_type_enum__WEBPACK_IMPORTED_MODULE_4__["OperationType"].Divide)
                    && (top < bottom)) {
                    // Swap numbers
                    let old = bottom;
                    bottom = top;
                    top = old;
                }
                q = new _types_question__WEBPACK_IMPORTED_MODULE_3__["Question"](top, bottom, operation);
                // Built in infinite loop protection. This is a safety valve 
                if (counter > this.INTERATION_THREADHOLD) {
                    throw new Error("Cannot generate number. Too many interations. Please check settings.");
                }
                // Count how many random questions have been generated for this iteration
                counter++;
                // Check to see if this question exists, if so get another one
            } while (this.ValueAlreadyExists(q.Value()) == true);
            // Add quesiton to the array...
            this.Questions.push(q);
        }
    }
    generateRandomNumber() {
        let rawNumber = Math.random() * this.settingSvc.MaxNumber;
        return Math.round(rawNumber);
    }
    ValueAlreadyExists(value) {
        for (let q of this.Questions) {
            if (q.Value() == value) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
QuizService.??fac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_quiz_setting_service__WEBPACK_IMPORTED_MODULE_2__["QuizSettingService"])); };
QuizService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: QuizService, factory: QuizService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](QuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _quiz_setting_service__WEBPACK_IMPORTED_MODULE_2__["QuizSettingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/types/operation-type.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/types/operation-type.enum.ts ***!
  \**********************************************/
/*! exports provided: OperationType, QuestionResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return OperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionResult", function() { return QuestionResult; });
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Add"] = 1] = "Add";
    OperationType[OperationType["Subtract"] = 2] = "Subtract";
    OperationType[OperationType["Multiply"] = 3] = "Multiply";
    OperationType[OperationType["Divide"] = 4] = "Divide";
})(OperationType || (OperationType = {}));
var QuestionResult;
(function (QuestionResult) {
    QuestionResult[QuestionResult["Incorrect"] = 0] = "Incorrect";
    QuestionResult[QuestionResult["Correct"] = 1] = "Correct";
    QuestionResult[QuestionResult["Skipped"] = 2] = "Skipped";
})(QuestionResult || (QuestionResult = {}));


/***/ }),

/***/ "./src/app/types/question.ts":
/*!***********************************!*\
  !*** ./src/app/types/question.ts ***!
  \***********************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation-type.enum */ "./src/app/types/operation-type.enum.ts");

class Question {
    constructor(TopNumber, BottomNumber, Operation) {
        this.TopNumber = TopNumber;
        this.BottomNumber = BottomNumber;
        this.Operation = Operation;
        this.ICON_INCORRECT = "fa fa-times incorrect";
        this.ICON_CORRECT = "fa fa-check correct";
        this.Result = null;
    }
    // readonly property...
    get ResultIcon() {
        return this.Result === _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["QuestionResult"].Correct ? this.ICON_CORRECT : this.ICON_INCORRECT;
    }
    Equals(question) {
        return (this.Value() == question.Value());
    }
    Equation() {
        let op = this.GetOperator();
        return `${this.TopNumber} ${op} ${this.BottomNumber}`;
    }
    GetOperator() {
        switch (this.Operation) {
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Add:
                return "+";
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Subtract:
                return "-";
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Multiply:
                return "x";
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Divide:
                return "/";
        }
    }
    Value() {
        var answer = 0;
        switch (this.Operation) {
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Add:
                answer = this.TopNumber + this.BottomNumber;
                break;
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Subtract:
                answer = this.TopNumber - this.BottomNumber;
                break;
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Multiply:
                answer = this.TopNumber * this.BottomNumber;
                break;
            case _operation_type_enum__WEBPACK_IMPORTED_MODULE_0__["OperationType"].Divide:
                answer = this.TopNumber / this.BottomNumber;
                break;
        }
        return answer;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\flashcards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map