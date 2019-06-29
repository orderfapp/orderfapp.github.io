webpackJsonp([6],{

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(524);
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

/***/ 524:
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
    //
    function OrderPage(navCtrl, navParams, orderProvider, popoverCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.inputText = [];
        this.currentTable = "";
        //
        this.expression = "";
        this.backValue = "";
        this.itemsFood = this.orderProvider.listDataFood;
    }
    OrderPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            val = this.xoaDau(val);
            this.itemsFood = this.orderProvider.listDataFood.filter(function (item) {
                return (_this.xoaDau(item.name).toLowerCase().includes(val.toLowerCase()) == true);
            });
        }
        else {
            this.itemsFood = this.orderProvider.listDataFood;
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
    ///////////start
    OrderPage.prototype.add = function (value) {
        var check = this.checkExpression(value);
        if (check) {
            this.backValue = value;
            console.log('CalculatorScientificPage::add | value=', value);
            var noexpression = (this.expression === '' || this.expression === undefined) ? true : false;
            if (this.expression === '' || this.expression === undefined) {
                this.expression = String(value);
            }
            else {
                console.log('CalculatorScientificPage::add | add value ', value);
                // check 2 number
                var num1 = this.expression.trim();
                var num2 = value.trim();
                var test1 = /^\d+$/.test(num1);
                var test2 = /^\d+$/.test(num2);
                if (test1 === true && test2 === true) {
                    this.expression = this.expression.concat(value);
                }
                else {
                    this.expression = this.expression.concat(" " + value);
                }
            }
            console.log('CalculatorScientificPage::add | expression=', this.expression);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'WRONG',
                subTitle: 'TRY AGAIN',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    OrderPage.prototype.clean = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '') {
                data.splice(i, 1);
            }
        }
        return data;
    };
    OrderPage.prototype.removeItemScreenButton = function (string) {
        var index = this.inputText.indexOf(string);
        if (index > -1) {
            this.inputText.splice(index, 1);
        }
    };
    OrderPage.prototype.clear = function () {
        this.expression = '';
        console.log('CalculatorScientificPage::clear | ', this.expression);
    };
    OrderPage.prototype.addToArray = function () {
        //
        if (this.expression.trim() != '') {
            this.inputText.push(this.expression);
            this.expression = '';
        }
        //
    };
    OrderPage.prototype.undo = function () {
        var string = this.expression;
        var arr = string.split(" ");
        arr.pop();
        var value = "";
        for (var i = 0; i < arr.length; i += 1) {
            value = value + " " + arr[i];
        }
        this.expression = value;
    };
    OrderPage.prototype.checkExpression = function (value) {
        var string = this.expression;
        var arr = string.split(" ");
        var bol = false;
        var a = arr[0];
        var test = /^\d+$/.test(arr[0]);
        if (string === "") {
            var test_1 = /^\d+$/.test(value);
            if (test_1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (arr.length >= 2) {
                return true;
            }
            var thisExpressions = [/^\d+$/, /Nhỏ/, /Lớn/, /ĐầyĐủ/, /ĐặcBiệt/, /Cua/, /Tôm/, /Giò/, /Thịt/, /Nạc/,
                /Gân/, /Móng/, /Bánh/, /Huyết/, /Nấm/];
            var bol_1 = this.matchInArray(value, thisExpressions);
            if (bol_1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    OrderPage.prototype.matchInArray = function (string, expressions) {
        var len = expressions.length, i = 0;
        for (; i < len; i++) {
            if (string.match(expressions[i])) {
                return true;
            }
        }
        return false;
    };
    ;
    OrderPage.prototype.addOrder = function (data, ev) {
        //
        this.addItemOrder(this.inputText);
        //
        if (!data || this.orderProvider.orderTable.listOrder.length == 0) {
            return;
        }
        // begin mua ve
        if (data == this.orderProvider.stringModeMuaVe) {
            // const prompt = this.alertCtrl.create({
            //   title: 'Tên người mua',
            //   // inputs: [
            //   //   {
            //   //     name: 'tableNumber',
            //   //     placeholder: 'Nhập tên'
            //   //   },
            //   // ],
            //   buttons: [
            //     {
            //       text: 'Đóng',
            //       handler: data => {
            //       }
            //     },
            //     {
            //       text: 'OK',
            //       handler: data => {
            //         //
            //         let str = '';
            //         this.inputText.forEach(element => {
            //           str = str + element + '@';
            //           //
            //         });
            //         // this.currentTable = data.tableNumber.toLowerCase();
            //         let popover = this.popoverCtrl.create("OrderDetailsPage", {
            //           mode: this.orderProvider.stringModeMuaVe,
            //           currentTable: str
            //         }, {
            //             cssClass: 'custom-popover'
            //           });
            //         popover.present({
            //           ev: ev
            //         });
            //       }
            //     }
            //   ],
            //   cssClass: 'customCSS'
            // });
            // prompt.present();
            var str_1 = '';
            this.inputText.forEach(function (element) {
                str_1 = str_1 + element + '@';
                //
            });
            // this.currentTable = data.tableNumber.toLowerCase();
            var popover = this.popoverCtrl.create("OrderDetailsPage", {
                mode: this.orderProvider.stringModeMuaVe,
                currentTable: str_1
            }, {
                cssClass: 'custom-popover'
            });
            popover.present({
                ev: ev
            });
            // end mua ve
        }
        else if (data == this.orderProvider.stringModeTaiBan) {
            //   const prompt = this.alertCtrl.create({
            //     title: 'Chọn bàn',
            //     inputs: [
            //       {
            //         name: 'tableNumber',
            //         placeholder: 'Nhập số bàn',
            //         value: '123'
            //       },
            //     ],
            //     buttons: [
            //       {
            //         text: 'Đóng',
            //         handler: data => {
            //         }
            //       },
            //       {
            //         text: 'OK',
            //         handler: data => {
            //           // if (data.tableNumber) {
            //           //
            //           let str = '';
            //           this.inputText.forEach(element => {
            //             str += element + '@';
            //             //
            //           });
            //           str += data.tableNumber;
            //           // this.currentTable = data.tableNumber.toLowerCase();
            //           // this.currentTable = data.tableNumber;
            //           let popover = this.popoverCtrl.create("OrderDetailsPage", {
            //             mode: this.orderProvider.stringModeTaiBan,
            //             // currentTable: this.currentTable
            //             currentTable: str
            //           }, {
            //               cssClass: 'custom-popover'
            //             });
            //           popover.present({
            //             ev: ev
            //           });
            //           // }
            //           // else {
            //           //   return false
            //           // }
            //         }
            //       }
            //     ],
            //     cssClass: 'customCSS'
            //   });
            //   prompt.present();
            // }
            var str_2 = '';
            this.inputText.forEach(function (element) {
                str_2 += element + '@';
            });
            var popover = this.popoverCtrl.create("OrderDetailsPage", {
                mode: this.orderProvider.stringModeTaiBan,
                currentTable: str_2
            }, {
                cssClass: 'custom-popover'
            });
            popover.present({
                ev: ev
            });
        }
    };
    OrderPage.prototype.addItemOrder = function (input) {
        var _this = this;
        this.itemsFood = this.orderProvider.listDataFood;
        var _loop_1 = function (index) {
            var stringSplit = input[index].split(' ');
            // add 1
            var soLuongMonChinh = stringSplit[0];
            var name_1 = '';
            if (input[index].includes('Nhỏ')) {
                if (input[index].includes('Giò')) {
                    name_1 = 'Tô Lớn';
                }
                else {
                    name_1 = 'Tô Nhỏ';
                }
            }
            else if (input[index].includes('Lớn')) {
                if (input[index].includes('Giò')) {
                    name_1 = 'Tô Đầy Đủ';
                }
                else {
                    name_1 = 'Tô Lớn';
                }
            }
            else if (input[index].includes('ĐầyĐủ')) {
                name_1 = 'Tô Đầy Đủ';
            }
            else if (input[index].includes('ĐặcBiệt')) {
                name_1 = 'Tô Đặt Biệt';
            }
            // begin add to order 1
            this_1.itemsFood.forEach(function (element) {
                if (element.name === name_1) {
                    var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* COrderDetails */]();
                    orderDetail.id = element.id;
                    orderDetail.sl = 1;
                    orderDetail.status = false;
                    orderDetail.food.copy(element);
                    for (var index_1 = 0; index_1 < parseInt(soLuongMonChinh); index_1++) {
                        _this.orderProvider.orderTable.listOrder.push(orderDetail);
                    }
                }
            });
            // end add to order 1
            // add 2
            var arrayIndex = getIndexOfString(stringSplit, 'Nhiều');
            var _loop_2 = function (index_2) {
                var indexOfItem = arrayIndex[index_2];
                if (indexOfItem > 1) {
                    var soLuongMonThem_1 = stringSplit[indexOfItem - 1];
                    if (!this_1.matchInArray(soLuongMonThem_1, [/^\d+$/])) {
                        soLuongMonThem_1 = soLuongMonChinh;
                    }
                    //test 1
                    var ex = [/Bánh/, /Huyết/, /Nấm/];
                    var count_1 = 0;
                    if (this_1.matchInArray(stringSplit[indexOfItem + 1], ex)) {
                        count_1++;
                        if ((indexOfItem + 2 <= stringSplit.length - 1) && this_1.matchInArray(stringSplit[indexOfItem + 2], ex)) {
                            count_1++;
                            if ((indexOfItem + 3 <= stringSplit.length - 1) && this_1.matchInArray(stringSplit[indexOfItem + 3], ex)) {
                                count_1++;
                            }
                        }
                    }
                    //end test 1
                    if (count_1 > 0) {
                        // begin add to order 2
                        this_1.itemsFood.forEach(function (element) {
                            if (element.name === 'Món 5k') {
                                var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__providers_order_food_order_food__["c" /* COrderDetails */]();
                                orderDetail.id = element.id;
                                orderDetail.sl = 1;
                                orderDetail.status = false;
                                orderDetail.food.copy(element);
                                for (var index_3 = 0; index_3 < parseInt(soLuongMonThem_1) * count_1; index_3++) {
                                    _this.orderProvider.orderTable.listOrder.push(orderDetail);
                                }
                            }
                        });
                    }
                }
                // end add to order 2
            };
            for (var index_2 = 0; index_2 < arrayIndex.length; index_2++) {
                _loop_2(index_2);
            }
        };
        var this_1 = this;
        // begin for input
        for (var index = 0; index < input.length; index++) {
            _loop_1(index);
        }
        // end for input
        function getIndexOfString(arrayString, value) {
            var arrayIndex = [];
            for (var index = 0; index < arrayString.length; index++) {
                if (value === arrayString[index]) {
                    arrayIndex.push(index);
                }
            }
            return arrayIndex;
        }
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order',template:/*ion-inline-start:"c:\Users\User\Downloads\orderapp\app\src\pages\order\order.html"*/'<ion-header>\n  <ion-navbar color=\'maincolor\'>\n    <ion-row>\n      <ion-col col-10>\n        <ion-textarea class="calculator-screen" rows="3" cols="10" value="" disabled [(ngModel)]="expression">\n        </ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button style="width: 2%;" ion-button item-end>{{inputText.length}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n  <ion-list class="listItemScreen">\n    <ion-item *ngFor="let string of inputText; let num = index">\n      <ion-textarea class="show-screen" disabled value="{{string}}"></ion-textarea>\n      <button class="button-screen" ion-button item-end (click)="removeItemScreenButton(string)">{{num+1}}</button>\n    </ion-item>\n  </ion-list>\n</ion-header>\n<ion-content overflow-scroll="true">\n  <div class="calculator">\n\n    <div class="calculator-keys">\n      <!-- so thu tu 1-5-->\n      <button type="button" class="operator-text" (click)="add(\'1\')" value="1">1</button>\n      <button type="button" class="operator-text" (click)="add(\'2\')" value="2">2</button>\n      <button type="button" class="operator-text" (click)="add(\'3\')" value="3">3</button>\n      <button type="button" class="operator-text" (click)="add(\'4\')" value="4">4</button>\n      <button type="button" class="operator-text" (click)="add(\'5\')" value="5">5</button>\n      <!-- so thu tu 6-0-->\n      <button type="button" class="operator-text" (click)="add(\'6\')" value="6">6</button>\n      <button type="button" class="operator-text" (click)="add(\'7\')" value="7">7</button>\n      <button type="button" class="operator-text" (click)="add(\'8\')" value="8">8</button>\n      <button type="button" class="operator-text" (click)="add(\'9\')" value="9">9</button>\n      <button type="button" class="operator-text" (click)="add(\'0\')" value="0">0</button>\n\n      <!-- Tô -->\n      <button type="button" class="operator-text" (click)="add(\'Nhỏ\')" value="Nhỏ">Nhỏ</button>\n      <button type="button" class="operator-text" (click)="add(\'Lớn\')" value="Lớn">Lớn</button>\n      <button type="button" class="operator-text" (click)="add(\'ĐầyĐủ\')" value="ĐầyĐủ">ĐầyĐủ</button>\n      <button type="button" class="operator-text" (click)="add(\'ĐặcBiệt\')" value="ĐặcBiệt">ĐặcBiệt</button>\n      <button type="button" class="equal-sign" (click)="add(\'ConCua\')" value="ConCua">ConCua</button>\n\n      <!-- Loại -->\n      <button type="button" class="operator-text" (click)="add(\'Cua\')" value="Cua">Cua</button>\n      <button type="button" class="operator-text" (click)="add(\'Tôm\')" value="Tôm">Tôm</button>\n      <button type="button" class="operator-text" (click)="add(\'Giò\')" value="Giò">Giò</button>\n      <button type="button" class="operator-text" (click)="add(\'Thịt\')" value="Thịt">Thịt</button>\n\n      <!--  -->\n      <button type="button" class="operator-text" (click)="add(\'Nạc\')" value="Nạc">Nạc</button>\n      <button type="button" class="operator-text" (click)="add(\'Gân\')" value="Gân">Gân</button>\n      <button type="button" class="operator-text" (click)="add(\'Móng\')" value="Móng">Móng</button>\n      <div></div>\n      <div></div>\n\n      <!--  -->\n      <button type="button" class="operator-text" (click)="add(\'Ít\')" value="Ít">Ít</button>\n      <button type="button" class="operator-text" (click)="add(\'Nhiều\')" value="Nhiều">Nhiều</button>\n      <button type="button" class="operator-text" (click)="add(\'Không\')" value="Không">Không</button>\n      <button type="button" class="operator-text" (click)="add(\'Hành\')" value="Hành">Hành</button>\n      <button type="button" class="all-clear" (click)="clear()">Bỏ</button>\n\n      <!--  -->\n      <button type="button" class="operator-text" (click)="add(\'Bánh\')" value="Nh Bánh">Bánh</button>\n      <button type="button" class="operator-text" (click)="add(\'Huyết\')" value="Huyết">Huyết</button>\n      <button type="button" class="operator-text" (click)="add(\'Nấm\')" value="Nấm">Nấm</button>\n      <button type="button" class="operator-text" (click)="add(\'Tiêu\')" value="Tiêu">Tiêu</button>\n      <button type="button" class="undo" (click)="undo()">Xóa</button>\n      \n       <!--  -->\n       <button type="button" class="operator-text" (click)="add(\'Nước Chung\')" value="Hành">Nước Riêng</button>\n       <button type="button" class="operator-text" (click)="add(\'Nước Nguội\')" value="Tiêu">Nước Nguội</button>\n       <button type="button" class="operator-text" (click)="add(\'Nước Nóng\')" value="Nh Bánh">Nước Nóng</button>\n       <button type="button" class="operator-text" (click)="add(\'Bánh Trắng\')" value="Huyết">Bánh Trắng</button>\n       <button style="background-color: blue" type="button" class="operator-text" (click)="addToArray()"\n       value="\\n">Tiếp</button>\n\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row no-padding>\n    <ion-col col-6 no-padding text-center>\n      <button class="fontButton" ion-button color="maincolor" block outline (click)="addOrder(\'Mua về\', $event)">Mua\n        về</button>\n    </ion-col>\n    <ion-col col-6 no-padding text-center>\n      <button class="fontButton" ion-button color="maincolor" block outline (click)="addOrder(\'Tại bàn\', $event)">Tại\n        bàn</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"c:\Users\User\Downloads\orderapp\app\src\pages\order\order.html"*/,
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