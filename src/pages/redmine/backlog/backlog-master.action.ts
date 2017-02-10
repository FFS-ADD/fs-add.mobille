import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BackLogMasterActionType} from "./backlog-master.action.type";

@Injectable()
export default class BackLogMasterAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let data = {
      "status": "SUCCESS",
      "result": {
        "completed": 238,
        "backLogTotal": 460,
        "initValue": 10955,
        "planedValue": 5000,
        "reportedValue": 5490,
        "balanceStatus": false
      }
    };
    // let observable = this.httpService.get('./data/bug-init.json', {});
    // observable.subscribe(
    //   data => {
        if (data.status === "SUCCESS") {
          this.dispatcher.dispatch(BackLogMasterActionType.INIT, data)
        }
    //   }
    // );
  }
}
