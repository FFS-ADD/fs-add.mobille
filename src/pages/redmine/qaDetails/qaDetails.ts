import {Component, ViewChild} from "@angular/core";
import {QaDetailsState} from "./qaDetails.state";
import {QaDetailsStore} from "./qaDetails.store";
import QaDetailsAction from "./qaDetails.action";
import {Navbar} from "ionic-angular/index";

@Component({
  selector: "qaDetailsComponent",
  providers: [QaDetailsAction, QaDetailsState, QaDetailsStore],
  templateUrl: "qaDetails.html",
})
export class QaDetailsComponent {

  @ViewChild(Navbar) private navbar:Navbar;

  constructor(private action: QaDetailsAction, private state: QaDetailsState, private store: QaDetailsStore) {
    this.action.init();
  }

  public ngAfterViewInit() {
    this.navbar.setBackButtonText("");
  }
}
