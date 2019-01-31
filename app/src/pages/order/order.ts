import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { OrderFoodProvider, CFood, COrder, COrderDetails } from '../../providers/order-food/order-food';


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  items: any[];
  currentTable: string = "";  
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private orderProvider: OrderFoodProvider,
              private popoverCtrl: PopoverController,
              private alertCtrl: AlertController) {
    this.items = this.orderProvider.listDataFood;
  }
  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = this.xoaDau(val)
      this.items = this.orderProvider.listDataFood.filter((item) => {
        return (this.xoaDau(item.name).toLowerCase().includes(val.toLowerCase()) == true);
      })
    }
    else {
      this.items = this.orderProvider.listDataFood;
    }
  }
  addFood(food: CFood) {
    let indexFood = -1;
    let orderDetail = new COrderDetails();
    orderDetail.id = food.id;
    orderDetail.sl = 1;
    orderDetail.status = false;
    orderDetail.food.copy(food);
    for (let index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
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
  }
  minusFood(food: CFood) {
    let indexFood = -1;
    for (let index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
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
  }
  addOrder(data: string) {
    if (!data || this.orderProvider.orderTable.listOrder.length == 0) {
      return;
    }
    if (data == this.orderProvider.stringModeMuaVe) {
      const prompt = this.alertCtrl.create({
        title: 'Tên người mua',
        inputs: [
          {
            name: 'tableNumber',
            placeholder: 'Nhập tên'
          },
        ],
        buttons: [
          {
            text: 'Đóng',
            handler: data => {
            }
          },
          {
            text: 'OK',
            handler: data => {
              if (data.tableNumber) {
                this.currentTable = data.tableNumber.toLowerCase();
                let popover = this.popoverCtrl.create("OrderDetailsPage", {
                  mode: this.orderProvider.stringModeMuaVe,
                  currentTable: this.currentTable
                }, {
                    cssClass: 'custom-popover'
                  });
                popover.present({
                  ev: ""
                });
              }
              else {
                return false
              }
            }
          }
        ]
      });
      prompt.present();
    }
    else if (data == this.orderProvider.stringModeTaiBan) {
      const prompt = this.alertCtrl.create({
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
            handler: data => {
            }
          },
          {
            text: 'OK',
            handler: data => {
              if (data.tableNumber) {
                this.currentTable = data.tableNumber.toLowerCase();
                let popover = this.popoverCtrl.create("OrderDetailsPage", {
                  mode: this.orderProvider.stringModeTaiBan,
                  currentTable: this.currentTable
                }, {
                    cssClass: 'custom-popover'
                  });
                popover.present({
                  ev: ""
                });
              }
              else {
                return false
              }
            }
          }
        ]
      });
      prompt.present();
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
