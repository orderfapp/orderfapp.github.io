import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

export class CFood {
  id: string = "";
  name: string = "";
  status: boolean = true;
  type: string = "";
  value: number = 0;
  image: string = "";
  copy(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status;
    this.type = data.type;
    this.value = data.value;
    this.image = data.image;
  }
  reset() {
    this.id = "";
    this.name = "";
    this.status = true;
    this.type = "";
    this.value = 0;
    this.image = "";
  }
}
export class COrder {
  id: string = "";
  table: string = "";
  status: boolean = false;
  mode: string = "";
  name: string = "";
  payment: boolean = false;
  createDate: number = new Date().getTime();
  listOrder: COrderDetails[] = [];
  copy(data: any) {
    this.id = data.id;
    this.table = data.table;
    this.status = data.status;
    this.mode = data.mode;
    this.name = data.name;
    this.payment = data.payment;
  }
  total() {
    let count = 0;
    for (let index = 0; index < this.listOrder.length; index++) {
      const element = this.listOrder[index];
      count += parseInt(element.food.value + "");
    }
    return count;
  }
}
export class COrderDetails {
  id: string = "";
  key: string = "";
  sl: number = 0;
  status: boolean = false;
  option = [];
  food: CFood = new CFood();
  copy(data: any) {
    this.id = data.id;
    this.key = data.key;
    this.sl = data.sl;
    this.status = data.status;
  }
}
export class CTypeFood {
  type: string = "";
  isExpand = false;
  listData = [];
}
@Injectable()
export class OrderFoodProvider {
  orderTable: COrder = new COrder();
  listDataFood = [];
  listFoodObject = {};
  listSLFoodObject = {};
  listTypeFood = [];
  typePath = "type/";
  foodPath = "food/";
  foodIDPath = "id/";
  foodImagePath = "image/";
  foodNamePath = "name/";
  foodStatusPath = "status/";
  foodTypePath = "type/";
  foodValuePath = "value/";
  orderPath = "order/";
  orderPathID = "id/";
  orderPathSL = "sl/";
  orderPathSLGiao = "slgiao/";
  orderPathStatus = "status/";
  orderPathOption = "option/";
  orderPathKey = "key/";
  ordertablePath = "table/";
  orderidPath = "id/";
  ordernamePath = "name/";
  ordermodePath = "mode/";
  orderstatusPath = "status/";
  orderpaymentPath = "payment/";
  ordercreateDatePath = "createdate/";
  statisPath = "statis/";
  stringModeTaiBan = "Tại bàn";
  stringModeMuaVe = "Mua về";
  limitShow = 6;
  constructor(private db: AngularFireDatabase) {
    let data = this.getAllType().valueChanges().subscribe(dataInfo => {
      this.listTypeFood = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          this.listTypeFood.push(dataInfo[index]);
        }
      }
    });
    let dataFood = this.getAllFood().valueChanges().subscribe(dataInfo => {
      this.listDataFood = [];
      this.listFoodObject = {};
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let food = new CFood();
          food.copy(dataInfo[index]);
          this.listDataFood.push(food);
          this.listFoodObject[food.id] = food;
        }
      }
      else {
        this.listDataFood = [];
        this.listFoodObject = {};
      }
    });
  }
  getAllFood() {
    return this.db.list(this.foodPath, ref => ref.orderByChild(this.foodTypePath));
  }
  getAllOrder() {
    return this.db.list(this.orderPath, ref => ref.orderByKey());
  }
  getAllType() {
    return this.db.list(this.typePath, ref => ref.orderByKey());
  }
  getAllFoodByTable(tableID) {
    return this.db.list(this.orderPath + tableID, ref => ref.orderByChild(this.ordertablePath));
  }
  addOrder(order: COrder) {
    let data = {};
    let date = new Date().getTime();
    data[this.orderPath + date + "/" + this.ordertablePath] = order.table;
    data[this.orderPath + date + "/" + this.ordermodePath] = order.mode;
    data[this.orderPath + date + "/" + this.ordernamePath] = order.table;
    data[this.orderPath + date + "/" + this.orderidPath] = date;
    data[this.orderPath + date + "/" + this.orderstatusPath] = order.status;
    data[this.orderPath + date + "/" + this.orderpaymentPath] = order.payment;
    data[this.orderPath + date + "/" + this.ordercreateDatePath] = date;
    for (let index = 0; index < order.listOrder.length; index++) {
      data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathID] = order.listOrder[index].id;
      data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathSL] = order.listOrder[index].sl;
      data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathStatus] = order.listOrder[index].status;
      data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathKey] = "" + order.listOrder[index].id + date + index;
      for (let indexOption = 0; indexOption < order.listOrder[index].option.length; indexOption++) {
        const element = order.listOrder[index].option[indexOption];
        data[this.orderPath + date + "/" + this.orderPath + order.listOrder[index].id + date + index + "/" + this.orderPathOption + element] = element;
      }
    }
    let addData = this.db.object("/");
    addData.update(data);
    this.orderTable = new COrder();
    this.listSLFoodObject = {};
  }
  paymentOrder(orderLocal: COrder) {
    let data = {};
    data[this.orderPath + orderLocal.id + "/" + this.orderpaymentPath] = true;
    let addData = this.db.object("/");
    addData.update(data);
  }
  removeOrder() {
    let data = {};
    let dataSUB = this.getAllOrder().valueChanges().subscribe(dataInfo => {
      let listOrderHide = [];
      let dataOfOrder = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let order = new COrder();
          let element: any = dataInfo[index];
          order.copy(element);
          for (const key in element.order) {
            let orderDetail = new COrderDetails();
            orderDetail.copy(element.order[key]);
            orderDetail.food.copy(this.listFoodObject[element.order[key].id]);
            if (element.order[key].option) {
              for (const keyOption in element.order[key].option) {
                orderDetail.option.push(keyOption);
              }
            }
            order.listOrder.push(orderDetail);
          }
          dataOfOrder.push(order);          
        }
      }
      else {
        dataOfOrder = [];
      }
      for (let indexOrder = 0; indexOrder < dataOfOrder.length; indexOrder++) {
        const element = dataOfOrder[indexOrder];
        if (element.status && element.payment) {
          data[this.orderPath + element.id] = null;
          data[this.statisPath + element.id + "/" + this.ordertablePath] = element.table;
          data[this.statisPath + element.id + "/" + this.ordermodePath] = element.mode;
          data[this.statisPath + element.id + "/" + this.ordernamePath] = element.table;
          data[this.statisPath + element.id + "/" + this.orderidPath] = element.id;
          data[this.statisPath + element.id + "/" + this.orderstatusPath] = element.status;
          data[this.statisPath + element.id + "/" + this.orderpaymentPath] = element.payment;
          data[this.statisPath + element.id + "/" + this.ordercreateDatePath] = element.createDate;
          for (let index = 0; index < element.listOrder.length; index++) {
            data[this.statisPath + element.id + "/" + this.orderPath + element.listOrder[index].key + "/" + this.orderPathID] = element.listOrder[index].id;
            data[this.statisPath + element.id + "/" + this.orderPath + element.listOrder[index].key + "/" + this.orderPathSL] = element.listOrder[index].sl;
            data[this.statisPath + element.id + "/" + this.orderPath + element.listOrder[index].key + "/" + this.orderPathStatus] = element.listOrder[index].status;
            data[this.statisPath + element.id + "/" + this.orderPath + element.listOrder[index].key + "/" + this.orderPathKey] = "" + element.listOrder[index].key;
            for (let indexOption = 0; indexOption < element.listOrder[index].option.length; indexOption++) {
              const elementOption = element.listOrder[index].option[indexOption];
              data[this.statisPath + element.id + "/" + this.orderPath + element.listOrder[index].key + "/" + this.orderPathOption + elementOption] = elementOption;
            }
          }
        }
      }
      let addData = this.db.object("/");
      addData.update(data);
      dataSUB.unsubscribe();
    });
  }
  updateStatus(order: COrder) {
    let data = {};
    data[this.orderPath + order.id + "/" + this.orderstatusPath] = order.status;
    for (let index = 0; index < order.listOrder.length; index++) {
      data[this.orderPath + order.id + "/" + this.orderPath + order.listOrder[index].key + "/" + this.orderPathStatus] = order.listOrder[index].status;
    }
    let addData = this.db.object("/");
    addData.update(data);
  }
  clearOrder(order: COrder) {
    let data = {};
    data[this.orderPath + order.table] = null;
    let addData = this.db.object("/");
    addData.update(data);
    this.orderTable = new COrder();
    this.listSLFoodObject = {};
  }
  addType(type: string) {
    let data = {};
    data[this.typePath + type] = type;
    let addData = this.db.object("/");
    addData.update(data);
    type = "";
  }
  editType(type: string) {
    let data = {};
    data[this.typePath + type] = type;
    let addData = this.db.object("/");
    addData.update(data);
  }
  deleteType(type: string) {
    let data = {};
    data[this.typePath + type] = null;
    let addData = this.db.object("/");
    addData.update(data);
  }
  addFood(food: CFood) {
    let data = {};
    let date = food.name + new Date().getTime();
    data[this.foodPath + date + "/" + this.foodIDPath] = date;
    data[this.foodPath + date + "/" + this.foodImagePath] = food.image;
    data[this.foodPath + date + "/" + this.foodNamePath] = food.name;
    data[this.foodPath + date + "/" + this.foodStatusPath] = food.status;
    data[this.foodPath + date + "/" + this.foodTypePath] = food.type;
    data[this.foodPath + date + "/" + this.foodValuePath] = food.value;
    let addData = this.db.object("/");
    addData.update(data);
    food.reset();
  }
  deleteFood(food: CFood) {
    let data = {};
    if (food.id) {
      data[this.foodPath + food.id] = null;
      let addData = this.db.object("/");
      addData.update(data);
    }
    let addData = this.db.object("/");
    addData.update(data);
  }
  editFood(food: CFood) {
    let data = {};
    if (food.id) {
      data[this.foodPath + food.id + "/" + this.foodImagePath] = food.image;
      data[this.foodPath + food.id + "/" + this.foodNamePath] = food.name;
      data[this.foodPath + food.id + "/" + this.foodStatusPath] = food.status;
      data[this.foodPath + food.id + "/" + this.foodTypePath] = food.type;
      data[this.foodPath + food.id + "/" + this.foodValuePath] = food.value;
      let addData = this.db.object("/");
      addData.update(data);
    }
  }
}
