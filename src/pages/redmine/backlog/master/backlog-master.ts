import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BackLogMasterState} from "./backlog-master.state";
import {BackLogMasterStore} from "./backlog-master.store";
import BackLogMasterAction from "./backlog-master.action";
import {BackLogDetailComponent} from "../detail/backlog-detail";

@Component({
  selector: "backlog",
  providers: [BackLogMasterAction, BackLogMasterState, BackLogMasterStore],
  templateUrl: "backlog-master.html",
})
export class BackLogComponent {

  constructor(private action: BackLogMasterAction, private state: BackLogMasterState, private store: BackLogMasterStore, public navCtrl: NavController) {
    this.action.init();
    console.info(this.state);
  }

  public goBugDetails() {
    this.navCtrl.push(BackLogDetailComponent);
  }
}
