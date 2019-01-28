import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderProvider, CFood, COrder, COrderDetails } from '../../providers/order/order';


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
  orderFlag: boolean = false;
  currentTable: string = "";
  dataOfFood = [];
  orderTable: COrder = new COrder();

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private orderProvider: OrderProvider,
    private alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    let data = this.orderProvider.getAllFood().valueChanges().subscribe(dataInfo => {
      this.dataOfFood = [];
      this.orderProvider.listFood = {};
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let food = new CFood();
          food.copy(dataInfo[index]);
          this.orderProvider.listFood[food.id] = food;
          this.dataOfFood.push(food);
        }
      }
      else {
        this.dataOfFood = [];
        this.orderProvider.listFood = {};
      }
      this.items = this.dataOfFood;
    });
  }
  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = this.xoaDau(val)
      this.items = this.dataOfFood.filter((item) => {
        return (item.name.toLowerCase().includes(val.toLowerCase()) == true);
      })
    }
    else {
      this.items = this.dataOfFood;
    }
  }
  addOrder() {
    this.showPrompt();
  }
  confirmOrder() {
    this.orderTable.table = this.currentTable.toLowerCase();
    this.orderProvider.addOrder(this.orderTable);
    this.orderFlag = false;
    this.currentTable = "";
  }
  goToChief() {
    this.navCtrl.push('ChiefPage');
  }
  createFood() {
    this.navCtrl.push('SetupPage');
  }
  addFood(food: CFood) {
    let indexFood = -1;
    for (let index = 0; index < this.orderTable.listOrder.length; index++) {
      if (this.orderTable.listOrder[index].id == food.id) {
        indexFood = index;
        break;
      }
    }
    if (indexFood != -1) {
      this.orderTable.listOrder[indexFood].sl++;
    }
    else {
      let orderDetail = new COrderDetails();
      orderDetail.id = food.id;
      orderDetail.sl = 1;
      orderDetail.slgiao = 0;
      orderDetail.status = "Đang làm";
      orderDetail.food.copy(food);
      this.orderTable.listOrder.push(orderDetail);
    }
  }
  minusFood(food: CFood) {
    let indexFood = -1;
    for (let index = 0; index < this.orderTable.listOrder.length; index++) {
      if (this.orderTable.listOrder[index].id == food.id) {
        indexFood = index;
        break;
      }
    }
    if (this.orderTable.listOrder[indexFood].sl == 1) {
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
              this.orderTable.listOrder.splice(indexFood, 1);
            }
          }
        ]
      });
      prompt.present();
    }
    else if (indexFood != -1 && this.orderTable.listOrder[indexFood].sl > 1) {
      this.orderTable.listOrder[indexFood].sl--;
    }
  }
  deleteFood(food: CFood) {
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
            for (let index = 0; index < this.orderTable.listOrder.length; index++) {
              if (this.orderTable.listOrder[index].id == food.id) {
                indexFood = index;
                break;
              }
            }
            if (indexFood != -1) {
              this.orderTable.listOrder.splice(indexFood, 1);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  closeOrder() {
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
            this.orderProvider.clearOrder(this.orderTable);
          }
        }
      ]
    });
    prompt.present();
  }
  showPrompt() {
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
              this.orderFlag = true;
              let dataSub = this.orderProvider.getAllFoodByTable(this.currentTable).valueChanges().subscribe(dataInfo => {
                this.orderTable = new COrder();
                if (dataInfo[1]) {
                  this.orderTable.table = dataInfo[1] + "";
                  for (const key in dataInfo[0]) {
                    let orderDetail = new COrderDetails();
                    orderDetail.copy(dataInfo[0][key]);
                    orderDetail.food.copy(this.orderProvider.listFood[key]);
                    this.orderTable.listOrder.push(orderDetail);
                  }
                }
                else {
                  this.orderTable = new COrder();
                }
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
