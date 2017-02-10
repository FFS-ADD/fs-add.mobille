import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../../core/Dispatcher";
import { SonarqubeState }from "./sonarqube.state";
import { SonarqubeActionType }from "./sonarqube.action.type";
import { SonarqubeResponseInterface, 
         SonarqubeScreenInterface,
         SonarqubeLocResponseInterface,
         SonarqubeCoverageResponseInterface,
         SonarqubeDuplicationResponseInterface } from "./sonarqube.interface";

@Injectable()
export class SonarqubeStore {

    constructor(private dispatcher: Dispatcher, private state: SonarqubeState) {
        this.dispatcher.bindActions({
            type: SonarqubeActionType.QUALITY,
            instance: this,
            handler: this.init
        });

        this.dispatcher.bindActions({
            type: SonarqubeActionType.LOC,
            instance: this,
            handler: this.initLoc
        });

        this.dispatcher.bindActions({
            type: SonarqubeActionType.COVERAGE,
            instance: this,
            handler: this.initCoverage
        });

        this.dispatcher.bindActions({
            type: SonarqubeActionType.DUPLICATION,
            instance: this,
            handler: this.initDuplication
        });

        this.state.screen = {};
    }

    public init(data) {
        let response: SonarqubeResponseInterface = data;
        // let screenResponse: SonarqubeScreenInterface = {
        //     sonarqubeResponse: response
        // };
        this.state.screen.sonarqubeResponse = response;
    }

    public initLoc(data) {
        let response: SonarqubeLocResponseInterface = data;
        let screenResponse: SonarqubeScreenInterface = {
            sonarqubeLocResponse: response
        };
        this.state.screen.sonarqubeLocResponse = response;
    }

    public initCoverage(data) {
        let response: SonarqubeCoverageResponseInterface = data;
        let screenResponse: SonarqubeScreenInterface = {
            sonarqubeCoverageResponse: response
        };
        this.state.screen.sonarqubeCoverageResponse = response;
    }

    public initDuplication(data) {
        let response: SonarqubeDuplicationResponseInterface = data;
        let screenResponse: SonarqubeScreenInterface = {
            sonarqubeDuplicationResponse: response
        };
        this.state.screen.sonarqubeDuplicationResponse = response;
    }
}
