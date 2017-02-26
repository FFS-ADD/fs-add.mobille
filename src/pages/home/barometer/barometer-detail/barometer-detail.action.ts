import { Injectable, Inject } from "@angular/core";
import {Dispatcher} from "../../../../core/Dispatcher";
import {HttpService} from "../../../../core/HttpService";
import { APP_CONFIG, IAppConfig } from '../../../../config/app.config';
import { BaroMeterDetailActionType } from './barometer-detail.action.type';

@Injectable()
export default class BarometerDetailAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    let observableOverview = this.httpService.get(this.config.webapiProjectEventsAll, {});
    observableOverview.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(BaroMeterDetailActionType.INIT, response.data)
        }
      });
  }
}


