(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n    <app-header></app-header>\r\n\r\n    <ion-toolbar>\r\n        <ion-title>Libros de la SEP</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <!-- welcome container -->\r\n    <ion-grid fixed>\r\n        <ion-card class=\"cardWelcome\">\r\n            <ion-row>\r\n\r\n                <!-- img books responsive -->\r\n                <ion-col size-xs=\"12\" size-md=\"6\">\r\n                    <ion-img src=\"assets/books.png\"></ion-img>\r\n                </ion-col>\r\n\r\n                <!-- text of welcome -->\r\n                <ion-col size-xs=\"12\" size-md=\"4\" push-md=\"1\">\r\n                    <ion-text class=\"textWelcome\">\r\n                        <h1>¡Te ayudamos con tu tarea!</h1>\r\n                        <h3>Respuestas a tus libros de texto, explicaciones y más...</h3>\r\n                    </ion-text>\r\n                </ion-col>\r\n                <ion-col push-md=\"1\"></ion-col>\r\n\r\n\r\n            </ion-row>\r\n        </ion-card>\r\n    </ion-grid>\r\n\r\n    <!-- niveles container -->\r\n    <ion-grid class=\"containerNiveles\" fixed>\r\n        <!-- niveles row-->\r\n        <ion-row>\r\n            <!-- col nivel-->\r\n            <ion-col size-xs=\"12\" size-sm=\"12\" size-lg=\"6\" size-xl=\"6\" *ngFor=\"let niv of niveles\">\r\n\r\n                <ion-card class=\"cardNivel\">\r\n\r\n                    <ion-text class=\"textNivel\">\r\n                        <h3>{{niv.nombre}}</h3>\r\n                    </ion-text>\r\n                    <!-- grado cards -->\r\n                    <ion-row>\r\n                        <ion-col size=\"4\" *ngFor=\"let grado of niv.grado\">\r\n                            <ion-card class=\"cardGrado\" [button]=\"true\" (click)=\"verLibrosPorGrado(grado.gradoId)\"\r\n                                [ngStyle]=\"{'color': grado.color}\">\r\n                                {{grado.identificador}}\r\n                            </ion-card>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <app-footer></app-footer>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-light) !important;\n}\n\nion-toolbar {\n  --background: var(--ion-color-success-tint) !important;\n  text-align: center !important;\n  color: var(--ion-color-light) !important;\n}\n\nion-grid .cardWelcome {\n  --background: var(--ion-color-secondary-shade) !important;\n  border-radius: 20px !important;\n  padding: 20px 20px 20px 20px !important;\n}\n\nion-grid .textWelcome {\n  color: var(--ion-color-light) !important;\n  text-align: center !important;\n}\n\n.containerNiveles {\n  margin-top: -10px !important;\n}\n\n.containerNiveles .cardNivel {\n  padding: 10px 10px 10px 10px !important;\n  --background: var(--ion-color-secondary-shade) !important;\n  border-radius: 20px !important;\n}\n\n.containerNiveles .cardNivel .textNivel {\n  text-align: center !important;\n  color: var(--ion-color-light) !important;\n}\n\n.containerNiveles .cardNivel .cardGrado {\n  --background: var(--ion-color-light-tint) !important;\n  border-radius: 10px !important;\n  text-align: center !important;\n  font-size: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXEFsYW5cXERlc2t0b3BcXExlYXJuRXovc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzREFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURHRTtFQUNFLHlEQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBQ0FKOztBREdFO0VBQ0Usd0NBQUE7RUFDQSw2QkFBQTtBQ0RKOztBREtBO0VBQ0UsNEJBQUE7QUNGRjs7QURHRTtFQUNFLHVDQUFBO0VBQ0EseURBQUE7RUFDQSw4QkFBQTtBQ0RKOztBREdJO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQ0ROOztBRElJO0VBQ0Usb0RBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIC5jYXJkV2VsY29tZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dFdlbGNvbWUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lck5pdmVsZXMge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLmNhcmROaXZlbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnRleHROaXZlbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkR3JhZG8ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCAuY2FyZFdlbGNvbWUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQgLnRleHRXZWxjb21lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJOaXZlbGVzIHtcbiAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXJOaXZlbGVzIC5jYXJkTml2ZWwge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lck5pdmVsZXMgLmNhcmROaXZlbCAudGV4dE5pdmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyTml2ZWxlcyAuY2FyZE5pdmVsIC5jYXJkR3JhZG8ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_nivel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/nivel.service */ "./src/app/shared/services/nivel.service.ts");




let HomePage = class HomePage {
    constructor(router, nivelService) {
        this.router = router;
        this.nivelService = nivelService;
    }
    ngOnInit() {
        this.nivelService.getNiveles().subscribe((response) => {
            this.niveles = response;
        }, (error) => {
            console.log(error);
        });
    }
    verLibrosPorGrado(grado) {
        this.router.navigate(["/libros", grado]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_nivel_service__WEBPACK_IMPORTED_MODULE_3__["NivelService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/shared/services/nivel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/nivel.service.ts ***!
  \**************************************************/
/*! exports provided: NivelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelService", function() { return NivelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let NivelService = class NivelService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:6045/api/niveles/';
    }
    getNiveles() {
        return this.http.get(this.url);
    }
};
NivelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NivelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NivelService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map