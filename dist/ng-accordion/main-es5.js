function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/accordion/accordion.component */
    "./src/app/components/accordion/accordion.component.ts");

    var routes = [{
      path: '',
      component: _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ng-accordion';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/accordion/accordion.component */
    "./src/app/components/accordion/accordion.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/accordion/accordion.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/accordion/accordion.component.ts ***!
    \*************************************************************/

  /*! exports provided: AccordionComponent */

  /***/
  function srcAppComponentsAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
      return AccordionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_accordion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/accordion.service */
    "./src/app/services/accordion.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AccordionComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_div_3_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.toggleAccordian(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "q", i_r2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q", i_r2 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.question);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a", i_r2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1.answer);
      }
    }

    var AccordionComponent = /*#__PURE__*/function () {
      function AccordionComponent(accordionService) {
        _classCallCheck(this, AccordionComponent);

        this.accordionService = accordionService;
      }

      _createClass(AccordionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.accordion = this.accordionService.getAccordion();
        } // toggle acordion

      }, {
        key: "toggleAccordian",
        value: function toggleAccordian(index) {
          var element = document.getElementById('q' + index);
          element.classList.toggle("active");
          this.isActive ? this.isActive = false : this.isActive = true;
          var ans = document.getElementById('a' + index);
          ans.style.maxHeight ? ans.style.maxHeight = null : ans.style.maxHeight = ans.scrollHeight + "px";
        }
      }]);

      return AccordionComponent;
    }();

    AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
      return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"]));
    };

    AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionComponent,
      selectors: [["app-accordion"]],
      decls: 5,
      vars: 3,
      consts: [[1, "accordion"], [1, "accordion-title"], ["class", "accordion__item", 4, "ngFor", "ngForOf"], [1, "accordion__item"], [1, "accordion__question", 3, "id", "click"], [1, "question-num"], [1, "question-text"], [1, "question-toggle"], [1, "question-toggle__svg"], ["width", "40px", "height", "40px", "viewBox", "0 0 357 357", 1, "svg-rotate__icon"], ["id", "add"], ["d", "M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"], [1, "accordion__answer", 3, "id"]],
      template: function AccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Have a Question? We can help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccordionComponent_div_3_Template, 16, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.accordion));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["@font-face {\n  font-family: \"OswaldBold\";\n  src: local(\"OswaldBold\"), url('oswald-bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"OswaldLight\";\n  src: local(\"OswaldLight\"), url('oswald-light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"OswaldReg\";\n  src: local(\"OswaldReg\"), url('oswald-regular.ttf') format(\"truetype\");\n}\n.accordion[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  font-family: OswaldReg, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #1b1d1b;\n}\n@media (max-width: 756px) {\n  .accordion[_ngcontent-%COMP%] {\n    padding: 0px 15px;\n  }\n}\n.accordion-title[_ngcontent-%COMP%] {\n  font-family: OswaldBold;\n  text-transform: uppercase;\n  border-bottom: 15px solid #1b1d1b;\n  padding-bottom: 15px;\n}\n.accordion__question[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  padding: 15px 10px;\n}\n.accordion__question[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.accordion__question[_ngcontent-%COMP%]   .question-num[_ngcontent-%COMP%] {\n  flex: 0 0 8%;\n  font-family: OswaldBold;\n  font-size: 1.5em;\n}\n.accordion__question[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .accordion__question[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n}\n.accordion__question[_ngcontent-%COMP%]   .question-toggle[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n}\n.accordion__question[_ngcontent-%COMP%]   .question-toggle__svg[_ngcontent-%COMP%] {\n  background-color: #fed230;\n  padding: 5px 5px 2px 5px;\n}\n.accordion__question[_ngcontent-%COMP%]   .question-toggle__svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 21px;\n  transition: transform 0.6s ease;\n}\n.accordion__answer[_ngcontent-%COMP%] {\n  transition: max-height 0.6s ease;\n  padding: 0px 10px;\n  border-bottom: 2px solid #000;\n  max-height: 0;\n  overflow: hidden;\n}\n\n.active[_ngcontent-%COMP%]   .question-toggle__svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #a9a9a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vQzpcXFVzZXJzXFxDYWxQQ1xcRGVza3RvcFxcRGV2XFxuZy1hY2NvcmRpb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjY29yZGlvblxcYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSx5QkFLa0Q7RUFKbEQsbUVBQUE7QUNBTjtBREZJO0VBQ0UsMEJBTW1EO0VBTG5ELHFFQUFBO0FDSU47QUROSTtFQUNFLHdCQU9xRDtFQU5yRCxxRUFBQTtBQ1FOO0FEQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDRUo7QURBSTtFQVJKO0lBU1EsaUJBQUE7RUNHTjtBQUNGO0FEREk7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQ0dSO0FEREk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDR1I7QUREUTtFQUNJLGVBQUE7QUNHWjtBREFRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRENRO0VBQ0ksT0FBQTtBQ0NaO0FEQ1k7RUFISjtJQUlRLGlCQUFBO0VDRWQ7QUFDRjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1k7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0FDQ2hCO0FEQ2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ0NwQjtBREtJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSFI7QURRQSxrQkFBQTtBQUNBO0VBQ0ksd0JBQUE7QUNMSjtBRE9BO0VBQ0kseUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmZmFjZSgkcGF0aCwgJGZhbWlseSkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xyXG4gICAgICBzcmM6IGxvY2FsKCRmYW1pbHkpLCB1cmwoJHBhdGgpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgZmZhY2UoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9vc3dhbGQtYm9sZC50dGYnLCAnT3N3YWxkQm9sZCcpO1xyXG5AaW5jbHVkZSBmZmFjZSgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL29zd2FsZC1saWdodC50dGYnLCAnT3N3YWxkTGlnaHQnKTtcclxuQGluY2x1ZGUgZmZhY2UoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9vc3dhbGQtcmVndWxhci50dGYnLCAnT3N3YWxkUmVnJyk7XHJcblxyXG4uYWNjb3JkaW9uIHtcclxuICAgIG1heC13aWR0aDo3MDBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogT3N3YWxkUmVnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgY29sb3I6IzFiMWQxYjtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NTZweCkge1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9zd2FsZEJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICMxYjFkMWI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MTVweDtcclxuICAgIH1cclxuICAgICZfX3F1ZXN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdWVzdGlvbi1udW0ge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgOCU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPc3dhbGRCb2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS41ZW1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdWVzdGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdWVzdGlvbi10b2dnbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAmX19zdmcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDIzMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDVweCAycHggNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19hbnN3ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjZzIGVhc2U7XHJcbiAgICAgICAgcGFkZGluZzowcHggMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIEFjdGl2ZSBzdGF0ZXMgKi9cclxuLmFjdGl2ZSAucXVlc3Rpb24tdG9nZ2xlX19zdmcgc3ZnIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkQm9sZFwiO1xuICBzcmM6IGxvY2FsKFwiT3N3YWxkQm9sZFwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL29zd2FsZC1ib2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRMaWdodFwiO1xuICBzcmM6IGxvY2FsKFwiT3N3YWxkTGlnaHRcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9vc3dhbGQtbGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFJlZ1wiO1xuICBzcmM6IGxvY2FsKFwiT3N3YWxkUmVnXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvb3N3YWxkLXJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLmFjY29yZGlvbiB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogT3N3YWxkUmVnLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgY29sb3I6ICMxYjFkMWI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzU2cHgpIHtcbiAgLmFjY29yZGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cbn1cbi5hY2NvcmRpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogT3N3YWxkQm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjMWIxZDFiO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5hY2NvcmRpb25fX3F1ZXN0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xufVxuLmFjY29yZGlvbl9fcXVlc3Rpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWNjb3JkaW9uX19xdWVzdGlvbiAucXVlc3Rpb24tbnVtIHtcbiAgZmxleDogMCAwIDglO1xuICBmb250LWZhbWlseTogT3N3YWxkQm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5hY2NvcmRpb25fX3F1ZXN0aW9uIC5xdWVzdGlvbi10ZXh0IHtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3JkaW9uX19xdWVzdGlvbiAucXVlc3Rpb24tdGV4dCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cbi5hY2NvcmRpb25fX3F1ZXN0aW9uIC5xdWVzdGlvbi10b2dnbGUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYWNjb3JkaW9uX19xdWVzdGlvbiAucXVlc3Rpb24tdG9nZ2xlX19zdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkMjMwO1xuICBwYWRkaW5nOiA1cHggNXB4IDJweCA1cHg7XG59XG4uYWNjb3JkaW9uX19xdWVzdGlvbiAucXVlc3Rpb24tdG9nZ2xlX19zdmcgc3ZnIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjFweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcbn1cbi5hY2NvcmRpb25fX2Fuc3dlciB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEFjdGl2ZSBzdGF0ZXMgKi9cbi5hY3RpdmUgLnF1ZXN0aW9uLXRvZ2dsZV9fc3ZnIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-accordion',
          templateUrl: './accordion.component.html',
          styleUrls: ['./accordion.component.scss']
        }]
      }], function () {
        return [{
          type: _services_accordion_service__WEBPACK_IMPORTED_MODULE_1__["AccordionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/accordion.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/accordion.service.ts ***!
    \***********************************************/

  /*! exports provided: AccordionService */

  /***/
  function srcAppServicesAccordionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionService", function () {
      return AccordionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // Accordion service.


    var AccordionService = /*#__PURE__*/function () {
      function AccordionService(http) {
        _classCallCheck(this, AccordionService);

        this.http = http;
      } // returns JSON data.


      _createClass(AccordionService, [{
        key: "getAccordion",
        value: function getAccordion() {
          return this.http.get('/assets/faqs.json');
        }
      }]);

      return AccordionService;
    }();

    AccordionService.ɵfac = function AccordionService_Factory(t) {
      return new (t || AccordionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AccordionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccordionService,
      factory: AccordionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\CalPC\Desktop\Dev\ng-accordion\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map