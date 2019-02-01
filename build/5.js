webpackJsonp([5],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, viewCtrl, orderProvider, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.orderProvider = orderProvider;
        this.navParams = navParams;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["b" /* COrder */]();
        this.allOrder = [];
        this.money = null;
        this.returnBack = 0;
        this.returnText = "";
    }
    PaymentPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.order = this.navParams.data.order;
            this.allOrder = this.navParams.data.allOrder;
        }
    };
    PaymentPage.prototype.change = function (ev) {
        var val = ev.target.value;
        var total = this.order.total();
        if (val) {
            val = parseInt(val);
        }
        else {
            val = 0;
        }
        if (val - total < 0) {
            this.returnBack = total - val;
            this.returnText = "Khách còn thiếu: ";
        }
        else if (val - total >= 0) {
            this.returnBack = val - total;
            this.returnText = "Tiền trả lại: ";
        }
    };
    PaymentPage.prototype.payment = function () {
        this.order.payment = true;
        this.orderProvider.paymentOrder(this.order);
        this.viewCtrl.dismiss();
    };
    PaymentPage.prototype.closePayment = function () {
        this.viewCtrl.dismiss();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\payment\payment.html"*/'<ion-content>\n    <form (ngSubmit)="payment()" #paymentForm="ngForm">\n  <ion-list>\n    <ion-row no-padding class="headerRow" text-center>\n      <button ion-button class="buttonHeader" color="light" full clear>Thanh toán</button>\n    </ion-row>  \n    <ion-item>\n      <ion-label>{{order.total() | currency:\'VND\':\'VNĐ\':\'2.0\'}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Số tiền khách trả" type="number" pattern="[0-9]*" [(ngModel)]="money" name="money" (input)="change($event)" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{returnText}} {{returnBack | currency:\'VND\':\'VNĐ\':\'2.0\'}}</ion-label>\n    </ion-item>\n    <ion-row no-padding>\n      <ion-col col-6 padding text-center>\n        <button ion-button type="button" block color="mainlightcolor" (click)="closePayment()">\n          Hủy\n        </button>\n      </ion-col>\n      <ion-col col-6 padding text-center>\n        <button ion-button block color="mainlightcolor" [disabled]="!paymentForm.form.valid">\n          Thanh toán\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=5.js.map