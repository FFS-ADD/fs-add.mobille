"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService(storageService) {
        this.storageService = storageService;
        this.token = {
            accessToken: null,
            refreshToken: null,
            tokenType: null,
            expiresIn: null,
            scope: null
        };
        this.user = {
            username: null,
            name: null,
            role: null,
            avatar: null,
            project: null,
            status: null
        };
        var t = this.storageService.get('token');
        var u = this.storageService.get('user');
        this.token = t ? t : this.token;
        this.user = u ? u : this.user;
        console.debug("UserService.constructor");
        console.debug(t);
        console.debug(u);
    }
    UserService.prototype.storeToken = function () {
        this.storageService.store('token', this.token);
    };
    UserService.prototype.storeUser = function () {
        this.storageService.store('user', this.user);
    };
    UserService.prototype.getAccessToken = function () {
        return this.token.accessToken;
    };
    UserService.prototype.setAccessToken = function (accessToken) {
        this.token.accessToken = accessToken;
    };
    UserService.prototype.getRefreshToken = function () {
        return this.token.refreshToken;
    };
    UserService.prototype.setRefreshToken = function (refreshToken) {
        this.token.refreshToken = refreshToken;
    };
    UserService.prototype.getTokenType = function () {
        return this.token.tokenType;
    };
    UserService.prototype.setTokenType = function (tokenType) {
        this.token.tokenType = tokenType;
    };
    UserService.prototype.getExpiresIn = function () {
        return this.token.expiresIn;
    };
    UserService.prototype.setExpiresIn = function (expiresIn) {
        this.token.expiresIn = expiresIn;
    };
    UserService.prototype.getScope = function () {
        return this.token.scope;
    };
    UserService.prototype.setScope = function (scope) {
        this.token.scope = scope;
    };
    UserService.prototype.setUsername = function (username) {
        this.user.username = username;
    };
    UserService.prototype.getUsername = function () {
        return this.user.username;
    };
    UserService.prototype.setName = function (name) {
        this.user.name = name;
    };
    UserService.prototype.getName = function () {
        return this.user.name;
    };
    UserService.prototype.setRole = function (role) {
        this.user.role = role;
    };
    UserService.prototype.getRole = function () {
        return this.user.role;
    };
    UserService.prototype.setAvatar = function (avatar) {
        this.user.avatar = avatar;
    };
    UserService.prototype.getAvatar = function () {
        return this.user.avatar;
    };
    UserService.prototype.setProject = function (project) {
        this.user.project = project;
    };
    UserService.prototype.getProject = function () {
        return this.user.project;
    };
    UserService.prototype.setStatus = function (status) {
        this.user.status = status;
    };
    UserService.prototype.getStatus = function () {
        return this.user.status;
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
