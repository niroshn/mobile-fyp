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

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.showChart = false;
    this.title="";
  }
  show(name){
    
    if (name=='bmi'){
      console.log(name);
      this.bmi();
    }
    else if(name=='bp'){

    }
    else if(name =='cholesterol'){
      this.cholesterol();
    }
    

  
  }
  ionViewDidLoad() {
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
