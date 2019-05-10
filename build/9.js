webpackJsonp([9],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiefPageModule", function() { return ChiefPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chief__ = __webpack_require__(673);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChiefPage; });
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
        this.countItemDone = 0;
        this.countItem = 0;
        this.initializeItems();
    }
    ChiefPage.prototype.initializeItems = function () {
        var _this = this;
        var data = this.orderProvider.getAllOrder().valueChanges().subscribe(function (dataInfo) {
            var count = 0;
            var listOrderHide = [];
            _this.dataOfOrder = [];
            _this.countItemDone = 0;
            _this.countItem = 0;
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    var order = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["b" /* COrder */]();
                    var element = dataInfo[index];
                    order.copy(element);
                    if (order.status) {
                        _this.countItemDone++;
                    }
                    for (var key in element.order) {
                        if (_this.orderProvider.listFoodObject[element.order[key].id]) {
                            var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* COrderDetails */]();
                            orderDetail.copy(element.order[key]);
                            orderDetail.food.copy(_this.orderProvider.listFoodObject[element.order[key].id]);
                            _this.countItem++;
                            if (element.order[key].option) {
                                for (var keyOption in element.order[key].option) {
                                    orderDetail.option.push(keyOption);
                                }
                            }
                            order.listOrder.push(orderDetail);
                        }
                    }
                    if (order.listOrder.length > 0) {
                        _this.dataOfOrder.push(order);
                        if (order.status) {
                            listOrderHide.push(index);
                            count++;
                        }
                    }
                }
                if (count > _this.orderProvider.limitShow) {
                    for (var index = listOrderHide.length - _this.orderProvider.limitShow - 1; index >= 0; index--) {
                        _this.dataOfOrder.splice(listOrderHide[index], 1);
                    }
                }
            }
            else {
                _this.dataOfOrder = [];
            }
            _this.items = _this.dataOfOrder;
        });
    };
    ChiefPage.prototype.confirmAll = function (order) {
        order.status = !order.status;
        for (var index = 0; index < order.listOrder.length; index++) {
            order.listOrder[index].status = order.status;
        }
        this.orderProvider.updateStatus(order);
    };
    ChiefPage.prototype.confirm = function (order, food) {
        food.status = !food.status;
        var count = 0;
        for (var index = 0; index < order.listOrder.length; index++) {
            var element = order.listOrder[index];
            if (element.status == food.status) {
                count++;
            }
        }
        if (count == order.listOrder.length) {
            order.status = food.status;
        }
        this.orderProvider.updateStatus(order);
    };
    ChiefPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            val = this.xoaDau(val);
            this.items = this.dataOfOrder.filter(function (item) {
                return (_this.xoaDau(item.table).toLowerCase().includes(val.toLowerCase()) == true || _this.xoaDau(item.name).toLowerCase().includes(val.toLowerCase()) == true);
            });
        }
        else {
            this.items = this.dataOfOrder;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chief',template:/*ion-inline-start:"c:\Users\User\Downloads\orderapp\app\src\pages\chief\chief.html"*/'<!--\n  Generated template for the DeviceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>{{"Nhà bếp " + countItemDone + "/" + dataOfOrder.length}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-row no-padding *ngFor="let orderDetails of items" class="listOrder">\n    <ion-col col-2 no-padding class="colBackground">\n      <button ion-button class="buttonFullHeight" color="bgiphonedark" outline (click)="confirmAll(orderDetails)" no-padding>{{orderDetails.table}}</button>\n    </ion-col>\n    <ion-col col-10 no-padding>\n      <ion-list no-padding class="listDetails" *ngFor="let foodDetails of orderDetails.listOrder">\n        <ion-item [ngClass]="{\'disableFood\': foodDetails.status}">\n          <ion-avatar item-start>\n            <img src=\'{{foodDetails.food.image ? foodDetails.food.image : "assets/icon/noimage.png"}}\'>\n          </ion-avatar>\n          <h2 class="fontTextLarge">{{foodDetails.food.name}}</h2>\n          <p class="fontTextSmall" *ngIf="foodDetails.option.length == 0">Bình thường</p>\n          <p class="fontTextSmall" *ngFor="let foodOption of foodDetails.option">{{foodOption}}</p>\n          <button class="fontButton" ion-button clear color="maincolor" item-end (click)="confirm(orderDetails, foodDetails)">OK</button>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"c:\Users\User\Downloads\orderapp\app\src\pages\chief\chief.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChiefPage);
    return ChiefPage;
}());

//# sourceMappingURL=chief.js.map

/***/ })

});
//# sourceMappingURL=9.js.map