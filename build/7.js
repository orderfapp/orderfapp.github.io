webpackJsonp([7],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDetailsPageModule = /** @class */ (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */]),
            ],
        })
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());

//# sourceMappingURL=order-details.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_option_option__ = __webpack_require__(291);
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
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, orderProvider, viewCtrl, optionProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.viewCtrl = viewCtrl;
        this.optionProvider = optionProvider;
        this.alertCtrl = alertCtrl;
        this.mode = "";
        this.currentTable = "";
        this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort(function (a, b) {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
    }
    OrderDetailsPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.mode = this.navParams.data.mode;
            this.currentTable = this.navParams.data.currentTable;
        }
        this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort(function (a, b) {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
    };
    OrderDetailsPage.prototype.addOption = function (food) {
        var alert = this.alertCtrl.create();
        alert.setTitle('Chọn thêm?');
        for (var index = 0; index < this.optionProvider.listOption.length; index++) {
            var element = this.optionProvider.listOption[index];
            alert.addInput({
                type: 'checkbox',
                label: element,
                value: element
            });
        }
        alert.addButton('Hủy');
        alert.addButton({
            text: 'Chọn',
            handler: function (data) {
                food.option = data;
            }
        });
        alert.present();
    };
    OrderDetailsPage.prototype.deleteFood = function (food) {
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
                        for (var index = 0; index < _this.orderProvider.orderTable.listOrder.length; index++) {
                            if (_this.orderProvider.orderTable.listOrder[index].id == food.id) {
                                indexFood = index;
                                break;
                            }
                        }
                        if (indexFood != -1) {
                            _this.orderProvider.orderTable.listOrder.splice(indexFood, 1);
                            if (_this.orderProvider.listSLFoodObject[food.id] == 1) {
                                _this.orderProvider.listSLFoodObject[food.id] = null;
                            }
                            else if (indexFood != -1 && _this.orderProvider.listSLFoodObject[food.id] > 1) {
                                _this.orderProvider.listSLFoodObject[food.id] = _this.orderProvider.listSLFoodObject[food.id] - 1;
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderDetailsPage.prototype.addFood = function (food) {
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* COrderDetails */]();
        orderDetail.id = food.id;
        orderDetail.sl = 1;
        orderDetail.status = false;
        orderDetail.food.copy(food.food);
        this.orderProvider.orderTable.listOrder.push(orderDetail);
        this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort(function (a, b) {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
        this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] + 1;
    };
    OrderDetailsPage.prototype.minusFood = function (food) {
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
    OrderDetailsPage.prototype.closeOrder = function (order) {
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
                        _this.orderProvider.clearOrder(order);
                        _this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderDetailsPage.prototype.confirmOrder = function (order) {
        if (this.currentTable) {
            order.table = this.currentTable.toLowerCase();
        }
        else {
            order.table = this.mode;
        }
        order.mode = this.mode;
        this.orderProvider.addOrder(order);
        this.currentTable = "";
        this.viewCtrl.dismiss();
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-details',template:/*ion-inline-start:"D:\ionic\orderFood\src\pages\order-details\order-details.html"*/'<ion-content>\n  <ion-list class="scrollTo">\n    <ion-row no-padding class="headerRow" text-center>\n      <button ion-button class="buttonHeader" color="light" full clear>{{mode + " " + currentTable}}</button>\n    </ion-row>\n    <ion-item (press)="deleteFood(foodDetails)" (swipe)="addOption(foodDetails)" *ngFor="let foodDetails of orderProvider.orderTable.listOrder">\n      <ion-avatar item-start (click)="minusFood(foodDetails)">\n        <img src=\'{{foodDetails.food.image ? foodDetails.food.image : "assets/icon/noimage.png"}}\'>\n      </ion-avatar>\n      <h2>{{foodDetails.food.name}}</h2>\n      <p *ngIf="foodDetails.option.length == 0">Bình thường</p>\n      <p *ngFor="let foodOption of foodDetails.option">{{foodOption}}</p>\n      <button ion-button clear color="maincolor" item-end (click)="addFood(foodDetails)">{{"SL " + foodDetails.sl}}</button>\n    </ion-item>\n    <ion-row no-padding>\n      <ion-col col-6 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="closeOrder(orderProvider.orderTable)">\n          Xóa\n        </button>\n      </ion-col>\n      <ion-col col-6 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="confirmOrder(orderProvider.orderTable)">\n          Hoàn tất\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic\orderFood\src\pages\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_option_option__["a" /* OptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map