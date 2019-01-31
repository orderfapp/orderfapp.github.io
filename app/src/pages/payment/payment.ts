import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { COrder, OrderFoodProvider } from '../../providers/order-food/order-food';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  order = new COrder();
  allOrder = [];
  money = null;
  returnBack = 0;
  returnText = "";
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              private orderProvider: OrderFoodProvider,
              public navParams: NavParams) {

  }
  ngOnInit() {
    if (this.navParams.data) {
      this.order = this.navParams.data.order;
      this.allOrder = this.navParams.data.allOrder;
    }    
  }
  change(ev: any){
    let val = ev.target.value;
    let total = this.order.total();
    if(val){
      val = parseInt(val);
    }
    else {
      val = 0;
    }
    if(val - total < 0){
      this.returnBack =  total - val;
      this.returnText = "Khách còn thiếu: ";
    }
    else if(val - total >= 0){
      this.returnBack = val - total;
      this.returnText = "Tiền trả lại: ";
    }
  }
  payment(){
    this.order.payment = true;
    this.orderProvider.paymentOrder(this.order);
    this.viewCtrl.dismiss();
  }
  closePayment(){
    this.viewCtrl.dismiss();
  }
}
