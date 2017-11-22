import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

  @ViewChild('mySlider') slider: Slides;
  currentIndex: any;
  currentUser: any;
  msg: any;
  relations: any;

  constructor(public navCtrl: NavController, private storage: Storage, public http: Http) {


    this.currentIndex = 0;

    this.storage.get('user').then((val) => {
      console.log(val);
      if (val) {
        this.currentUser = val;
        this.msg = this.currentUser.title + " " + this.currentUser.firstname + "  is in Emergency Situation. Lets' Contact now";
        console.log(this.msg);
      }
      else {

      }

    });

    this.storage.get('user').then((val) => {
      console.log('Your age is', val);
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

  onSlideChanged() {

  }
  goToNextSlide() {
    this.slider.slideNext();
    this.currentIndex = this.slider.getActiveIndex();
  }

  signin() {
    this.navCtrl.push('Home');
  }

  emergency() {
    //let relations= this.currentUser.relations;
    let relations = this.relations;
    //console.log(relations);
    for (let l of relations) {
      let massage = {
        "tel": l.tel,
        "sms": this.msg

      }
      this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/notifications/notifications", massage)
        .subscribe(data => {


        }, error => {
          console.log(error);// Error getting the data
        });
    }
  }
  test() {
    let massage = {
      "user_id": "nuwan@gmail.com",
      "date": '2017-11-22T14:56:59.301Z',
      "name": "CRP",
      "desc": "Human Blad ",
      "assigned_by": "nishn@mail.com"
    }
    this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/medication/addNewMedicalTest", massage)
      .subscribe(data => {
        console.log(data);

      }, error => {
        console.log(error);// Error getting the data
      });
  }


}
