import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test } from './test';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    Test,
  ],
  imports: [
    IonicPageModule.forChild(Test),
  ComponentsModule,
  IonicStorageModule.forRoot()
  ],
  exports: [
    Test
  ],
  providers:[
    LocalNotifications
  ]
})
export class TestPageModule {
  
}
