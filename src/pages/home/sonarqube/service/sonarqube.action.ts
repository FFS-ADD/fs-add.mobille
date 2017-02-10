import { Injectable, Inject } from "@angular/core";
import {Dispatcher} from "../../../../core/Dispatcher";
import {HttpService} from "../../../../core/HttpService";
import { APP_CONFIG, IAppConfig } from '../../../../config/app.config';
import { SonarqubeActionType } from './sonarqube.action.type';

@Injectable()
export default class SonarqubeAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public init() {
    let observableQuality = this.httpService.get(this.config.webapiSonarQuality, {});
    observableQuality.subscribe(
       response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(SonarqubeActionType.QUALITY, response.data)
        }
    });

    let observableLoc = this.httpService.get(this.config.webapiSonarLoc, {});
    observableLoc.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(SonarqubeActionType.LOC, response.data);
        }  
      }
    )

    let observableCoverage = this.httpService.get(this.config.webapiSonarCoverage, {});
    observableCoverage.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(SonarqubeActionType.COVERAGE, response.data);
        }  
      }
    )

    let observableDuplication = this.httpService.get(this.config.webapiSonarDuplication, {});
    observableDuplication.subscribe(
      response => {
        if (response.status === 1) {
          this.dispatcher.dispatch(SonarqubeActionType.DUPLICATION, response.data);
        }  
      }
    )
  }
}


