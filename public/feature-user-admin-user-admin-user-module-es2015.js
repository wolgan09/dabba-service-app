(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-user-admin-user-admin-user-module"],{

/***/ "./src/app/feature/user/admin-user/admin-user-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/feature/user/admin-user/admin-user-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdminUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserRoutingModule", function() { return AdminUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-user.component */ "./src/app/feature/user/admin-user/admin-user.component.ts");
/* harmony import */ var _shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/shared-components/shared-components.component */ "./src/app/shared/components/shared-components/shared-components.component.ts");






const routes = [
    { path: '', component: _admin_user_component__WEBPACK_IMPORTED_MODULE_2__["AdminUserComponent"] },
    { path: 'info', component: _shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_3__["SharedComponentsComponent"] }
];
class AdminUserRoutingModule {
}
AdminUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminUserRoutingModule });
AdminUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminUserRoutingModule_Factory(t) { return new (t || AdminUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/user/admin-user/admin-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature/user/admin-user/admin-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/shared-components/shared-components.component */ "./src/app/shared/components/shared-components/shared-components.component.ts");



class AdminUserComponent {
    constructor() {
        this.user = { name: 'vivek', permissions: [1, 2, 1] };
    }
    ngOnInit() {
    }
}
AdminUserComponent.ɵfac = function AdminUserComponent_Factory(t) { return new (t || AdminUserComponent)(); };
AdminUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserComponent, selectors: [["app-admin-user"]], decls: 1, vars: 1, consts: [[3, "user"]], template: function AdminUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-components", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
    } }, directives: [_shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponentsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvdXNlci9hZG1pbi11c2VyL2FkbWluLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-user',
                templateUrl: './admin-user.component.html',
                styleUrls: ['./admin-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/user/admin-user/admin-user.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature/user/admin-user/admin-user.module.ts ***!
  \**************************************************************/
/*! exports provided: AdminUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserModule", function() { return AdminUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-user-routing.module */ "./src/app/feature/user/admin-user/admin-user-routing.module.ts");
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user.component */ "./src/app/feature/user/admin-user/admin-user.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






class AdminUserModule {
}
AdminUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminUserModule });
AdminUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminUserModule_Factory(t) { return new (t || AdminUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminUserRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminUserModule, { declarations: [_admin_user_component__WEBPACK_IMPORTED_MODULE_3__["AdminUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminUserRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_user_component__WEBPACK_IMPORTED_MODULE_3__["AdminUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminUserRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=feature-user-admin-user-admin-user-module-es2015.js.map