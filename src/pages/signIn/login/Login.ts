import {Component, OnInit}from "@angular/core";
import {NavController, ModalController}from 'ionic-angular';
import LoginAction from "./login.action";
import {LoginState}from "./login.state";
import {LoginStore}from "./login.store";
import {LoginRequestInterface}from './login.interface';
import {HomePage}from '../../home/home';
import {DataSetting}from '../datasetting/datasetting.component';
import {UserService}from "../../../core/UserService";
import {ModalDialogComponent}from "./../../../core/modalDialog.component.ts";

@Component({
  providers: [LoginAction, LoginState, LoginStore],
  templateUrl: "login.html"
})
export class Login implements OnInit {
  private form: LoginRequestInterface;

  constructor(private modalCtrl: ModalController,
                private navCtrl: NavController,
                private action: LoginAction,
                private state: LoginState,
                private store: LoginStore,
                private userService: UserService) {
  }

  public ngOnInit() {
    this.form = {username: "", password: "", grant_type: null}
  }

  public login() {
    this.form.grant_type = "password";
    this.action.clear();
    this.action.login(this.form).subscribe(
      null, null,
      () => {
        if (this.state.success === true) {
          this.userService.setUsername(this.form.username);
          console.log(this.userService.getLastLoginTime());
          if (this.userService.getLastLoginTime() == null
            || this.userService.getLastLoginTime() == undefined
            || this.userService.getLastLoginTime() == '') {
            this.navCtrl.push(DataSetting, {"perPage": "login"});
          } else {
            this.navCtrl.push(HomePage);
          }
        }
      });
  }
}
