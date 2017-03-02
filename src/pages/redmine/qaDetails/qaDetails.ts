import {Component} from "@angular/core";
import {QaDetailsState} from "./qaDetails.state";
import {QaDetailsStore} from "./qaDetails.store";
import QaDetailsAction from "./qaDetails.action";

@Component({
  selector: "qaDetailsComponent",
  providers: [QaDetailsAction, QaDetailsState, QaDetailsStore],
  templateUrl: "qaDetails.html",
})
export class QaDetailsComponent {
  constructor(private action: QaDetailsAction, private state: QaDetailsState, private store: QaDetailsStore) {
    this.action.init();
  }
}
