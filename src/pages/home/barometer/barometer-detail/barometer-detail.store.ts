import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../../core/Dispatcher";
import { BaroMeterDetailState }from "./barometer-detail.state";
import { BaroMeterDetailActionType }from "./barometer-detail.action.type";
import { ProjectDetail} from "./barometer-detail.interface";

@Injectable()
export class BaroMeterDetailStore {

    constructor(private dispatcher: Dispatcher, private state: BaroMeterDetailState) {
        this.dispatcher.bindActions({
            type: BaroMeterDetailActionType.INIT,
            instance: this,
            handler: this.init
        });

        // this.state.topEvent = {eventLevel: 0, eventDate:'', eventDescription:''};
        // this.state.overview ={projectName: '', lastUpdateTime: '', projectStatus: 0};
    }

    public init(data) {
        let response: ProjectDetail = data;
        this.state.loading = false;
        this.state.events = response.events;
    }

}
