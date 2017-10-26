import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})

export class Editprofile {
  inputName: any;
  lastName: any;
  address: any;
  telephone: any;
  gender: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editprofile');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addNewRelation() {
    console.log(this.gender);
    //do the api call with parameters
    
  }

}
