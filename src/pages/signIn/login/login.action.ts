import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {LoginActionType} from './login.action.type';

@Injectable()
export default class LoginAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public login(form) {
    console.debug("login action start.");
    let observable = this.httpService.post('/oauth/token', form, false);
    // let observable = this.httpService.getFakeData('/assets/data/signIn/login.json', form);
    observable.subscribe(
      (data) => {
        this.dispatcher.dispatch(LoginActionType.LOGIN, data);
      });
    return observable;
  }
}
