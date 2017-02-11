import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BackLogDetailActionType} from "./backlog-detail.action.type";
import {BackLogDetailState} from "./backlog-detail.state";
import {TaskDetailsScreenDataSet, TaskReport, BackLogCanvasInterface} from "./backlog-detail.interface";

@Injectable()
export class BackLogDetailStore {
  constructor(private dispatcher:Dispatcher, private state: BackLogDetailState) {
        this.dispatcher.bindActions( {
      type: BackLogDetailActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  private BAR_CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: true,
      position: "bottom",
      onClick: null,
      labels: {
        boxWidth: 13
      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        categoryPercentage: 0.7,
        gridLines: {
          drawTicks: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          drawTicks: false
        }
      }]
    },
    tooltips: {
      display: true,
      enabled: true,
      mode: 'label',
    },
  };

  private BAR_CHART_COLORS = [
    { backgroundColor: ["#259b24", "#259b24", "#259b24", "#259b24", "#259b24", "#259b24", "#259b24"] },
    { backgroundColor: ["#e51c23", "#e51c23", "#e51c23", "#e51c23", "#e51c23", "#e51c23", "#e51c23"] },
    { backgroundColor: ["#607d8b", "#607d8b", "#607d8b", "#607d8b", "#607d8b", "#607d8b", "#607d8b"] },
    { backgroundColor: ["#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800"] }];

  public init(data) {
    console.log("BackLogDetailStore#init");
    console.log(data.result);
    this.state.screen = data.result;
    this.state.taskHistoryCanvas = this.getTaskHistory(this.state.screen.taskHistory);
  }


  private getTaskHistory(taskHistory: TaskReport[]): BackLogCanvasInterface {
    let dataSets: TaskDetailsScreenDataSet[] = new Array();

    let onScheduleData = new Array(7);
    let delayData = new Array(7);
    let closedData = new Array(7);
    let pendingData = new Array(7);
    let dateData = new Array(7);
    let index = 0;
    taskHistory.forEach((task) => {
      onScheduleData[index] = task.onSchedule;
      delayData[index] = task.delay;
      closedData[index] = task.closed;
      pendingData[index] = task.pending;
      dateData[index] = task.date;
      index++;
    });

    let onScheduleDataSet: TaskDetailsScreenDataSet = {
      label: "OnSchedule",
      data: onScheduleData
    };

    let delayDataSet: TaskDetailsScreenDataSet = {
      label: "Delay",
      data: delayData
    };

    let closedDataSet: TaskDetailsScreenDataSet = {
      label: "Closed",
      data: closedData
    };

    let pendingDataSet: TaskDetailsScreenDataSet = {
      label: "Pending",
      data: pendingData
    };

    dataSets.push(onScheduleDataSet);
    dataSets.push(delayDataSet);
    dataSets.push(closedDataSet);
    dataSets.push(pendingDataSet);

    let result: BackLogCanvasInterface = {
      chartType: "bar",
      labels: dateData,
      dataSets: dataSets,
      options: this.BAR_CHART_OPTIONS,
      colors: this.BAR_CHART_COLORS
    };

    return result;
  }
}
