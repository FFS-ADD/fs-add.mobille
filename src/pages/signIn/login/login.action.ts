import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { LoginActionType } from './login.action.type';

@Injectable()
export default class LoginAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public login(form) {
    console.debug("LoginAction");
    //let observable = this.httpService.post('/auth/login', form);
    let observable = this.httpService.get('/assets/data/signIn/login.json', form);
    observable.subscribe(
      (data) => {
        this.dispatcher.dispatch(LoginActionType.LOGIN, data);
      }
    );
    return observable;
  }
}
