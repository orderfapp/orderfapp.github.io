webpackJsonp([11],{

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cashier/cashier.module": [
		501,
		10
	],
	"../pages/chief/chief.module": [
		502,
		9
	],
	"../pages/login/login.module": [
		503,
		8
	],
	"../pages/order-details/order-details.module": [
		504,
		7
	],
	"../pages/order/order.module": [
		511,
		0
	],
	"../pages/payment/payment.module": [
		506,
		6
	],
	"../pages/setting-option/setting-option.module": [
		505,
		5
	],
	"../pages/setting-user/setting-user.module": [
		507,
		4
	],
	"../pages/setup-type/setup-type.module": [
		508,
		3
	],
	"../pages/setup/setup.module": [
		509,
		1
	],
	"../pages/statistics/statistics.module": [
		510,
		2
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COrderDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CTypeFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OrderFoodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(130);
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
        this.statisPath = "statis/";
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
        data[this.orderPath + date + "/" + this.ordernamePath] = order.table;
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
                data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathOption + element] = element;
            }
        }
        var addData = this.db.object("/");
        addData.update(data);
        this.orderTable = new COrder();
        this.listSLFoodObject = {};
    };
    OrderFoodProvider.prototype.paymentOrder = function (orderLocal) {
        var data = {};
        data[this.orderPath + orderLocal.id + "/" + this.orderpaymentPath] = true;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OrderFoodProvider.prototype.removeOrder = function () {
        var _this = this;
        var data = {};
        var dataSUB = this.getAllOrder().valueChanges().subscribe(function (dataInfo) {
            var listOrderHide = [];
            var dataOfOrder = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    var order = new COrder();
                    var element = dataInfo[index];
                    order.copy(element);
                    for (var key in element.order) {
                        if (_this.listFoodObject[element.order[key].id]) {
                            var orderDetail = new COrderDetails();
                            orderDetail.copy(element.order[key]);
                            orderDetail.food.copy(_this.listFoodObject[element.order[key].id]);
                            if (element.order[key].option) {
                                for (var keyOption in element.order[key].option) {
                                    orderDetail.option.push(keyOption);
                                }
                            }
                            order.listOrder.push(orderDetail);
                        }
                    }
                    if (order.listOrder.length > 0) {
                        dataOfOrder.push(order);
                    }
                }
            }
            else {
                dataOfOrder = [];
            }
            for (var indexOrder = 0; indexOrder < dataOfOrder.length; indexOrder++) {
                var element = dataOfOrder[indexOrder];
                if (element.status && element.payment) {
                    data[_this.orderPath + element.id] = null;
                    data[_this.statisPath + element.id + "/" + _this.ordertablePath] = element.table;
                    data[_this.statisPath + element.id + "/" + _this.ordermodePath] = element.mode;
                    data[_this.statisPath + element.id + "/" + _this.ordernamePath] = element.table;
                    data[_this.statisPath + element.id + "/" + _this.orderidPath] = element.id;
                    data[_this.statisPath + element.id + "/" + _this.orderstatusPath] = element.status;
                    data[_this.statisPath + element.id + "/" + _this.orderpaymentPath] = element.payment;
                    data[_this.statisPath + element.id + "/" + _this.ordercreateDatePath] = element.createDate;
                    for (var index = 0; index < element.listOrder.length; index++) {
                        data[_this.statisPath + element.id + "/" + _this.orderPath + element.listOrder[index].key + "/" + _this.orderPathID] = element.listOrder[index].id;
                        data[_this.statisPath + element.id + "/" + _this.orderPath + element.listOrder[index].key + "/" + _this.orderPathSL] = element.listOrder[index].sl;
                        data[_this.statisPath + element.id + "/" + _this.orderPath + element.listOrder[index].key + "/" + _this.orderPathStatus] = element.listOrder[index].status;
                        data[_this.statisPath + element.id + "/" + _this.orderPath + element.listOrder[index].key + "/" + _this.orderPathKey] = "" + element.listOrder[index].key;
                        for (var indexOption = 0; indexOption < element.listOrder[index].option.length; indexOption++) {
                            var elementOption = element.listOrder[index].option[indexOption];
                            data[_this.statisPath + element.id + "/" + _this.orderPath + element.listOrder[index].key + "/" + _this.orderPathOption + elementOption] = elementOption;
                        }
                    }
                }
            }
            var addData = _this.db.object("/");
            addData.update(data);
            dataSUB.unsubscribe();
        });
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
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
var CUser = /** @class */ (function () {
    function CUser() {
        this.loginid = "";
        this.password = "";
        this.confirmPass = "";
        this.name = "";
        this.status = true;
        this.role = "Order";
    }
    CUser.prototype.copy = function (data) {
        this.loginid = data.loginid;
        this.password = data.password;
        this.name = data.name;
        this.status = data.status;
        this.role = data.role;
    };
    return CUser;
}());

var AuthenticateProvider = /** @class */ (function () {
    function AuthenticateProvider(db) {
        var _this = this;
        this.db = db;
        this.userPath = "user/";
        this.useridloginPath = "loginid/";
        this.userpasswordPath = "password/";
        this.usernamePath = "name/";
        this.status = "status/";
        this.role = "role/";
        this.listUser = [];
        this.userLogin = new CUser();
        var data = this.getAllUser().valueChanges().subscribe(function (dataInfo) {
            _this.listUser = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    _this.listUser.push(dataInfo[index]);
                }
            }
        });
    }
    AuthenticateProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.userName === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Điền thông tin");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                var access = false;
                _this.userLogin = new CUser();
                _this.listUserLogin = _this.db.list(_this.userPath, function (ref) { return ref.orderByChild(_this.useridloginPath)
                    .startAt(credentials.userName.toString().toLowerCase())
                    .endAt(credentials.userName.toString().toLowerCase() + '\uf8ff'); });
                _this.listUserLogin.valueChanges().subscribe(function (userInfo) {
                    if (!userInfo) {
                        _this.userLogin = null;
                        observer.next(access);
                        observer.complete();
                    }
                    else {
                        userInfo.forEach(function (userLogin) {
                            _this.userLogin.copy(userLogin);
                        });
                        access = (_this.userLogin.loginid == credentials.userName.toString().toLowerCase() &&
                            _this.userLogin.password == credentials.password.toString().toLowerCase());
                        if (!access) {
                            _this.userLogin = null;
                        }
                        observer.next(access);
                        observer.complete();
                        return true;
                    }
                });
            });
        }
    };
    AuthenticateProvider.prototype.getAllUser = function () {
        return this.db.list(this.userPath, function (ref) { return ref.orderByKey(); });
    };
    AuthenticateProvider.prototype.addUser = function (user) {
        var data = {};
        data[this.userPath + user.loginid + "/" + this.useridloginPath] = user.loginid.trim().toLowerCase();
        data[this.userPath + user.loginid + "/" + this.userpasswordPath] = user.password.trim().toLowerCase();
        data[this.userPath + user.loginid + "/" + this.usernamePath] = user.name;
        data[this.userPath + user.loginid + "/" + this.status] = user.status;
        data[this.userPath + user.loginid + "/" + this.role] = user.role;
        var addData = this.db.object("/");
        addData.update(data);
        user = new CUser();
    };
    AuthenticateProvider.prototype.editUser = function (user) {
        var data = {};
        if (user.loginid) {
            data[this.userPath + user.loginid + "/" + this.userpasswordPath] = user.password.trim().toLowerCase();
            data[this.userPath + user.loginid + "/" + this.usernamePath] = user.name;
            data[this.userPath + user.loginid + "/" + this.status] = user.status;
            data[this.userPath + user.loginid + "/" + this.role] = user.role;
            var addData = this.db.object("/");
            addData.update(data);
            user = new CUser();
        }
    };
    AuthenticateProvider.prototype.deleteUser = function (user) {
        var data = {};
        if (user.loginid) {
            data[this.userPath + user.loginid] = null;
            var addData = this.db.object("/");
            addData.update(data);
            user = new CUser();
        }
    };
    AuthenticateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(130);
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
  Generated class for the OptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OptionProvider = /** @class */ (function () {
    function OptionProvider(db) {
        var _this = this;
        this.db = db;
        this.optionPath = "option/";
        this.listOption = [];
        var data = this.getAllOption().valueChanges().subscribe(function (dataInfo) {
            _this.listOption = [];
            if (dataInfo) {
                for (var index = 0; index < dataInfo.length; index++) {
                    _this.listOption.push(dataInfo[index]);
                }
            }
        });
    }
    OptionProvider.prototype.getAllOption = function () {
        return this.db.list(this.optionPath, function (ref) { return ref.orderByKey(); });
    };
    OptionProvider.prototype.addOption = function (option) {
        var data = {};
        data[this.optionPath + option] = option;
        var addData = this.db.object("/");
        addData.update(data);
        option = "";
    };
    OptionProvider.prototype.editOption = function (option) {
        var data = {};
        data[this.optionPath + option] = option;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OptionProvider.prototype.deleteOption = function (option) {
        var data = {};
        data[this.optionPath + option] = null;
        var addData = this.db.object("/");
        addData.update(data);
    };
    OptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], OptionProvider);
    return OptionProvider;
}());

//# sourceMappingURL=option.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authenticate_authenticate__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_order_food_order_food__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_option_option__ = __webpack_require__(291);
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
    // apiKey: "AIzaSyB2YM6LoQS2fP59vJ5Mj3E1O7-HaqHGwNw",
    // authDomain: "testorder-cdba7.firebaseapp.com",
    // databaseURL: "https://testorder-cdba7.firebaseio.com",
    // projectId: "testorder-cdba7",
    // storageBucket: "testorder-cdba7.appspot.com",
    // messagingSenderId: "547093173870"
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: 'Trở về'
                }, {
                    links: [
                        { loadChildren: '../pages/cashier/cashier.module#CashierPageModule', name: 'CashierPage', segment: 'cashier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chief/chief.module#ChiefPageModule', name: 'ChiefPage', segment: 'chief', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-option/setting-option.module#SettingOptionPageModule', name: 'SettingOptionPage', segment: 'setting-option', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-user/setting-user.module#SettingUserPageModule', name: 'SettingUserPage', segment: 'setting-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup-type/setup-type.module#SetupTypePageModule', name: 'SetupTypePage', segment: 'setup-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup/setup.module#SetupPageModule', name: 'SetupPage', segment: 'setup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__["CurrencyMaskModule"]
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
                __WEBPACK_IMPORTED_MODULE_9__providers_order_food_order_food__["e" /* OrderFoodProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_option_option__["a" /* OptionProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"c:\Users\User\Downloads\orderapp\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\Users\User\Downloads\orderapp\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map