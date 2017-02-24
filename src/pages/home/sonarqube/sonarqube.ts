import { Component , Input, AfterViewInit} from '@angular/core';
import { NavController, Events } from 'ionic-angular';
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
    private qualityDisplayFlg:boolean;
    private locDisplayFlg:boolean;
    private coverageDisplayFlg:boolean;
    private dupDisplayFlg:boolean;
    
    constructor(public nav: NavController,
                public events: Events, 
                private action: SonarqubeAction, 
                private state: SonarqubeState,
                private store: SonarqubeStore) {
        this.action.init();

        this.listenHomeEvents();
    }

     public setDisplayFlg(qualityDisplayFlg:boolean,locDisplayFlg:boolean,coverageDisplayFlg:boolean,dupDisplayFlg:boolean) {
        this.qualityDisplayFlg = qualityDisplayFlg;
        this.locDisplayFlg = locDisplayFlg;
        this.coverageDisplayFlg = coverageDisplayFlg;
        this.dupDisplayFlg = dupDisplayFlg;
    }

    private covertToBoolean(s){
       return s==='true'? true:false;
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

    listenHomeEvents() {
        this.events.subscribe('home:refresh', () => {
            this.refresh();
            console.log('refresh sonarqube data');
        });
    }
}