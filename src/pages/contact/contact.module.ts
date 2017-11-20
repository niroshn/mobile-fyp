import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';

@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
    IonicPageModule.forChild(Contact),
	ComponentsModule,
  ],
  exports: [
    Contact
  ]
})
export class ContactPageModule {}
