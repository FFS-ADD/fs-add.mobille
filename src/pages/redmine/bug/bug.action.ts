import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BugActionType} from './bug.action.type';

@Injectable()
export default class BugAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('./assets/data/redmine/bugInit.json', {});
    observable.subscribe(
      data => {
        if (data.status === 1) {
          this.dispatcher.dispatch(BugActionType.INIT, data)
        }
      }
    );
  }
}
