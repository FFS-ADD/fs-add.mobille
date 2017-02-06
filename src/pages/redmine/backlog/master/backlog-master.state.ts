import {Injectable} from "@angular/core";
import {BugScreenInterface} from './backlog-master.interface';

@Injectable()
export class BackLogMasterState {
  screen: BugScreenInterface;
  totalBugs: number;
  success: boolean;
}
