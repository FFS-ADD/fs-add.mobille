"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ServerException_1 = require("./ServerException");
require("rxjs/add/operator/map");
var app_config_1 = require("../config/app.config");
var Observable_1 = require("rxjs/Observable");
var HttpService = (function () {
    function HttpService(http, user) {
        this.http = http;
        this.user = user;
    }
    HttpService.prototype.getRequest = function (url, data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Basic " + app_config_1.AppConfig.authKey);
        var parameters = new http_1.URLSearchParams();
        var accessToken = this.user.getAccessToken();
        if (accessToken)
            parameters.set("access_token", accessToken);
        Object.keys(data).map(function (k) {
            if (data.hasOwnProperty(k)) {
                parameters.set(k, data[k]);
            }
        });
        var observable = Observable_1.Observable.create(function (observer) {
            _this.http.get(url, {
                search: parameters,
                headers: headers
            }).map(function (res) {
                console.debug("http request completed: " + url);
                return res.json();
            }).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (error) {
                console.debug("error occurred.");
                throw new ServerException_1.ServerException(error);
            });
        });
        return observable.share();
    };
    HttpService.prototype.getFakeData = function (url, data) {
        return this.getRequest(url, data);
    };
    HttpService.prototype.get = function (url, data) {
        return this.getRequest(app_config_1.AppConfig.apiURL + url, data);
    };
    HttpService.prototype.post = function (url, data, useJson) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + app_config_1.AppConfig.authKey);
        var bodyData;
        if (useJson === false) {
            headers.append("Content-Type", "application/x-www-form-urlencoded");
            bodyData = new http_1.URLSearchParams();
            Object.keys(data).map(function (k) {
                if (data.hasOwnProperty(k)) {
                    bodyData.set(k, data[k]);
                }
            });
        }
        else {
            headers.append("Content-Type", "application/json");
            bodyData = JSON.stringify(data);
        }
        var parameters = new http_1.URLSearchParams();
        var accessToken = this.user.getAccessToken();
        if (accessToken)
            parameters.set("access_token", accessToken);
        var observable = Observable_1.Observable.create(function (observer) {
            _this.http.post(app_config_1.AppConfig.apiURL + url, bodyData, {
                headers: headers,
                search: parameters
            }).map(function (res) {
                console.debug("http request completed: " + url);
                return res.json();
            }).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (error) {
                console.debug("error occurred.");
                throw new ServerException_1.ServerException(error);
            });
        });
        return observable.share();
    };
    HttpService = __decorate([
        core_1.Injectable()
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
