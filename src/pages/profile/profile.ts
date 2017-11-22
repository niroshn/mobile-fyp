import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController,NavParams, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Editprofile } from '../editprofile/editprofile';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  user: any;
  user_params: any;
  newRelation: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private storage: Storage,public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.user_params = {
      "user_id": "nuwan@gmail.com"
    }
        this.user = { "_id": "59a3ba9d734d1d7ab9ead016", "user_id": "nuwan@gmail.com", "nic": "920123223V", "title": "Mr.", "firstname": "Vijhkuhndula", "lastname": "Fernalkijihndo", "birthdate": "1992-01-24", "gender": "Male", "maritalstatus": "Single", "bloodtype": "A+", "alcoholic": true, "phones": { "home": "+94112826896", "mobile": "+94776711781" }, "email": "dinukav.fernando@gmail.com", "address": { "street": "Anderson Road", "city": "Colombo 01", "country": "Sri Lanka" }, "avatar": "no-avatar.jpg", "relations": [{ "first_name": "nushan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "shan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "nun", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Father" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }] };

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.storage.get('user').then((val) => {
      console.log('Your age is', val);
      if(val){
        console.log(val);
        this.user = val;
        //here
        loading.dismiss(); 
      }
      else{
        
      }
      
    });

    

     
  }

  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  editprofile() {
    let modal = this.modalCtrl.create('Editprofile');
    modal.present();
  }

  addNewRelation(relation: any) {
    var abc = this.user["relations"];
    if(relation!=null){
      abc.push(relation);
      console.log(this.user);
    }
  }

  contact(user){
    console.log(user);
    let modal = this.modalCtrl.create('Feedback',user);
    modal.present();
  }


}
