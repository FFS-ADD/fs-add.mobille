import {Injectable} from "@angular/core";
import {BackLogScreenInterface} from './backlog-master.interface';

@Injectable()
export class BackLogMasterState {
  screen: BackLogScreenInterface;
  success: boolean;
}
