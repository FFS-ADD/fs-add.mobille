export interface BackLogDetailScreenInterface {
  taskHistory: TaskReport[];
  backLogList: BackLogDetails[];
}

export interface BackLogCanvasInterface {
  chartType: string,
  labels: string[];
  dataSets: TaskDetailsScreenDataSet[];
  options: any;
  colors: any;
}

export interface TaskDetailsScreenDataSet {
  label: string;
  data: number[];
}

export interface TaskReport {
  date: string;
  onSchedule: number;
  delay: number;
  closed: number;
  pending: number;
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
