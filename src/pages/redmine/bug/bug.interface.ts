export interface BugScreenInterface {
  chartType: String;
  dataSets: BugScreenDataSet[];
  bugResponse: BugResponseInterface;
  options: any;
  colors: any;
}

export interface BugScreenDataSet {
  labels: string[];
  data: number[];
}

export interface BugResponseInterface {
  new: number;
  inProgress: number;
  fixed: number;
  retesting: number;
  close: number;
}
