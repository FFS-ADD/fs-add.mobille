export interface BackLogDetailScreenInterface {
  dataSets: BugDetailsScreenDataSet[];
  bugResponse: BugDetailsResponseInterface;
  options: any;
  colors: any;
}

export interface BugDetailsScreenDataSet {
  labels: string[];
  data: number[];
}

export interface BugDetailsResponseInterface {
  new: number;
  inProgress: number;
  fixed: number;
  retesting: number;
  close: number;
}
