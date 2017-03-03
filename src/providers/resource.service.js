"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_config_1 = require('../config/app.config');
var ResourceService = (function () {
    function ResourceService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'applicaiton/json');
    }
    ResourceService.prototype.interceptor = function () {
        var opts = new http_1.RequestOptions();
        opts.headers = this.headers;
        return opts;
    };
    ResourceService.prototype.getHomeDataList = function () {
        return this.http.get('/xxxx.json', this.interceptor()).map(function (res) { return res.json().resources; });
    };
    ResourceService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(app_config_1.APP_CONFIG))
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
