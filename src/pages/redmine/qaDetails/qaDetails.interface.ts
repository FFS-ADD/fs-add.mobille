export interface QaDetailsScreenInterface {
  qaHistory: QaReport[];
  delayQaList: QaDetails[];
}

export interface QaCanvasInterface {
  chartType: string,
  labels: string[];
  dataSets: QaDetailsScreenDataSet[];
  options: any;
  colors: any;
}

export interface QaDetailsScreenDataSet {
  label: string;
  data: number[];
}

export interface QaReport {
  date: string;
  onSchedule: number;
  delay: number;
  closed: number;
  pending: number;
}

export interface QaDetails {
  qaId: string;
  tiket: string;
  owner: string;
  planedEndDate: string;
}
