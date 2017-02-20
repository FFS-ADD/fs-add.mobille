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

  public init(response) {
    console.log("QaDetailStore#init");
    console.log(response.data)
    this.state.screen = response.data;
    this.state.qaHistoryCanvas = this.getQaHistory(this.state.screen.qaHistory);
  }

  private getQaHistory(qaHistory: QaReport[]): QaCanvasInterface {
    let dataSets: QaDetailsScreenDataSet[] = new Array();

    let newData = new Array(7);
    let inProgressData = new Array(7);
    let overdueData = new Array(7);
    let closedData = new Array(7);
    let dateData = new Array(7);
    let index = 0;
    qaHistory.forEach((qa) => {
      newData[index] = qa.new;
      inProgressData[index] = qa.inProgress;
      overdueData[index] = qa.overdue;
      closedData[index] = qa.closed;
      dateData[index] = qa.date;
      index++;
    });

    let newDataSet: QaDetailsScreenDataSet = {
      label: "New",
      data: newData
    };

    let inProgressDataSet: QaDetailsScreenDataSet = {
      label: "In Progress",
      data: inProgressData
    };

    let overdueDataSet: QaDetailsScreenDataSet = {
      label: "Overdue",
      data: overdueData
    };

    let closedDataSet: QaDetailsScreenDataSet = {
      label: "Closed",
      data: closedData
    };


    dataSets.push(newDataSet);
    dataSets.push(inProgressDataSet);
    dataSets.push(overdueDataSet);
    dataSets.push(closedDataSet);

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
