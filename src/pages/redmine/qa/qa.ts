import { Component, OnInit } from "@angular/core";
import QaAction from "./qa.action";
import { QaState } from "./qa.state";
import { QaStore } from "./qa.store";
import { NavController } from "ionic-angular/index";
import { QaDetailsComponent } from "../qaDetails/qaDetails";

@Component({
  selector: "qa",
  providers: [QaAction, QaState, QaStore],
  templateUrl: "qa.html",
})
export class QaComponent implements OnInit {

  constructor(private action: QaAction, private state: QaState, private store: QaStore, public navCtrl: NavController) {
  }

  public ngOnInit() {
    this.action.init();
    console.info(this.state);
  }


  public goQaDetails() {
    this.navCtrl.push(QaDetailsComponent);
  }
}
