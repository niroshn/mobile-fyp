import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  user : any;
  user_params : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http: Http) {
   

  this.user_params = {
      "user_id": "nuwan@gmail.com"
  }

  this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/users/getCurrentUser", this.user_params)
  .subscribe(data => {
   
    this.user = data.json().data[0];
    console.log(this.user);
   }, error => {
    console.log(error);// Error getting the data
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

      editprofile() {
let modal = this.modalCtrl.create('Editprofile');
modal.present();
}


}
