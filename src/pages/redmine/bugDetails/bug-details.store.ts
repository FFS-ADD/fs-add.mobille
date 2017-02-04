import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BugDetailsActionType} from "./bug-details.action.type";
import {BugDetailsState} from "./bug-details.state";

@Injectable()
export class BugDetailsStore {
  constructor(private dispatcher:Dispatcher, private state: BugDetailsState) {
        this.dispatcher.bindActions( {
      type: BugDetailsActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  private CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      display: true,
      enabled: true,
      callbacks: {
        beforeTitle: function(tooltipItems, data) {
          let item = tooltipItems[0];
          let labels = data.datasets[item.datasetIndex].labels;

          return labels[item.index];
        },
        label: function(tooltipItem, data) {
          let item = tooltipItem;
          let datasets = data.datasets[item.datasetIndex].data;
          let sum: number = 0;
          for (let i = 0; i < datasets.length; i++) {
            sum = sum + datasets[i];
          }
          return Math.floor(datasets[item.index] * 100 / sum) + '%';
        }
      }
    },
  };

  private DATA_SET_LABELS = ["New","In Progress","Fixed","ReTesting","Closed"];

  private colors = [{backgroundColor: ["#efb14e", "#6e3c78", "#2d578b", "#3f99ec", "#00060e"]}];

  public init(data) {
    console.log("BugStore#init");
    // console.log(data);
    // let response: BugResponseInterface = data.result;
    // let totalBugs: number = response.new + response.inProgress + response.fixed + response.retesting + response.close;
    // let dataSets: BugScreenDataSet = {
    //   labels: this.DATA_SET_LABELS,
    //   data: [response.new, response.inProgress, response.fixed, response.retesting, response.close]
    // };
    // let screenResponse: BugScreenInterface = {
    //   dataSets: [dataSets],
    //   bugResponse: response,
    //   colors : this.colors,
    //   options: this.CHART_OPTIONS
    // };
    // this.state.totalBugs = totalBugs;
    // this.state.screen = screenResponse;
  }
}