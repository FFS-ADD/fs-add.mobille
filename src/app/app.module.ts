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
import {BugComponent} from "../pages/redmine/bug/BugComponent";
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Login,
    BugComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Login,
    BugComponent
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
