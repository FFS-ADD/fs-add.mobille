import { Component } from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: "backlog-master.html"
})
export class BackLogMaster {
  constructor(private navCtrl: NavController) {

  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
