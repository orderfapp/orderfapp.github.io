webpackJsonp([3],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingUserPageModule", function() { return SettingUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_user__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingUserPageModule = /** @class */ (function () {
    function SettingUserPageModule() {
    }
    SettingUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_user__["a" /* SettingUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_user__["a" /* SettingUserPage */]),
            ],
        })
    ], SettingUserPageModule);
    return SettingUserPageModule;
}());

//# sourceMappingURL=setting-user.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticate_authenticate__ = __webpack_require__(291);
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
 * Generated class for the SettingUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingUserPage = /** @class */ (function () {
    function SettingUserPage(authenticate, navCtrl, alertCtrl, navParams) {
        this.authenticate = authenticate;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.title = "Tạo";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__providers_authenticate_authenticate__["b" /* CUser */]();
    }
    SettingUserPage.prototype.saveData = function () {
        if (this.user.confirmPass != this.user.password) {
            var alert_1 = this.alertCtrl.create({
                title: 'Sai thông tin confirm password!',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        if (this.user.loginid.trim() && this.user.password.trim()) {
            var count = 0;
            for (var index = 0; index < this.authenticate.listUser.length; index++) {
                var element = this.authenticate.listUser[index];
                if (element.idLogin == this.user.loginid) {
                    count++;
                    break;
                }
            }
            if (count > 0) {
                var alert_2 = this.alertCtrl.create({
                    title: 'User đã tồn tại!',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            if (this.title == "Tạo") {
                this.authenticate.addUser(this.user);
            }
            else {
                this.authenticate.editUser(this.user);
            }
            this.title = "Tạo";
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Sai thông tin login!',
                buttons: ['OK']
            });
            alert_3.present();
            return;
        }
    };
    SettingUserPage.prototype.editUser = function (userData) {
        this.title = "Sửa";
        this.user.copy(userData);
    };
    SettingUserPage.prototype.deleteUser = function (userData) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Xóa user',
            buttons: [
                {
                    text: 'Đóng',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Xóa',
                    handler: function (data) {
                        _this.authenticate.deleteUser(userData);
                    }
                }
            ]
        });
        prompt.present();
    };
    SettingUserPage.prototype.cancelEdit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__providers_authenticate_authenticate__["b" /* CUser */]();
        this.title = "Tạo";
    };
    SettingUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting-user',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\setting-user\setting-user.html"*/'<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>Đăng kí user</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroundColor">\n  <form (ngSubmit)="saveData()" #UserForm="ngForm">\n    <ion-list>\n      <ion-row class="headerInput">\n        Thông tin user\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Login ID" type="text" [(ngModel)]="user.loginid" name="loginid"\n          required></ion-input>\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Mật khẩu" type="password" [(ngModel)]="user.password" name="password"\n          required></ion-input>\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Confirm mật khẩu" type="password" [(ngModel)]="user.confirmPass" name="confirmPass"\n          required></ion-input>\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Tên" type="text" [(ngModel)]="user.name" name="name"\n          required></ion-input>\n      </ion-row>\n      <ion-item class="removeLines">\n        <ion-toggle [(ngModel)]="user.status" name="user.status"></ion-toggle>\n        <ion-label>\n          Lock user (Off/On)\n        </ion-label>\n      </ion-item>\n      <ion-item class="listType removeLines">\n        <ion-label>Quyền hạn</ion-label>\n        <ion-select [(ngModel)]="user.role" name="user.role" required>\n          <ion-option value="Admin">Admin</ion-option>\n          <ion-option value="Order">Order</ion-option>\n          <ion-option value="Kitchen">Kitchen</ion-option>\n          <ion-option value="Cashier">Cashier</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-row class="heightInput">\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="submit-btn buttonAdd" [disabled]="!UserForm.form.valid" text-uppercase>\n            {{title}}\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="buttonAdd" type="button" text-uppercase (click)="cancelEdit()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n  <ion-row class="headerInput">\n    Danh Sách user\n  </ion-row>\n  <ion-list class="childList listFood">\n    <ion-item-sliding *ngFor="let userDetails of authenticate.listUser">\n      <ion-item>\n        <h2>{{userDetails.loginid}}</h2>\n        <button ion-button clear item-end>{{userDetails.role}}</button>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="mainlightcolor" (click)="deleteUser(userDetails)">\n          <ion-icon ios="ios-trash-outline" md="ios-trash-outline"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="maindarkcolor" (click)="editUser(userDetails)">\n          <ion-icon ios="ios-create-outline" md="ios-create-outline"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row no-padding class="footerColor">\n    <ion-col col-12 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only icon-only navPop>\n        <ion-icon ios="md-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\setting-user\setting-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_authenticate_authenticate__["a" /* AuthenticateProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingUserPage);
    return SettingUserPage;
}());

//# sourceMappingURL=setting-user.js.map

/***/ })

});
//# sourceMappingURL=3.js.map