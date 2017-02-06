export interface TaskDetailsScreenInterface {
  // dataSets: TaskDetailsScreenDataSet[];
  delayTaskList: TaskDetails[];
  // options: any;
  // colors: any;
}

export interface TaskDetailsScreenDataSet {
  labels: string[];
  data: number[];
}

export interface TaskDetailsResponseInterface {
  onSchedule: number;
  delay: number;
  closed: number;
  pending: number;
}

export interface TaskDetails {
  taskId: string;
  tiket: string;
  owner: string;
  planedEndDate: string;
}
