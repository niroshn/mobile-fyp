import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-myproject',
  templateUrl: 'myproject.html',
})
export class Myproject {
tab:any;
medications : any;
user_params : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http: Http) {

    this.user_params = {
      "user_id": "nuwan@gmail.com"
  }

    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/users/getCurrentUser", this.user_params)
    .subscribe(data => {
     
      this.medications = data.json().data[0];
      console.log(this.medications);
     }, error => {
      console.log(error);// Error getting the data
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myproject');
	 this.tab = "active";
  }
  
  tab_swap(type) {
      this.tab = type;
     }
	 
	 
	 
projectlist() {
this.navCtrl.push('Projectlist');
}

}
