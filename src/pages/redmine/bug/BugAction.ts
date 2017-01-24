import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BugActionType} from './BugActionType';

@Injectable()
export default class BugAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  //
  public login(form) {
    //let observable = this.httpService.post('/auth/mail/password', form);
    let observable = this.httpService.get('manifest.json', form);
    observable.subscribe(
      data => this.dispatcher.dispatch(BugActionType.LOGIN, data)
    );
  }
}
