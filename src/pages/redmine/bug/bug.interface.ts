export interface BugResponseInterface {
  chartType: string;
  datasets: number[];
  options: any;
}

export interface BugRequestInterface {
  new: number;
  inProgress: number;
  fixed: number;
  retesting: number;
  close: number;
}
