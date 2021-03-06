import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { QaState } from "./qa.state";
import { QaActionType } from "./qa.action.type";
import { QaResponseInterface, QaScreenDataSet, QaScreenInterface } from "./qa.interface";

@Injectable()
export class QaStore {
  constructor(private dispatcher: Dispatcher, private state: QaState) {
    this.dispatcher.bindActions({
      type: QaActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  private chartType: string = "bar";

  private CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
          drawTicks: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          drawTicks: false
        }
      }]
    },
    // tooltips: {
    //   display: true,
    //   enabled: true,
    //   mode: 'label',
    // },
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
          return datasets[item.index];
        }
      }
    },

  };

  private labels = ["", "", "", ""];
  private toolTipLabels = ["New", "In process", "Overdue", "Closed"];

  private colors = [{ backgroundColor: ["#5677fc", "#259b24", "#ffff00", "#ff9800"] }];

  public init(httpResponse) {
    console.log("QAStore#init");
    console.log(httpResponse);

    let response: QaResponseInterface = httpResponse.data;
    let dataSets: QaScreenDataSet = {
      backgroundColor:this.colors,
      labels: this.toolTipLabels,
      data: [response.new, response.inProgress, response.overdue, response.closed]
    };

    let screenResponse: QaScreenInterface = {
      chartType: this.chartType,
      labels: this.labels,
      dataSets: [dataSets],
      qaResponse: response,
      colors: this.colors,
      options: this.CHART_OPTIONS
    };

    console.log(dataSets);

    this.state.totalQas = response.new + response.inProgress + response.overdue + response.closed;
    this.state.screen = screenResponse;
  }
}
