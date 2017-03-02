import {Component} from "@angular/core";
import {BugDetailsState} from "./bug-details.state";
import {BugDetailsStore} from "./bug-details.store";
import BugDetailsAction from "./bug-details.action";

@Component({
  selector: "bug-details",
  providers: [BugDetailsAction, BugDetailsState, BugDetailsStore],
  templateUrl: "bug-details.html",
})
export class BugDetailsComponent {
  constructor(private action: BugDetailsAction, private state: BugDetailsState, private store: BugDetailsStore) {
    this.action.init();
    console.info(this.state);
  }
}
