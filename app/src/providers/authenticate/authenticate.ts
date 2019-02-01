import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class CUser {
  loginid: string = "";
  password: string = "";
  confirmPass: string = "";
  name: string = "";
  status: boolean = true;
  role: string = "Order";
  copy(data: any) {
    this.loginid = data.loginid;
    this.password = data.password;
    this.name = data.name;
    this.status = data.status;
    this.role = data.role;
  }
}
@Injectable()
export class AuthenticateProvider {
  userPath = "user/";
  useridloginPath = "loginid/";
  userpasswordPath = "password/";
  usernamePath = "name/";
  status = "status/";
  role = "role/";
  listUser = [];
  userLogin = new CUser();
  listUserLogin: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    let data = this.getAllUser().valueChanges().subscribe(dataInfo => {
      this.listUser = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          this.listUser.push(dataInfo[index]);
        }
      }
    });
  }
  public login(credentials) {
    if (credentials.userName === null || credentials.password === null) {
      return Observable.throw("Điền thông tin");
    } else {
      return Observable.create(observer => {
        let access = false;
        this.userLogin = new CUser();
        this.listUserLogin = this.db.list(this.userPath,
          ref => ref.orderByChild(this.useridloginPath)
            .startAt(credentials.userName.toString().toLowerCase())
            .endAt(credentials.userName.toString().toLowerCase() + '\uf8ff'));
        this.listUserLogin.valueChanges().subscribe(userInfo => {
          if (!userInfo) {
            this.userLogin = null;
            observer.next(access);
            observer.complete();
          }
          else {
            userInfo.forEach(userLogin => {
              this.userLogin.copy(userLogin);
            })
            access = (this.userLogin.loginid == credentials.userName.toString().toLowerCase() &&
              this.userLogin.password == credentials.password.toString().toLowerCase());
            if (!access) {
              this.userLogin = null;
            }
            observer.next(access);
            observer.complete();
            return true;
          }
        });

      });
    }
  }
  getAllUser() {
    return this.db.list(this.userPath, ref => ref.orderByKey());
  }
  addUser(user: CUser) {
    let data = {};
    data[this.userPath + user.loginid + "/" + this.useridloginPath] = user.loginid.trim().toLowerCase();
    data[this.userPath + user.loginid + "/" + this.userpasswordPath] = user.password.trim().toLowerCase();
    data[this.userPath + user.loginid + "/" + this.usernamePath] = user.name;
    data[this.userPath + user.loginid + "/" + this.status] = user.status;
    data[this.userPath + user.loginid + "/" + this.role] = user.role;
    let addData = this.db.object("/");
    addData.update(data);
    user = new CUser();
  }
  editUser(user: CUser) {
    let data = {};
    if (user.loginid) {
      data[this.userPath + user.loginid + "/" + this.userpasswordPath] = user.password.trim().toLowerCase();
      data[this.userPath + user.loginid + "/" + this.usernamePath] = user.name;
      data[this.userPath + user.loginid + "/" + this.status] = user.status;
      data[this.userPath + user.loginid + "/" + this.role] = user.role;
      let addData = this.db.object("/");
      addData.update(data);
      user = new CUser();
    }
  }
  deleteUser(user: CUser) {
    let data = {};
    if (user.loginid) {
      data[this.userPath + user.loginid] = null;
      let addData = this.db.object("/");
      addData.update(data);
      user = new CUser();
    }
  }
}
