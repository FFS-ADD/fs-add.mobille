import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { QaDetailsActionType } from "./qaDetails.action.type";

@Injectable()
export default class QaDetailsAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/qaDetails.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(QaDetailsActionType.INIT, data)
    );
    return observable;
  }
}
