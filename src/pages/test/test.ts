import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ModalController,AlertController,Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Calendar } from '@ionic-native/calendar';
import { AlarmNotifications } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  tab: any;
  medications: any;
  user_params: any;
  Storage: Storage;
  nextMedications : any;
  userID:any;


  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public alertCtrl:AlertController,private plt:Platform, private localNotifications: LocalNotifications, private storage: Storage, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.plt.ready().then((rdy)=>{
      this.localNotifications.on('click',(notification,state)=>{
        let json=JSON.parse(notification.data);
        let alert=this.alertCtrl.create({
          title:notification.title,
          subTitle:json.mydata
        });
        alert.present();
      });
    });
    this.storage = storage;
    this.storage.get('user').then((val) => {
      console.log('Your age is', val);
      if (val) {
        //console.log(val);
        //this.user = val;
        this.userID=val['_id'];
        // var email = val['email'];
        // console.log(email);
        this.user_params = {
          "user_id": this.userID
        }
        //here
        loading.dismiss();
      }
      else {

      }

    });


    this.user_params = {
      "user_id": this.userID
    }
    //let c_time = new Time();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/medication/getMedicalTests", this.user_params)
      .subscribe(data => {

        this.medications = data.json().data;
        console.log(this.medications);
        
        console.log('nothisg');
        loading.dismiss();
      }, error => {
        console.log(error);// Error getting the data
      });

      //let d=this.getNowDate("19:30:00");
      //this.setAlarm(d);
      //console.log(new Date(new Date().getTime() + 5 * 1000));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myproject');
    this.tab = "active";
  }
  goBack(){
    this.navCtrl.pop();
  }

  tab_swap(type) {
    this.tab = type;
  }



  projectlist() {
    this.navCtrl.push('Projectlist');
  }

  
  viewMedicationDetails(medicalInfo) {
    let modal = this.modalCtrl.create('Addpopup',medicalInfo);
    modal.present();


    }

}
