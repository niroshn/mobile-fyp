import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Neu } from './neu';

@NgModule({
  declarations: [
    Neu,
  ],
  imports: [
    IonicPageModule.forChild(Neu),
  ],
  exports: [
    Neu
  ]
})
export class AddressModule {}
