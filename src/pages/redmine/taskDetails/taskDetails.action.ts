import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { TaskDetailsActionType } from "./taskDetails.action.type";

@Injectable()
export default class TaskDetailsAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/taskDetails.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(TaskDetailsActionType.INIT, data)
    );
    return observable;
  }
}
