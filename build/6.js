webpackJsonp([6],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, orderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
    }
    LoginPage.prototype.goToOrder = function () {
        this.navCtrl.push('OrderPage');
    };
    LoginPage.prototype.goToKitchen = function () {
        this.navCtrl.push('ChiefPage');
    };
    LoginPage.prototype.goToCashier = function () {
        this.navCtrl.push('CashierPage');
    };
    LoginPage.prototype.goToSetting = function () {
        this.navCtrl.push('SetupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\login\login.html"*/'<ion-content padding class="backgroundMain">\n  <ion-row class="logo-row">\n    <img class="logo-login" src="assets/icon/icon-IoT222.png" />\n  </ion-row>\n  <ion-row class="nameLogo">\n    <div>VF Order</div>\n  </ion-row>\n  <!-- <ion-item class="highlightRemove inputItemStyleF" no-lines>\n      <ion-input placeholder="Tên nhân viên" class="inputTextStyle"></ion-input>\n    </ion-item>\n    <ion-item class="highlightRemove inputItemStyleF" no-lines>\n        <ion-input placeholder="Mật khẩu" class="inputTextStyle"></ion-input>\n      </ion-item> -->\n  <ion-row class="marginRow">\n    <ion-col col-6>\n      <button ion-button color="light" block outline (click)="goToOrder()">Order</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button color="bgiphonedark" block outline (click)="goToKitchen()">Kitchen</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="marginRow">\n    <ion-col col-6>\n      <button ion-button color="light" block outline (click)="goToCashier()">Cashier</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button color="bgiphonedark" block outline (click)="goToSetting()">Setting</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* OrderFoodProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map