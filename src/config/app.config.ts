import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  apiURL: string;
  webapiProjectOverview:string;
  webapiProjectEventsTop:string;
  webapiProjectEventsAll:string;
  webapiSonarQuality: string;
  webapiSonarLoc: string;
  webapiSonarCoverage: string;
  webapiSonarDuplication: string;
  webapiSonarHistory: string;
  webapiQaOverview:string;
  webapiQaDetail:string;
  webapiIssueOverview:string;
  webapiIssueDetail:string;
  webapiTaskOverview:string;
  webapiTaskDetail:string;
  webapiBacklogOverview:string;
  webapiBacklogDetail:string;
  webapiSaveDataSetting:string;
  webapiGetDataSetting:string;
}

export const AppConfig:IAppConfig = {
  //apiURL: 'http://localhost:9090/add-api',
  apiURL: '/boot',
  webapiProjectOverview: '/project/overview',
  webapiProjectEventsTop: '/project/events/top',
  webapiProjectEventsAll: '/project/events/all',
  webapiSonarQuality: '/sonardashboard/getQualityDate',
  webapiSonarLoc: '/sonardashboard/getLoc',
  webapiSonarCoverage: '/sonardashboard/getCoverage',
  webapiSonarDuplication: '/sonardashboard/getDuplication',
  webapiSonarHistory: '/sonardashboard/getHist',
  webapiQaOverview: '/qa/overview',
  webapiQaDetail: '/qa/detail',
  webapiIssueOverview:'/issue/overview',
  webapiIssueDetail:'/issue/detail',
  webapiTaskOverview:'/task/overview',
  webapiTaskDetail:'/task/detail',
  webapiBacklogOverview:'/backlog/overview',
  webapiBacklogDetail:'/backlog/detail',
  webapiSaveDataSetting:'/datasetting/save',
  webapiGetDataSetting:'/datasetting/get'
}
