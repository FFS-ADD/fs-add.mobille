import { Injectable, EventEmitter } from "@angular/core";
import { Action, ActionBind } from "./Action";

@Injectable()
export class Dispatcher extends EventEmitter<Action> {
  public bindActions(...actionBinds: ActionBind[]) {
    return this.subscribe(o => {
      const actions = actionBinds.find(a => a.type === o.type);
      if (actions) {
        const handler = actions.handler;
        const instance = actions.instance;
        handler.call(instance, o.params);
      }
    });
  }

  // public bindAction(actionType: any, instance: any, handler: any) {
  //   return this.subscribe(o => {
  //     handler.call(instance, o.params);
  //   });
  // }

  public dispatch(actionName: string, params?: Object) {
    this.emit({ params: params, type: actionName });
  }
}
