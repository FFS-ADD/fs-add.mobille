export interface SonarqubeDetailScreenInterface {
  sonarqubeVBCHistoryResponse?: SonarqubeVBCHistoryResponseInterface;
  sonarqubeLocHistoryResponse?: SonarqubeLocHistoryResponseInterface;
  sonarqubeCoverageHistoryResponse?: SonarqubeCoverageHistoryResponseInterface;
}

// VBC response
export interface SonarqubeVBCHistoryResponseInterface {
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
