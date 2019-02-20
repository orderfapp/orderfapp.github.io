webpackJsonp([6],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, orderProvider, popoverCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.currentTable = "";
        this.items = this.orderProvider.listDataFood;
    }
    OrderPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            val = this.xoaDau(val);
            this.items = this.orderProvider.listDataFood.filter(function (item) {
                return (_this.xoaDau(item.name).toLowerCase().includes(val.toLowerCase()) == true);
            });
        }
        else {
            this.items = this.orderProvider.listDataFood;
        }
    };
    OrderPage.prototype.addFood = function (food) {
        var indexFood = -1;
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* COrderDetails */]();
        orderDetail.id = food.id;
        orderDetail.sl = 1;
        orderDetail.status = false;
        orderDetail.food.copy(food);
        for (var index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
            if (this.orderProvider.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
            }
        }
        this.orderProvider.orderTable.listOrder.push(orderDetail);
        if (indexFood != -1) {
            this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] + 1;
        }
        else {
            this.orderProvider.listSLFoodObject[food.id] = 1;
        }
    };
    OrderPage.prototype.minusFood = function (food) {
        var indexFood = -1;
        for (var index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
            if (this.orderProvider.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
            }
        }
        if (indexFood > -1) {
            this.orderProvider.orderTable.listOrder.splice(indexFood, 1);
            if (this.orderProvider.listSLFoodObject[food.id] == 1) {
                this.orderProvider.listSLFoodObject[food.id] = null;
            }
            else if (indexFood != -1 && this.orderProvider.listSLFoodObject[food.id] > 1) {
                this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] - 1;
            }
        }
    };
    OrderPage.prototype.addOrder = function (data, ev) {
        var _this = this;
        if (!data || this.orderProvider.orderTable.listOrder.length == 0) {
            return;
        }
        if (data == this.orderProvider.stringModeMuaVe) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Tên người mua',
                inputs: [
                    {
                        name: 'tableNumber',
                        placeholder: 'Nhập tên'
                    },
                ],
                buttons: [
                    {
                        text: 'Đóng',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            _this.currentTable = data.tableNumber.toLowerCase();
                            var popover = _this.popoverCtrl.create("OrderDetailsPage", {
                                mode: _this.orderProvider.stringModeMuaVe,
                                currentTable: _this.currentTable
                            }, {
                                cssClass: 'custom-popover'
                            });
                            popover.present({
                                ev: ev
                            });
                        }
                    }
                ],
                cssClass: 'customCSS'
            });
            prompt_1.present();
        }
        else if (data == this.orderProvider.stringModeTaiBan) {
            var prompt_2 = this.alertCtrl.create({
                title: 'Chọn bàn',
                inputs: [
                    {
                        name: 'tableNumber',
                        placeholder: 'Nhập số bàn'
                    },
                ],
                buttons: [
                    {
                        text: 'Đóng',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            if (data.tableNumber) {
                                _this.currentTable = data.tableNumber.toLowerCase();
                                var popover = _this.popoverCtrl.create("OrderDetailsPage", {
                                    mode: _this.orderProvider.stringModeTaiBan,
                                    currentTable: _this.currentTable
                                }, {
                                    cssClass: 'custom-popover'
                                });
                                popover.present({
                                    ev: ev
                                });
                            }
                            else {
                                return false;
                            }
                        }
                    }
                ],
                cssClass: 'customCSS'
            });
            prompt_2.present();
        }
    };
    OrderPage.prototype.xoaDau = function (str) {
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
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\order\order.html"*/'<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title class="fontButton">Đặt món</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list class="listFood">\n    <ion-item *ngFor="let foodDetails of items">\n      <ion-avatar item-start (click)="minusFood(foodDetails)">\n        <img src=\'{{foodDetails.image ? foodDetails.image : "assets/icon/noimage.png"}}\'>\n      </ion-avatar>\n      <p class="fontTextLarge">{{foodDetails.name}}</p>\n      <p class="fontTextSmall">Giá : {{foodDetails.value}}<font style="color:red">{{foodDetails.status ? "" :" Hết hàng"}}</font>\n      </p>\n      <button class="fontButton" ion-button clear color="maincolor" item-end (click)="addFood(foodDetails)">{{orderProvider.listSLFoodObject[foodDetails.id] ? "SL " + orderProvider.listSLFoodObject[foodDetails.id] : "Đặt"}}</button>\n    </ion-item>\n  </ion-list>  \n</ion-content>\n<ion-footer>\n  <ion-row no-padding>\n    <ion-col col-6 no-padding text-center>\n        <button class="fontButton" ion-button color="maincolor" block outline (click)="addOrder(\'Mua về\', $event)">Mua về</button>     \n    </ion-col>\n    <ion-col col-6 no-padding text-center>\n        <button class="fontButton" ion-button color="maincolor" block outline (click)="addOrder(\'Tại bàn\', $event)">Tại bàn</button>\n    </ion-col>    \n  </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=6.js.map