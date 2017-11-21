import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController,ModalController,Content, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})

export class Address {
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.showChart = false;
    this.title="";
    this.charts = [];
    this.chartName ="";
  }
  show(index){
    console.log(index);
    
    if (this.chartName=="health"&&index==0){
      this.weight();
    }
    else  if (this.chartName=="health"&&index==1){
      this.pre();
    }
    else if (this.chartName=="health"&&index==2){
      this.bmi();
    }
    else if (this.chartName=="health"&&index==3){
      this.hight();
    }
    else if (this.chartName=="disease"&&index==0){
      this.cholesterol();
    }
    else if (this.chartName=="disease"&&index==1){
      this.sugerlevel();
    }
    else if (this.chartName=="medication"&&index==0){
      this.appoin();
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

    if(name=='health'){

      this.charts = [{
        name: "Weight",
        pro : "weight"
      },
      {
        name: "Blood Pressure",
        pro : "bld-pre"
      },
      {
        name: "Body Mass Index",
        pro : "bmi"
      },
      {
        name: "Blood Pressure",
        pro : "bld-pre"
      },
    ]
    }
    else if (name=='disease'){
      this.charts = [{
        name: "Cholesterol",
        pro : "cholesterol"
      },
      {
        name: "Diabetic",
        pro : "bld-pre"
      },
      {
        name: "Body Mass Index",
        pro : "bmi"
      },
      {
        name: "Blood Pressure",
        pro : "bld-pre"
      },
    ]

    }
    else if (name=='medication'){
      this.charts = [{
        name: "Appoinments",
        pro : "appoinments"
      },
      {
        name: "Medication Progress",
        pro : "medi-plan"
      },
      {
        name: "Body Mass Index",
        pro : "bmi"
      },
      {
        name: "Blood Pressure",
        pro : "bld-pre"
      },
    ]

    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Address');
            }

            appoin(){
              this.barChart = new Chart(this.lineCanvas.nativeElement, {
                
                           type: 'bar',
                           data: {
                               labels: ["2017-06", "2017-07", "2017-08", "2017-09", "2017-10", "2017-11"],
                               datasets: [{
                                   label: 'Numer of Appoiments',
                                   data: [2, 0, 1, 4, 0, 3],
                                   backgroundColor: [
                                       'rgba(255, 99, 132, 0.2)',
                                       'rgba(255, 99, 132, 0.2)',
                                       'rgba(255, 99, 132, 0.2)',
                                       'rgba(255, 99, 132, 0.2)',
                                       'rgba(255, 99, 132, 0.2)',
                                       'rgba(255, 99, 132, 0.2)'
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

            sugerlevel(){
              this.title ="Sugar Level mmol/L";
              this.userLabel = "Sugar Level varation";
              this.idealLabel = "Dangerous Level";
              this.userData = [138.9, 139, 141, 143, 140, 139.9, 138.8];
              this.idealData =[140, 140, 140, 140, 140, 140, 140];

              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                
                
                           type: 'line',
                           data: {
                               labels: ["January", "February", "March", "April", "May", "June", "July"],
                               datasets: [
                                   {
                                       label: this.userLabel,
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
                                    label: this.idealLabel,
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
            hight(){
              this.title ="Hight (cm)";
              this.userLabel = "Hight";
              
              this.userData = [169, 169, 169, 169, 169, 169, 169];
            

              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                
                
                           type: 'line',
                           data: {
                               labels: ["2017-014-20", "2017-05-20", "2017-07-28", "2017-07-20", "2017-08-20", "2017-09-20", "2017-10-20"],
                               datasets: [
                                   {
                                       label: this.userLabel,
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
                                   }
                               ]
                           }
                
                       });
            }

            weight(){
              this.title ="Weight";
              this.userLabel = "Weight Variation";
              
              this.userData = [65, 67, 67, 67, 68, 67.5, 68];
            

              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                
                
                           type: 'line',
                           data: {
                               labels: ["2017-014-20", "2017-05-20", "2017-07-28", "2017-07-20", "2017-08-20", "2017-09-20", "2017-10-20"],
                               datasets: [
                                   {
                                       label: this.userLabel,
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
                                   }
                               ]
                           }
                
                       });
            }
            pre(){
              this.title ="Blood  Pressure ";
              this.userLabel = "Blood Pressure Variation (Hg/mm)";
              
              this.userData = [165.90, 167, 167, 167, 168, 167.5, 168.89];
            

              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                
                
                           type: 'line',
                           data: {
                               labels: ["2017-014-20", "2017-05-20", "2017-07-28", "2017-07-20", "2017-08-20", "2017-09-20", "2017-10-20"],
                               datasets: [
                                   {
                                       label: this.userLabel,
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
