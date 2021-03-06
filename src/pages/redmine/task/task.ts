import { Component, OnInit } from "@angular/core";
import TaskAction from "./task.action";
import { TaskState } from "./task.state";
import { TaskStore } from "./task.store";
import { NavController } from "ionic-angular/index";
import { TaskDetailsComponent } from "../taskDetails/taskDetails";
import { Events } from 'ionic-angular';

@Component({
  selector: "task",
  providers: [TaskAction, TaskState, TaskStore],
  templateUrl: "task.html",
})
export class TaskComponent implements OnInit {

  constructor(public events: Events, private action: TaskAction, private state: TaskState, private store: TaskStore, public navCtrl: NavController) {
    this.listenHomeEvents();
  }

  public ngOnInit() {
    this.action.init();
    console.info(this.state);
  }


  public goTaskDetails() {
    this.navCtrl.push(TaskDetailsComponent);
  }
  
  listenHomeEvents() {
      this.events.subscribe('home:refresh', () => {
          this.action.init();
          console.log('refresh task data');
      });
  }
}
