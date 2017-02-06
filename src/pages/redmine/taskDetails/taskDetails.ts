import {Component, ViewChild} from "@angular/core";
import {TaskDetailsState} from "./taskDetails.state";
import {TaskDetailsStore} from "./taskDetails.store";
import TaskDetailsAction from "./taskDetails.action";
import {Navbar} from "ionic-angular/index";

@Component({
  selector: "taskDetailsComponent",
  providers: [TaskDetailsAction, TaskDetailsState, TaskDetailsStore],
  templateUrl: "taskDetails.html",
})
export class TaskDetailsComponent {

  @ViewChild(Navbar) private navbar:Navbar;

  constructor(private action: TaskDetailsAction, private state: TaskDetailsState, private store: TaskDetailsStore) {
    this.action.init();
  }

  public ngAfterViewInit() {
    this.navbar.setBackButtonText("");
  }
}
