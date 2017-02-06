export interface TaskScreenInterface {
  chartType: String;
  dataSets: TaskScreenDataSet[];
  taskResponse: TaskResponseInterface;
  options: any;
  colors: any;
}

export interface TaskScreenDataSet {
  labels: string[];
  data: number[];
}

export interface TaskResponseInterface {
  onSchedule: number;
  delay: number;
  closed: number;
  pending: number;
}
