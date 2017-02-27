import { Injectable } from "@angular/core";
import { StorageService } from "./StorageService";

export interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  scope: string;
}

export interface UserInterface {
  mail: string;
  name: string;
  lastLoginTime: string;
}

@Injectable()
export class UserService {
  private token: TokenInterface = {
    accessToken: null,
    refreshToken: null,
    tokenType: null,
    expiresIn: null,
    scope: null
  };

  private user: UserInterface = {
    mail: null,
    name: null,
    lastLoginTime: null
  };

  constructor(private storageService: StorageService) {
    let t = this.storageService.get('token');
    let u = this.storageService.get('user');
    this.token = t ? t : this.token;
    this.user = u ? u : this.user;
    console.debug("UserService.constructor")
    console.debug(t);
    console.debug(u);
  }

  public storeToken() {
    this.storageService.store('token', this.token);
  }

  public storeUser() {
    this.storageService.store('user', this.user);
  }

  public getAccessToken(): string {
    return this.token.accessToken;
  }

  public setAccessToken(accessToken: string) {
    this.token.accessToken = accessToken;
  }

  public getRefreshToken(): string {
    return this.token.refreshToken;
  }

  public setRefreshToken(refreshToken: string) {
    this.token.refreshToken = refreshToken;
  }

  public getTokenType(): string {
    return this.token.tokenType;
  }

  public setTokenType(tokenType: string) {
    this.token.tokenType = tokenType;
  }

  public getExpiresIn(): number {
    return this.token.expiresIn;
  }

  public setExpiresIn(expiresIn: number) {
    this.token.expiresIn = expiresIn;
  }

  public getScope(): string {
    return this.token.scope;
  }

  public setScope(scope: string) {
    this.token.scope = scope;
  }

  public setMail(mail: string) {
    this.user.mail = mail;
  }

  public getMail(): string {
    return this.user.mail;
  }

  public setName(name: string) {
    this.user.name = name;
  }

  public getName(): string {
    return this.user.name;
  }

  public setLastLoginTime(lastLoginTime) {
    this.user.lastLoginTime = lastLoginTime;
  }

  public getLastLoginTime(): string {
    return this.user.lastLoginTime;
  }
}
