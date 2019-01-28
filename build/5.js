webpackJsonp([5],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiefPageModule", function() { return ChiefPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chief__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChiefPageModule = /** @class */ (function () {
    function ChiefPageModule() {
    }
    ChiefPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chief__["a" /* ChiefPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chief__["a" /* ChiefPage */]),
            ],
        })
    ], ChiefPageModule);
    return ChiefPageModule;
}());

//# sourceMappingURL=chief.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChiefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(288);
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
 * Generated class for the ChiefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChiefPage = /** @class */ (function () {
    function ChiefPage(navCtrl, orderProvider, navParams) {
        this.navCtrl = navCtrl;
        this.orderProvider = orderProvider;
        this.navParams = navParams;
        this.dataOfOrder = [];
        this.initializeItems();
    }
    ChiefPage.prototype.initializeItems = function () {
        var _this = this;
        var data = this.orderProvider.getAllOrder().valueChanges().subscribe(function (dataInfo) {
            _this.dataOfOrder = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    var order = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["b" /* COrder */]();
                    var element = dataInfo[index];
                    order.table = element.table;
                    for (var key in element.order) {
                        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["c" /* COrderDetails */]();
                        orderDetail.copy(element.order[key]);
                        orderDetail.food.copy(_this.orderProvider.listFood[key]);
                        order.listOrder.push(orderDetail);
                    }
                    _this.dataOfOrder.push(order);
                }
            }
            else {
                _this.dataOfOrder = [];
            }
            _this.items = _this.dataOfOrder;
        });
    };
    ChiefPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            val = this.xoaDau(val);
            this.items = this.dataOfOrder.filter(function (item) {
                return (item.table.toLowerCase().includes(val.toLowerCase()) == true);
            });
        }
        else {
            this.items = this.dataOfOrder;
        }
    };
    ChiefPage.prototype.expandList = function (data) {
        data.isExpand = !data.isExpand;
    };
    ChiefPage.prototype.addFood = function (order) {
        if (order.slgiao == order.sl) {
            return;
        }
        else {
            order.slgiao++;
        }
    };
    ChiefPage.prototype.deleteFood = function (order, food) {
        var indexFood = -1;
        for (var index = 0; index < order.listOrder.length; index++) {
            if (order.listOrder[index].id == food.id) {
                indexFood = index;
                break;
            }
        }
        if (indexFood != -1) {
            order.listOrder.splice(indexFood, 1);
        }
        order.listOrder.splice(indexFood, 1);
    };
    ChiefPage.prototype.editFood = function (orderDetails) {
        if (orderDetails.slgiao == 0) {
            orderDetails.slgiao = 0;
        }
        else {
            orderDetails.slgiao--;
        }
    };
    ChiefPage.prototype.minusFood = function (order) {
        if (order.slgiao == 0) {
            return;
        }
        else {
            order.slgiao--;
        }
    };
    ChiefPage.prototype.xoaDau = function (str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    };
    ChiefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chief',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\chief\chief.html"*/'<!--\n  Generated template for the DeviceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>List Order</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>  \n  <ion-list>\n      <ion-row *ngIf="dataOfOrder.length == 0">\n          <div>Chưa đặt bàn</div>\n        </ion-row>\n    <ion-list class="listFood" *ngFor="let order of items">\n      <button ion-item class="parentList" detail-none icon-start (click)="expandList(order)" *ngIf="!order.isExpand">\n        <ion-icon ios="md-add" md="md-add"></ion-icon>\n        {{order.table}}\n      </button>\n      <button ion-item class="parentList" detail-none icon-start (click)="expandList(order)" *ngIf="order.isExpand">\n          <ion-icon ios="md-remove" md="md-remove"></ion-icon>\n          {{order.table}}\n        </button>\n      <ion-list class="childList listFood" *ngIf="order.isExpand">\n          <ion-item-sliding *ngFor="let orderDetail of order.listOrder">\n              <ion-item no-lines>\n                <ion-avatar item-start (click)="minusFood(orderDetail)">\n                  <img src=\'{{orderDetail.food.image ? orderDetail.food.image : "assets/icon/noimage.png"}}\'>\n                </ion-avatar>\n                <h2>{{orderDetail.food.name}}</h2>\n                <p>Số lượng {{orderDetail.sl}}</p>\n                <button ion-button clear color="maincolor" item-end (click)="addFood(orderDetail)">Đã giao:{{" " + orderDetail.slgiao}}</button>\n              </ion-item>\n              <ion-item-options side="left">\n                <button ion-button color="mainlightcolor" (click)="deleteFood(order,orderDetail.food)">\n                  <ion-icon ios="ios-trash-outline" md="ios-trash-outline"></ion-icon>\n                  Delete\n                </button>\n              </ion-item-options>\n              <ion-item-options side="right">\n                <button ion-button color="maindarkcolor" (click)="editFood(orderDetail)">\n                  <ion-icon ios="ios-create-outline" md="ios-create-outline"></ion-icon>\n                  Edit\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>        \n      </ion-list>\n    </ion-list>\n  </ion-list>  \n</ion-content>\n<ion-footer>\n  <ion-row no-padding>  \n    <ion-col col-12 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only navPop>\n        <ion-icon ios="ios-paper" md="ios-paper"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\chief\chief.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["e" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChiefPage);
    return ChiefPage;
}());

//# sourceMappingURL=chief.js.map

/***/ })

});
//# sourceMappingURL=5.js.map