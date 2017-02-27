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
  username: string;
  name: string;
  role: string;
  avatar: string;
  project: string;
  status: string;
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
    username: null,
    name: null,
    role: null,
    avatar: null,
    project: null,
    status:null
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

  public setUsername(username: string) {
    this.user.username = username;
  }

  public getUsername(): string {
    return this.user.username;
  }

  public setName(name: string) {
    this.user.name = name;
  }

  public getName(): string {
    return this.user.name;
  }

  public setRole(role) {
    this.user.role = role;
  }

  public getRole(): string {
    return this.user.role;
  }

  public setAvatar(avatar) {
    this.user.avatar = avatar;
  }

  public getAvatar(): string {
    return this.user.avatar;
  }

  public setProject(project) {
    this.user.project = project;
  }

  public getProject(): string {
    return this.user.project;
  }

  public setStatus(status) {
    this.user.status = status;
  }

  public getStatus(): string {
    return this.user.status;
  }
}
