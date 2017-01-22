import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  apiURL: string;
}

export const AppConfig:IAppConfig = {
  // apiURL: 'http://localhost:8080/add-api'
  apiURL: ''
}
