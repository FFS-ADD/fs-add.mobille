import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SonarqubeDetailPage } from './sonarqube-detail/sonarqube-detail'
import SonarqubeAction from "./sonarqube.action";
import { SonarqubeState } from "./sonarqube.state";
import { SonarqubeStore } from "./sonarqube.store";

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

    refresh() {
        this.state.qualityLoading = true;
        this.state.locLoading = true;
        this.state.coverageLoading = true;
        this.state.duplicationLoading = true;
        this.action.init();
    }
}