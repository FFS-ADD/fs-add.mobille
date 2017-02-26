import { Injectable } from "@angular/core";
import { ProjectEventDetail} from './barometer-detail.interface';

@Injectable()
export class BaroMeterDetailState {
  loading: boolean = true;
  events: Array<ProjectEventDetail>;
}
