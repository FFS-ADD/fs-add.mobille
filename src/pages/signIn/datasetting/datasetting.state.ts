import {Injectable} from "@angular/core";
import {DataSettingInterface} from './datasetting.interface';

@Injectable()
export class DataSettingState {
  response:DataSettingInterface;
  success:boolean;
}
