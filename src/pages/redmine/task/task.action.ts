import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { TaskActionType } from './task.action.type';

@Injectable()
export default class TaskAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    // let observable = this.httpService.get('./data/task-init.json', {});
    let observable = this.httpService.getFakeData('/assets/data/redmine/task.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(TaskActionType.INIT, data)
    );
    return observable;
  }
}
