import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content,Slides, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class Service {

showPrev:any;
showNext:any;
currentIndex:any;

 @ViewChild(Content) content: Content;
@ViewChild('mySlider') slider: Slides;

  slidertab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  let id = this.navParams.get("id");
  this.slidertab = id;
  console.log("id", id);
  setTimeout(() => {
  this.goToSlide(id);

  }, 500)


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Service');
  }

  goToSlide(id) {
    this.slider.slideTo(id, 500);
  }

  slideChanged() {
   let currentIndex = this.slider.getActiveIndex();
   this.slidertab = currentIndex;
 	console.log("Current index is", currentIndex);
 }



  goBack(){
     this.navCtrl.pop();
   }

}
