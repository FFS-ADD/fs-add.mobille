import {Injectable, Inject} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {QaActionType} from './qa.action.type';
import {APP_CONFIG, IAppConfig} from '../../../config/app.config';

@Injectable()
export default class QaAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    // let observable = this.httpService.get(this.config.webapiQaOverview, {});
    let observable = this.httpService.getFakeData('assets/data/redmine/qa.json', {});
    observable.subscribe(
      (response) => this.dispatcher.dispatch(QaActionType.INIT, response)
    );
    return observable;
  }
}
