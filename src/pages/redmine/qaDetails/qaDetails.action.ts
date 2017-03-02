import { Injectable, Inject } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { QaDetailsActionType } from "./qaDetails.action.type";
import { QaActionType } from './qa.action.type';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';

@Injectable()
export default class QaDetailsAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    let observable = this.httpService.getFakeData('/assets/data/redmine/qaDetails.json', {});
    // let observable = this.httpService.get(this.config.webapiQaDetail, {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(QaDetailsActionType.INIT, data)
    );
    return observable;
  }
}
