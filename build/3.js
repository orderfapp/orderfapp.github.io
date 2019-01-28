webpackJsonp([3],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(508);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, orderProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.alertCtrl = alertCtrl;
        this.orderFlag = false;
        this.currentTable = "";
        this.dataOfFood = [];
        this.orderTable = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["b" /* COrder */]();
        this.initializeItems();
    }
    OrderPage.prototype.initializeItems = function () {
        var _this = this;
        var data = this.orderProvider.getAllFood().valueChanges().subscribe(function (dataInfo) {
            _this.dataOfFood = [];
            _this.orderProvider.listFood = {};
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    var food = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* CFood */]();
                    food.copy(dataInfo[index]);
                    _this.orderProvider.listFood[food.id] = food;
                    _this.dataOfFood.push(food);
                }
            }
            else {
                _this.dataOfFood = [];
                _this.orderProvider.listFood = {};
            }
            _this.items = _this.dataOfFood;
        });
    };
    OrderPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            val = this.xoaDau(val);
            this.items = this.dataOfFood.filter(function (item) {
                return (item.name.toLowerCase().includes(val.toLowerCase()) == true);
            });
        }
        else {
            this.items = this.dataOfFood;
        }
    };
    OrderPage.prototype.addOrder = function () {
        this.showPrompt();
    };
    OrderPage.prototype.confirmOrder = function () {
        this.orderTable.table = this.currentTable.toLowerCase();
        this.orderProvider.addOrder(this.orderTable);
        this.orderFlag = false;
        this.currentTable = "";
    };
    OrderPage.prototype.goToChief = function () {
        this.navCtrl.push('ChiefPage');
    };
    OrderPage.prototype.createFood = function () {
        this.navCtrl.push('SetupPage');
    };
    OrderPage.prototype.addFood = function (food) {
        var indexFood = -1;
        for (var index = 0; index < this.orderTable.listOrder.length; index++) {
            if (this.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
            }
        }
        if (indexFood != -1) {
            this.orderTable.listOrder[indexFood].sl++;
        }
        else {
            var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["c" /* COrderDetails */]();
            orderDetail.id = food.id;
            orderDetail.sl = 1;
            orderDetail.slgiao = 0;
            orderDetail.status = "Đang làm";
            orderDetail.food.copy(food);
            this.orderTable.listOrder.push(orderDetail);
        }
    };
    OrderPage.prototype.minusFood = function (food) {
        var _this = this;
        var indexFood = -1;
        for (var index = 0; index < this.orderTable.listOrder.length; index++) {
            if (this.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
            }
        }
        if (this.orderTable.listOrder[indexFood].sl == 1) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Xóa món',
                buttons: [
                    {
                        text: 'Đóng',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Xóa',
                        handler: function (data) {
                            _this.orderTable.listOrder.splice(indexFood, 1);
                        }
                    }
                ]
            });
            prompt_1.present();
        }
        else if (indexFood != -1 && this.orderTable.listOrder[indexFood].sl > 1) {
            this.orderTable.listOrder[indexFood].sl--;
        }
    };
    OrderPage.prototype.deleteFood = function (food) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Xóa món',
            buttons: [
                {
                    text: 'Đóng',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Xóa',
                    handler: function (data) {
                        var indexFood = -1;
                        for (var index = 0; index < _this.orderTable.listOrder.length; index++) {
                            if (_this.orderTable.listOrder[index].id == food.id) {
                                indexFood = index;
                                break;
                            }
                        }
                        if (indexFood != -1) {
                            _this.orderTable.listOrder.splice(indexFood, 1);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderPage.prototype.closeOrder = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Xóa order',
            buttons: [
                {
                    text: 'Đóng',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Xóa',
                    handler: function (data) {
                        _this.orderProvider.clearOrder(_this.orderTable);
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                            _this.orderFlag = true;
                            var dataSub = _this.orderProvider.getAllFoodByTable(_this.currentTable).valueChanges().subscribe(function (dataInfo) {
                                _this.orderTable = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["b" /* COrder */]();
                                if (dataInfo[1]) {
                                    _this.orderTable.table = dataInfo[1] + "";
                                    for (var key in dataInfo[0]) {
                                        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["c" /* COrderDetails */]();
                                        orderDetail.copy(dataInfo[0][key]);
                                        orderDetail.food.copy(_this.orderProvider.listFood[key]);
                                        _this.orderTable.listOrder.push(orderDetail);
                                    }
                                }
                                else {
                                    _this.orderTable = new __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["b" /* COrder */]();
                                }
                            });
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\order\order.html"*/'<!--\n  Generated template for the DeviceListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-title>Order</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list class="listFood" *ngIf="orderFlag">\n    <ion-item *ngFor="let foodDetails of items">\n      <ion-avatar item-start>\n        <img src=\'{{foodDetails.image ? foodDetails.image : "assets/icon/noimage.png"}}\'>\n      </ion-avatar>\n      <p>{{foodDetails.name}}</p>\n      <p>Giá : {{foodDetails.value}}k<font style="color:red">{{foodDetails.status ? "" :" Hết hàng"}}</font>\n      </p>\n      <button ion-button clear color="maincolor" item-end (click)="addFood(foodDetails)">Đặt</button>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf="orderFlag">\n    <h2>Danh sách món đã đặt</h2>\n    <ion-row *ngIf="orderTable.listOrder.length == 0">\n      <div>Chưa đặt món</div>\n    </ion-row>\n    <ion-item-sliding *ngFor="let orderDetail of orderTable.listOrder">\n      <ion-item>\n        <ion-avatar item-start (click)="minusFood(orderDetail.food)">\n          <img src=\'{{orderDetail.food.image ? orderDetail.food.image : "assets/icon/noimage.png"}}\'>\n        </ion-avatar>\n        <h2>{{orderDetail.food.name}}</h2>\n        <p>Đã giao:{{" " + orderDetail.slgiao}}</p>\n        <button ion-button clear color="maincolor" item-end (click)="addFood(orderDetail.food)">Số lượng\n          {{orderDetail.sl}}</button>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="mainlightcolor" (click)="deleteFood(orderDetail.food)">\n          <ion-icon ios="ios-trash-outline" md="ios-trash-outline"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>      \n    </ion-item-sliding>\n    <ion-row no-padding *ngIf="orderTable.listOrder.length > 0">\n      <ion-col col-6 no-padding text-center>\n        <button ion-button color="mainlightcolor" (click)="closeOrder()">\n          Xóa\n        </button>\n      </ion-col>\n      <ion-col col-6 no-padding text-center>\n        <button ion-button color="mainlightcolor" (click)="confirmOrder()">\n          Hoàn tất\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row no-padding>\n    <ion-col col-4 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only icon-only (click)="createFood()">\n        <ion-icon ios="ios-add-outline" md="ios-add-outline"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-4 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only (click)="goToChief()">\n        <ion-icon ios="ios-bonfire" md="ios-bonfire"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-4 no-padding text-center>\n      <button ion-button class="roundButton buttonHeader" outline style="border-radius: 27%;" color="maincolor"\n        icon-only (click)="addOrder()">\n        <ion-icon ios="ios-paper" md="ios-paper"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["e" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=3.js.map