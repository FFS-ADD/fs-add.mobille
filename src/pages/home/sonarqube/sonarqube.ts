import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SonarqubeDetailPage } from './sonarqube-detail/sonarqube-detail'
import SonarqubeAction from "./service/sonarqube.action";
import { SonarqubeState } from "./service/sonarqube.state";
import { SonarqubeStore } from "./service/sonarqube.store";

@Component({
    selector: 'sonar-qibe',
    providers: [SonarqubeAction, SonarqubeState, SonarqubeStore],
    templateUrl: 'sonarqube.html',
})
export class SonarqubeComponent {

    constructor(public nav: NavController, 
                private action: SonarqubeAction, 
                private state: SonarqubeState,
                private store: SonarqubeStore) {
        this.action.init();
    }

    detail() {
        this.nav.push(SonarqubeDetailPage);
    }
}