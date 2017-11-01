import { Component } from '@angular/core';
import { IonicPage, NavController,PopoverController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class Feedback {
    name : any;
    address : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.name = navParams.get('first_name')+" "+navParams.get('last_name') ;
    this.address  = navParams.get('address') ;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Feedback');
  }
  
   presentPopover() {
    let popover = this.popoverCtrl.create('Wizardpopover');
    popover.present();
  }
  
     goBack(){
     this.navCtrl.pop();
   }

}
