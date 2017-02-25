import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { LoginState } from "./login.state";
import { LoginActionType } from "./login.action.type";
import {UserService} from "../../../core/UserService";

@Injectable()
export class LoginStore {
  constructor(private dispatcher: Dispatcher, private state: LoginState, private userService: UserService) {
    this.dispatcher.bindActions({
      type: LoginActionType.LOGIN,
      instance: this,
      handler: this.login
    });
  }

  public login(data) {
    console.debug("login store");
    if (data.status === 1) {
      this.state.success = true;
      this.state.response = data.result;
      this.userService.setAccessToken(this.state.response.access_token);
      this.userService.setTokenType(this.state.response.token_type);
      this.userService.setRefreshToken(this.state.response.refresh_token);
      this.userService.setExpiresIn(this.state.response.expires_in);
      this.userService.setScope(this.state.response.scope);
      this.userService.storeToken();
    } else {
      this.state.success = false;
    }
  }
}
