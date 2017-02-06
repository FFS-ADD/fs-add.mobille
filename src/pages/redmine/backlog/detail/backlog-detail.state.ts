import {Injectable} from "@angular/core";
import {BackLogDetailScreenInterface} from "./backlog-detail.interface";

@Injectable()
export class BackLogDetailState {
  screen: BackLogDetailScreenInterface;
  totalBugs: number;
  success: boolean;
}
