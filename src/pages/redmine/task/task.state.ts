import {Injectable} from "@angular/core";
import {TaskScreenInterface} from "./task.interface";

@Injectable()
export class TaskState {
  screen: TaskScreenInterface;
  totalTasks: number;
  success: boolean;
}
