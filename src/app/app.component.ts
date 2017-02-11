import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from "../pages/signIn/login/Login";
import { HomePage } from '../pages/home/home';
import { DataSetting } from '../pages/signIn/datasetting/datasetting.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav;
  rootPage = Login;
  //rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public openPage() {
  
  }

  public datasetting() {
    this.nav.push(DataSetting, {"perPage" : "setting"});
  }
}
