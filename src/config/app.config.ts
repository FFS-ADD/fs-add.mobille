import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiURL: string;
}

export const AppConfig: IAppConfig = {
    apiURL: 'https://xxx.xxx.xxx'
}