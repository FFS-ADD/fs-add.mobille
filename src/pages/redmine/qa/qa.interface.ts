export interface QaScreenInterface {
  chartType: string;
  labels: string[];
  dataSets: QaScreenDataSet[];
  qaResponse: QaResponseInterface;
  options: any;
  colors: any;
}

export interface QaScreenDataSet {
  backgroundColor: any;
  data: number[];
}

export interface QaResponseInterface {
  new: number;
  inProgress: number;
  overdue: number;
  closed: number;
}
