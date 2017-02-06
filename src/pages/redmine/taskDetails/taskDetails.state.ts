import {Injectable} from "@angular/core";
import {TaskScreenInterface} from './task.interface';
import {TaskDetailsScreenInterface} from "./taskDetails.interface";

@Injectable()
export class TaskDetailsState {
  screen: TaskDetailsScreenInterface;
  totalTasks: number;
  success: boolean;
}
