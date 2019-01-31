import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OptionProvider } from '../../providers/option/option';

/**
 * Generated class for the SettingOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-option',
  templateUrl: 'setting-option.html',
})
export class SettingOptionPage {
  title = "Tạo";
  localOption = "";
  constructor(public navCtrl: NavController, 
              private optionProvider: OptionProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }
  saveData() {
    if (this.title == "Tạo") {
      this.optionProvider.addOption(this.localOption);
    }
    else {
      this.optionProvider.editOption(this.localOption);
    }
    this.title = "Tạo";
  }
  editOption(data: string) {
    this.title = "Sửa";
    this.localOption = data;
  }
  deleteOption(dataDelete: string) {
    const prompt = this.alertCtrl.create({
      title: 'Xóa option',
      buttons: [
        {
          text: 'Đóng',
          handler: data => {
          }
        },
        {
          text: 'Xóa',
          handler: data => {
            this.optionProvider.deleteOption(dataDelete);
          }
        }
      ]
    });
    prompt.present();

  }
  cancelEdit() {
    this.localOption = "";
    this.title = "Tạo";
  }
}
