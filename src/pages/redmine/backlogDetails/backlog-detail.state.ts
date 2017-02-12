import {Injectable} from "@angular/core";
import {BackLogDetailScreenInterface, BackLogCanvasInterface} from "./backlog-detail.interface";

@Injectable()
export class BackLogDetailState {
  screen: BackLogDetailScreenInterface;
  taskHistoryCanvas: BackLogCanvasInterface;
  success: boolean;
}
