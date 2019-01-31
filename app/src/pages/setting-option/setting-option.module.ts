import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingOptionPage } from './setting-option';

@NgModule({
  declarations: [
    SettingOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingOptionPage),
  ],
})
export class SettingOptionPageModule {}
