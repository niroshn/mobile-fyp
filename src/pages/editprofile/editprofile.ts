import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Profile} from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})

export class Editprofile {
  firstName: any;
  lastName: any;
  address: any;
  telephone: any;
  relation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editprofile');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addNewRelation() {
    //console.log(this.gender);
    //do the api call with parameters
    this.navCtrl.push(Profile,{
      user:{"first_name":this.firstName,"last_name":this.lastName,"address":this.address,"tel":this.telephone,"relation":this.relation}
    })

  }

}
