import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, ModalController, AlertController, Platform } from 'ionic-angular';
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
  nextMedications: any;
  relations: any;
  userID:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private plt: Platform, private localNotifications: LocalNotifications, private storage: Storage, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.plt.ready().then((rdy) => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.data);
        let alert = this.alertCtrl.create({
          title: notification.title,
          subTitle: json.mydata
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
        this.userID=val._id;
        var email = val['email'];
        console.log(val._id);
        this.user_params = {
          "user_id": val._id
        }
        //here
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
    
        loading.present();
        this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/medication/getMedicationPlan", this.user_params)
          .subscribe(data => {
            console.log(data);
    
            

            if(data.json().data[0].day_plan){
              this.medications = data.json().data[0].day_plan;
            }
            else{
              this.medications = [];
            }
            console.log(this.medications);
            this.getNextMedication(this.medications);
            console.log('nothisg');
            loading.dismiss();
          }, error => {
            console.log(error);// Error getting the data
          });
    
          this.storage.get('user').then((val) => {
            if (val) {
              console.log(val);
              this.relations = val["relations"];
              //here
              console.log("here");
              console.log(this.relations);
            }
            else {
      
            }
      
          });
    
        
      }
      else {

      }

    });
    ////**** */
    this.user_params = {
      "user_id": "5a1662f75220cd000109c096"
    }
    //let c_time = new Time();
   
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
      var time = med["time"];
      var tempDate = this.getNowDate(time);
      if (this.isGreaterNow(tempDate)) {
        console.log(med);
        isSet = 1;
        output = med;
        nextAlarmTime = tempDate;
        break;
      }
    }
    if (isSet == 0) {
      output = AllMedications[0];
      var medOne = AllMedications[0];
      nextAlarmTime = this.getNowDate(medOne['time']);
    }
    this.setAlarm(nextAlarmTime);
    this.nextMedications = output.medications;
    console.log(this.nextMedications);
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
  goBack() {
    this.navCtrl.pop();
  }
  //setAlarm(time: Date) {
  setAlarm(time: Date) {
    this.localNotifications.clearAll();
    this.localNotifications.schedule({
      id: 1,
      title: 'Medication',
      text: 'You have to get Medication at ',
      at: time,
      sound: 'file://assets/alrt.mp3',
      data: { mydata: 'Information' }
    });
  }

  viewMedicationDetails(medicalInfo) {
    console.log("dnd");
    let modal = this.modalCtrl.create('Addpopup', medicalInfo);
    modal.present();


  }

  viewUpcommingMedications(info) {
    let modal = this.modalCtrl.create('Projectlist', info);
    modal.present();
  }

  contact() {
    let msg="Patient had the medication just before :-)";
    let relations = this.relations;
    //console.log(relations);
    for (let l of relations) {
      let massage = {
        "tel": l.tel,
        "sms": msg
      }
      this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/notifications/notifications", massage)
        .subscribe(data => {


        }, error => {
          console.log(error);// Error getting the data
        });
    }
  }

}
