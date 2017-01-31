import {Component} from "@angular/core";
import BugAction from "./bug.action";
import {BugState} from "./bug.state";
import {BugStore} from "./bug.store";

@Component({
  selector: "bug",
  providers: [BugAction, BugState, BugStore],
  templateUrl: "bug.html",
})
export class BugComponent {

  private chartType:string = "doughnut";

  constructor(private action: BugAction, private state: BugState, private store: BugStore) {
    this.action.init();
    console.info(this.state);
  }
}
