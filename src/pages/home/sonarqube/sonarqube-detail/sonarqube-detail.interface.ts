export interface SonarqubeDetailScreenInterface {
  sonarqubeVulneralilitiesHistoryResponse?: SonarqubeVulneralilitiesHistoryResponseInterface;
  sonarqubeBugsHistoryResponse?: SonarqubeBugsHistoryResponseInterface;
  sonarqubeCodeSmellsHistoryResponse?: SonarqubeCodeSmellsHistoryResponseInterface;
  sonarqubeLocHistoryResponse?: SonarqubeLocHistoryResponseInterface;
  sonarqubeCoverageHistoryResponse?: SonarqubeCoverageHistoryResponseInterface;
}

// Vulneralilities response
export interface SonarqubeVulneralilitiesHistoryResponseInterface {
  colors: Array<any>;
  options: any;
  labels: Array<any>;
  datas: Array<any>;
}

// Bugs response
export interface SonarqubeBugsHistoryResponseInterface {
  colors: Array<any>;
  options: any;
  labels: Array<any>;
  datas: Array<any>;
}

// Code Smells response
export interface SonarqubeCodeSmellsHistoryResponseInterface {
  colors: Array<any>;
  options: any;
  labels: Array<any>;
  datas: Array<any>;
}

// Loc response
export interface SonarqubeLocHistoryResponseInterface {
  colors: Array<any>;
  options: any;
  labels: Array<any>;
  datas: Array<any>;
}

// Coverage response
export interface SonarqubeCoverageHistoryResponseInterface {
  colors: Array<any>;
  options: any;
  labels: Array<any>;
  datas: Array<any>;
}
