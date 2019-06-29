webpackJsonp([7],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(514);
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_option_option__ = __webpack_require__(290);
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
        this.tableNumber = "";
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
        // let alert = this.alertCtrl.create();
        // alert.setTitle('Chọn thêm?');
        // for (let index = 0; index < this.optionProvider.listOption.length; index++) {
        //   const element = this.optionProvider.listOption[index];
        //   alert.addInput({
        //     type: 'checkbox',
        //     label: element,
        //     value: element
        //   });
        // }
        // alert.addButton('Hủy');
        // alert.addButton({
        //   text: 'Chọn',
        //   handler: data => {
        //     food.option = data;
        //   }
        // });
        // alert.present();
    };
    OrderDetailsPage.prototype.deleteFood = function (food) {
        // const prompt = this.alertCtrl.create({
        //   title: 'Xóa món',
        //   buttons: [
        //     {
        //       text: 'Đóng',
        //       handler: data => {
        //       }
        //     },
        //     {
        //       text: 'Xóa',
        //       handler: data => {
        //         let indexFood = -1;
        //         for (let index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
        //           if (this.orderProvider.orderTable.listOrder[index].id == food.id) {
        //             indexFood = index;
        //             break;
        //           }
        //         }
        //         if (indexFood != -1) {
        //           this.orderProvider.orderTable.listOrder.splice(indexFood, 1);
        //           if (this.orderProvider.listSLFoodObject[food.id] == 1) {
        //             this.orderProvider.listSLFoodObject[food.id] = null;
        //           }
        //           else if (indexFood != -1 && this.orderProvider.listSLFoodObject[food.id] > 1) {
        //             this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] - 1;
        //           }
        //         }
        //       }
        //     }
        //   ]
        // });
        // prompt.present();
    };
    OrderDetailsPage.prototype.addFood = function (food) {
        // let orderDetail = new COrderDetails();
        // orderDetail.id = food.id;
        // orderDetail.sl = 1;
        // orderDetail.status = false;
        // orderDetail.food.copy(food.food);
        // this.orderProvider.orderTable.listOrder.push(orderDetail);
        // this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort((a, b) => {
        //   if (a.id < b.id) return -1;
        //   if (a.id > b.id) return 1;
        //   return 0;
        // });
        // this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] + 1;
    };
    OrderDetailsPage.prototype.minusFood = function (food) {
        // let indexFood = -1;
        // for (let index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
        //   if (this.orderProvider.orderTable.listOrder[index].id == food.id) {
        //     indexFood = index;
        //     break;
        //   }
        // }
        // if (indexFood > -1) {
        //   this.orderProvider.orderTable.listOrder.splice(indexFood, 1);
        //   if (this.orderProvider.listSLFoodObject[food.id] == 1) {
        //     this.orderProvider.listSLFoodObject[food.id] = null;
        //   }
        //   else if (indexFood != -1 && this.orderProvider.listSLFoodObject[food.id] > 1) {
        //     this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] - 1;
        //   }
        // }
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
            if (this.mode == this.orderProvider.stringModeMuaVe) {
                // order.table = this.currentTable.toLowerCase() + " " + this.mode;
                order.table = this.currentTable + " " + this.mode;
            }
            else {
                // order.table = this.currentTable.toLowerCase();
                order.table = this.currentTable;
            }
        }
        else {
            order.table = this.mode;
        }
        order.mode = this.mode;
        this.orderProvider.addOrder(order);
        this.currentTable = "";
        this.viewCtrl.dismiss();
    };
    OrderDetailsPage.prototype.add = function (value) {
        this.currentTable += value;
        var arrSplit = this.currentTable.split('@');
        var lastIndex = arrSplit[arrSplit.length - 1];
        if (lastIndex !== "") {
            this.tableNumber = lastIndex;
        }
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-details',template:/*ion-inline-start:"c:\Users\User\Downloads\orderapp\app\src\pages\order-details\order-details.html"*/'<ion-content class="scroll">\n  <ion-list>\n    <ion-row *ngIf="mode == \'Mua về\'" no-padding class="headerRow" text-center>\n      <button ion-button class="buttonHeader" color="light" full clear>{{mode + "   " + tableNumber}}</button>\n    </ion-row>\n    <ion-row *ngIf="mode == \'Tại bàn\'" no-padding class="headerRow" text-center>\n      <button ion-button class="buttonHeader" color="light" full clear>{{mode + "   " + tableNumber}}</button>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col col-6 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="closeOrder(orderProvider.orderTable)">\n          Xóa\n        </button>\n      </ion-col>\n      <ion-col col-6 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="confirmOrder(orderProvider.orderTable)">\n          Hoàn tất\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mode == \'Mua về\'" no-padding>\n      <ion-col col-5 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Cửa Trước\')" value="Cửa Trước">Cửa Trước</button>\n      </ion-col>\n      <ion-col col-5 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Cửa Sau\')" value="Cửa Sau">Cửa Sau</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mode == \'Tại bàn\'" no-padding>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'1\')" value="1">1</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'2\')" value="2">2</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'3\')" value="3">3</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'4\')" value="4">4</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'5\')" value="5">5</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mode == \'Tại bàn\'" no-padding>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'6\')" value="6">6</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'7\')" value="7">7</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'8\')" value="8">8</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'9\')" value="9">9</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'10\')" value="10">10</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mode == \'Tại bàn\'" no-padding>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Trái\')" value="Trái">Trái</button>\n      </ion-col>\n      <ion-col col-2 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Phải\')" value="Phải">Phải</button>\n      </ion-col>\n      <ion-col col-3 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Trong\')" value="Trong">Trong</button>\n      </ion-col>\n      <ion-col col-3 padding text-center>\n        <button ion-button block color="mainlightcolor" (click)="add(\'Ngoài\')" value="Ngoài">Ngoài</button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-item (press)="deleteFood(foodDetails)" (swipe)="addOption(foodDetails)" *ngFor="let foodDetails of orderProvider.orderTable.listOrder">\n      <ion-avatar item-start (click)="minusFood(foodDetails)">\n        <img src=\'{{foodDetails.food.image ? foodDetails.food.image : "assets/icon/noimage.png"}}\'>\n      </ion-avatar>\n      <h2>{{foodDetails.food.name}}</h2>\n      <p *ngIf="foodDetails.option.length == 0">Bình thường</p>\n      <p *ngFor="let foodOption of foodDetails.option">{{foodOption}}</p>\n      <button ion-button clear color="maincolor" item-end (click)="addFood(foodDetails)">{{"SL " + foodDetails.sl}}</button>\n    </ion-item> -->\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"c:\Users\User\Downloads\orderapp\app\src\pages\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["e" /* OrderFoodProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_option_option__["a" /* OptionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_option_option__["a" /* OptionProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], OrderDetailsPage);
    return OrderDetailsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=order-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map