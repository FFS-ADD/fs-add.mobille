import {Component} from "@angular/core";
import BugAction from "./BugAction";
import {BugState} from "./BugState";
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({

  providers: [BugAction, BugState],
  templateUrl: "bugComponent.html",
})
export class BugComponent {
  private form;
  private CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: '',
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          show: true
        },
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          fontSize: 10,
          fontColor: '#91a0ad',
          maxRotation: 0
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          suggestedMin: 0
        }
      }]
    },
    ticks: {
      suggestedMin: 0,
      fontSize: 10,
      fontColor: '#91a0ad',
      maxRotation: 0
    },
  };
  private chartType = "doughnut";
  private data = [{data :[90, 50, 40, 50, 48, 33, 12]}];
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
