import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { QaDetailsActionType } from "./qaDetails.action.type";
import { QaDetailsState } from "./qaDetails.state";
import { QaDetailsScreenDataSet, QaReport, QaCanvasInterface } from "./qaDetails.interface";

@Injectable()
export class QaDetailsStore {
  constructor(private dispatcher: Dispatcher, private state: QaDetailsState) {
    this.dispatcher.bindActions({
      type: QaDetailsActionType.INIT,
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
    { backgroundColor: ["#5677fc", "#5677fc", "#5677fc", "#5677fc", "#5677fc", "#5677fc", "#5677fc"] },
    { backgroundColor: ["#259b24", "#259b24", "#259b24", "#259b24", "#259b24", "#259b24", "#259b24"] },
    { backgroundColor: ["#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00"] },
    { backgroundColor: ["#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800"] }];

  public init(data) {
    console.log("QaDetailStore#init");
    console.log(data.result)
    this.state.screen = data.result;
    this.state.qaHistoryCanvas = this.getQaHistory(this.state.screen.qaHistory);
  }

  private getQaHistory(qaHistory: QaReport[]): QaCanvasInterface {
    let dataSets: QaDetailsScreenDataSet[] = new Array();

    let onScheduleData = new Array(7);
    let delayData = new Array(7);
    let closedData = new Array(7);
    let pendingData = new Array(7);
    let dateData = new Array(7);
    let index = 0;
    qaHistory.forEach((qa) => {
      onScheduleData[index] = qa.onSchedule;
      delayData[index] = qa.delay;
      closedData[index] = qa.closed;
      pendingData[index] = qa.pending;
      dateData[index] = qa.date;
      index++;
    });

    let onScheduleDataSet: QaDetailsScreenDataSet = {
      label: "New",
      data: onScheduleData
    };

    let delayDataSet: QaDetailsScreenDataSet = {
      label: "In Progress",
      data: delayData
    };

    let closedDataSet: QaDetailsScreenDataSet = {
      label: "Overdue",
      data: closedData
    };

    let pendingDataSet: QaDetailsScreenDataSet = {
      label: "Closed",
      data: pendingData
    };

    dataSets.push(onScheduleDataSet);
    dataSets.push(delayDataSet);
    dataSets.push(closedDataSet);
    dataSets.push(pendingDataSet);

    let result: QaCanvasInterface = {
      chartType: "bar",
      labels: dateData,
      dataSets: dataSets,
      options: this.BAR_CHART_OPTIONS,
      colors: this.BAR_CHART_COLORS
    };

    return result;
  }
}
