import {Component} from "@angular/core";
import BugAction from "./bug.action";
import {BugState} from "./bug.state";
import {BugStore} from "./bug.store";
import {NavController} from "ionic-angular/index";
import {BugDetailsComponent} from "../bugDetails/bug-details";

@Component({
  selector: "bug",
  providers: [BugAction, BugState, BugStore],
  templateUrl: "bug.html",
})
export class BugComponent {

  constructor(private action: BugAction, private state: BugState, private store: BugStore, public navCtrl: NavController) {
    this.action.init();
    console.info(this.state);
  }

  public goBugDetails() {
    this.navCtrl.push(BugDetailsComponent);
  }
}
