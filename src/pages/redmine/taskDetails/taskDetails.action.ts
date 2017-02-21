import { Injectable, Inject } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { TaskDetailsActionType } from "./taskDetails.action.type";
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';


@Injectable()
export default class TaskDetailsAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    //let observable = this.httpService.getFakeData('/assets/data/redmine/taskDetails.json', {});
    let observable = this.httpService.get(this.config.webapiTaskDetail, {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(TaskDetailsActionType.INIT, data)
    );
    return observable;
  }
}
