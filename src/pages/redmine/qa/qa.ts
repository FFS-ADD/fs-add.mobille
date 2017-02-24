import { Component, OnInit } from "@angular/core";
import QaAction from "./qa.action";
import { QaState } from "./qa.state";
import { QaStore } from "./qa.store";
import { NavController } from "ionic-angular/index";
import { QaDetailsComponent } from "../qaDetails/qaDetails";
import { Events } from 'ionic-angular';

@Component({
  selector: "qa",
  providers: [QaAction, QaState, QaStore],
  templateUrl: "qa.html",
})
export class QaComponent implements OnInit {

  constructor(public events: Events, private action: QaAction, private state: QaState, private store: QaStore, public navCtrl: NavController) {
    this.listenHomeEvents();
  }

  public ngOnInit() {
    this.action.init();
    console.info(this.state);
  }


  public goQaDetails() {
    this.navCtrl.push(QaDetailsComponent);
  }

  listenHomeEvents() {
      this.events.subscribe('home:refresh', () => {
          this.action.init();
          console.log('refresh qa data');
      });
  }
}
