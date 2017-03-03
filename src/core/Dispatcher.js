"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        _super.apply(this, arguments);
    }
    Dispatcher.prototype.bindActions = function () {
        var actionBinds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actionBinds[_i - 0] = arguments[_i];
        }
        return this.subscribe(function (o) {
            var actions = actionBinds.find(function (a) { return a.type === o.type; });
            if (actions) {
                var handler = actions.handler;
                var instance = actions.instance;
                handler.call(instance, o.params);
            }
        });
    };
    // public bindAction(actionType: any, instance: any, handler: any) {
    //   return this.subscribe(o => {
    //     handler.call(instance, o.params);
    //   });
    // }
    Dispatcher.prototype.dispatch = function (actionName, params) {
        this.emit({ params: params, type: actionName });
    };
    Dispatcher = __decorate([
        core_1.Injectable()
    ], Dispatcher);
    return Dispatcher;
}(core_1.EventEmitter));
exports.Dispatcher = Dispatcher;
