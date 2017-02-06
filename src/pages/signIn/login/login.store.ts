import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { LoginState } from "./login.state";
import { LoginActionType } from "./login.action.type";

@Injectable()
export class LoginStore {
  constructor(private dispatcher: Dispatcher, private state: LoginState) {
    this.dispatcher.bindActions({
      type: LoginActionType.LOGIN,
      instance: this,
      handler: this.login
    });
  }

  public login(data) {
    console.debug("LoginStore");
    if (data.status === 1) {
      this.state.success = true;
    } else {
      this.state.success = false;
    }
  }
}
