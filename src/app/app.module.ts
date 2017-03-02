import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {Login} from '../pages/signIn/login/Login';
import {ModalDialogComponent} from '../core/modalDialog.component.ts';
import {APP_CONFIG, AppConfig} from '../config/app.config';
import {ResourceService} from '../providers/resource.service';
import {Dispatcher} from "../core/Dispatcher";
import {HttpService} from "../core/HttpService";
import {UserService} from "../core/UserService";
import {AddExceptionHandler} from "../core/AddExceptionHandler";
import {BugComponent} from "../pages/redmine/bug/bug";
import {ChartsModule} from 'ng2-charts/ng2-charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {BugDetailsComponent} from "../pages/redmine/bugDetails/bug-details";
import {SonarqubeComponent} from '../pages/home/sonarqube/sonarqube';
import {SonarqubeDetailPage} from '../pages/home/sonarqube/sonarqube-detail/sonarqube-detail'
import {DataSetting} from '../pages/signIn/datasetting/datasetting.component';
import {BackLogComponent} from "../pages/redmine/backlog/backlog-master";
import {BackLogDetailComponent} from "../pages/redmine/backlogDetails/backlog-detail";
import {TaskComponent} from "../pages/redmine/task/task";
import {TaskDetailsComponent} from "../pages/redmine/taskDetails/taskDetails";
import {QaComponent} from "../pages/redmine/qa/qa";
import {QaDetailsComponent} from "../pages/redmine/qaDetails/qaDetails";
import {NumberFormatPipe} from '../providers/pipes';
import {BaroMeterComponent} from '../pages/home/barometer/barometer';
import {BaroMeterDetailsComponent} from '../pages/home/barometer/barometer-detail/barometer-detail';
import {StorageService} from "../core/StorageService";
import {HeaderComponent} from "../pages/common/header";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Login,
    BugComponent,
    BugDetailsComponent,
    SonarqubeComponent,
    SonarqubeDetailPage,
    DataSetting,
    BackLogComponent,
    BackLogDetailComponent,
    TaskComponent,
    TaskDetailsComponent,
    QaComponent,
    QaDetailsComponent,
    NumberFormatPipe,
    BaroMeterComponent,
    BaroMeterDetailsComponent,
    ModalDialogComponent,
    HeaderComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Login,
    BugComponent,
    BugDetailsComponent,
    SonarqubeDetailPage,
    DataSetting,
    BackLogComponent,
    BackLogDetailComponent,
    TaskComponent,
    TaskDetailsComponent,
    QaComponent,
    QaDetailsComponent,
    BaroMeterComponent,
    BaroMeterDetailsComponent,
    ModalDialogComponent,
    HeaderComponent
  ],
  providers: [{provide: ErrorHandler, useClass: AddExceptionHandler}, {provide: APP_CONFIG, useValue: AppConfig},
    ResourceService,
    Dispatcher,
    HttpService,
    UserService,
    StorageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
