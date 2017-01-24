import { Component, OnInit } from "@angular/core";
import { NavController } from 'ionic-angular';
import LoginAction from "./LoginAction";
import { LoginState } from "./LoginState";
import { LoginStore } from "./LoginStore";
import { LoginRequestInterface } from './LoginInterface';
import { HomePage } from '../../home/home';

@Component({
  providers: [LoginAction, LoginState, LoginStore],
  templateUrl: "login.html"
})
export class Login implements OnInit {
  private form: LoginRequestInterface;
  constructor(public navCtrl: NavController, private action: LoginAction, private state: LoginState, private store: LoginStore) {

  }

  public ngOnInit() {
    this.form = { email: "", password: "" }
  }

  public login() {
    console.debug("login before");
    let observable = this.action.login(this.form);
    observable.subscribe((data) => {
      // this.navCtrl.push(HomePage);
    });
    this.navCtrl.push(HomePage);
  }
}
