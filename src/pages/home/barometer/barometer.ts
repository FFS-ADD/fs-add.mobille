import { Component, OnInit } from "@angular/core";
import BaroMeterAction from "./barometer.action";
import { BaroMeterStore } from "./barometer.store";
import { BaroMeterState } from "./barometer.state";
import { NavController } from "ionic-angular/index";
import { BaroMeterDetailsComponent } from './barometer-detail/barometer-detail'
import { Events } from 'ionic-angular';

@Component({
  selector: "barometer-area",
  providers: [BaroMeterAction, BaroMeterState, BaroMeterStore],
  templateUrl: "barometer.html",
})
export class BaroMeterComponent implements OnInit {

  constructor(public events: Events, private action: BaroMeterAction, private state: BaroMeterState,
              private store: BaroMeterStore, public navCtrl: NavController) {
    this.listenHomeEvents();
  }

  public ngOnInit() {
    this.action.init();
    console.info(this.state);
  }


  public goQaDetails() {
    this.navCtrl.push(BaroMeterDetailsComponent);
  }

  listenHomeEvents() {
      this.events.subscribe('home:refresh', () => {
          this.action.init();
          console.log('refresh qa data');
      });
  }
}
