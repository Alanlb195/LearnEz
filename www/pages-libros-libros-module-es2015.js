(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-libros-libros-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/libros/libros.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/libros/libros.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n\r\n    <app-header></app-header>\r\n\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button class=\"btnRegresar\" (click)=\"regresar()\">\r\n                <ion-icon class=\"iconBack\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n                Regresar\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n\r\n    <ion-grid fixed>\r\n\r\n        <ion-text *ngIf=\"hayLibros\" class=\"txtLibrosDisp\">\r\n            <h3>Libros disponibles</h3>\r\n        </ion-text>\r\n\r\n        <!--Si hay libros - Libro cards por cada libro-->\r\n        <ion-row *ngIf=\"hayLibros\">\r\n\r\n            <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let l of libros\">\r\n\r\n                <ion-card class=\"cardLibro\" [button]=\"true\" (click)=\"bloquesPorLibro(l.libroId)\">\r\n\r\n                    <ion-img alt=\"Not Found\" class=\"imagen\" src=\"assets/libros/{{l.imgLibro}}/{{l.imgLibro}}-001.png\">\r\n                    </ion-img>\r\n\r\n                    <ion-card-header>\r\n                        <ion-card-title>{{l.titulo}} {{l.grado.identificador}}°</ion-card-title>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <!--Si no hay libros-->\r\n        <ion-row *ngIf=\"!hayLibros\">\r\n            <ion-col size=\"12\">\r\n                <ion-text class=\"txtSorry\">\r\n                    <h2>Lo siento</h2>\r\n                    <h1>No hay libros en este momento para este grado.</h1>\r\n                </ion-text>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <app-footer></app-footer>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/libros/libros-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/libros/libros-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LibrosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosPageRoutingModule", function() { return LibrosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _libros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libros.page */ "./src/app/pages/libros/libros.page.ts");




const routes = [
    {
        path: '',
        component: _libros_page__WEBPACK_IMPORTED_MODULE_3__["LibrosPage"]
    }
];
let LibrosPageRoutingModule = class LibrosPageRoutingModule {
};
LibrosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LibrosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/libros/libros.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/libros/libros.module.ts ***!
  \***********************************************/
/*! exports provided: LibrosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosPageModule", function() { return LibrosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _libros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libros-routing.module */ "./src/app/pages/libros/libros-routing.module.ts");
/* harmony import */ var _libros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libros.page */ "./src/app/pages/libros/libros.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let LibrosPageModule = class LibrosPageModule {
};
LibrosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _libros_routing_module__WEBPACK_IMPORTED_MODULE_5__["LibrosPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_libros_page__WEBPACK_IMPORTED_MODULE_6__["LibrosPage"]]
    })
], LibrosPageModule);



/***/ }),

/***/ "./src/app/pages/libros/libros.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/libros/libros.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-light) !important;\n}\n\nion-toolbar {\n  --background: var(--ion-color-success-tint) !important;\n}\n\nion-toolbar .btnRegresar {\n  --color: var(--ion-color-light) !important;\n  font-size: 18px !important;\n  margin: 7px !important;\n}\n\nion-toolbar .btnRegresar .iconBack {\n  margin-right: 24px !important;\n  color: var(--ion-color-light) !important;\n}\n\n.txtSorry {\n  text-align: center !important;\n  color: var(--ion-color-dark) !important;\n}\n\n.txtLibrosDisp {\n  text-align: center !important;\n  color: var(--ion-color-dark) !important;\n}\n\n.cardLibro {\n  --background: var(--ion-color-secondary-shade) !important;\n  border-radius: 10px !important;\n}\n\n.cardLibro ion-card-header {\n  height: 80px !important;\n  padding: 10px 5px 10px 5px !important;\n}\n\n.cardLibro ion-card-header ion-card-title {\n  text-shadow: 0.5px 0.5px var(--ion-color-dark) !important;\n  text-align: center !important;\n  color: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlicm9zL0M6XFxVc2Vyc1xcQWxhblxcRGVza3RvcFxcTGVhcm5Fei9zcmNcXGFwcFxccGFnZXNcXGxpYnJvc1xcbGlicm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlicm9zL2xpYnJvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRjs7QURDRTtFQUNFLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENJO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQ0NOOztBRElBO0VBQ0UsNkJBQUE7RUFDQSx1Q0FBQTtBQ0RGOztBRElBO0VBQ0UsNkJBQUE7RUFDQSx1Q0FBQTtBQ0RGOztBRElBO0VBQ0UseURBQUE7RUFDQSw4QkFBQTtBQ0RGOztBREdFO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtBQ0RKOztBREdJO0VBQ0UseURBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saWJyb3MvbGlicm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCkgIWltcG9ydGFudDtcclxuXHJcbiAgLmJ0blJlZ3Jlc2FyIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA3cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuaWNvbkJhY2sge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50eHRTb3JyeSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHh0TGlicm9zRGlzcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZExpYnJvIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAuNXB4IDAuNXB4IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciAuYnRuUmVncmVzYXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIgLmJ0blJlZ3Jlc2FyIC5pY29uQmFjayB7XG4gIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4udHh0U29ycnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4udHh0TGlicm9zRGlzcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkTGlicm8ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkTGlicm8gaW9uLWNhcmQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZExpYnJvIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/libros/libros.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/libros/libros.page.ts ***!
  \*********************************************/
/*! exports provided: LibrosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrosPage", function() { return LibrosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/libro.service */ "./src/app/shared/services/libro.service.ts");




let LibrosPage = class LibrosPage {
    constructor(activatedRoute, libroService, router) {
        this.activatedRoute = activatedRoute;
        this.libroService = libroService;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((param) => {
            this.gradoId = param.get("grado-id");
            this.cargarLibros();
        });
    }
    cargarLibros() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.libroService.getLibrosPorGrado(parseInt(this.gradoId)).subscribe((response) => {
                this.libros = response;
                if (this.libros.length > 0) {
                    this.hayLibros = true;
                }
                else {
                    this.hayLibros = false;
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    bloquesPorLibro(libroId) {
        this.router.navigate(["/bloques", libroId, this.gradoId]);
    }
    regresar() {
        this.router.navigateByUrl("/home");
    }
};
LibrosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_libro_service__WEBPACK_IMPORTED_MODULE_3__["LibroService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LibrosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-libros",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./libros.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/libros/libros.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./libros.page.scss */ "./src/app/pages/libros/libros.page.scss")).default]
    })
], LibrosPage);



/***/ }),

/***/ "./src/app/shared/services/libro.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/libro.service.ts ***!
  \**************************************************/
/*! exports provided: LibroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroService", function() { return LibroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let LibroService = class LibroService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:6045/api/libros/";
    }
    getLibrosPorGrado(gradoId) {
        return this.http.get(this.url + "grado/" + gradoId);
    }
};
LibroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LibroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LibroService);



/***/ })

}]);
//# sourceMappingURL=pages-libros-libros-module-es2015.js.map