import { Injectable } from "@angular/core";
import { ProjectEvent,  ProjectOverview} from './barometer.interface';

@Injectable()
export class BaroMeterState {
  overviewLoading: boolean = true;
  topEventLoading: boolean = true;
  overview: ProjectOverview;
  topEvent: ProjectEvent;
}
