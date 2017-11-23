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
    
    if(navParams.get('src')){
      this.image = navParams.get('src');
    }
    else{
      this.image ="https://i.cbc.ca/1.4040073.1490381494!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/doctor-test.jpg";
    }
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
