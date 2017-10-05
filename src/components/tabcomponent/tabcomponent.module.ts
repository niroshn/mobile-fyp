import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tabcomponent } from './tabcomponent';

@NgModule({
  declarations: [
    Tabcomponent,
  ],
  imports: [
    IonicPageModule.forChild(Tabcomponent),
  ],
  exports: [
    Tabcomponent
  ]
})
export class TabcomponentModule {}
