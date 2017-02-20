import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BugDetailsActionType} from "./bug-details.action.type";
import {BugDetailsState} from "./bug-details.state";
import {
  BugDetailsCanvasInterface, BugDetailsScreenInterface, BugDetailsScreenDataSet,
  BugDetailsResponse, BugFixDataSet
} from "./bug-details.interface";

@Injectable()
export class BugDetailsStore {
  constructor(private dispatcher:Dispatcher, private state: BugDetailsState) {
        this.dispatcher.bindActions( {
      type: BugDetailsActionType.INIT,
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
    {backgroundColor: ["#6fb02f","#6fb02f","#6fb02f","#6fb02f","#6fb02f","#6fb02f","#6fb02f"]},
    {backgroundColor: ["#bb2c2f","#bb2c2f","#bb2c2f","#bb2c2f","#bb2c2f","#bb2c2f","#bb2c2f"]},
    {backgroundColor: ["#6c7371","#6c7371","#6c7371","#6c7371","#6c7371","#6c7371","#6c7371"]},
    {backgroundColor: ["#e6a375","#e6a375","#e6a375","#e6a375","#e6a375","#e6a375","#e6a375"]},
    {backgroundColor: ["#d38d77","#d38d77","#d38d77","#d38d77","#d38d77","#d38d77","#d38d77"]}];

  private LINE_CHART_OPTIONS = {
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
        gridLines: {
          drawTicks: false
        }
      }],
      yAxes: [{
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

  private LINE_CHART_COLORS = [
    {backgroundColor: "#51a7f8", borderColor: "#51a7f8", pointBackgroundColor: '#FFF', pointBorderColor: '#51a7f8', pointBorderWidth: 2},
    {backgroundColor: "#61b066", borderColor: "#61b066", pointBackgroundColor: '#FFF', pointBorderColor: '#61b066', pointBorderWidth: 2},
    {backgroundColor: "#fae02b", borderColor: "#fae02b", pointBackgroundColor: '#FFF', pointBorderColor: '#fae02b', pointBorderWidth: 2}];

  public init(httpResponse) {
    console.log("BugDetailsStore#init");
    console.log(httpResponse);
    let response: BugDetailsResponse = httpResponse.data;

    let bugDetailsHistory: BugDetailsCanvasInterface = this.getBugDetailsHistory(response);

    let bugFixHistory: BugDetailsCanvasInterface = this.getBugFixHistory(response);

    let screenResponse: BugDetailsScreenInterface = {
      bugDetailsHistory : bugDetailsHistory,
      bugFixHistory: bugFixHistory,
      redmindingBugList: response.redmindingBugList
    };
    this.state.screen = screenResponse;
    console.info(this.state);
  }

  private getBugDetailsHistory(response: BugDetailsResponse): BugDetailsCanvasInterface {
    let dataSets: BugDetailsScreenDataSet[] = new Array();

    let newDataSet: BugDetailsScreenDataSet = {
      label: "New",
      data: response.bugDetailsHistoryData.news
    };

    let inProgressDataSet: BugDetailsScreenDataSet = {
      label: "In Progress",
      data: response.bugDetailsHistoryData.inProgress
    };

    let fixedDataSet: BugDetailsScreenDataSet = {
      label: "Fixed",
      data: response.bugDetailsHistoryData.fixed
    };

    let reTestingDataSet: BugDetailsScreenDataSet = {
      label: "ReTesting",
      data: response.bugDetailsHistoryData.reTesting
    };

    let closedDataSet: BugDetailsScreenDataSet = {
      label: "Closed",
      data: response.bugDetailsHistoryData.closed
    };

    dataSets.push(newDataSet);
    dataSets.push(inProgressDataSet);
    dataSets.push(fixedDataSet);
    dataSets.push(reTestingDataSet);
    dataSets.push(closedDataSet);

    let bugDetailsHistory: BugDetailsCanvasInterface = {
      chartType: "bar",
      labels: response.historyDate,
      dataSets: dataSets,
      options: this.BAR_CHART_OPTIONS,
      colors: this.BAR_CHART_COLORS
    };
    return bugDetailsHistory;
  }

  private getBugFixHistory(response: BugDetailsResponse): BugDetailsCanvasInterface {
    let dataSets: BugDetailsScreenDataSet[] = new Array();

    let inProgressDataSet: BugFixDataSet = {
      label: "In Progress",
      fill: false,
      lineTension: 0,
      data: response.bugFixHistoryData.inProgress
    };

    let newDataSet: BugFixDataSet = {
      label: "New",
      fill: false,
      lineTension: 0,
      data: response.bugFixHistoryData.news
    };

    let fixedDataSet: BugFixDataSet = {
      label: "Fixed",
      fill: false,
      lineTension: 0,
      data: response.bugFixHistoryData.fixed
    };

    dataSets.push(inProgressDataSet);
    dataSets.push(newDataSet);
    dataSets.push(fixedDataSet);

    let bugFixHistory: BugDetailsCanvasInterface = {
      chartType: "line",
      labels: response.historyDate,
      dataSets: dataSets,
      options: this.LINE_CHART_OPTIONS,
      colors: this.LINE_CHART_COLORS
    };
    return bugFixHistory;
  }
}
