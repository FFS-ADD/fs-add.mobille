import {Component, ViewChild} from "@angular/core";
import {BugDetailsState} from "./bug-details.state";
import {BugDetailsStore} from "./bug-details.store";
import BugDetailsAction from "./bug-details.action";
import {Navbar} from "ionic-angular/index";

@Component({
  selector: "bug-details",
  providers: [BugDetailsAction, BugDetailsState, BugDetailsStore],
  templateUrl: "bug-details.html",
})
export class BugDetailsComponent {

  @ViewChild(Navbar) private navbar:Navbar;

  constructor(private action: BugDetailsAction, private state: BugDetailsState, private store: BugDetailsStore) {
    this.action.init();

    console.info(this.state);
  }

  public ngAfterViewInit() {
    this.navbar.setBackButtonText("");
  }
}
