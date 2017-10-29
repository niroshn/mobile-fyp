import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'relationDetails.html',
})
export class RelationDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editprofile');
  }

    dismiss() {
   this.viewCtrl.dismiss();
 }

}
