import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BackLogMasterActionType} from "./backlog-master.action.type";

@Injectable()
export default class BackLogMasterAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/backLog.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(BackLogMasterActionType.INIT, data)
    );
    return observable;
  }
}
