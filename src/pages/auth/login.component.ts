import {Component} from "@angular/core";
import {CognitoCallback, LoggedInCallback} from "../../providers/cognito.service";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {UserLoginService} from "../../providers/userLogin.service";
import {EventsService} from "../../providers/events.service";
import {ControlPanelComponent} from "../controlpanel/controlpanel";
import {Home} from "../home/home";
import {RegisterComponent} from "./register.component";
import {ForgotPasswordStep1Component} from "./forgotPassword1.component";
import {LogoutComponent} from "../pages/auth/logout.component";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
@Component({
    templateUrl: 'login.html'
})
export class LoginComponent implements CognitoCallback, LoggedInCallback {
    email: string;
    password: string;
    user: any;
    user_params: any;
    constructor(public nav: NavController,
                public navParam: NavParams,
                public alertCtrl: AlertController,
                public userService: UserLoginService,
                public eventService: EventsService,
                public http: Http,
                private storage: Storage) {
        console.log("LoginComponent constructor");
        if (navParam != null && navParam.get("email") != null)
            this.email = navParam.get("email");

    }

    ionViewLoaded() {
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    }

    signMeIn() {
        console.log("in onLogin");
        if (this.email == null || this.password == null) {
            this.doAlert("Error", "All fields are required");
            return;
        }
        this.userService.authenticate(this.email, this.password, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.doAlert("Error", message);
            console.log("result: " + message);
        } else { //success
            console.log("Redirect to ControlPanelComponent");
            this.user_params = {
                "user_id": "nuwan@gmail.com"
              }
          
              this.user = { "_id": "59a3ba9d734d1d7ab9ead016", "user_id": "nuwan@gmail.com", "nic": "920123223V", "title": "Mr.", "firstname": "Vindula", "lastname": "Fernando", "birthdate": "1992-01-24", "gender": "Male", "maritalstatus": "Single", "bloodtype": "A+", "alcoholic": true, "phones": { "home": "+94112826896", "mobile": "+94776711781" }, "email": "dinukav.fernando@gmail.com", "address": { "street": "Anderson Road", "city": "Colombo 01", "country": "Sri Lanka" }, "avatar": "no-avatar.jpg", "relations": [{ "first_name": "nushan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "shan", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Brother" }, { "first_name": "nun", "last_name": "Bandra", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080907", "relation": "Father" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }, { "first_name": "nushani", "last_name": "Bond", "address": "No 89/9 Mihin Road Colombo 3", "tel": "+94772080909", "relation": "Sister" }] };
          
              this.http.post("https://r0wl6iaxea.execute-api.us-east-1.amazonaws.com/dev/users/getCurrentUser", this.user_params)
                .subscribe(data => {
          
                  this.user = data.json().data[0];
                  this.storage.set('user', this.user);
                  console.log(JSON.stringify(this.user));
                  try {
                    this.nav.setRoot('Home');
                  } catch (e) {
                    console.log("didnt get the new relation");
                  }
                  
                }, error => {
                  console.log(error);// Error getting the data
                });
          
            
        }
    }

    isLoggedInCallback(message: string, isLoggedIn: boolean) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            this.nav.setRoot(ControlPanelComponent);
        }
    }

    navToRegister() {
        this.nav.push(RegisterComponent);
    }

    navToForgotPassword() {
        this.nav.push(ForgotPasswordStep1Component);
    }

    doAlert(title: string, message: string) {

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

}