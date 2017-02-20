import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  apiURL: string;
  webapiSonarQuality: string;
  webapiSonarLoc: string;
  webapiSonarCoverage: string;
  webapiSonarDuplication: string;
  webapiSonarHistory: string;
  webapiQaOverview:string;
  webapiQaDetail:string;
  webapiIssueOverview:string;
  webapiIssueDetail:string;
}

export const AppConfig:IAppConfig = {
  //apiURL: 'http://localhost:9090/add-api',
  apiURL: '/boot',
  webapiSonarQuality: '/sonardashboard/getQualityDate',
  webapiSonarLoc: '/sonardashboard/getLoc',
  webapiSonarCoverage: '/sonardashboard/getCoverage',
  webapiSonarDuplication: '/sonardashboard/getDuplication',
  webapiSonarHistory: '/sonardashboard/getHist',
  webapiQaOverview: '/qa/overview',
  webapiQaDetail: '/qa/detail',
  webapiIssueOverview:'/issue/overview',
  webapiIssueDetail:'/issue/detail'
}
