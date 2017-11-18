import { Component,ViewChild } from '@angular/core';
import { IonicPage,NavController,Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-emegency',
  templateUrl: 'emegency.html'
})
export class Emegency{

@ViewChild('mySlider') slider: Slides;
currentIndex:any;

  constructor(public navCtrl: NavController) {

this.currentIndex = 0;
  }

  onSlideChanged() {

  }
  goToNextSlide() {
  	  this.slider.slideNext();
      this.currentIndex = this.slider.getActiveIndex();
    }

    signin() {
this.navCtrl.push('Signin');
}



}
