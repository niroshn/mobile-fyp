import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController,ModalController,Content, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-neu',
  templateUrl: 'neu.html',
})

export class Neu {
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  @ViewChild(Content) content: Content;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  title : any;
  showChart:boolean;
  userData : any;
  idealData :any ;
  userLabel : any;
  idealLabel :any;
  labels :any;
  charts : any;
  chartName :any;
  tab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.showChart = false;
    this.title="";
    this.charts = [];
    this.chartName ="";
    /*
    */

   
      
    //
  }
  show(index){
    console.log(index);
    
    if (this.chartName=="health"&&index==1){
      this.bmi();
    }
    else if(name=='bp'){

    }
    else if(name =='cholesterol'){
      this.cholesterol();
    }
    

  
  }

  setChart(name){
    this.charts = [];
    this.chartName =name;

    if(name=='b'){

      this.tab = "break";
    }
    else if (name=='l'){
      this.tab = "lunch";
    }
    else if (name=='d'){
      this.tab = "dinner";
    }

  }
  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      
                 type: 'doughnut',
                 data: {
                     labels: ["Fats", "Protein", "Carbohydrates", "Other"],
                     datasets: [{
                         label: '# of Votes',
                         data: [25, 15, 40, 5],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             
                         ],
                         hoverBackgroundColor: [
                             "#FF6384",
                             "#36A2EB",
                             "#FFCE56",
                             "#FF6384",
                            
                         ]
                     }]
                 }
      
             });
    this.tab = "";
    
    console.log('ionViewDidLoad Address');
            }

            bmi(){
              this.title ="Body Mass Index (BMI)";
              this.userLabel = "Your BMI";
              this.idealData = "Over Weight Level";
              this.userData = [25, 27, 27, 27, 28, 27.5, 28];
              this.idealData =[30, 30, 30, 30, 30, 30, 30];

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
                                       data: this.userData,
                                       spanGaps: false,
                                   },
                                   {
                                    label: "Over Weight",
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: "rgba(153, 102, 255, 0.2)",
                                    borderColor: "rgba(153, 102, 255, 0.2)",
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "rgba(153, 102, 255, 0.2)",
                                    pointBackgroundColor: "#f8f",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(153, 102, 255, 0.2)",
                                    pointHoverBorderColor: "rgba(153, 102, 255, 0.2)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: this.idealData,
                                    spanGaps: false,
                                }
                               ]
                           }
                
                       });
            }
            bloodpressure(){
              this.title ="Blood Pressure";
              this.userLabel = "Your BMI";
              this.idealData = "Over Weight Level";
              this.userData = [25, 27, 27, 27, 28, 27.5, 28];
              this.idealData =[30, 30, 30, 30, 30, 30, 30];
            }

            cholesterol(){
              this.title ="Cholesterol Level (mg/dL)";
              

              this.userData = [25, 27, 27, 27, 28, 27.5, 28];
              this.idealData =[30, 30, 30, 30, 30, 30, 30];
              let userLabel1= "Total";
              let userLabel2= "LDL (BAD)";
              let userLabel3= "HDL (GOOD)";

              let requiredLabel1 = "Total Border Line";
              let requiredData1 = [239, 239, 239, 239, 239, 239, 239];

              let requiredLabel2 ="Total Minimum Border";
              let requiredData2 = [200, 200, 200, 200, 200, 200, 200];

              let requiredLabel3 = "Maximum LDL Border";
              let requiredLabel4 = "Minimum LDL Border";

              let requiredLabel5 = "Maximum HDL Border";
              let requiredLabel6 = "Minimum HDL Border";





              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                
                
                           type: 'line',
                           data: {
                               labels: ["January", "February", "March", "April", "May", "June", "July"],
                               datasets: [
                                   {
                                       label: userLabel1,
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
                                       data: this.userData,
                                       spanGaps: false,
                                   },
                                   {
                                    label: userLabel2,
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
                                    data: this.idealData,
                                    spanGaps: false,
                                },
                                {
                                  label: userLabel3,
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
                                  data: this.idealData,
                                  spanGaps: false,
                              },
                              {
                                label: requiredLabel1,
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
                                data: requiredData1,
                                spanGaps: false,
                            },
                            {
                              label: requiredLabel2,
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
                              data: requiredData2,
                              spanGaps: false,
                          },
                          {
                            label: userLabel3,
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
                            data: this.idealData,
                            spanGaps: false,
                        },
                        {
                          label: requiredLabel4,
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
                          data: this.idealData,
                          spanGaps: false,
                      },
                      {
                        label: requiredLabel5,
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
                        data: this.idealData,
                        spanGaps: false,
                    },
                    {
                      label: requiredLabel6,
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
                      data: this.idealData,
                      spanGaps: false,
                  }
                               ]
                           }
                
                       });
            }
            tab_swap(type) {
              this.tab = type;
             }
        
        
goBack(){
     this.navCtrl.pop();
   }

     payment() {
    this.navCtrl.push('Payment');
  }

   selectaddress() {
    this.navCtrl.push('Selectaddress');
  }



    newaddress() {
let modal = this.modalCtrl.create('Newaddress');
modal.present();
}




}
