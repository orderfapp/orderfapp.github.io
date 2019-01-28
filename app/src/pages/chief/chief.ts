import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider, COrder, COrderDetails, CFood } from '../../providers/order/order';

/**
 * Generated class for the ChiefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chief',
  templateUrl: 'chief.html',
})
export class ChiefPage {
  dataOfOrder = [];
  items: any[];
  constructor(private navCtrl: NavController,
    private orderProvider: OrderProvider,
    private navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    let data = this.orderProvider.getAllOrder().valueChanges().subscribe(dataInfo => {
      this.dataOfOrder = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let order = new COrder();
          let element: any = dataInfo[index];
          order.table = element.table;
          for (const key in element.order) {
            let orderDetail = new COrderDetails();
            orderDetail.copy(element.order[key]);
            orderDetail.food.copy(this.orderProvider.listFood[key]);
            order.listOrder.push(orderDetail);
          }
          this.dataOfOrder.push(order);
        }
      }
      else {
        this.dataOfOrder = [];
      }
      this.items = this.dataOfOrder;
    });
  }
  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = this.xoaDau(val);
      this.items = this.dataOfOrder.filter((item) => {
        return (item.table.toLowerCase().includes(val.toLowerCase()) == true);
      })
    }
    else {
      this.items = this.dataOfOrder;
    }
  }
  expandList(data: COrder) {
    data.isExpand = !data.isExpand;
  }
  addFood(order: COrderDetails) {
    if (order.slgiao == order.sl) {
      return;
    }
    else {
      order.slgiao++;
    }
  }
  deleteFood(order: COrder, food: CFood) {
    let indexFood = -1;
    for (let index = 0; index < order.listOrder.length; index++) {
      if (order.listOrder[index].id == food.id) {
        indexFood = index;
        break;
      }
    }
    if (indexFood != -1) {
      order.listOrder.splice(indexFood, 1);
    }
    order.listOrder.splice(indexFood, 1);
  }
  editFood(orderDetails: COrderDetails) {
    if (orderDetails.slgiao == 0) {
      orderDetails.slgiao = 0;
    }
    else {
      orderDetails.slgiao--;
    }
  }
  minusFood(order: COrderDetails) {
    if (order.slgiao == 0) {
      return;
    }
    else {
      order.slgiao--;
    }   
  }
  xoaDau(str) {
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
  }
}
