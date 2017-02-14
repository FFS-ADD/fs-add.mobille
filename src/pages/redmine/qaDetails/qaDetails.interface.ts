export interface QaDetailsScreenInterface {
  qaHistory: QaReport[];
  overdueQaList: QaDetails[];
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
  new: number;
  inProgress: number;
  closed: number;
  overdue: number;
}

export interface QaDetails {
  id: string;
  ticket: string;
  owner: string;
  exceptedAnswerDate: string;
}
