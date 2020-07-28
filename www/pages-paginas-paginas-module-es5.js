function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paginas-paginas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paginas/paginas.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paginas/paginas.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaginasPaginasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n\r\n  <app-header></app-header>\r\n\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n\r\n      <ion-button class=\"btnRegresarBloques\" (click)=\"regresar()\">\r\n        <ion-icon class=\"iconBack\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n        Regresar\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid fixed>\r\n\r\n\r\n    <!-- nombre del libro, bloque, imagen de la página y botones de siguiente y anterior -->\r\n    <ion-row>\r\n\r\n      <!-- txt bloque, asignatura y pagina button -->\r\n      <ion-col size=\"6\" *ngIf=\"bloque\">\r\n\r\n        <!-- texto asignatura con grado y bloque -->\r\n        <ion-text *ngIf=\"bloque\" class=\"txtAsignatura\">\r\n          <h3>{{bloque.libro.titulo}} {{bloque.libro.grado.identificador}}°</h3>\r\n          <h3>{{bloque.nombre}}</h3>\r\n        </ion-text>\r\n\r\n        <!-- botones de back page y next page -->\r\n        <ion-row *ngIf=\"pagina\">\r\n\r\n          <ion-col *ngIf=\"bloque\" class=\"colNoPadding\" size=\"4\">\r\n            <ion-button [disabled]=\"btnPrevPageDisable\" (click)=\"previousPage()\" class=\"btnBack\" expand=\"block\">\r\n              <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"colNoPadding\" size=\"4\">\r\n            <ion-button class=\"btnPage\" expand=\"block\">\r\n              Pag. {{pagina.numPagina}}\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"bloque\" class=\"colNoPadding\" size=\"4\">\r\n            <ion-button [disabled]=\"btnNextPageDisable\" (click)=\"nextPage()\" class=\"btnNext\" expand=\"block\">\r\n              <ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n\r\n\r\n      <!-- imagen de la página -->\r\n      <ion-col *ngIf=\"bloque\" push-lg=\"1\" size-lg=\"4\">\r\n        <ion-card (click)=\"openPreview(bloque.libro.imgLibro ,pagina.imgPagina)\" [button]=\"true\">\r\n          <ion-img *ngIf=\"pagina\" src=\"assets/libros/{{bloque.libro.imgLibro}}/{{pagina.imgPagina}}.png\"></ion-img>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n\r\n    <!--titulo de la página & preguntas y respuestas -->\r\n    <ion-row *ngIf=\"pagina\">\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-text class=\"tituloPagina\">\r\n          <h3>{{pagina.titulo}}</h3>\r\n          <h3>Respuestas / Explicaciones</h3>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <!-- reservado respuestas -->\r\n      <ion-col *ngFor=\"let respuesta of pagina.respuesta\" size-sm=\"12\">\r\n        <ion-card class=\"cardRespuestas\">\r\n\r\n          <ion-text class=\"txtRespuestas\">\r\n            <h4>{{respuesta.pregunta}}</h4>\r\n            <h4>Respuesta: {{respuesta.solucion}}</h4>\r\n          </ion-text>\r\n\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n  <app-footer></app-footer>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/paginas/paginas-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/paginas/paginas-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaginasPageRoutingModule */

  /***/
  function srcAppPagesPaginasPaginasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginasPageRoutingModule", function () {
      return PaginasPageRoutingModule;
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


    var _paginas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginas.page */
    "./src/app/pages/paginas/paginas.page.ts");

    var routes = [{
      path: '',
      component: _paginas_page__WEBPACK_IMPORTED_MODULE_3__["PaginasPage"]
    }];

    var PaginasPageRoutingModule = function PaginasPageRoutingModule() {
      _classCallCheck(this, PaginasPageRoutingModule);
    };

    PaginasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaginasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/paginas/paginas.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/paginas/paginas.module.ts ***!
    \*************************************************/

  /*! exports provided: PaginasPageModule */

  /***/
  function srcAppPagesPaginasPaginasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginasPageModule", function () {
      return PaginasPageModule;
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


    var _paginas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paginas-routing.module */
    "./src/app/pages/paginas/paginas-routing.module.ts");
    /* harmony import */


    var _paginas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paginas.page */
    "./src/app/pages/paginas/paginas.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PaginasPageModule = function PaginasPageModule() {
      _classCallCheck(this, PaginasPageModule);
    };

    PaginasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paginas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaginasPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_paginas_page__WEBPACK_IMPORTED_MODULE_6__["PaginasPage"]]
    })], PaginasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/paginas/paginas.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/paginas/paginas.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaginasPaginasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-light) !important;\n}\n\nion-toolbar {\n  --background: var(--ion-color-success-tint) !important;\n}\n\nion-toolbar .btnRegresarBloques {\n  --color: var(--ion-color-light) !important;\n  font-size: 18px !important;\n  margin: 7px !important;\n}\n\nion-toolbar .btnRegresarBloques .iconBack {\n  margin-right: 24px !important;\n  color: var(--ion-color-light) !important;\n}\n\nion-grid .txtAsignatura {\n  text-align: center !important;\n  color: var(--ion-color-dark) !important;\n}\n\nion-grid .colNoPadding {\n  padding: 0px 0px 0px 0px !important;\n}\n\nion-grid .btnBack {\n  --border-radius: 30px 0px 0px 30px !important;\n  padding: 0px !important;\n  margin-right: 0px !important;\n}\n\nion-grid .btnPage {\n  --border-radius: 0px !important;\n  padding: 0px !important;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n  --background: var(--ion-color-primary-tint) !important;\n}\n\nion-grid .btnNext {\n  --border-radius: 0px 30px 30px 0px !important;\n  padding: 0px !important;\n  margin-left: 0px !important;\n}\n\nion-grid .tituloPagina {\n  text-align: center !important;\n  color: var(--ion-color-dark) !important;\n  padding: 30px 0px 30px 0px !important;\n}\n\nion-grid .cardRespuestas {\n  border-radius: 20px !important;\n  --background: var(--ion-color-primary) !important;\n  padding: 10px !important;\n}\n\nion-grid .cardRespuestas .txtRespuestas {\n  text-align: left !important;\n  color: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnaW5hcy9DOlxcVXNlcnNcXEFsYW5cXERlc2t0b3BcXExlYXJuRXovc3JjXFxhcHBcXHBhZ2VzXFxwYWdpbmFzXFxwYWdpbmFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnaW5hcy9wYWdpbmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtBQ0NGOztBRENFO0VBQ0UsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDQ047O0FES0U7RUFDRSw2QkFBQTtFQUNBLHVDQUFBO0FDRko7O0FES0U7RUFDRSxtQ0FBQTtBQ0hKOztBRE1FO0VBQ0UsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDSko7O0FET0U7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNEQUFBO0FDTEo7O0FEUUU7RUFDRSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNOSjs7QURVRTtFQUNFLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtBQ1JKOztBRFdFO0VBQ0UsOEJBQUE7RUFDQSxpREFBQTtFQUNBLHdCQUFBO0FDVEo7O0FEV0k7RUFDRSwyQkFBQTtFQUNBLHdDQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdpbmFzL3BhZ2luYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIC5idG5SZWdyZXNhckJsb3F1ZXMge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5pY29uQmFjayB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIC50eHRBc2lnbmF0dXJhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbE5vUGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idG5CYWNrIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idG5QYWdlIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuTmV4dCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuICAudGl0dWxvUGFnaW5hIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHggMzBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJkUmVzcHVlc3RhcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50eHRSZXNwdWVzdGFzIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KSAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIgLmJ0blJlZ3Jlc2FyQmxvcXVlcyB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciAuYnRuUmVncmVzYXJCbG9xdWVzIC5pY29uQmFjayB7XG4gIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCAudHh0QXNpZ25hdHVyYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCAuY29sTm9QYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCAuYnRuQmFjayB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCAuYnRuUGFnZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCkgIWltcG9ydGFudDtcbn1cbmlvbi1ncmlkIC5idG5OZXh0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQgLnRpdHVsb1BhZ2luYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDMwcHggMHB4IDMwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCAuY2FyZFJlc3B1ZXN0YXMge1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1ncmlkIC5jYXJkUmVzcHVlc3RhcyAudHh0UmVzcHVlc3RhcyB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/paginas/paginas.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/paginas/paginas.page.ts ***!
    \***********************************************/

  /*! exports provided: PaginasPage */

  /***/
  function srcAppPagesPaginasPaginasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginasPage", function () {
      return PaginasPage;
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
    /* harmony import */


    var src_app_shared_services_pagina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/pagina.service */
    "./src/app/shared/services/pagina.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../image-modal/image-modal.page */
    "./src/app/pages/image-modal/image-modal.page.ts");

    var PaginasPage = /*#__PURE__*/function () {
      function PaginasPage(activatedRoute, bloqueService, paginaService, router, modalController, animationController) {
        _classCallCheck(this, PaginasPage);

        this.activatedRoute = activatedRoute;
        this.bloqueService = bloqueService;
        this.paginaService = paginaService;
        this.router = router;
        this.modalController = modalController;
        this.animationController = animationController;
      }

      _createClass(PaginasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (params) {
            _this.numPagina = parseInt(params.get("num-pag"));
            _this.bloqueId = parseInt(params.get("bloque-id"));

            _this.getBloque(_this.bloqueId);

            _this.getPagina(_this.numPagina, _this.bloqueId);
          });
        }
      }, {
        key: "getBloque",
        value: function getBloque(bloqueId) {
          var _this2 = this;

          this.bloqueService.getBloque(bloqueId).subscribe(function (response) {
            _this2.bloque = response;
            _this2.libroId = _this2.bloque.libro.libroId; // pagina actual & inicio de paginas del libro

            if (_this2.numPagina <= _this2.bloque.libro.inicioNumPaginas) {
              _this2.btnPrevPageDisable = true;
            } // pagina actual & máximo de paginas del libro


            if (_this2.numPagina >= _this2.bloque.libro.numPaginas) {
              _this2.btnNextPageDisable = true;
            }
          });
        }
      }, {
        key: "getPagina",
        value: function getPagina(numPagina, bloqueId) {
          var _this3 = this;

          this.paginaService.getPagina(numPagina, bloqueId).subscribe(function (response) {
            _this3.pagina = response;
          });
        }
      }, {
        key: "regresar",
        value: function regresar() {
          this.router.navigateByUrl("bloques/" + this.libroId + "/" + this.bloque.libro.gradoId);
        } // Se navega a la siguiente página

      }, {
        key: "nextPage",
        value: function nextPage() {
          this.router.navigate(["bloque", this.bloqueId, "pagina", this.numPagina + 1]);
        } // Se navega a la página anterior

      }, {
        key: "previousPage",
        value: function previousPage() {
          this.router.navigate(["bloque", this.bloqueId, "pagina", this.numPagina - 1]);
        }
      }, {
        key: "openPreview",
        value: function openPreview(imgLibro, imgPagina) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var enterAnimation, leaveAnimation, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    enterAnimation = function enterAnimation(baseEl) {
                      var backdropAnimation = _this4.animationController.create().addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "0.01", "var(--backdrop-opacity)");

                      var wrapperAnimation = _this4.animationController.create().addElement(baseEl.querySelector(".modal-wrapper")).keyframes([{
                        offset: 0,
                        opacity: "0",
                        transform: "scale(0)"
                      }, {
                        offset: 1,
                        opacity: "0.99",
                        transform: "scale(1)"
                      }]);

                      return _this4.animationController.create().addElement(baseEl).easing("ease-out").duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
                    };

                    leaveAnimation = function leaveAnimation(baseEl) {
                      return enterAnimation(baseEl).direction("reverse");
                    };

                    _context.next = 4;
                    return this.modalController.create({
                      component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
                      enterAnimation: enterAnimation,
                      leaveAnimation: leaveAnimation,
                      componentProps: {
                        imgLibro: imgLibro,
                        imgPagina: imgPagina
                      }
                    });

                  case 4:
                    modal = _context.sent;
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PaginasPage;
    }();

    PaginasPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_bloque_service__WEBPACK_IMPORTED_MODULE_3__["BloqueService"]
      }, {
        type: src_app_shared_services_pagina_service__WEBPACK_IMPORTED_MODULE_4__["PaginaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AnimationController"]
      }];
    };

    PaginasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-paginas",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./paginas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paginas/paginas.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./paginas.page.scss */
      "./src/app/pages/paginas/paginas.page.scss"))["default"]]
    })], PaginasPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-paginas-paginas-module-es5.js.map