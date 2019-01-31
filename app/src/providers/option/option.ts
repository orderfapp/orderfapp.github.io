import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';


/*
  Generated class for the OptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OptionProvider {
  optionPath = "option/";
  listOption = [];
  constructor(private db: AngularFireDatabase) {
    let data = this.getAllOption().valueChanges().subscribe(dataInfo => {
      this.listOption = [];
      if (dataInfo) {
        for (let index = 0; index < dataInfo.length; index++) {
          this.listOption.push(dataInfo[index]);
        }
      }
    });
  }
  getAllOption() {
    return this.db.list(this.optionPath, ref => ref.orderByKey());
  }
  addOption(option: string) {
    let data = {};
    data[this.optionPath + option] = option;
    let addData = this.db.object("/");
    addData.update(data);
    option = "";
  }
  editOption(option: string) {
    let data = {};
    data[this.optionPath + option] = option;
    let addData = this.db.object("/");
    addData.update(data);
  }
  deleteOption(option: string) {
    let data = {};
    data[this.optionPath + option] = null;
    let addData = this.db.object("/");
    addData.update(data);
  }
}
