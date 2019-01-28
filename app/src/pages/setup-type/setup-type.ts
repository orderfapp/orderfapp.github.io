import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';

/**
 * Generated class for the SetupTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup-type',
  templateUrl: 'setup-type.html',
})
export class SetupTypePage {
  title = "Tạo";
  localType = "";
  constructor(private navCtrl: NavController,
    private orderProvider: OrderProvider,
    private alertCtrl: AlertController,
    private navParams: NavParams) {
  }
  saveData() {
    if (this.title == "Tạo") {
      this.orderProvider.addType(this.localType);
    }
    else {
      this.orderProvider.editType(this.localType);
    }
    this.title = "Tạo";
  }
  editType(data: string) {
    this.title = "Sửa";
    this.localType = data;
  }
  deleteType(dataDelete: string) {
    const prompt = this.alertCtrl.create({
      title: 'Xóa phân loại món',
      buttons: [
        {
          text: 'Đóng',
          handler: data => {
          }
        },
        {
          text: 'Xóa',
          handler: data => {
            this.orderProvider.deleteType(dataDelete);
          }
        }
      ]
    });
    prompt.present();

  }
  cancelEdit() {
    this.localType = "";
    this.title = "Tạo";
  }
}
