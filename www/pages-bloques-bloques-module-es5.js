function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bloques-bloques-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bloques/bloques.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bloques/bloques.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBloquesBloquesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n  <app-header></app-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"btnRegresar\" (click)=\"regresar()\">\r\n        <ion-icon class=\"iconBack\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n        Regresar\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\" *ngFor=\"let bloque of bloques\">\r\n\r\n        <ion-card>\r\n\r\n          <ion-text class=\"txtBloque\">\r\n            <h2>{{bloque.nombre}}</h2>\r\n          </ion-text>\r\n\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-col size=\"10\">\r\n                <ion-label>Titulo</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-label>pag.</ion-label>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item *ngFor=\"let pagina of bloque.pagina\" [button]=\"true\"\r\n              (click)=\"irPagina( pagina.numPagina , bloque.bloqueId)\">\r\n              <ion-col size=\"10\">\r\n                <ion-label>{{pagina.titulo}}</ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"2\">\r\n                <ion-label class=\"numberPage\">{{pagina.numPagina}}</ion-label>\r\n              </ion-col>\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n          <ion-row *ngIf=\"bloque.examen != null\">\r\n            <ion-col size=\"1\"></ion-col>\r\n            <ion-col size=\"10\">\r\n              <ion-button class=\"btnExamen\" expand=\"block\" shape=\"round\" (click)=\"irExamen(bloque.bloqueId)\">\r\n                Examen\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  <app-footer></app-footer>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/bloques/bloques-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/bloques/bloques-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BloquesPageRoutingModule */

  /***/
  function srcAppPagesBloquesBloquesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloquesPageRoutingModule", function () {
      return BloquesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _bloques_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bloques.page */
    "./src/app/pages/bloques/bloques.page.ts");

    var routes = [{
      path: '',
      component: _bloques_page__WEBPACK_IMPORTED_MODULE_3__["BloquesPage"]
    }];

    var BloquesPageRoutingModule = function BloquesPageRoutingModule() {
      _classCallCheck(this, BloquesPageRoutingModule);
    };

    BloquesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BloquesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bloques/bloques.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/bloques/bloques.module.ts ***!
    \*************************************************/

  /*! exports provided: BloquesPageModule */

  /***/
  function srcAppPagesBloquesBloquesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloquesPageModule", function () {
      return BloquesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _bloques_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bloques-routing.module */
    "./src/app/pages/bloques/bloques-routing.module.ts");
    /* harmony import */


    var _bloques_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bloques.page */
    "./src/app/pages/bloques/bloques.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BloquesPageModule = function BloquesPageModule() {
      _classCallCheck(this, BloquesPageModule);
    };

    BloquesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bloques_routing_module__WEBPACK_IMPORTED_MODULE_5__["BloquesPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_bloques_page__WEBPACK_IMPORTED_MODULE_6__["BloquesPage"]]
    })], BloquesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bloques/bloques.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/bloques/bloques.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBloquesBloquesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-light) !important;\n}\n\nion-toolbar {\n  --background: var(--ion-color-success-tint) !important;\n}\n\nion-toolbar .btnRegresar {\n  --color: var(--ion-color-light) !important;\n  font-size: 18px !important;\n  margin: 7px !important;\n}\n\nion-toolbar .btnRegresar .iconBack {\n  margin-right: 24px !important;\n  color: var(--ion-color-light) !important;\n}\n\nion-grid ion-card {\n  --background: var(--ion-color-light-tint) !important;\n  padding: 10px !important;\n}\n\nion-grid ion-card .txtBloque {\n  color: var(--ion-color-dark) !important;\n  text-align: center !important;\n}\n\nion-grid ion-card .btnExamen {\n  --background: var(--ion-color-light) !important;\n  color: var(--ion-color-dark) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvcXVlcy9DOlxcVXNlcnNcXEFsYW5cXERlc2t0b3BcXExlYXJuRXovc3JjXFxhcHBcXHBhZ2VzXFxibG9xdWVzXFxibG9xdWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmxvcXVlcy9ibG9xdWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtBQ0NGOztBRENFO0VBQ0UsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDQ047O0FES0U7RUFDRSxvREFBQTtFQUNBLHdCQUFBO0FDRko7O0FESUk7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0FDRk47O0FES0k7RUFDRSwrQ0FBQTtFQUNBLHVDQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9xdWVzL2Jsb3F1ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KSAhaW1wb3J0YW50O1xyXG5cclxuICAuYnRuUmVncmVzYXIge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5pY29uQmFjayB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnR4dEJsb3F1ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bkV4YW1lbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCkgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIC5idG5SZWdyZXNhciB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciAuYnRuUmVncmVzYXIgLmljb25CYWNrIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIGlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQgaW9uLWNhcmQgLnR4dEJsb3F1ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCBpb24tY2FyZCAuYnRuRXhhbWVuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/bloques/bloques.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/bloques/bloques.page.ts ***!
    \***********************************************/

  /*! exports provided: BloquesPage */

  /***/
  function srcAppPagesBloquesBloquesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloquesPage", function () {
      return BloquesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_bloque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/bloque.service */
    "./src/app/shared/services/bloque.service.ts");

    var BloquesPage = /*#__PURE__*/function () {
      function BloquesPage(activatedRoute, bloqueService, route) {
        _classCallCheck(this, BloquesPage);

        this.activatedRoute = activatedRoute;
        this.bloqueService = bloqueService;
        this.route = route;
      }

      _createClass(BloquesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (param) {
            _this.libroId = parseInt(param.get("libro-id"));
            _this.gradoId = parseInt(param.get("grado-id")); // Se obtienen todos los bloques del libro

            _this.bloqueService.getBloquesPorLibro(_this.libroId).subscribe(function (response) {
              _this.bloques = response;
            }, function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "irPagina",
        value: function irPagina(numPagina, bloqueId) {
          this.route.navigate(["bloque", bloqueId, "pagina", numPagina]);
        }
      }, {
        key: "irExamen",
        value: function irExamen(bloqueId) {
          this.route.navigate(["/examen", bloqueId]);
        }
      }, {
        key: "regresar",
        value: function regresar() {
          this.route.navigateByUrl("/libros/" + this.gradoId);
        }
      }]);

      return BloquesPage;
    }();

    BloquesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_bloque_service__WEBPACK_IMPORTED_MODULE_3__["BloqueService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BloquesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-bloques",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bloques.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bloques/bloques.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bloques.page.scss */
      "./src/app/pages/bloques/bloques.page.scss"))["default"]]
    })], BloquesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bloques-bloques-module-es5.js.map