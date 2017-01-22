import {Component} from "@angular/core";
import LoginAction from "./LoginAction";
import {LoginState} from "./LoginState";

@Component({
  providers: [LoginAction, LoginState],
  templateUrl: "loginComponent.html"
})
export class LoginComponent {
  private form;
  constructor(private action:LoginAction, private state:LoginState) {
  }

  public login() {
    console.log("LoginComponent#login");
    this.action.login({email: "test@123.com", password: "p@ssword"});
  }
}
