import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addpopup',
  templateUrl: 'addpopup.html',
})
export class Addpopup {

  image:any;
  name:any;
  count:any;
  desc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    
    this.name = navParams.get('name');
    this.image = navParams.get('src');
    this.count = navParams.get('count');
    this.desc = navParams.get('desc');

    console.log(this.image);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addpopup');
  }
  
  dismiss(){
	this.viewCtrl.dismiss();
  }

}
