import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Editprofile } from '../editprofile/editprofile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  user: any;
  user_params: any;
  newRelation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.user_params = {
      "user_id": "nuwan@gmail.com"
    }

    this.user = { "_id": "59a3ba9d734d1d7ab9ead016", "user_id": "nuwan@gmail.com", "nic": "920123223V", "title": "Mr.", "firstname": "Vindula", "lastname": "Fernando", "birthdate": "1992-01-24", "gender": "Male", "maritalstatus": "Single", "bloodtype": "A+", "alcoholic": true, "phones": { "home": "+94112826896", "mobile": "+94776711781" }, "email": "dinukav.fernando@gmail.com", "address": { "street": "Anderson Road", "city": "Colombo 01", "country": "Sri Lanka" }, "avatar": "no-avatar.jpg", "relations": [{ "first_name": "nushan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "shan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "nun", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Father" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }] };

    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/users/getCurrentUser", this.user_params)
      .subscribe(data => {

        this.user = data.json().data[0];
        console.log(JSON.stringify(this.user));
        try {
          this.newRelation = navParams.get("user");
          console.log(this.newRelation);
          this.addNewRelation(this.newRelation);
        } catch (e) {
          console.log("didnt get the new relation");
        }
        
      }, error => {
        console.log(error);// Error getting the data
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
