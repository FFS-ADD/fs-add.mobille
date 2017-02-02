import {Injectable} from "@angular/core";
import {BugScreenInterface} from './bug.interface';
import {BugDetailsScreenInterface} from "./bug-details.interface";

@Injectable()
export class BugDetailsState {
  screen: BugDetailsScreenInterface;
  totalBugs: number;
  success: boolean;
}
