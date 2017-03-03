"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StorageService = (function () {
    function StorageService() {
        // this.storage = localStorage;
        this.storage = sessionStorage;
    }
    StorageService.prototype.get = function (key) {
        var item = this.storage.getItem(key);
        if (item) {
            return JSON.parse(this.storage.getItem(key));
        }
        return null;
    };
    StorageService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    StorageService = __decorate([
        core_1.Injectable()
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
