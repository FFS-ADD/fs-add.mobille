export interface BugDetailsScreenInterface {
  bugDetailsHistory: BugDetailsCanvasInterface;
  bugFixHistory: BugDetailsCanvasInterface;
  redmindingBugList: RedmindingBugInterface[];
}

export interface BugDetailsCanvasInterface {
  chartType: string,
  labels: string[];
  dataSets: BugDetailsScreenDataSet[];
  options: any;
  colors: any;
}

export interface BugDetailsScreenDataSet {
  label: string;
  data: number[];
}

export interface BugFixDataSet extends BugDetailsScreenDataSet {
  fill: boolean;
  lineTension: number;
}

export interface RedmindingBugInterface {
  no: string;
  title: string;
  priority: string;
  owner: string;
  dueDate: string;
}

export interface BugDetailsResponse {
  bugDetailsHistoryData: BugDetailsHistoryDataInterface;
  bugFixHistoryData: BugFixHistoryDataInterface;
  redmindingBugList: RedmindingBugInterface[];
  historyDate: string[];
}

export interface BugDetailsHistoryDataInterface {
  news: number[];
  inProgress: number[];
  fixed: number[];
  reTesting: number[];
  closed: number[];
}

export interface BugFixHistoryDataInterface {
  inProgress: number[];
  news: number[];
  fixed: number[];
}
