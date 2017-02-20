import {Injectable, Inject} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {BugDetailsActionType} from "./bug-details.action.type";
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';

@Injectable()
export default class BugDetailsAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService, @Inject(APP_CONFIG) private config: IAppConfig)  {
  }

  public init() {
    //let observable = this.httpService.getFakeData('./assets/data/redmine/bugDetailsInit.json', {});
    let observable = this.httpService.get(this.config.webapiIssueDetail, {});
    observable.subscribe(
      data => {
        if (data.status === 1) {
          this.dispatcher.dispatch(BugDetailsActionType.INIT, data)
        }
      }
    );
  }
}
