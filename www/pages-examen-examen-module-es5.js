function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-examen-examen-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examen/examen.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examen/examen.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExamenExamenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"btnRegresar\" (click)=\"regresar()\">\r\n        <ion-icon class=\"iconBack\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n        Regresar\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-grid fixed>\r\n\r\n\r\n    <!-- Si hay un examen -->\r\n    <ng-container *ngIf=\"examen ; else elseTemplate\">\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n\r\n          <!-- texto de la asignatura y el bloque actual -->\r\n          <ion-col size=\"6\">\r\n\r\n            <ion-text class=\"txtAsignatureBloque\">\r\n              <h3>{{examen.bloque.libro.titulo}}</h3>\r\n              <h3>{{examen.bloque.nombre}}</h3>\r\n            </ion-text>\r\n\r\n          </ion-col>\r\n\r\n          <!-- imagen de la asignatura -->\r\n          <ion-col push-xl=\"1\" push-md=\"1\" size-xl=\"4\" size-md=\"4\">\r\n\r\n            <ion-card class=\"cardLibro\">\r\n              <ion-img src=\"assets/libros/{{examen.bloque.libro.imgLibro}}/{{examen.bloque.libro.imgLibro}}-001.png\">\r\n              </ion-img>\r\n\r\n              <ion-card-header>\r\n                <ion-card-title>{{examen.bloque.libro.titulo}} {{examen.bloque.libro.grado.identificador}}°\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n      <ion-text class=\"txtExamen\">\r\n        <h3 class=\"border\">Examen {{examen.ciclo}}</h3>\r\n\r\n        <h4>Lee la pregunta y selecciona la opción que consideres correcta.</h4>\r\n      </ion-text>\r\n\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-card color=\"primary\">\r\n              <ion-text class=\"txtPregunta\">\r\n                <h4>Pregunta: {{preguntaActual}}/{{maximoPreguntas}}</h4>\r\n              </ion-text>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-card color=\"success\">\r\n              <ion-text class=\"txtRespuesta\">\r\n                <h4>Aciertos: {{aciertos}}/{{maximoPreguntas}}</h4>\r\n              </ion-text>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col *ngIf=\"preguntaExamen\" size=\"12\">\r\n            <ion-card class=\"cardPregunta\">\r\n\r\n              <ion-text color=\"dark\">\r\n                <h4>{{preguntaExamen.pregunta}}</h4>\r\n              </ion-text>\r\n\r\n              <ion-list>\r\n\r\n                <ion-item>\r\n                  <ion-label>Opciones</ion-label>\r\n                  <ion-select [(ngModel)]=\"respuesta\" interface=\"alert\">\r\n\r\n                    <ion-select-option *ngFor=\"let opcion of preguntaExamen.opcionexamen\"\r\n                      [value]=\"opcion.opcionExamenId\">\r\n                      {{opcion.valor}}\r\n                    </ion-select-option>\r\n\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n\r\n\r\n              <ion-row>\r\n                <ion-col size-sm=\"12\" size-md=\"8\" push-md=\"2\" size-xl=\"6\" push-xl=\"3\">\r\n                  <ion-button (click)=\"comprobarRespuesta(respuesta)\" expand=\"block\" shape=\"round\">\r\n                    Siguiente\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n      </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n    </ng-container>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  <app-footer></app-footer>\r\n\r\n</ion-content>\r\n\r\n\r\n<ng-template #elseTemplate>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" [ngStyle]=\"{'text-align': 'center'}\">\r\n        <h3>Lo sentimos, prueba no encontrada</h3>\r\n        <ion-button (click)=\"goHome()\" expand=\"block\" shape=\"round\">\r\n          Regresar a Home\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ng-template>";
    /***/
  },

  /***/
  "./src/app/pages/examen/examen-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/examen/examen-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ExamenPageRoutingModule */

  /***/
  function srcAppPagesExamenExamenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamenPageRoutingModule", function () {
      return ExamenPageRoutingModule;
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


    var _examen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./examen.page */
    "./src/app/pages/examen/examen.page.ts");

    var routes = [{
      path: '',
      component: _examen_page__WEBPACK_IMPORTED_MODULE_3__["ExamenPage"]
    }];

    var ExamenPageRoutingModule = function ExamenPageRoutingModule() {
      _classCallCheck(this, ExamenPageRoutingModule);
    };

    ExamenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExamenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/examen/examen.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/examen/examen.module.ts ***!
    \***********************************************/

  /*! exports provided: ExamenPageModule */

  /***/
  function srcAppPagesExamenExamenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamenPageModule", function () {
      return ExamenPageModule;
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


    var _examen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./examen-routing.module */
    "./src/app/pages/examen/examen-routing.module.ts");
    /* harmony import */


    var _examen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./examen.page */
    "./src/app/pages/examen/examen.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ExamenPageModule = function ExamenPageModule() {
      _classCallCheck(this, ExamenPageModule);
    };

    ExamenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _examen_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExamenPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_examen_page__WEBPACK_IMPORTED_MODULE_6__["ExamenPage"]]
    })], ExamenPageModule);
    /***/
  },

  /***/
  "./src/app/pages/examen/examen.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/examen/examen.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExamenExamenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-light) !important;\n}\n\nion-toolbar {\n  --background: var(--ion-color-success-tint) !important;\n}\n\nion-toolbar .btnRegresar {\n  --color: var(--ion-color-light) !important;\n  font-size: 18px !important;\n  margin: 7px !important;\n}\n\nion-toolbar .btnRegresar .iconBack {\n  margin-right: 24px !important;\n  color: var(--ion-color-light) !important;\n}\n\n.txtAsignatureBloque {\n  text-align: center !important;\n  text-shadow: 0.5px 0.5px var(--ion-color-medium) !important;\n}\n\n.cardLibro {\n  --background: var(--ion-color-dark-tint) !important;\n  border-radius: 10px !important;\n}\n\n.cardLibro ion-card-header {\n  padding: 15px 5px 20px 5px !important;\n}\n\n.cardLibro ion-card-header ion-card-title {\n  text-align: center !important;\n  color: var(--ion-color-light) !important;\n}\n\n.txtExamen {\n  text-align: center !important;\n  color: var(--ion-color-dark) !important;\n  text-shadow: 0.5px 0.5px var(--ion-color-medium) !important;\n}\n\n.txtExamen .border {\n  border-top: 2px solid;\n  border-bottom: 2px solid;\n  padding: 20px 20px 20px 20px !important;\n}\n\n.txtPregunta {\n  text-align: center;\n}\n\n.txtRespuesta {\n  text-align: center;\n}\n\n.cardPregunta {\n  padding: 20px 20px 20px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhhbWVuL0M6XFxVc2Vyc1xcQWxhblxcRGVza3RvcFxcTGVhcm5Fei9zcmNcXGFwcFxccGFnZXNcXGV4YW1lblxcZXhhbWVuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhhbWVuL2V4YW1lbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRjs7QURDRTtFQUNFLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENJO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQ0NOOztBRElBO0VBQ0UsNkJBQUE7RUFDQSwyREFBQTtBQ0RGOztBRElBO0VBQ0UsbURBQUE7RUFDQSw4QkFBQTtBQ0RGOztBREdFO0VBQ0UscUNBQUE7QUNESjs7QURHSTtFQUNFLDZCQUFBO0VBQ0Esd0NBQUE7QUNETjs7QURNQTtFQUNFLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSwyREFBQTtBQ0hGOztBREtFO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0FDSEo7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLHVDQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leGFtZW4vZXhhbWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCkgIWltcG9ydGFudDtcclxuXHJcbiAgLmJ0blJlZ3Jlc2FyIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA3cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuaWNvbkJhY2sge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50eHRBc2lnbmF0dXJlQmxvcXVlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmRMaWJybyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggNXB4IDIwcHggNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50eHRFeGFtZW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgIWltcG9ydGFudDtcclxuXHJcbiAgLmJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udHh0UHJlZ3VudGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR4dFJlc3B1ZXN0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZFByZWd1bnRhIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciAuYnRuUmVncmVzYXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIgLmJ0blJlZ3Jlc2FyIC5pY29uQmFjayB7XG4gIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4udHh0QXNpZ25hdHVyZUJsb3F1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmRMaWJybyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuLmNhcmRMaWJybyBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDVweCAyMHB4IDVweCAhaW1wb3J0YW50O1xufVxuLmNhcmRMaWJybyBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn1cblxuLnR4dEV4YW1lbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSAhaW1wb3J0YW50O1xufVxuLnR4dEV4YW1lbiAuYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnR4dFByZWd1bnRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHh0UmVzcHVlc3RhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZFByZWd1bnRhIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/examen/examen.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/examen/examen.page.ts ***!
    \*********************************************/

  /*! exports provided: ExamenPage */

  /***/
  function srcAppPagesExamenExamenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamenPage", function () {
      return ExamenPage;
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


    var src_app_shared_services_examen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/examen.service */
    "./src/app/shared/services/examen.service.ts");
    /* harmony import */


    var src_app_shared_services_preguntas_examen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/preguntas-examen.service */
    "./src/app/shared/services/preguntas-examen.service.ts");
    /* harmony import */


    var src_app_shared_models_PreguntaExamen_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/models/PreguntaExamen.model */
    "./src/app/shared/models/PreguntaExamen.model.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ExamenPage = /*#__PURE__*/function () {
      function ExamenPage(activatedRoute, examenService, preguntasExamenService, toastController, router) {
        _classCallCheck(this, ExamenPage);

        this.activatedRoute = activatedRoute;
        this.examenService = examenService;
        this.preguntasExamenService = preguntasExamenService;
        this.toastController = toastController;
        this.router = router;
        this.preguntaExamen = new src_app_shared_models_PreguntaExamen_model__WEBPACK_IMPORTED_MODULE_5__["PreguntaExamen"]();
      }

      _createClass(ExamenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (params) {
            _this.bloqueId = parseInt(params.get("bloque-id"));

            _this.obtenerExamen();

            _this.aciertos = 0;
          });
        } // Se obtiene el examen

      }, {
        key: "obtenerExamen",
        value: function obtenerExamen() {
          var _this2 = this;

          this.examenService.getExamen(this.bloqueId).subscribe(function (response) {
            _this2.examen = response;
            _this2.maximoPreguntas = response.numPreguntas;
            _this2.preguntaActual = 1; // Al mismo tiempo obtenemos la primera pregunta del examen

            _this2.preguntasExamenService.getPreguntaExamen(_this2.examen.examenId, _this2.preguntaActual).subscribe(function (response) {
              _this2.preguntaExamen = response;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "comprobarRespuesta",
        value: function comprobarRespuesta(respuesta) {
          if (respuesta == this.preguntaExamen.respuestaId) {
            this.presentToast("toastGreen", "¡Bien hecho!");
            this.aciertos++;
          } else {
            this.presentToast("toastRed", "Sigue intentando");
          }

          this.siguientePregunta();
          this.respuesta = 0;
        } // Se obtiene la siguiente pregunta del examen

      }, {
        key: "siguientePregunta",
        value: function siguientePregunta() {
          var _this3 = this;

          if (this.preguntaActual < this.maximoPreguntas) {
            this.preguntaActual += 1;
          }

          this.preguntasExamenService.getPreguntaExamen(this.examen.examenId, this.preguntaActual).subscribe(function (response) {
            _this3.preguntaExamen = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "regresar",
        value: function regresar() {
          this.router.navigateByUrl("bloques/" + this.bloqueId + "/" + this.examen.bloque.libro.grado.gradoId);
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigateByUrl("/home");
        }
      }, {
        key: "presentToast",
        value: function presentToast(color, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      position: "top",
                      message: message,
                      cssClass: color,
                      duration: 2500
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ExamenPage;
    }();

    ExamenPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_examen_service__WEBPACK_IMPORTED_MODULE_3__["ExamenService"]
      }, {
        type: src_app_shared_services_preguntas_examen_service__WEBPACK_IMPORTED_MODULE_4__["PreguntasExamenService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ExamenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-examen",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./examen.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examen/examen.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./examen.page.scss */
      "./src/app/pages/examen/examen.page.scss"))["default"]]
    })], ExamenPage);
    /***/
  },

  /***/
  "./src/app/shared/models/PreguntaExamen.model.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/models/PreguntaExamen.model.ts ***!
    \*******************************************************/

  /*! exports provided: PreguntaExamen */

  /***/
  function srcAppSharedModelsPreguntaExamenModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreguntaExamen", function () {
      return PreguntaExamen;
    });

    var PreguntaExamen = function PreguntaExamen() {
      _classCallCheck(this, PreguntaExamen);
    };
    /***/

  },

  /***/
  "./src/app/shared/services/examen.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/examen.service.ts ***!
    \***************************************************/

  /*! exports provided: ExamenService */

  /***/
  function srcAppSharedServicesExamenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamenService", function () {
      return ExamenService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ExamenService = /*#__PURE__*/function () {
      function ExamenService(http) {
        _classCallCheck(this, ExamenService);

        this.http = http;
        this.url = "http://localhost:6045/api/examenes/bloque/";
      }

      _createClass(ExamenService, [{
        key: "getExamen",
        value: function getExamen(bloqueId) {
          return this.http.get(this.url + bloqueId);
        }
      }]);

      return ExamenService;
    }();

    ExamenService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ExamenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExamenService);
    /***/
  },

  /***/
  "./src/app/shared/services/preguntas-examen.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/services/preguntas-examen.service.ts ***!
    \*************************************************************/

  /*! exports provided: PreguntasExamenService */

  /***/
  function srcAppSharedServicesPreguntasExamenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreguntasExamenService", function () {
      return PreguntasExamenService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PreguntasExamenService = /*#__PURE__*/function () {
      function PreguntasExamenService(http) {
        _classCallCheck(this, PreguntasExamenService);

        this.http = http;
        this.url = "http://localhost:6045/api/PreguntasExamen/";
      } // Obtiene una pregunta de examen - recibe examenId y numPregunta


      _createClass(PreguntasExamenService, [{
        key: "getPreguntaExamen",
        value: function getPreguntaExamen(examenId, numPregunta) {
          return this.http.get(this.url + examenId + "/" + numPregunta);
        }
      }]);

      return PreguntasExamenService;
    }();

    PreguntasExamenService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PreguntasExamenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], PreguntasExamenService);
    /***/
  }
}]);
//# sourceMappingURL=pages-examen-examen-module-es5.js.map