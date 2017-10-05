import { Component } from '@angular/core';
import { IonicPage,ModalController,NavController,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'tabcomponent',
  templateUrl: 'tabcomponent.html'
})
export class Tabcomponent 
{
 constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController) {}
 
 
 profile() {
this.navCtrl.push('Profile');
}

myproject() {
this.navCtrl.push('Myproject');
}

message() {
this.navCtrl.push('Message');
}

home() {
this.navCtrl.push('Home');
}


}
