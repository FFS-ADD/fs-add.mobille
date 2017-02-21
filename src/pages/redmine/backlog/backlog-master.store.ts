import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BackLogMasterState}from "./backlog-master.state";
import {BackLogMasterActionType}from "./backlog-master.action.type";
import {BackLogResponseInterface, BackLogScreenInterface, BackLogScreenDataSet} from "./backlog-master.interface";

@Injectable()
export class BackLogMasterStore {
  constructor(private dispatcher:Dispatcher, private state:BackLogMasterState) {
        this.dispatcher.bindActions( {
      type:BackLogMasterActionType.INIT,
      instance:this,
      handler:this.init
    });
  }

  private chartType:string = "doughnut";

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

  private DATA_SET_LABELS = ["completed","unCompleted"];

  private colors = [{backgroundColor: ["#efb14e", "#CCCCCC"]}];

  public init(httpResponse) {
    console.log("BackLogStore#init");
    console.log(httpResponse);
    let response: BackLogResponseInterface = httpResponse.data;
    console.log(response);
    let dataSets: BackLogScreenDataSet = {
      labels: this.DATA_SET_LABELS,
      data: [response.completed, response.backLogTotal - response.completed]
    };
    let screenResponse: BackLogScreenInterface = {
      chartType: this.chartType,
      dataSets: [dataSets],
      backLogResponse: response,
      colors : this.colors,
      options: this.CHART_OPTIONS
    };
    this.state.screen = screenResponse;
  }
}
