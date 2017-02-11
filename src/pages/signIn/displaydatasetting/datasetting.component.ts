import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { DataSettingRequestInterface } from "./datasettingInterface";
import { DataSettingAction } from "./datasettingAction";
import { DataSettingState } from "./datasettingState";
import { DataSettingStore } from "./datasettingStore";
import { HomePage } from "../../home/home"

@Component({
  providers:[DataSettingAction, DataSettingState, DataSettingStore],
  templateUrl: "displaydatasetting.html"
})
export class DataSetting implements OnInit {
  private form : DataSettingRequestInterface;
  constructor(public navCtrl: NavController, private action:DataSettingAction,
              private state:DataSettingState, private store:DataSettingStore, public navParams: NavParams ) {

  }

  public ngOnInit() {
    if (this.navParams.get('perPage') == 'login'){
      this.form = {
        backlog: false,
        task: false,
        bug: false,
        qa: false,
        qualityGate: false,
        loc: false,
        coverage: false,
        duplication: false
      }
    } else if (this.navParams.get('perPage') == 'setting'){
      this.form = {
        backlog: false,
        task: false,
        bug: false,
        qa: false,
        qualityGate: false,
        loc: false,
        coverage: false,
        duplication: false
      }
      this.action.init(this.form);
    } else {
       this.form = {
        backlog: false,
        task: false,
        bug: false,
        qa: false,
        qualityGate: false,
        loc: false,
        coverage: false,
        duplication: false
      }
    }
  }

  public save() {
    let observable = this.action.save(this.form);
    observable.subscribe((data) =>  {
      this.navCtrl.push(HomePage);
    })
  }
}
