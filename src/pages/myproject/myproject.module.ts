import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Myproject } from './myproject';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    Myproject,
  ],
  imports: [
    IonicPageModule.forChild(Myproject),
  ComponentsModule,
  IonicStorageModule.forRoot()
  ],
  exports: [
    Myproject
  ],
  providers:[
    LocalNotifications
  ]
})
export class MyprojectPageModule {}
