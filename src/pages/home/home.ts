
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,ModalController,Content, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class Home {

@ViewChild(Content) content: Content;
@ViewChild('barCanvas') barCanvas;
@ViewChild('doughnutCanvas') doughnutCanvas;
@ViewChild('lineCanvas') lineCanvas;

barChart: any;
doughnutChart: any;
lineChart: any;


 scrollPosition: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  
  ionViewDidLoad() {
    
           this.barChart = new Chart(this.barCanvas.nativeElement, {
    
               type: 'bar',
               data: {
                   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                   datasets: [{
                       label: '# of Votes',
                       data: [12, 19, 3, 5, 2, 3],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           'rgba(153, 102, 255, 1)',
                           'rgba(255, 159, 64, 1)'
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                               beginAtZero:true
                           }
                       }]
                   }
               }
    
           });
          }

  
               location() {
let modal = this.modalCtrl.create('Location');
modal.present();
}


service(id) {
this.navCtrl.push('Service', {id : id});
}

fitness() {
this.navCtrl.push('Fitness');
}

recommended() {
this.navCtrl.push('Recommended');
}





}
