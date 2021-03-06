import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderFoodProvider, COrder, COrderDetails } from '../../providers/order-food/order-food';

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
  countItemDone = 0;
  countItem = 0;
  constructor(private navCtrl: NavController,
    private orderProvider: OrderFoodProvider,
    private navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    let data = this.orderProvider.getAllOrder().valueChanges().subscribe(dataInfo => {
      let count = 0;
      let listOrderHide = [];
      this.dataOfOrder = [];
      this.countItemDone = 0;
      this.countItem = 0;
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let order = new COrder();
          let element: any = dataInfo[index];
          order.copy(element);
          if(order.status){
            this.countItemDone++;
          }
          for (const key in element.order) {
            if (this.orderProvider.listFoodObject[element.order[key].id]) {
              let orderDetail = new COrderDetails();
              orderDetail.copy(element.order[key]);
              orderDetail.food.copy(this.orderProvider.listFoodObject[element.order[key].id]);
              this.countItem++;
              if (element.order[key].option) {
                for (const keyOption in element.order[key].option) {
                  orderDetail.option.push(keyOption);
                }
              }
              order.listOrder.push(orderDetail);
            }
          }
          if(order.listOrder.length > 0){
            this.dataOfOrder.push(order);
            if (order.status) {
              listOrderHide.push(index);
              count++;
            }
          }          
        }
        if (count > this.orderProvider.limitShow) {
          for (let index = listOrderHide.length - this.orderProvider.limitShow - 1; index >= 0; index--) {
            this.dataOfOrder.splice(listOrderHide[index], 1);
          }
        }
      }
      else {
        this.dataOfOrder = [];
      }
      this.items = this.dataOfOrder;
    });
  }
  confirmAll(order: COrder) {
    order.status = !order.status;
    for (let index = 0; index < order.listOrder.length; index++) {
      order.listOrder[index].status = order.status;
    }
    this.orderProvider.updateStatus(order);
  }
  confirm(order: COrder, food: COrderDetails) {
    food.status = !food.status;
    let count = 0;
    for (let index = 0; index < order.listOrder.length; index++) {
      const element = order.listOrder[index];
      if (element.status == food.status) {
        count++;
      }
    }
    if (count == order.listOrder.length) {
      order.status = food.status;
    }
    this.orderProvider.updateStatus(order);
  }
  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = this.xoaDau(val);
      this.items = this.dataOfOrder.filter((item) => {
        return (this.xoaDau(item.table).toLowerCase().includes(val.toLowerCase()) == true || this.xoaDau(item.name).toLowerCase().includes(val.toLowerCase()) == true);
      })
    }
    else {
      this.items = this.dataOfOrder;
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
