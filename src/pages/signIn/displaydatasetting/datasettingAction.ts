import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { DataSettingActionType } from './datasettingActionType';

@Injectable()
export class DataSettingAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService){

  }

  public init(form) {
    console.log('init');
   // let observable = this.httpService.get('datasetting-init.json', form);
    let observable = this.httpService.getFakeData('datasetting-init.json', form);
    observable.subscribe( (data) => this.dispatcher.dispatch(DataSettingActionType.INIT, data));
    return observable;
  }

  public save(form) {
    console.debug("toggle");
    //let observable = this.httpService.post('/auth/mail/password', form);
    let observable = this.httpService.getFakeData('/assets/data/signIn/datasetting-ok.json', form);
    observable.subscribe(
      (data) => {
        this.dispatcher.dispatch(DataSettingActionType.SAVE, data);
      }
    );
    return observable;
  }
}
