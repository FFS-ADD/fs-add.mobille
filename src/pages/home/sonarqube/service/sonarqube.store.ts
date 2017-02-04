import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../../core/Dispatcher";
import { SonarqubeState }from "./sonarqube.state";
import { SonarqubeActionType }from "./sonarqube.action.type";
import { SonarqubeResponseInterface, SonarqubeScreenInterface} from "./sonarqube.interface";

@Injectable()
export class SonarqubeStore {

    constructor(private dispatcher: Dispatcher, private state: SonarqubeState) {
        this.dispatcher.bindActions({
            type: SonarqubeActionType.INIT,
            instance: this,
            handler: this.init
        });
    }

    public init(data) {
        let response: SonarqubeResponseInterface = data.data;
        let screenResponse: SonarqubeScreenInterface = {
            sonarqubeResponse: response
        };
        this.state.screen = screenResponse;
    }
}
