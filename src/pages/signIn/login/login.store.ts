import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { LoginState } from "./login.state";
import { LoginActionType } from "./login.action.type";
import {UserService} from "../../../core/UserService";

@Injectable()
export class LoginStore {
  constructor(private dispatcher:Dispatcher, private state:LoginState, private userService:UserService) {
    this.dispatcher.bindActions({
        type: LoginActionType.LOGIN,
        instance: this,
        handler: this.login
      },
      {
        type: LoginActionType.CLEAR,
        instance: this,
        handler: this.clear
      },
      {
        type: LoginActionType.USER,
        instance: this,
        handler: this.getUser
      });
  }

  public login(data) {
    console.debug("login store");
    console.debug(data);

    this.state.success = true;
    this.state.response = data;
    this.userService.setAccessToken(this.state.response.access_token);
    this.userService.setTokenType(this.state.response.token_type);
    this.userService.setRefreshToken(this.state.response.refresh_token);
    this.userService.setExpiresIn(this.state.response.expires_in);
    this.userService.setScope(this.state.response.scope);
    this.userService.storeToken();

  }

  public clear() {
    this.state.success = false;
    this.userService.setAccessToken(null);
    this.userService.storeToken();
  }

  public getUser(data) {
    this.state.response.user = data.data;
    this.userService.setUsername(this.state.response.user.email);
    this.userService.setName(this.state.response.user.lastName + " " + this.state.response.user.firstName);
    this.userService.setAvatar(this.state.response.user.avatar);
    this.userService.setRole(this.state.response.user.role);
    this.userService.setProject(this.state.response.user.project);
    this.userService.setStatus(this.state.response.user.status);
    this.userService.storeUser();
  }
}
