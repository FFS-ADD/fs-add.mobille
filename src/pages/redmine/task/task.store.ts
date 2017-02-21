import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { TaskState } from "./task.state";
import { TaskActionType } from "./task.action.type";
import { TaskResponseInterface, TaskScreenDataSet, TaskScreenInterface } from "./task.interface";

@Injectable()
export class TaskStore {
  constructor(private dispatcher: Dispatcher, private state: TaskState) {
    this.dispatcher.bindActions({
      type: TaskActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  private chartType: string = "pie";

  private CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      display: true,
      enabled: true,
      callbacks: {
        beforeTitle: function (tooltipItems, data) {
          let item = tooltipItems[0];
          let labels = data.datasets[item.datasetIndex].labels;

          return labels[item.index];
        },
        label: function (tooltipItem, data) {
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

  private DATA_SET_LABELS = ["OnSchedule", "Delay", "Closed", "Pending"];

  private colors = [{ backgroundColor: ["#259b24", "#e51c23", "#607d8b", "#ff9800"] }];

  public init(httpResponse) {
    let response: TaskResponseInterface = httpResponse.data;
    let dataSets: TaskScreenDataSet = {
      labels: this.DATA_SET_LABELS,
      data: [response.onSchedule, response.delay, response.closed, response.pending]
    };

    let screenResponse: TaskScreenInterface = {
      chartType: this.chartType,
      dataSets: [dataSets],
      taskResponse: response,
      colors: this.colors,
      options: this.CHART_OPTIONS
    };

    this.state.totalTasks = response.onSchedule + response.delay + response.closed + response.pending;
    this.state.screen = screenResponse;
  }
}
