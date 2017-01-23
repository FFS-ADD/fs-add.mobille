import { Component, OnInit } from "@angular/core";
import LoginAction from "./LoginAction";
import { LoginState } from "./LoginState";
import { LoginStore } from "./LoginStore";
import { LoginRequestInterface } from './LoginInterface';

@Component({
  providers: [LoginAction, LoginState, LoginStore],
  templateUrl: "login.html"
})
export class Login implements OnInit {
  private form: LoginRequestInterface;
  constructor(private action: LoginAction, private state: LoginState, private store: LoginStore) {

  }

  public ngOnInit() {
    this.form = { email: "", password: "" }
  }

  public login() {
    console.debug(this.form.email);
    this.action.login(this.form);
  }
}
