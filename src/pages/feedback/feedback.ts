import { Component } from '@angular/core';
import { IonicPage, NavController,PopoverController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class Feedback {
    name : any;
    address : any;
    user_params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public http: Http) {
    this.name = navParams.get('first_name')+" "+navParams.get('last_name') ;
    this.address  = navParams.get('address') ;
    this.user_params = {
      "user_id": "nuwan@gmail.com"
    }
    
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
   sendmassage(tel){
    let massage = {  
      "tel":"94772080907",
      "sms":"This is test message"
   
   }
   
    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/notifications/notifications", massage)
    .subscribe(data => {


    }, error => {
      console.log(error);// Error getting the data
    });
   }

}
