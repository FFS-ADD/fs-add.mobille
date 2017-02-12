import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../core/Dispatcher";
import {BackLogDetailActionType} from "./backlog-detail.action.type";
import {BackLogDetailState} from "./backlog-detail.state";
import {
  BackLogCanvasInterface,
  BackLogDetailDataSet, BackLogDetailsResponse, BackLogDetailScreenInterface
} from "./backlog-detail.interface";

@Injectable()
export class BackLogDetailStore {
  constructor(private dispatcher:Dispatcher, private state: BackLogDetailState) {
        this.dispatcher.bindActions( {
      type: BackLogDetailActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

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
        },
        ticks: {
          suggestedMin: 0
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
    {backgroundColor: "#51a7f8", borderColor: "#436078", pointBackgroundColor: '#FFF', pointBorderColor: '#51a7f8', pointBorderWidth: 2},
    {backgroundColor: "#fae02b", borderColor: "#C1D1DE", pointBackgroundColor: '#FFF', pointBorderColor: '#fae02b', pointBorderWidth: 2}];

  public init(data) {
    console.log("BackLogDetailStore#init");
    console.log(data.result);
    let response: BackLogDetailsResponse = data.result;

    let screenResponse: BackLogDetailScreenInterface = {
      backLogCanvas: this.getBackLogCanvas(response),
      backLogList: response.bugDetailsHistoryData
    };

    this.state.screen = screenResponse;
    console.info(this.state);
  }


  private getBackLogCanvas(response: BackLogDetailsResponse): BackLogCanvasInterface {
    let dataSets: BackLogDetailDataSet[] = new Array();

    let planedDataSet: BackLogDetailDataSet = {
      label: "planed",
      fill: false,
      lineTension: 0,
      data: response.backLogCanvasData.planed
    };

    let actualDataSet: BackLogDetailDataSet = {
      label: "actual",
      fill: false,
      lineTension: 0,
      data: response.backLogCanvasData.actual
    };

    dataSets.push(planedDataSet);
    dataSets.push(actualDataSet);

    let result: BackLogCanvasInterface = {
      chartType: "line",
      labels: response.historyDate,
      dataSets: dataSets,
      options: this.LINE_CHART_OPTIONS,
      colors: this.LINE_CHART_COLORS
    };

    return result;
  }
}
