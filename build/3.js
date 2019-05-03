webpackJsonp([3],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupTypePageModule", function() { return SetupTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_type__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetupTypePageModule = /** @class */ (function () {
    function SetupTypePageModule() {
    }
    SetupTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setup_type__["a" /* SetupTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setup_type__["a" /* SetupTypePage */]),
            ],
        })
    ], SetupTypePageModule);
    return SetupTypePageModule;
}());

//# sourceMappingURL=setup-type.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__ = __webpack_require__(289);
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
 * Generated class for the SetupTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetupTypePage = /** @class */ (function () {
    function SetupTypePage(navCtrl, orderProvider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.orderProvider = orderProvider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.title = "Tạo";
        this.localType = "";
    }
    SetupTypePage.prototype.saveData = function () {
        if (this.title == "Tạo") {
            this.orderProvider.addType(this.localType);
        }
        else {
            this.orderProvider.editType(this.localType);
        }
        this.title = "Tạo";
    };
    SetupTypePage.prototype.editType = function (data) {
        this.title = "Sửa";
        this.localType = data;
    };
    SetupTypePage.prototype.deleteType = function (dataDelete) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Xóa phân loại món',
            buttons: [
                {
                    text: 'Đóng',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Xóa',
                    handler: function (data) {
                        _this.orderProvider.deleteType(dataDelete);
                    }
                }
            ]
        });
        prompt.present();
    };
    SetupTypePage.prototype.cancelEdit = function () {
        this.localType = "";
        this.title = "Tạo";
    };
    SetupTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setup-type',template:/*ion-inline-start:"c:\Users\User\Downloads\orderapp\app\src\pages\setup-type\setup-type.html"*/'<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>Đăng kí loại món ăn</ion-title>\n    <!-- <ion-buttons end>\n          <button ion-button clear>\n            1/5\n          </button>\n        </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroundColor">\n  <form (ngSubmit)="saveData()" #TypeForm="ngForm">\n    <ion-list>\n      <ion-row class="headerInput">\n        Thông tin loại Món Ăn\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-input class="inputRound" placeholder="Tên loại món" type="text" [(ngModel)]="localType" name="name"\n          required></ion-input>\n      </ion-row>\n      <ion-row class="heightInput">\n        <ion-col col-2>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="submit-btn buttonAdd" [disabled]="!TypeForm.form.valid" text-uppercase>\n            {{title}}\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button full class="buttonAdd" type="button" text-uppercase (click)="cancelEdit()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n  <ion-row class="headerInput">\n    Danh Sách phân loại Món Ăn\n  </ion-row>\n  <ion-list class="childList listFood">\n    <ion-item-sliding *ngFor="let typeFood of orderProvider.listTypeFood">\n      <ion-item>\n        <h2>{{typeFood}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="mainlightcolor" (click)="deleteType(typeFood)">\n          <ion-icon ios="ios-trash-outline" md="ios-trash-outline"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="maindarkcolor" (click)="editType(typeFood)">\n          <ion-icon ios="ios-create-outline" md="ios-create-outline"></ion-icon>\n          Copy\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row no-padding class="footerColor">\n    <ion-col col-12 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor" icon-only icon-only navPop>\n          <ion-icon ios="md-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"c:\Users\User\Downloads\orderapp\app\src\pages\setup-type\setup-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SetupTypePage);
    return SetupTypePage;
}());

//# sourceMappingURL=setup-type.js.map

/***/ })

});
//# sourceMappingURL=3.js.map