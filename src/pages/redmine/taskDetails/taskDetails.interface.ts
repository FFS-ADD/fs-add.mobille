export interface TaskDetailsScreenInterface {
  taskHistory: TaskReport[];
  delayTaskList: TaskDetails[];
}

export interface TaskCanvasInterface {
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

export interface TaskDetails {
  id: string;
  ticket: string;
  owner: string;
  planedEndDate: string;
}
