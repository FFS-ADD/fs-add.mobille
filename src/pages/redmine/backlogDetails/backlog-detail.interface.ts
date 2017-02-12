export interface BackLogDetailScreenInterface {
  backLogCanvas: BackLogCanvasInterface;
  backLogList: BackLogDetails[];
}

export interface BackLogCanvasInterface {
  chartType: string,
  labels: string[];
  dataSets: BackLogDetailDataSet[];
  options: any;
  colors: any;
}

export interface BackLogDetailDataSet {
  label: string;
  data: number[];
  fill: boolean;
  lineTension: number;
}

export interface BackLogDetailsResponse {
  bugDetailsHistoryData: BackLogDetails[];
  backLogCanvasData: BackLogCanvasDataInterface;
  historyDate: string[];
}

export interface BackLogCanvasDataInterface {
  planed: number[];
  actual: number[];
}

export interface BackLogDetails {
  backLogId: String
  ticket: String
  owner: String
  progress: number
  stage: String
  priority: String
  startDay: String
  endDay: String
  estimate: String
  reported: String
  difference: String
  status: boolean
}
