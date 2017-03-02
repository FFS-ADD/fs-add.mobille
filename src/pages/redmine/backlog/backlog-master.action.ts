import {Injectable, Inject} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BackLogMasterActionType} from "./backlog-master.action.type";
import {APP_CONFIG, IAppConfig} from '../../../config/app.config';

@Injectable()
export default class BackLogMasterAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/backLog.json', {});
    //let observable = this.httpService.get(this.config.webapiBacklogOverview, {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(BackLogMasterActionType.INIT, data)
    );
    return observable;
  }
}
