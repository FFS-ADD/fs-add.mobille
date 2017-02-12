import {Component, ViewChild} from "@angular/core";
import {Navbar} from "ionic-angular/index";
import BackLogDetailAction from "./backlog-detail.action";
import {BackLogDetailState} from "./backlog-detail.state";
import {BackLogDetailStore} from "./backlog-detail.store";

@Component({
  selector: "backlog-detail",
  providers: [BackLogDetailAction, BackLogDetailState, BackLogDetailStore],
  templateUrl: "backlog-detail.html",
})
export class BackLogDetailComponent {

  @ViewChild(Navbar) private navbar:Navbar;

  constructor(private action: BackLogDetailAction, private state: BackLogDetailState, private store: BackLogDetailStore) {
    this.action.init();

    console.info(this.state);
  }

  public ngAfterViewInit() {
    this.navbar.setBackButtonText("");
  }
}
