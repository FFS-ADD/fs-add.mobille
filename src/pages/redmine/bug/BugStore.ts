import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../core/Dispatcher";
import {BugState} from "./BugState";
import {BugActionType} from "./BugActionType";

@Injectable()
export class BugStore {
  constructor(private dispatcher:Dispatcher, private state:BugState) {
    this.dispatcher.bindAction(BugActionType.LOGIN, this, this.Bug);
  }

  public Bug(data) {
    console.log("BugStore#Bug");
    console.log(data);
    if (data.status === "SUCCESS") {
      this.state.success = true;
    } else {
      this.state.success = false;
    }
  }
}
