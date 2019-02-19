webpackJsonp([8],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(514);
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticate_authenticate__ = __webpack_require__(290);
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
    function LoginPage(navCtrl, auth, alertCtrl, navParams, orderProvider) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.loginInfo = { userName: '', password: '' };
        this.showButton = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showButton = false;
        this.loginInfo.userName = this.loginInfo.userName.toLowerCase();
        this.loginInfo.password = this.loginInfo.password.toLowerCase();
        this.auth.login(this.loginInfo).subscribe(function (allowed) {
            if (allowed) {
                _this.showButton = true;
            }
            else {
                _this.showError("Sai tài khoản : " + _this.loginInfo.userName);
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Thông báo lỗi',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
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
    LoginPage.prototype.summary = function () {
        this.orderProvider.removeOrder();
        var alert = this.alertCtrl.create({
            title: 'Data đã được tổng kết',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\User\Documents\orderfapp.github.io-master\app\src\pages\login\login.html"*/'<ion-content padding class="backgroundMain">\n  <ion-row class="logo-row">\n    <img class="logo-login" src="assets/icon/icon-login.png" />\n  </ion-row>\n  <ion-row class="nameLogo">\n    <div>NT Order</div>\n  </ion-row>\n  <form (ngSubmit)="login()" #loginForm="ngForm" *ngIf="!showButton">\n    <ion-item no-padding class="highlightRemove inputItemStyleF" no-lines>\n      <ion-input placeholder="Tên nhân viênnnnn" class="inputTextStyle" name="userName" [(ngModel)]="loginInfo.userName"\n        required></ion-input>\n    </ion-item>\n    <ion-item no-padding class="highlightRemove inputItemStyleF" no-lines>\n      <ion-input placeholder="Mật khẩuuuu" type="password" class="inputTextStyle" name="password" [(ngModel)]="loginInfo.password"\n        required></ion-input>\n    </ion-item>\n    <ion-row class="marginRow" no-padding>\n      <ion-col col-12>\n        <button ion-button color="light" block outline class="fontButton">Đăng nhập</button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row class="marginRow" *ngIf="showButton">\n    <ion-col col-6 *ngIf="auth.userLogin.role == \'Admin\'">\n      <button class="fontButton" ion-button color="light" block outline (click)="goToOrder()" icon-start>\n        <ion-icon ios="ios-paper-outline" md="ios-paper-outline"></ion-icon>\n        Đặt món\n      </button>\n    </ion-col>\n    <ion-col col-6 *ngIf="auth.userLogin.role == \'Admin\'">\n      <button class="fontButton" ion-button color="bgiphonedark" block outline (click)="goToKitchen()" icon-start>\n        <ion-icon ios="ios-bonfire" md="ios-bonfire"></ion-icon>\n        Nhà bếp\n      </button>\n    </ion-col>\n    <ion-col col-12 *ngIf="auth.userLogin.role == \'Order\'">\n      <button class="fontButton" ion-button color="light" block outline (click)="goToOrder()" icon-start>\n        <ion-icon ios="ios-paper-outline" md="ios-paper-outline"></ion-icon>\n        Đặt món\n      </button>\n    </ion-col>\n    <ion-col col-12 *ngIf="auth.userLogin.role == \'Kitchen\'">\n      <button class="fontButton" ion-button color="bgiphonedark" block outline (click)="goToKitchen()" icon-start>\n        <ion-icon ios="ios-bonfire" md="ios-bonfire"></ion-icon>\n        Nhà bếp\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="marginRow" *ngIf="showButton">\n    <ion-col col-6 *ngIf="auth.userLogin.role == \'Admin\'">\n      <button class="fontButton" ion-button color="light" block outline (click)="goToCashier()" icon-start>\n        <ion-icon ios="ios-cash-outline" md="ios-cash-outline"></ion-icon>\n        Tính tiền\n      </button>\n    </ion-col>\n    <ion-col col-6 *ngIf="auth.userLogin.role == \'Admin\'">\n      <button class="fontButton" ion-button color="bgiphonedark" block outline (click)="goToSetting()" icon-start>\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n        Cấu hình\n      </button>\n    </ion-col>\n    <ion-col col-12 *ngIf="auth.userLogin.role == \'Cashier\'">\n      <button class="fontButton" ion-button color="light" block outline (click)="goToCashier()" icon-start>\n        <ion-icon ios="ios-cash-outline" md="ios-cash-outline"></ion-icon>\n        Tính tiền\n      </button>\n    </ion-col>\n    <ion-col col-12 *ngIf="auth.userLogin.role == \'Admin\'">\n      <button class="fontButton" ion-button color="bgiphonedark" block outline (click)="summary()" icon-start>\n        <ion-icon ios="ios-stats-outline" md="ios-stats-outline"></ion-icon>\n        Tổng kết\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\orderfapp.github.io-master\app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenticate_authenticate__["a" /* AuthenticateProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map