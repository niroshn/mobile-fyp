import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Calendar } from '@ionic-native/calendar';
import { AlarmNotifications } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-myproject',
  templateUrl: 'myproject.html',
})
export class Myproject {
  tab: any;
  medications: any;
  user_params: any;
  Storage: Storage;
  localNotifications: LocalNotifications;
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private storage: Storage, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.storage = storage;
    this.user_params = {
      "user_id": "nuwan@gmail.com"
    }
    //let c_time = new Time();

    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/medication/getMedicationPlan", this.user_params)
      .subscribe(data => {

        this.medications = data.json().data[0].day_plan;
        console.log(this.medications);
        this.getNextMedication(this.medications);
        console.log('nothisg');
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

  getNextMedication(AllMedications: Array<any>) {
    var isSet = 0;
    var output;
    for (var i = 0; i < AllMedications.length; i++) {
      var med = AllMedications[i];
      //console.log(med["time"]);
      let date = new Date();
      var time = med["time"];
      var tempDate = this.getNowDate(time);
      if (this.isGreaterNow(tempDate)) {
        console.log(med);
        isSet = 1;
        output = med;
        break;
      }
    }
    if (isSet == 0) {
      output = AllMedications[0];
    }
    return output;
  }

  getNowDate(time: String) {
    let date = new Date();
    //var t="06:26:10";
    var t = time;
    var sp = t.split(":");
    date.setHours(parseInt(sp[0]), parseInt(sp[1]), parseInt(sp[2]));
    return date;
  }
  isGreaterNow(date: Date) {
    //compare the diven date with today and return true if after now 
    let now = new Date();
    if (date > now) {
      //console.log("Greater");
      return true;
    }
    else {
      //console.log("less");
      return false;
    }
  }

  setAlarm(time: Date) {
    this.localNotifications.clearAll();
    this.localNotifications.schedule({
      text: 'Medication time!',
      at: new Date(time),
      data: { message: 'json containing app-specific information to be posted when alarm triggers' }
    });
  }

}
