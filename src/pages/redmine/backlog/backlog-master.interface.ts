export interface BackLogScreenInterface {
  chartType: String;
  dataSets: BackLogScreenDataSet[];
  backLogResponse: BackLogResponseInterface;
  options: any;
  colors: any;
}

export interface BackLogScreenDataSet {
  labels: string[];
  data: number[];
}

export interface BackLogResponseInterface {
  completed: number;
  backLogTotal: number;
  initValue:number;
  planedValue:number;
  reportedValue:number;
  balanceStatus:boolean;
}
