import {Component, OnInit }from "@angular/core";
import {NavController, ModalController }from 'ionic-angular';
import LoginAction from "./login.action";
import {LoginState }from "./login.state";
import {LoginStore }from "./login.store";
import {LoginRequestInterface }from './login.interface';
import {HomePage }from '../../home/home';
import {DataSetting }from '../datasetting/datasetting.component';
import {UserService }from "../../../core/UserService";
import {ModalDialogComponent }from "./modalDialog.component";

@Component( {
  providers:[LoginAction, LoginState, LoginStore],
  templateUrl:"login.html"
})
export class Login implements OnInit {
  private form:LoginRequestInterface;
  constructor(public modalCtrl: ModalController, public navCtrl:NavController, private action:LoginAction, private state:LoginState, private store:LoginStore, private userService:UserService) {

  }

  public ngOnInit() {
    this.form =  {email:"", password:""}
  }

  public login() {
    console.debug("login before");
    let observable = this.action.login(this.form);
    observable.subscribe((data) =>  {
      if (this.userService.getLastLoginTime() == null) {
        this.navCtrl.push(DataSetting, {"perPage" : "login"});
      } else {
        this.navCtrl.push(HomePage);
      }
      // let modal = this.modalCtrl.create(ModalDialogComponent, { userId: 8675309 });
      // modal.present();
    });

  }
}
