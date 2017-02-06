import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../../core/Dispatcher";
import {HttpService} from "../../../../core/HttpService";
import {BackLogDetailActionType} from "./backlog-detail.action.type";

@Injectable()
export default class BackLogDetailAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let data = {
      "status": "SUCCESS",
      "result": {
        "new": 15,
        "inProgress": 9,
        "fixed": 6,
        "retesting": 3,
        "close": 8
      }
    };
    // let observable = this.httpService.get('./data/bug-init.json', {});
    // observable.subscribe(
    //   data => {
        if (data.status === "SUCCESS") {
          this.dispatcher.dispatch(BackLogDetailActionType.INIT, data)
        }
    //   }
    // );
  }
}
