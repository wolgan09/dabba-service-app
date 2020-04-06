function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-user-customer-user-customer-user-module"], {
  /***/
  "./src/app/feature/user/customer-user/customer-user-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/feature/user/customer-user/customer-user-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: CustomerUserRoutingModule */

  /***/
  function srcAppFeatureUserCustomerUserCustomerUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerUserRoutingModule", function () {
      return CustomerUserRoutingModule;
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


    var _customer_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-user.component */
    "./src/app/feature/user/customer-user/customer-user.component.ts");

    var routes = [{
      path: '',
      component: _customer_user_component__WEBPACK_IMPORTED_MODULE_2__["CustomerUserComponent"]
    }];

    var CustomerUserRoutingModule = function CustomerUserRoutingModule() {
      _classCallCheck(this, CustomerUserRoutingModule);
    };

    CustomerUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomerUserRoutingModule
    });
    CustomerUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomerUserRoutingModule_Factory(t) {
        return new (t || CustomerUserRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerUserRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/user/customer-user/customer-user.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/feature/user/customer-user/customer-user.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CustomerUserComponent */

  /***/
  function srcAppFeatureUserCustomerUserCustomerUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerUserComponent", function () {
      return CustomerUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/components/shared-components/shared-components.component */
    "./src/app/shared/components/shared-components/shared-components.component.ts");

    var CustomerUserComponent = /*#__PURE__*/function () {
      function CustomerUserComponent() {
        _classCallCheck(this, CustomerUserComponent);

        this.user = {
          name: 'flash',
          permissions: [1, 2, 1]
        };
      }

      _createClass(CustomerUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerUserComponent;
    }();

    CustomerUserComponent.ɵfac = function CustomerUserComponent_Factory(t) {
      return new (t || CustomerUserComponent)();
    };

    CustomerUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerUserComponent,
      selectors: [["app-customer-user"]],
      decls: 1,
      vars: 1,
      consts: [[3, "user"]],
      template: function CustomerUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-components", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);
        }
      },
      directives: [_shared_components_shared_components_shared_components_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponentsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvdXNlci9jdXN0b21lci11c2VyL2N1c3RvbWVyLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer-user',
          templateUrl: './customer-user.component.html',
          styleUrls: ['./customer-user.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/user/customer-user/customer-user.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/feature/user/customer-user/customer-user.module.ts ***!
    \********************************************************************/

  /*! exports provided: CustomerUserModule */

  /***/
  function srcAppFeatureUserCustomerUserCustomerUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerUserModule", function () {
      return CustomerUserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer-user-routing.module */
    "./src/app/feature/user/customer-user/customer-user-routing.module.ts");
    /* harmony import */


    var _customer_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-user.component */
    "./src/app/feature/user/customer-user/customer-user.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CustomerUserModule = function CustomerUserModule() {
      _classCallCheck(this, CustomerUserModule);
    };

    CustomerUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomerUserModule
    });
    CustomerUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomerUserModule_Factory(t) {
        return new (t || CustomerUserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerUserRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerUserModule, {
        declarations: [_customer_user_component__WEBPACK_IMPORTED_MODULE_3__["CustomerUserComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerUserRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_customer_user_component__WEBPACK_IMPORTED_MODULE_3__["CustomerUserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerUserRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-user-customer-user-customer-user-module-es5.js.map