"use strict";
var core_1 = require("@angular/core");
exports.APP_CONFIG = new core_1.OpaqueToken("app.config");
exports.AppConfig = {
    //apiURL: 'http://localhost:9090/add-api',
    authKey: "ZnMtYWRkLm1vYmlsZToxMjM0NTY3ODkw",
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
    webapiIssueOverview: '/issue/overview',
    webapiIssueDetail: '/issue/detail',
    webapiTaskOverview: '/task/overview',
    webapiTaskDetail: '/task/detail',
    webapiBacklogOverview: '/backlog/overview',
    webapiBacklogDetail: '/backlog/detail',
    webapiSaveDataSetting: '/datasetting/save',
    webapiGetDataSetting: '/datasetting/get'
};
