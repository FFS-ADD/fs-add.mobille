import {Component, ViewChild, Input} from "@angular/core";
import {Navbar} from "ionic-angular/index";
import BackLogDetailAction from "./backlog-detail.action";
import {BackLogDetailState} from "./backlog-detail.state";
import {BackLogDetailStore} from "./backlog-detail.store";

@Component({
  selector: "add-header",
  providers: [],
  templateUrl: "header.html",
})
export class HeaderComponent {
  constructor() {
  }
}
