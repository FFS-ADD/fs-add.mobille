import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { DataSettingState } from "./datasettingState";
import { DataSettingActionType } from "./datasettingActionType";

@Injectable()
export class DataSettingStore {
  constructor(private dispatcher: Dispatcher, private state: DataSettingState) {
    this.dispatcher.bindActions({
      type:DataSettingActionType.INIT,
      instance: this,
      handler: this.init
    })

    this.dispatcher.bindActions({
      type: DataSettingActionType.OK,
      instance: this,
      handler: this.ok
    });
  }

  public init(data) {
    console.debug("datasettingStore init");
    if (data.status === "SUCCESS") {
      this.state.success = true;
      this.state.response = data;
    } else {
      this.state.success = false;
    }
  }

  public ok(data) {
    console.debug("datasettingStore ok");
    if (data.status === "SUCCESS") {
      this.state.success = true;
    } else {
      this.state.success = false;
    }
  }
}
