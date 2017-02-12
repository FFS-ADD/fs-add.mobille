import {Injectable} from "@angular/core";
import {QaScreenInterface} from "./qa.interface";

@Injectable()
export class QaState {
  screen: QaScreenInterface;
  totalQas: number;
  success: boolean;
}
