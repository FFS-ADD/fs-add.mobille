import { Injectable, Inject } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { TaskActionType } from './task.action.type';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';

@Injectable()
export default class TaskAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    // let observable = this.httpService.get('./data/task-init.json', {});
    //let observable = this.httpService.getFakeData('/assets/data/redmine/task.json', {});
    let observable = this.httpService.get(this.config.webapiTaskOverview, {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(TaskActionType.INIT, data)
    );
    return observable;
  }
}
