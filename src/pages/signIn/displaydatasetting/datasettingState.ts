import {Injectable} from "@angular/core";
import {DataSettingRequestInterface} from './datasettingInterface';

@Injectable()
export class DataSettingState {
  response:DataSettingRequestInterface;
  success:boolean;
}
