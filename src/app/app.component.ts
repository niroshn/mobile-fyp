import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events, MenuController, NavController,NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AwsUtil} from "../providers/aws.service";
import {ControlPanelComponent} from "../pages/controlpanel/controlpanel";
import {LoginComponent} from "../pages/auth/login.component";
import {LogoutComponent} from "../pages/auth/logout.component";
import { Storage } from '@ionic/storage';
import { Home } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public loginPage = LoginComponent;
  public homePage = Home;
  public logoutPage = LogoutComponent;
  public settingsPage = ControlPanelComponent;
  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,
    public awsUtil: AwsUtil,private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.awsUtil.initAwsService();
      
     
      this.storage.get('user').then((val) => {
        console.log('Your age is', val);
        if(val){
          this.rootPage = this.homePage
        }
        else{
          this.rootPage = this.loginPage;
        }
        
      });
      
      console.log("Hiding splash screen");
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.listenToLoginEvents();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.rootPage='Home';
    });


    this.events.subscribe('user:logout', () => {
      
    });
}
}
