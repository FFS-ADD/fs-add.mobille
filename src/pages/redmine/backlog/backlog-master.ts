import {Component,Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {BackLogMasterState} from "./backlog-master.state";
import {BackLogMasterStore} from "./backlog-master.store";
import BackLogMasterAction from "./backlog-master.action";
import {BackLogDetailComponent} from "../backlogDetails/backlog-detail";

@Component({
  selector: "backlog",
  providers: [BackLogMasterAction, BackLogMasterState, BackLogMasterStore],
  templateUrl: "backlog-master.html",
})
export class BackLogComponent {
  private displayFlg: string;
  constructor(private action: BackLogMasterAction, private state: BackLogMasterState, private store: BackLogMasterStore, public navCtrl: NavController) {
    this.action.init();
  }

  public setDisplayFlg(displayFlg){
    this.displayFlg = displayFlg; 
  }

  public goBackLogDetails() {
    this.navCtrl.push(BackLogDetailComponent);
  }
}
