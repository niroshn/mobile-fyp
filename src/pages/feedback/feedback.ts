import { Component } from '@angular/core';
import { IonicPage, NavController,PopoverController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class Feedback {
    name : any;
    address : any;
    user_params: any;
    massage : any;
    phone:any;
    user:any;

  constructor(public navCtrl: NavController, private storage: Storage,public navParams: NavParams,public popoverCtrl: PopoverController,public http: Http) {
    this.name = navParams.get('first_name')+" "+navParams.get('last_name') ;
    this.address  = navParams.get('address') ;
    this.phone=navParams.get('tel');
    console.log(this.phone);
    this.user_params = {
      "user_id": "nuwan@gmail.com"
    }

    // this.storage.get('user').then((val) => {
    //   console.log('Your age is', val);
    //   if(val){
    //     console.log(val);
    //     this.user = val;
    //     //here
    //     this.phone=val[""]
    //   }
    //   else{
        
    //   }
      
    // });
    
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
   sendmassage(){

     let msg = "Your Mom Says : "+ this.massage;
    let massage = {  
      "tel":this.phone,
      "sms":msg
   
   }
   
    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/notifications/notifications", massage)
    .subscribe(data => {
      this.navCtrl.push('Profile');

    }, error => {
      console.log(error);// Error getting the data
    });
   }

}
