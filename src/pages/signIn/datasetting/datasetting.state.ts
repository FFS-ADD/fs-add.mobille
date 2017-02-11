import {Injectable} from "@angular/core";
import {DataSettingRequestInterface} from './datasetting.interface';

@Injectable()
export class DataSettingState {
  response:DataSettingRequestInterface;
  success:boolean;
}
