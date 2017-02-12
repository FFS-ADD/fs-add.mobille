import { Injectable, Inject } from "@angular/core";
import {Dispatcher} from "../../../../core/Dispatcher";
import {HttpService} from "../../../../core/HttpService";
import { APP_CONFIG, IAppConfig } from '../../../../config/app.config';
import { SonarqubeDetailActionType } from './sonarqube-detail.action.type';

@Injectable()
export default class SonarqubeAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    let observable = this.httpService.get(this.config.webapiSonarHistory, {});
    observable.subscribe(
       response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(SonarqubeDetailActionType.INIT, response.data)
        }
    });
  }
}


