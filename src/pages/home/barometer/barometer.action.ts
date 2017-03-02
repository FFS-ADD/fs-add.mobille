import {Injectable, Inject} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {HttpService} from "../../../core/HttpService";
import {APP_CONFIG, IAppConfig} from '../../../config/app.config';
import {BaroMeterActionType} from './barometer.action.type';

@Injectable()
export default class BaroMeterAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    // let observableOverview = this.httpService.get(this.config.webapiProjectOverview, {});
    let observableOverview = this.httpService.getFakeData('/assets/data/barometer/overview.json', {});
    observableOverview.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(BaroMeterActionType.OVERVIEW, response.data)
        }
      });

    // let observableTopEvent = this.httpService.get(this.config.webapiProjectEventsTop, {});
    let observableTopEvent = this.httpService.getFakeData('/assets/data/barometer/top.json', {});
    observableTopEvent.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(BaroMeterActionType.TOP_EVENT, response.data);
        }
      }
    );
  }
}


