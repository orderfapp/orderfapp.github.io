webpackJsonp([9],{

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cashier/cashier.module": [
		508,
		8
	],
	"../pages/chief/chief.module": [
		512,
		7
	],
	"../pages/login/login.module": [
		509,
		6
	],
	"../pages/order-details/order-details.module": [
		510,
		5
	],
	"../pages/order/order.module": [
		511,
		4
	],
	"../pages/payment/payment.module": [
		516,
		3
	],
	"../pages/setup-type/setup-type.module": [
		513,
		2
	],
	"../pages/setup/setup.module": [
		514,
		0
	],
	"../pages/statistics/statistics.module": [
		515,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CFood */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COrderDetails; });
/* unused harmony export CTypeFood */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OrderFoodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CFood = /** @class */ (function () {
    function CFood() {
        this.id = "";
        this.name = "";
        this.status = true;
        this.type = "";
        this.value = 0;
        this.image = "";
    }
    CFood.prototype.copy = function (data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.type = data.type;
        this.value = data.value;
        this.image = data.image;
    };
    CFood.prototype.reset = function () {
        this.id = "";
        this.name = "";
        this.status = true;
        this.type = "";
        this.value = 0;
        this.image = "";
    };
    return CFood;
}());

var COrder = /** @class */ (function () {
    function COrder() {
        this.id = "";
        this.table = "";
        this.status = false;
        this.mode = "";
        this.name = "";
        this.payment = false;
        this.createDate = new Date().getTime();
        this.listOrder = [];
    }
    COrder.prototype.copy = function (data) {
        this.id = data.id;
        this.table = data.table;
        this.status = data.status;
        this.mode = data.mode;
        this.name = data.name;
        this.payment = data.payment;
    };
    COrder.prototype.total = function () {
        var count = 0;
        for (var index = 0; index < this.listOrder.length; index++) {
            var element = this.listOrder[index];
            count += parseInt(element.food.value + "");
        }
        return count;
    };
    return COrder;
}());

var COrderDetails = /** @class */ (function () {
    function COrderDetails() {
        this.id = "";
        this.key = "";
        this.sl = 0;
        this.status = false;
        this.option = [];
        this.food = new CFood();
    }
    COrderDetails.prototype.copy = function (data) {
        this.id = data.id;
        this.key = data.key;
        this.sl = data.sl;
        this.status = data.status;
    };
    return COrderDetails;
}());

var CTypeFood = /** @class */ (function () {
    function CTypeFood() {
        this.type = "";
        this.isExpand = false;
        this.listData = [];
    }
    return CTypeFood;
}());

var OrderFoodProvider = /** @class */ (function () {
    function OrderFoodProvider(db) {
        var _this = this;
        this.db = db;
        this.orderTable = new COrder();
        this.listDataFood = [];
        this.listFoodObject = {};
        this.listSLFoodObject = {};
        this.listTypeFood = [];
        this.typePath = "type/";
        this.foodPath = "food/";
        this.foodIDPath = "id/";
        this.foodImagePath = "image/";
        this.foodNamePath = "name/";
        this.foodStatusPath = "status/";
        this.foodTypePath = "type/";
        this.foodValuePath = "value/";
        this.orderPath = "order/";
        this.orderPathID = "id/";
        this.orderPathSL = "sl/";
        this.orderPathSLGiao = "slgiao/";
        this.orderPathStatus = "status/";
        this.orderPathOption = "option/";
        this.orderPathKey = "key/";
        this.ordertablePath = "table/";
        this.orderidPath = "id/";
        this.ordernamePath = "name/";
        this.ordermodePath = "mode/";
        this.orderstatusPath = "status/";
        this.orderpaymentPath = "payment/";
        this.ordercreateDatePath = "createdate/";
        this.stringModeTaiBan = "Tại bàn";
        this.stringModeMuaVe = "Mua về";
        this.limitShow = 6;
        var data = this.getAllType().valueChanges().subscribe(function (dataInfo) {
            _this.listTypeFood = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    _this.listTypeFood.push(dataInfo[index]);
                }
            }
        });
        var dataFood = this.getAllFood().valueChanges().subscribe(function (dataInfo) {
            _this.listDataFood = [];
            _this.listFoodObject = {};
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    var food = new CFood();
                    food.copy(dataInfo[index]);
                    _this.listDataFood.push(food);
                    _this.listFoodObject[food.id] = food;
                }
            }
            else {
                _this.listDataFood = [];
                _this.listFoodObject = {};
            }
        });
    }
    OrderFoodProvider.prototype.getAllFood = function () {
        var _this = this;
        return this.db.list(this.foodPath, function (ref) { return ref.orderByChild(_this.foodTypePath); });
    };
    OrderFoodProvider.prototype.getAllOrder = function () {
        return this.db.list(this.orderPath, function (ref) { return ref.orderByKey(); });
    };
    OrderFoodProvider.prototype.getAllType = function () {
        return this.db.list(this.typePath, function (ref) { return ref.orderByKey(); });
    };
    OrderFoodProvider.prototype.getAllFoodByTable = function (tableID) {
        var _this = this;
        return this.db.list(this.orderPath + tableID, function (ref) { return ref.orderByChild(_this.ordertablePath); });
    };
    OrderFoodProvider.prototype.addOrder = function (order) {
        var data = {};
        var date = new Date().getTime();
        data[this.orderPath + date + "/" + this.ordertablePath] = order.table;
        data[this.orderPath + date + "/" + this.ordermodePath] = order.mode;
        data[this.orderPath + date + "/" + this.ordernamePath] = order.name;
        data[this.orderPath + date + "/" + this.orderidPath] = date;
        data[this.orderPath + date + "/" + this.orderstatusPath] = order.status;
        data[this.orderPath + date + "/" + this.orderpaymentPath] = order.payment;
        data[this.orderPath + date + "/" + this.ordercreateDatePath] = date;
        for (var index = 0; index < order.listOrder.length; index++) {
            data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathID] = order.listOrder[index].id;
            data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathSL] = order.listOrder[index].sl;
            data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathStatus] = order.listOrder[index].status;
            data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathKey] = "" + order.listOrder[index].id + date + index;
            for (var indexOption = 0; indexOption < order.listOrder[index].option.length; indexOption++) {
                var element = order.listOrder[index].option[indexOption];
                data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + "/" + this.orderPathOption + element] = element;
            }
        }
        var addData = this.db.object("/");
        addData.update(data);
        this.orderTable = new COrder();
        this.listSLFoodObject = {};
    };
    OrderFoodProvider.prototype.updateStatus = function (order) {
        var data = {};
        data[this.orderPath + order.id + "/" + this.orderstatusPath] = order.status;
        for (var index = 0; index < order.listOrder.length; index++) {
            data[this.orderPath + order.id + "/" + this.orderPath + order.listOrder[index].key + "/" + this.orderPathStatus] = order.listOrder[index].status;
        }
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderFoodProvider.prototype.clearOrder = function (order) {
        var data = {};
        data[this.orderPath + order.table] = null;
        var addData = this.db.object("/");
        addData.update(data);
        this.orderTable = new COrder();
        this.listSLFoodObject = {};
    };
    OrderFoodProvider.prototype.addType = function (type) {
        var data = {};
        data[this.typePath + type] = type;
        var addData = this.db.object("/");
        addData.update(data);
        type = "";
    };
    OrderFoodProvider.prototype.editType = function (type) {
        var data = {};
        data[this.typePath + type] = type;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderFoodProvider.prototype.deleteType = function (type) {
        var data = {};
        data[this.typePath + type] = null;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderFoodProvider.prototype.addFood = function (food) {
        var data = {};
        var date = food.name + new Date().getTime();
        data[this.foodPath + date + "/" + this.foodIDPath] = date;
        data[this.foodPath + date + "/" + this.foodImagePath] = food.image;
        data[this.foodPath + date + "/" + this.foodNamePath] = food.name;
        data[this.foodPath + date + "/" + this.foodStatusPath] = food.status;
        data[this.foodPath + date + "/" + this.foodTypePath] = food.type;
        data[this.foodPath + date + "/" + this.foodValuePath] = food.value;
        var addData = this.db.object("/");
        addData.update(data);
        food.reset();
    };
    OrderFoodProvider.prototype.deleteFood = function (food) {
        var data = {};
        if (food.id) {
            data[this.foodPath + food.id] = null;
            var addData_1 = this.db.object("/");
            addData_1.update(data);
        }
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderFoodProvider.prototype.editFood = function (food) {
        var data = {};
        if (food.id) {
            data[this.foodPath + food.id + "/" + this.foodImagePath] = food.image;
            data[this.foodPath + food.id + "/" + this.foodNamePath] = food.name;
            data[this.foodPath + food.id + "/" + this.foodStatusPath] = food.status;
            data[this.foodPath + food.id + "/" + this.foodTypePath] = food.type;
            data[this.foodPath + food.id + "/" + this.foodValuePath] = food.value;
            var addData = this.db.object("/");
            addData.update(data);
        }
    };
    OrderFoodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], OrderFoodProvider);
    return OrderFoodProvider;
}());

//# sourceMappingURL=order-food.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CFood; });
/* unused harmony export COrder */
/* unused harmony export COrderDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CTypeFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CFood = /** @class */ (function () {
    function CFood() {
        this.id = "";
        this.name = "";
        this.status = true;
        this.type = "";
        this.value = 0;
        this.image = "";
    }
    CFood.prototype.copy = function (data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.type = data.type;
        this.value = data.value;
        this.image = data.image;
    };
    CFood.prototype.reset = function () {
        this.id = "";
        this.name = "";
        this.status = true;
        this.type = "";
        this.value = 0;
        this.image = "";
    };
    return CFood;
}());

var COrder = /** @class */ (function () {
    function COrder() {
        this.table = "";
        this.isExpand = false;
        this.listOrder = [];
    }
    return COrder;
}());

var COrderDetails = /** @class */ (function () {
    function COrderDetails() {
        this.id = "";
        this.sl = 0;
        this.slgiao = 0;
        this.status = "";
        this.food = new CFood();
    }
    COrderDetails.prototype.copy = function (data) {
        this.id = data.id;
        this.sl = data.sl;
        this.slgiao = data.slgiao;
        this.status = data.status;
    };
    return COrderDetails;
}());

var CTypeFood = /** @class */ (function () {
    function CTypeFood() {
        this.type = "";
        this.isExpand = false;
        this.listData = [];
    }
    return CTypeFood;
}());

var OrderProvider = /** @class */ (function () {
    function OrderProvider(db) {
        var _this = this;
        this.db = db;
        this.typePath = "type/";
        this.foodPath = "food/";
        this.foodIDPath = "id/";
        this.foodImagePath = "image/";
        this.foodNamePath = "name/";
        this.foodStatusPath = "status/";
        this.foodTypePath = "type/";
        this.foodValuePath = "value/";
        this.orderPath = "order/";
        this.orderPathID = "id/";
        this.orderPathSL = "sl/";
        this.orderPathSLGiao = "slgiao/";
        this.orderPathStatus = "status/";
        this.ordertablePath = "table/";
        this.listFood = {};
        this.listTypeFood = [];
        var data = this.getAllType().valueChanges().subscribe(function (dataInfo) {
            _this.listTypeFood = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    _this.listTypeFood.push(dataInfo[index]);
                }
            }
        });
    }
    OrderProvider.prototype.getAllFood = function () {
        var _this = this;
        return this.db.list(this.foodPath, function (ref) { return ref.orderByChild(_this.foodTypePath); });
    };
    OrderProvider.prototype.getAllOrder = function () {
        return this.db.list(this.orderPath, function (ref) { return ref.orderByKey(); });
    };
    OrderProvider.prototype.getAllType = function () {
        return this.db.list(this.typePath, function (ref) { return ref.orderByKey(); });
    };
    OrderProvider.prototype.getAllFoodByTable = function (tableID) {
        var _this = this;
        return this.db.list(this.orderPath + tableID, function (ref) { return ref.orderByChild(_this.ordertablePath); });
    };
    OrderProvider.prototype.addOrder = function (order) {
        var data = {};
        data[this.orderPath + order.table + "/" + this.ordertablePath] = order.table;
        for (var index = 0; index < order.listOrder.length; index++) {
            data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathID] = order.listOrder[index].id;
            data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathSL] = order.listOrder[index].sl;
            data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathSLGiao] = order.listOrder[index].slgiao;
            data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathStatus] = order.listOrder[index].status;
        }
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderProvider.prototype.clearOrder = function (order) {
        var data = {};
        data[this.orderPath + order.table] = null;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderProvider.prototype.addType = function (type) {
        var data = {};
        data[this.typePath + type] = type;
        var addData = this.db.object("/");
        addData.update(data);
        type = "";
    };
    OrderProvider.prototype.editType = function (type) {
        var data = {};
        data[this.typePath + type] = type;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderProvider.prototype.deleteType = function (type) {
        var data = {};
        data[this.typePath + type] = null;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderProvider.prototype.addFood = function (food) {
        var data = {};
        var date = new Date().getTime();
        data[this.foodPath + date + "/" + this.foodIDPath] = date;
        data[this.foodPath + date + "/" + this.foodImagePath] = food.image;
        data[this.foodPath + date + "/" + this.foodNamePath] = food.name;
        data[this.foodPath + date + "/" + this.foodStatusPath] = food.status;
        data[this.foodPath + date + "/" + this.foodTypePath] = food.type;
        data[this.foodPath + date + "/" + this.foodValuePath] = food.value;
        var addData = this.db.object("/");
        addData.update(data);
        food.reset();
    };
    OrderProvider.prototype.deleteFood = function (food) {
        var data = {};
        if (food.id) {
            data[this.foodPath + food.id] = null;
            var addData_1 = this.db.object("/");
            addData_1.update(data);
        }
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderProvider.prototype.editFood = function (food) {
        var data = {};
        if (food.id) {
            data[this.foodPath + food.id + "/" + this.foodImagePath] = food.image;
            data[this.foodPath + food.id + "/" + this.foodNamePath] = food.name;
            data[this.foodPath + food.id + "/" + this.foodStatusPath] = food.status;
            data[this.foodPath + food.id + "/" + this.foodTypePath] = food.type;
            data[this.foodPath + food.id + "/" + this.foodValuePath] = food.value;
            var addData = this.db.object("/");
            addData.update(data);
        }
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], OrderProvider);
    return OrderProvider;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authenticate_authenticate__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_order_order__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_order_food_order_food__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_currency_mask__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_currency_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyCT4ewSSOsgL-T7qa3z9X4sBsMta5nFGdY",
    authDomain: "orderapp-5f063.firebaseapp.com",
    databaseURL: "https://orderapp-5f063.firebaseio.com",
    projectId: "orderapp-5f063",
    storageBucket: "orderapp-5f063.appspot.com",
    messagingSenderId: "232522750174"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cashier/cashier.module#CashierPageModule', name: 'CashierPage', segment: 'cashier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chief/chief.module#ChiefPageModule', name: 'ChiefPage', segment: 'chief', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup-type/setup-type.module#SetupTypePageModule', name: 'SetupTypePage', segment: 'setup-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup/setup.module#SetupPageModule', name: 'SetupPage', segment: 'setup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_11_ng2_currency_mask__["CurrencyMaskModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_authenticate_authenticate__["a" /* AuthenticateProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_order_order__["c" /* OrderProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_order_food_order_food__["c" /* OrderFoodProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\ionic\orderFood\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\orderFood\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticateProvider = /** @class */ (function () {
    function AuthenticateProvider(http) {
        this.http = http;
    }
    AuthenticateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());

//# sourceMappingURL=authenticate.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map