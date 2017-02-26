export interface ProjectEvent {
  eventLevel: number; //0: Information, 1:warning
  eventDate: string;
  eventDescription: string;
}
export interface ProjectOverview {
  projectName: string;
  lastUpdateTime: string;
  projectStatus: number;//0:Good, 1:Warning, 2:bad
}
