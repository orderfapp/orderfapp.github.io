webpackJsonp([4],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingOptionPageModule", function() { return SettingOptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_option__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingOptionPageModule = /** @class */ (function () {
    function SettingOptionPageModule() {
    }
    SettingOptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_option__["a" /* SettingOptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_option__["a" /* SettingOptionPage */]),
            ],
        })
    ], SettingOptionPageModule);
    return SettingOptionPageModule;
}());

//# sourceMappingURL=setting-option.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_option_option__ = __webpack_require__(291);
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
 * Generated class for the SettingOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingOptionPage = /** @class */ (function () {
    function SettingOptionPage(navCtrl, optionProvider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.optionProvider = optionProvider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.title = "Tạo";
        this.localOption = "";
    }
    SettingOptionPage.prototype.saveData = function () {
        if (this.title == "Tạo") {
            this.optionProvider.addOption(this.localOption);
        }
        else {
            this.optionProvider.editOption(this.localOption);
        }
        this.title = "Tạo";
    };
    SettingOptionPage.prototype.editOption = function (data) {
        this.title = "Sửa";
        this.localOption = data;
    };
    SettingOptionPage.prototype.deleteOption = function (dataDelete) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Xóa option',
            buttons: [
                {
                    text: 'Đóng',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Xóa',
                    handler: function (data) {
                        _this.optionProvider.deleteOption(dataDelete);
                    }
                }
            ]
        });
        prompt.present();
    };
    SettingOptionPage.prototype.cancelEdit = function () {
        this.localOption = "";
        this.title = "Tạo";
    };
    SettingOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting-option',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\setting-option\setting-option.html"*/'<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>Đăng kí option</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroundColor">\n  <form (ngSubmit)="saveData()" #OptionForm="ngForm">\n    <ion-list>\n      <ion-row class="headerInput">\n        Thông tin option\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Tên option" type="text" [(ngModel)]="localOption" name="localOption"\n          required></ion-input>\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="submit-btn buttonAdd" [disabled]="!OptionForm.form.valid" text-uppercase>\n            {{title}}\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="buttonAdd" type="button" text-uppercase (click)="cancelEdit()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n  <ion-row class="headerInput">\n    Danh Sách option\n  </ion-row>\n  <ion-list class="childList listFood">\n    <ion-item-sliding *ngFor="let typeOption of optionProvider.listOption">\n      <ion-item>\n        <h2>{{typeOption}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="mainlightcolor" (click)="deleteOption(typeOption)">\n          <ion-icon ios="ios-trash-outline" md="ios-trash-outline"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="maindarkcolor" (click)="editOption(typeOption)">\n          <ion-icon ios="ios-create-outline" md="ios-create-outline"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row no-padding class="footerColor">\n    <ion-col col-12 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only icon-only navPop>\n        <ion-icon ios="md-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\setting-option\setting-option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_option_option__["a" /* OptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingOptionPage);
    return SettingOptionPage;
}());

//# sourceMappingURL=setting-option.js.map

/***/ })

});
//# sourceMappingURL=4.js.map