import { Injectable } from "@angular/core";
import { TaskDetailsScreenInterface, TaskCanvasInterface } from "./taskDetails.interface";

@Injectable()
export class TaskDetailsState {
  screen: TaskDetailsScreenInterface;
  taskHistoryCanvas: TaskCanvasInterface;
  success: boolean;
}
