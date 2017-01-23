import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/signIn/login/Login';
import { APP_CONFIG, AppConfig } from '../config/app.config';
import { ResourceService } from '../providers/resource.service';
import {Dispatcher} from "../core/Dispatcher";
import {HttpService} from "../core/HttpService";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Login
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: APP_CONFIG, useValue: AppConfig },
    ResourceService,
    Dispatcher,
    HttpService
  ]
})
export class AppModule {}
