import {Injectable, EventEmitter} from "@angular/core";
import {Action} from "./Action";

@Injectable()
export class Dispatcher extends EventEmitter<Action> {
   public bindAction(actionType:any, instance:any, handler:any) {
    return this.subscribe(o => {
      handler.call(instance, o.params);
    });
  }

  public dispatch(actionName:string, params?:Object) {
    this.emit({params: params, type: actionName});
  }
}
