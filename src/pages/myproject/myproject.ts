import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController,Platform } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,private plt:Platform, private localNotifications: LocalNotifications, private storage: Storage, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
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

      //let d=this.getNowDate("19:30:00");
      //this.setAlarm(d);
      //console.log(new Date(new Date().getTime() + 5 * 1000));
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

  //return the next medication array. should provide the medication array as input paramenters.
  getNextMedication(AllMedications: Array<any>) {
    var isSet = 0;
    var output;
    var nextAlarmTime;
    for (var i = 0; i < AllMedications.length; i++) {
      var med = AllMedications[i];
      //console.log(med["time"]);
      //let date = new Date();
      var time = med["time"];
      var tempDate = this.getNowDate(time);
      if (this.isGreaterNow(tempDate)) {
        console.log(med);
        isSet = 1;
        output = med;
        nextAlarmTime=tempDate;
        break;
      }
    }
    if (isSet == 0) {
      output = AllMedications[0];
      var medOne=AllMedications[0];
      nextAlarmTime=this.getNowDate(medOne['time']);
    }
    this.setAlarm(nextAlarmTime);
    return output;
  }

  getNowDate(time: String) {
    let date = new Date();
    //var t="06:26:10";
    var t = time;
    var sp = t.split(":");
    date.setHours(parseInt(sp[0]), parseInt(sp[1]), parseInt(sp[2]));
    console.log(date);
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
//setAlarm(time: Date) {
  setAlarm(time:Date) {
    this.localNotifications.clearAll();
    this.localNotifications.schedule({
      id:1,
      title:'Medication',
      text: 'You have to get Medication at ',
      at:time,
      data: {mydata:'Information'}
    });
  }

}
