import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelationDetails  } from './relationDetails ';

@NgModule({
  declarations: [
    RelationDetails ,
  ],
  imports: [
    IonicPageModule.forChild(RelationDetails ),
    ComponentsModule,
  ],
  exports: [
    RelationDetails 
  ]
})
export class RelationDetailsModule {}
