
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emegency } from './emegency';

@NgModule({
  declarations: [
    Emegency,
  ],
  imports: [
    IonicPageModule.forChild(Emegency),
  ],
  exports: [
    Emegency
  ]
})
export class EmegencyModule {}
