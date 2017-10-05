
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,ModalController,Content, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

@ViewChild(Content) content: Content;
 scrollPosition: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  location() {
let modal = this.modalCtrl.create('Location');
modal.present();
}


service(id) {
this.navCtrl.push('Service', {id : id});
}

fitness() {
this.navCtrl.push('Fitness');
}

recommended() {
this.navCtrl.push('Recommended');
}





}
