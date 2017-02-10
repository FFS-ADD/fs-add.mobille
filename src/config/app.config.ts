import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  apiURL: string;
  webapiSonarQuality: string;
  webapiSonarLoc: string;
  webapiSonarCoverage: string;
  webapiSonarDuplication: string;
}

export const AppConfig:IAppConfig = {
  // apiURL: 'http://localhost:8080/add-api'
  apiURL: '/boot',
  webapiSonarQuality: '/sonardashboard/getQualityDate',
  webapiSonarLoc: '/sonardashboard/getLoc',
  webapiSonarCoverage: '/sonardashboard/getCoverage',
  webapiSonarDuplication: '/sonardashboard/getDuplication'
}
