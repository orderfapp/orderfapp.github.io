import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { CFood, OrderFoodProvider, COrderDetails, COrder } from '../../providers/order-food/order-food';
import { OptionProvider } from '../../providers/option/option';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  mode = "";
  currentTable = "";
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private orderProvider: OrderFoodProvider,
    private viewCtrl: ViewController,
    private optionProvider: OptionProvider,
    private alertCtrl: AlertController) {   
      this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
  }
  ngOnInit() {
    if (this.navParams.data) {
      this.mode = this.navParams.data.mode;
      this.currentTable = this.navParams.data.currentTable;
    }    
    this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
  }
  addOption(food: COrderDetails) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Chọn thêm?');
    for (let index = 0; index < this.optionProvider.listOption.length; index++) {
      const element = this.optionProvider.listOption[index];
      alert.addInput({
        type: 'checkbox',
        label: element,
        value: element
      });
    }
    alert.addButton('Hủy');
    alert.addButton({
      text: 'Chọn',
      handler: data => {
        food.option = data;
      }
    });
    alert.present();
  }
  deleteFood(food: COrderDetails) {
    const prompt = this.alertCtrl.create({
      title: 'Xóa món',
      buttons: [
        {
          text: 'Đóng',
          handler: data => {
          }
        },
        {
          text: 'Xóa',
          handler: data => {
            let indexFood = -1;
            for (let index = 0; index < this.orderProvider.orderTable.listOrder.length; index++) {
              if (this.orderProvider.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
              }
            }
            if (indexFood != -1) {
              this.orderProvider.orderTable.listOrder.splice(indexFood, 1);
              if (this.orderProvider.listSLFoodObject[food.id] == 1) {
                this.orderProvider.listSLFoodObject[food.id] = null;
              }
              else if (indexFood != -1 && this.orderProvider.listSLFoodObject[food.id] > 1) {
                this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] - 1;
              }
            }
          }
        }
      ]
    });
    prompt.present();
  }
  addFood(food: COrderDetails) {
    let orderDetail = new COrderDetails();
    orderDetail.id = food.id;
    orderDetail.sl = 1;
    orderDetail.status = false;
    orderDetail.food.copy(food.food);
    this.orderProvider.orderTable.listOrder.push(orderDetail);
    this.orderProvider.orderTable.listOrder = this.orderProvider.orderTable.listOrder.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    this.orderProvider.listSLFoodObject[food.id] = this.orderProvider.listSLFoodObject[food.id] + 1;
  }
  minusFood(food: COrderDetails) {
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
  closeOrder(order: COrder) {
    const prompt = this.alertCtrl.create({
      title: 'Xóa order',
      buttons: [
        {
          text: 'Đóng',
          handler: data => {
          }
        },
        {
          text: 'Xóa',
          handler: data => {
            this.orderProvider.clearOrder(order);
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    prompt.present();
  }
  confirmOrder(order: COrder) {
    if(this.currentTable){
      if(this.mode == this.orderProvider.stringModeMuaVe){
        order.table = this.currentTable.toLowerCase() + " " + this.mode;
      }
      else {
        order.table = this.currentTable.toLowerCase();
      }
    }
    else {
      order.table = this.mode;
    }
    order.mode = this.mode;
    this.orderProvider.addOrder(order);
    this.currentTable = "";
    this.viewCtrl.dismiss();
  }
}
