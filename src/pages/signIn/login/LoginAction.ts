import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {LoginActionType} from './LoginActionType';

@Injectable()
export default class LoginAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  //
  public login(form) {
    //let observable = this.httpService.post('/auth/mail/password', form);
    let observable = this.httpService.get('manifest.json', form);
    observable.subscribe(
      data => this.dispatcher.dispatch(LoginActionType.LOGIN, data)
    );
  }
}
