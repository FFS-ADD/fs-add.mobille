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
import {BugComponent} from "../pages/redmine/bug/bug";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {BugDetailsComponent} from "../pages/redmine/bugDetails/bug-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Login,
    BugComponent,
    BugDetailsComponent
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
    BugComponent,
    BugDetailsComponent
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
