import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Contact} from '../contact/contact';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

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

  user:any;

  userId:any;

  constructor(public navCtrl: NavController, private storage: Storage,public navParams: NavParams, public viewCtrl: ViewController,public http: Http) {
    this.storage.get('user').then((val) => {
      console.log('Your age is', val);
      if(val){
        console.log(val);
        this.user = val;
        console.log(JSON.stringify(this.user));
            try {
              this.userId=navParams.get("user_id");
            } catch (e) {
              console.log("didnt get the new relation");
            }
        //here 
      }
      else{
        
      }
      
    });
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
    this.navCtrl.push(Contact,{
      user:{"first_name":this.firstName,"last_name":this.lastName,"address":this.address,"tel":this.telephone,"relation":this.relation}
    });



    //add api
    let massage = {
      "user_id":this.userId,
      "new_relation":{
        "first_name":this.firstName,
        "last_name":this.lastName,
        "address":this.address,
        "tel":this.telephone,
        "relation":this.relation
      }
    }
    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/users/addNewRelation", massage)
      .subscribe(data => {
        console.log("----------");
        
        this.user.relations.push({
          "first_name":this.firstName,
          "last_name":this.lastName,
          "address":this.address,
          "tel":this.telephone,
          "relation":this.relation
        });
        this.storage.set('user',this.user);
        console.log(this.user.relations);
      }, error => {
        console.log(error);// Error getting the data
      });

  }

}
