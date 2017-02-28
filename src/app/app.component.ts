import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Login } from "../pages/signIn/login/Login";
import { HomePage } from '../pages/home/home';
import { DataSetting } from '../pages/signIn/datasetting/datasetting.component';
import { UserService } from "../core/UserService";
import { Events } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;
  rootPage = Login;
  private username: string;
  private avatar: string;

  constructor(platform: Platform, private userService: UserService, private events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.listenHomeEvents();
    });
  }

  public logout() {
    this.nav.popToRoot();
  }

  public userSetting() {
  
  }

  public passwordReset() {

  }

  public dataSetting() {
    this.nav.push(DataSetting, {"perPage" : "setting"});
  }

  public listenHomeEvents() {
      this.events.subscribe('home:getuserinfo', () => {
        this.username = this.userService.getName();
        this.avatar = this.userService.getAvatar();
      });
  }


}
