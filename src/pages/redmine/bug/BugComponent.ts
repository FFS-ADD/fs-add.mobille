import {Component} from "@angular/core";
import BugAction from "./BugAction";
import {BugState} from "./BugState";
//import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({

  providers: [BugAction, BugState],
  templateUrl: "bugComponent.html",
})
export class BugComponent {
  private form;
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
  private chartType = "doughnut";
  private data = [{
    labels : ["New","In Progress","Fixed","ReTesting","Closed"],
    data :[90, 50, 40, 50, 48]
  }];
  constructor(private action: BugAction, private state: BugState) {
    this.form =  {
      response: {
        chartType: this.chartType,
        datasets: this.data,
        options: this.CHART_OPTIONS
      }
    }
    console.info(this.form);
  }
}
