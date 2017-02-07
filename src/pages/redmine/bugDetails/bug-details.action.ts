import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BugDetailsActionType} from "./bug-details.action.type";

@Injectable()
export default class BugDetailsAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let observable = this.httpService.get('./assets/data/redmine/bugDetailsInit.json', {});
    observable.subscribe(
      data => {
        if (data.status === 1) {
          this.dispatcher.dispatch(BugDetailsActionType.INIT, data)
        }
      }
    );
  }
}
