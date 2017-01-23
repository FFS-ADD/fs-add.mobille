import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { LoginState } from "./LoginState";
import { LoginActionType } from "./LoginActionType";

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
    console.debug(data);
    if (data.status === "SUCCESS") {
      this.state.success = true;
    } else {
      this.state.success = false;
    }
  }
}
