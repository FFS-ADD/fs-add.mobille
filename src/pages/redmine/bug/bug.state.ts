import {Injectable} from "@angular/core";
import {BugScreenInterface} from './bug.interface';

@Injectable()
export class BugState {
  screen: BugScreenInterface;
  totalBugs: number;
  success: boolean;
}
