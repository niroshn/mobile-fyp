
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

    /*
    
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

           this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            
                       type: 'line',
                       data: {
                           labels: ["January", "February", "March", "April", "May", "June", "July"],
                           datasets: [
                               {
                                   label: "My First dataset",
                                   fill: false,
                                   lineTension: 0.1,
                                   backgroundColor: "rgba(75,192,192,0.4)",
                                   borderColor: "rgba(75,192,192,1)",
                                   borderCapStyle: 'butt',
                                   borderDash: [],
                                   borderDashOffset: 0.0,
                                   borderJoinStyle: 'miter',
                                   pointBorderColor: "rgba(75,192,192,1)",
                                   pointBackgroundColor: "#fff",
                                   pointBorderWidth: 1,
                                   pointHoverRadius: 5,
                                   pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                   pointHoverBorderColor: "rgba(220,220,220,1)",
                                   pointHoverBorderWidth: 2,
                                   pointRadius: 1,
                                   pointHitRadius: 10,
                                   data: [65, 59, 80, 81, 56, 55, 40],
                                   spanGaps: false,
                               },
                               {
                                label: "My Second dataset",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#ffd",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [69, 19, 0, 1, 6, 5, 4],
                                spanGaps: false,
                            }
                           ]
                       }
            
                   });

                   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                    
                               type: 'doughnut',
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
                                       hoverBackgroundColor: [
                                           "#FF6384",
                                           "#36A2EB",
                                           "#FFCE56",
                                           "#FF6384",
                                           "#36A2EB",
                                           "#FFCE56"
                                       ]
                                   }]
                               }
                    
                           });

                           */
            
          }

  
               location() {
let modal = this.modalCtrl.create('Location');
modal.present();
}


service(id) {

    if(id==1){
        this.navCtrl.push('Myproject');
    }
    else if(id==2){
        this.navCtrl.push('Neu');
    }
    else if(id==3){
        this.navCtrl.push('Test');
    }
    else if(id==4){
        this.navCtrl.push('Address');
    }
    else if (id ==6){
        this.navCtrl.push('Profile');
    }
    else if (id ==8){
        this.navCtrl.push('Intro');
    }
    else if (id ==9){
        this.navCtrl.push('Contact');
    }

}

fitness() {
this.navCtrl.push('Fitness');
}

recommended() {
this.navCtrl.push('Recommended');
}





}
