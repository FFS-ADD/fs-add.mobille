import {Component, ViewChild, OnInit} from "@angular/core";
import {BaroMeterDetailState} from "./barometer-detail.state";
import {BaroMeterDetailStore} from "./barometer-detail.store";
import BarometerDetailAction from "./barometer-detail.action";
import {Navbar} from "ionic-angular/index";

@Component({
  selector: "barometer-detail",
  providers: [BarometerDetailAction, BaroMeterDetailState, BaroMeterDetailStore],
  templateUrl: "barometer-detail.html",
})
export class BaroMeterDetailsComponent implements OnInit{

  @ViewChild(Navbar) private navbar:Navbar;

  constructor(private action: BarometerDetailAction, private state: BaroMeterDetailState, private store: BaroMeterDetailStore) {

  }

  public ngAfterViewInit() {
    this.navbar.setBackButtonText("");
  }

  public ngOnInit() {
    this.action.init();
    console.info(this.state);
  }
}
