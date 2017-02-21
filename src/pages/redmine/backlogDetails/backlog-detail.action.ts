import {Injectable, Inject} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BackLogDetailActionType} from "./backlog-detail.action.type";
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';

@Injectable()
export default class BackLogDetailAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    //let observable = this.httpService.getFakeData('/assets/data/redmine/backLogDetails.json', {});
    let observable = this.httpService.get(this.config.webapiBacklogDetail, {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(BackLogDetailActionType.INIT, data)
    );
    return observable;
  }
}
