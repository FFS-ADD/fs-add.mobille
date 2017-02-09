import { Injectable } from "@angular/core";
import { QaDetailsScreenInterface, QaCanvasInterface } from "./qaDetails.interface";

@Injectable()
export class QaDetailsState {
  screen: QaDetailsScreenInterface;
  qaHistoryCanvas: QaCanvasInterface;
  success: boolean;
}
