import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { QaActionType } from './qa.action.type';

@Injectable()
export default class QaAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    // let observable = this.httpService.get('./data/qa-init.json', {});
    let observable = this.httpService.get('/assets/data/redmine/qa.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(QaActionType.INIT, data)
    );
    return observable;
  }
}
