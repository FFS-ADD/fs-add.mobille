
export interface ProjectEventDetail {
  eventLevel: number; //0: Information, 1:warning
  eventDate: string;
  eventDescription: string;
}

export interface  ProjectDetail{
  events: Array<ProjectEventDetail>;
}

