import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthenticateProvider, CUser } from '../../providers/authenticate/authenticate';

/**
 * Generated class for the SettingUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-user',
  templateUrl: 'setting-user.html',
})
export class SettingUserPage {
  title = "Tạo";
  user: CUser = new CUser();
  constructor(private authenticate: AuthenticateProvider,
              public navCtrl: NavController, 
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  saveData() {
    if(this.user.confirmPass != this.user.password){
      const alert = this.alertCtrl.create({
        title: 'Sai thông tin confirm password!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    if(this.user.loginid.trim() && this.user.password.trim()){
      let count = 0;
      for (let index = 0; index < this.authenticate.listUser.length; index++) {
        const element = this.authenticate.listUser[index];
        if(element.idLogin == this.user.loginid){
          count++;
          break;
        }        
      }
      if(count > 0){
        const alert = this.alertCtrl.create({
          title: 'User đã tồn tại!',
          buttons: ['OK']
        });
        alert.present();
        return;
      }
      if (this.title == "Tạo") {
        this.authenticate.addUser(this.user);
      }
      else {
        this.authenticate.editUser(this.user);
      }
      this.title = "Tạo";
    }    
    else {
      const alert = this.alertCtrl.create({
        title: 'Sai thông tin login!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
  }
  editUser(userData: CUser) {
    this.title = "Sửa";
    this.user.copy(userData);
  }
  deleteUser(userData: CUser) {
    const prompt = this.alertCtrl.create({
      title: 'Xóa user',
      buttons: [
        {
          text: 'Đóng',
          handler: data => {
          }
        },
        {
          text: 'Xóa',
          handler: data => {
            this.authenticate.deleteUser(userData);
          }
        }
      ]
    });
    prompt.present();

  }
  cancelEdit() {
    this.user = new CUser();
    this.title = "Tạo";
  }
}
