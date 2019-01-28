import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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
  reset(){
    this.id = "";
    this.name = "";
    this.status = true;
    this.type = "";
    this.value = 0;
    this.image = "";
  }
}
export class COrder {
  table: string = "";  
  isExpand = false;
  listOrder: COrderDetails[] = [];  
}
export class COrderDetails {
  id: string = "";
  sl: number = 0;  
  slgiao: number = 0;  
  status: string = "";  
  food: CFood = new CFood();

  copy(data: any) {
    this.id = data.id;
    this.sl = data.sl;
    this.slgiao = data.slgiao;
    this.status = data.status;
  }
}
export class CTypeFood {
  type: string = "";
  isExpand = false;
  listData = [];
}
@Injectable()
export class OrderProvider {
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
  ordertablePath = "table/";
  listFood = {};
  listTypeFood = [];
  constructor(private db: AngularFireDatabase) {
    let data = this.getAllType().valueChanges().subscribe(dataInfo => {
      this.listTypeFood = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          this.listTypeFood.push(dataInfo[index]);          
        }
      }
    });    
  }
  getAllFood(){
    return this.db.list(this.foodPath, ref => ref.orderByChild(this.foodTypePath));
  }
  getAllOrder(){
    return this.db.list(this.orderPath, ref => ref.orderByKey());
  }
  getAllType(){
    return this.db.list(this.typePath, ref => ref.orderByKey());
  }
  getAllFoodByTable(tableID){
    return this.db.list(this.orderPath + tableID, ref => ref.orderByChild(this.ordertablePath));
  }
  addOrder(order: COrder){
    let data = {};
    data[this.orderPath + order.table + "/" + this.ordertablePath] = order.table;
    for (let index = 0; index < order.listOrder.length; index++) {
      data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathID] = order.listOrder[index].id;
      data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathSL] = order.listOrder[index].sl;
      data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathSLGiao] = order.listOrder[index].slgiao;
      data[this.orderPath + order.table + "/" + this.orderPath + order.listOrder[index].id + "/" + this.orderPathStatus] = order.listOrder[index].status;
    }   
    let addData = this.db.object("/");
    addData.update(data);
  }
  clearOrder(order: COrder){
    let data = {};
    data[this.orderPath + order.table] = null;
    let addData = this.db.object("/");
    addData.update(data);
  }
  addType(type: string){
    let data = {};
    data[this.typePath + type] = type;
    let addData = this.db.object("/");
    addData.update(data);
    type = "";
  }
  editType(type: string){
    let data = {};
    data[this.typePath + type] = type;
    let addData = this.db.object("/");
    addData.update(data);
  }
  deleteType(type: string){
    let data = {};
    data[this.typePath + type] = null;
    let addData = this.db.object("/");
    addData.update(data);
  }
  addFood(food: CFood){
    let data = {};
    let date = new Date().getTime();
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
  deleteFood(food: CFood){
    let data = {};
    if(food.id){
      data[this.foodPath + food.id] = null;
      let addData = this.db.object("/");
      addData.update(data);
    }    
    let addData = this.db.object("/");
    addData.update(data);
  }
  editFood(food: CFood){
    let data = {};
    if(food.id){
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
