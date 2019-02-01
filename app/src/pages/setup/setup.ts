import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderFoodProvider, CFood, CTypeFood } from '../../providers/order-food/order-food';
import lodash from 'lodash'
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {
  listDataGroup = [];
  localFood: CFood = new CFood();
  title = "Tạo";
  constructor(public navCtrl: NavController, 
              public orderProvider: OrderFoodProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    let data = this.orderProvider.getAllFood().valueChanges().subscribe(dataInfo => {
      let dataOfFood = [];
      this.listDataGroup = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          let food = new CFood();
          food.copy(dataInfo[index]);
          this.orderProvider.listFoodObject[food.id] = food;
          dataOfFood.push(food);
        }
      }
      else {
        dataOfFood = [];
      }
      let group = lodash.groupBy(dataOfFood, "type");      
      for (let index = 0; index < this.orderProvider.listTypeFood.length; index++) {
        let dataGroup = new CTypeFood();
        dataGroup.type = this.orderProvider.listTypeFood[index];
        dataGroup.listData = group[dataGroup.type];
        this.listDataGroup.push(dataGroup);
      }
    });
  }
  expandList(data: CTypeFood) {
    data.isExpand = !data.isExpand;
  }
  deleteFood(food: CFood){
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
            this.orderProvider.deleteFood(food);
          }
        }
      ]
    });
    prompt.present();    
  }
  editFood(food: CFood){
    this.title = "Sửa";
    this.localFood.copy(food);
  }
  cancelEdit(){
    this.localFood = new CFood();
    this.title = "Tạo";
  }
  saveData(){
    if(this.localFood.type == ""){
      this.localFood.type = "Default";
    }
    if(this.title == "Tạo"){
      this.orderProvider.addFood(this.localFood);
    }
    else {
      this.orderProvider.editFood(this.localFood);
    }
    this.title = "Tạo";
  }
  createType(){
    this.navCtrl.push('SetupTypePage');
  }
  createUser(){
    this.navCtrl.push('SettingUserPage');
  }
  createOption(){
    this.navCtrl.push('SettingOptionPage');    
  }
}
