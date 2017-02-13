import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { DataSettingInterface } from "./datasetting.interface";
import { DataSettingAction } from "./datasetting.action";
import { DataSettingState } from "./datasetting.state";
import { DataSettingStore } from "./datasetting.store";
import { HomePage } from "../../home/home"

@Component({
  providers:[DataSettingAction, DataSettingState, DataSettingStore],
  templateUrl: "datasetting.html"
})
export class DataSetting implements OnInit {
  private form : DataSettingInterface;
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
      let observable = this.action.init(this.form); 
      observable.subscribe((data) =>  {
          this.form = this.state.response;
      })
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