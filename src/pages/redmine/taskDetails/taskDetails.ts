import {Component} from "@angular/core";
import {TaskDetailsState} from "./taskDetails.state";
import {TaskDetailsStore} from "./taskDetails.store";
import TaskDetailsAction from "./taskDetails.action";

@Component({
  selector: "taskDetailsComponent",
  providers: [TaskDetailsAction, TaskDetailsState, TaskDetailsStore],
  templateUrl: "taskDetails.html",
})
export class TaskDetailsComponent {
  constructor(private action: TaskDetailsAction, private state: TaskDetailsState, private store: TaskDetailsStore) {
    this.action.init();
  }
}
