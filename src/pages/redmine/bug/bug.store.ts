import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BugState}from "./bug.state";
import {BugActionType}from "./bug.action.type";

@Injectable()
export class BugStore {
  constructor(private dispatcher:Dispatcher, private state:BugState) {
        this.dispatcher.bindActions( {
      type:BugActionType.LOGIN,
      instance:this,
      handler:this.Bug
    });
  }

  public Bug(data) {
    console.log("BugStore#Bug");
    console.log(data);
    if (data.status === "SUCCESS") {
      this.state.success = true;
    }else {
      this.state.success = false;
    }
  }
}
