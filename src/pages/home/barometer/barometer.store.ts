import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import { BaroMeterState }from "./barometer.state";
import { BaroMeterActionType }from "./barometer.action.type";
import { ProjectEvent, ProjectOverview} from "./barometer.interface";

@Injectable()
export class BaroMeterStore {

    constructor(private dispatcher: Dispatcher, private state: BaroMeterState) {
        this.dispatcher.bindActions({
            type: BaroMeterActionType.OVERVIEW,
            instance: this,
            handler: this.initOverview
        });

        this.dispatcher.bindActions({
            type: BaroMeterActionType.TOP_EVENT,
            instance: this,
            handler: this.initTopEvents
        });

        // this.state.topEvent = {eventLevel: 0, eventDate:'', eventDescription:''};
        // this.state.overview ={projectName: '', lastUpdateTime: '', projectStatus: 0};
    }

    public initOverview(data) {
        let response: ProjectOverview = data;
        this.state.overviewLoading = false;
        this.state.overview = response;
    }

    public initTopEvents(data) {
        let response: ProjectEvent = data;
        this.state.topEventLoading = false;
        this.state.topEvent = response;
    }

}
