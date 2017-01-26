import {Injectable} from "@angular/core";
import {BugResponseInterface} from './bug.interface';

@Injectable()
export class BugState {
  response: BugResponseInterface;
  totalBugs: number;
  success: boolean;
}
