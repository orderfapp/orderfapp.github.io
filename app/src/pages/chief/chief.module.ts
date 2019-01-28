import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChiefPage } from './chief';

@NgModule({
  declarations: [
    ChiefPage,
  ],
  imports: [
    IonicPageModule.forChild(ChiefPage),
  ],
})
export class ChiefPageModule {}
