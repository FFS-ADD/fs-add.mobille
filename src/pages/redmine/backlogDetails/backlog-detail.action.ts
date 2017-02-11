import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BackLogDetailActionType} from "./backlog-detail.action.type";

@Injectable()
export default class BackLogDetailAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/backLogDetails.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(BackLogDetailActionType.INIT, data)
    );
    return observable;
  }
}
