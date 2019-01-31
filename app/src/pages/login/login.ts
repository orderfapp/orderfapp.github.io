import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderFoodProvider } from '../../providers/order-food/order-food';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginInfo = { userName: '', password: '' };  
  showButton = false;
  constructor(public navCtrl: NavController,
    private auth: AuthenticateProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public orderProvider: OrderFoodProvider, ) {
  }
  public login() {
    this.showButton = false;
    this.auth.login(this.loginInfo).subscribe(allowed => {
      if (allowed) {
        this.showButton = true;
      } else {
        this.showError("Sai tài khoản : " + this.loginInfo.userName);
      }
    },
    error => {
      this.showError(error);
    });
  }
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Thông báo lỗi',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
  goToOrder() {
    this.navCtrl.push('OrderPage');
  }
  goToKitchen() {
    this.navCtrl.push('ChiefPage');
  }
  goToCashier() {
    this.navCtrl.push('CashierPage');
  }
  goToSetting() {
    this.navCtrl.push('SetupPage');
  }
  summary(){
    this.orderProvider.removeOrder();
    let alert = this.alertCtrl.create({
      title: 'Data đã được tổng kết',
      buttons: ['OK']
    });
    alert.present();
  }
}
