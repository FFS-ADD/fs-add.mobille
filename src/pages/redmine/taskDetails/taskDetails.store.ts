import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {TaskDetailsActionType} from "./taskDetails.action.type";
import {TaskDetailsState} from "./taskDetails.state";

@Injectable()
export class TaskDetailsStore {
  constructor(private dispatcher:Dispatcher, private state: TaskDetailsState) {
        this.dispatcher.bindActions( {
      type: TaskDetailsActionType.INIT,
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
    console.log("TaskDetailStore#init");
    console.log(data.result)
     this.state.screen = data.result;
  }
}
