import {Injectable} from "@angular/core";
import {BugDetailsScreenInterface} from "./bug-details.interface";

@Injectable()
export class BugDetailsState {
  screen: BugDetailsScreenInterface;
  totalBugs: number;
  success: boolean;
}
