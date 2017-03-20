import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../../core/Dispatcher";
import Rx from 'rxjs/Rx';
import { SonarqubeDetailState }from "./sonarqube-detail.state";
import { SonarqubeDetailActionType }from "./sonarqube-detail.action.type";
import * as _ from "lodash";
import { SonarqubeDetailScreenInterface,
         SonarqubeVulneralilitiesHistoryResponseInterface,
         SonarqubeBugsHistoryResponseInterface,
         SonarqubeCodeSmellsHistoryResponseInterface,
         SonarqubeLocHistoryResponseInterface,
         SonarqubeCoverageHistoryResponseInterface } from "./sonarqube-detail.interface";

@Injectable()
export class SonarqubeDetailStore {

    // VBC
    private VBC_CHART_OPTIONS: any = {
        // 'responsive': true,
        'scales': {
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    beginAtZero:true
                }
            }]
        }
    };

    private V_CHART_COLORS: Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#1EAAF2',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#1EAAF2',
        fill: false
    }];

    private B_CHART_COLORS: Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#51D969',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#51D969',
        fill: false
    }];

    private C_CHART_COLORS: Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#F3E253',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#F3E253',
        fill: false
    }];

    // LOC
    private CHART_OPTIONS: any = {
        responsive: true,
        'scales': {
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    beginAtZero:true,
                    callback: function(tickValue, index, ticks) {
                        // If we have lots of ticks, don't use the ones
                        let delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

                        // If we have a number like 2.5 as the delta, figure out how many decimal places we need
                        if (Math.abs(delta) > 1) {
                            if (tickValue !== Math.floor(tickValue)) {
                                // not an integer
                                delta = tickValue - Math.floor(tickValue);
                            }
                        }

                        let logDelta;
                        if (Math.log10) {
                            logDelta = Math.log10(Math.abs(delta));
                        } else {
                            logDelta = Math.log(Math.abs(delta)) / Math.LN10;
                        };
                        let tickString = '';

                        if (tickValue !== 0) {
                            let numDecimal = -1 * Math.floor(logDelta);
                            numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
                            tickString = tickValue.toFixed(numDecimal);
                        } else {
                            tickString = '0'; // never show decimal places for 0
                        }

                        return tickString + 'k'
                    }
                }
            }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let item = tooltipItem;
              let datasets = data.datasets[item.datasetIndex].data;
              return datasets[item.index] + 'k';
            }
          }
        }
    };
    private LOC_CHART_COLORS:Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#1EAAF2',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#1EAAF2',
        fill: false
    }];

    private COVERAGE_CHART_COLORS:Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#3D5363',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#3D5363',
        fill: false
    }];

    constructor(private dispatcher: Dispatcher, private state: SonarqubeDetailState) {
        this.dispatcher.bindActions({
            type: SonarqubeDetailActionType.INIT,
            instance: this,
            handler: this.init
        });
    }

    private formatDate(time) {
        var getMonthAndDay = time.substring(4, 8);
        var getMonth = getMonthAndDay.substring(0, 2);
        var getDay = getMonthAndDay.substring(2);
        return parseInt(getMonth, 10) + '/' + parseInt(getDay, 10);
    }

    public init(data) {
        var source = Rx.Observable.from(data.sonardashboardlList);
        var count = source.map((value: any) => {
            return {
                'dates': this.formatDate(value.createDate),
                'vNumber': parseInt(value.vulneralilities, 10),
                'bNumber': parseInt(value.bugs, 10),
                'cNumber': parseInt(value.codeSmells, 10),
                'v': value.vulneralilities,
                'b': value.bugs,
                'c': value.codeSmells,
                'locLine': value.line / 1000,
                'coverageLine': value.dLine / 1000
            };
        }).reduce((acc: any, value: any) => {
            return {
                'dates': [...acc.dates, ...value.dates],
                'vCount': acc.vCount + value.vNumber,
                'bCount': acc.bCount + value.bNumber,
                'cCount': acc.cCount + value.cNumber,
                'vArray': [...acc.vArray, ...value.v],
                'bArray': [...acc.bArray, ...value.b],
                'cArray': [...acc.cArray, ...value.c],
                'locLineArray': [...acc.locLineArray, ...value.locLine],
                'coverageLineArray': [...acc.coverageLineArray, ...value.coverageLine]
            };
        }, {'vCount': 0, 'bCount': 0, 'cCount': 0,
            vArray: [], bArray: [], cArray: [], dates: [],
            locLineArray: [], coverageLineArray:[]
        });
        count.subscribe((c: any) => {
            // var vmax = Math.max.apply(null, c.vArray) < 100 ? 100 : c.vCount;
            // var vArray = c.vArray.map(function(d, i) {
            //     return (100 * parseInt(d, 10) / c.vCount) | 0;
            // });
            // var bArray = c.bArray.map(function(d, i) {
            //     return (100 * parseInt(d, 10) / c.bCount) | 0;
            // });
            // var cArray = c.cArray.map(function(d, i) {
            //     return (100 * parseInt(d, 10) / c.cCount) | 0;
            // });

            // Vulneralilities
            var vDatas: Array<any> = [
                {data: c.vArray.reverse(), label: 'Vulneralilities'}
            ];
            let vOptions = _.cloneDeep(this.VBC_CHART_OPTIONS);
            vOptions.scales.yAxes[0].ticks.max = parseInt(_.max(c.vArray.reverse())) +  5;
            let vResponse: SonarqubeVulneralilitiesHistoryResponseInterface = {
                colors: this.V_CHART_COLORS,
                options: vOptions,
                labels: c.dates.reverse(),
                datas: vDatas
            };

            // bugs
            var bugsDatas: Array<any> = [
                {data: c.bArray.reverse(), label: 'Bugs'}
            ];
            let bugOptions = _.cloneDeep(this.VBC_CHART_OPTIONS);
            bugOptions.scales.yAxes[0].ticks.max = parseInt(_.max(c.bArray.reverse())) +  5;
            let bugsResponse: SonarqubeBugsHistoryResponseInterface = {
                colors: this.B_CHART_COLORS,
                options: bugOptions,
                labels: c.dates.reverse(),
                datas: bugsDatas
            };

            // CodeSmells
            var codeSmellsDatas: Array<any> = [
                {data: c.cArray.reverse(), label: 'Code Smells'}
            ];
            let codeOptions = _.cloneDeep(this.VBC_CHART_OPTIONS);
            codeOptions.scales.yAxes[0].ticks.max = parseInt(_.max(c.cArray.reverse())) +  5;
            let codeSmellsResponse: SonarqubeCodeSmellsHistoryResponseInterface = {
                colors: this.C_CHART_COLORS,
                options: codeOptions,
                labels: c.dates.reverse(),
                datas: codeSmellsDatas
            };

            // loc
            var locDatas: Array<any> = [
                {data: c.locLineArray.reverse(), label: 'Line'}
            ];
            let locResponse: SonarqubeLocHistoryResponseInterface = {
                colors: this.LOC_CHART_COLORS,
                options: this.CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: locDatas
            };
            // Duplication
            var coverageDatas: Array<any> = [
                {data: c.coverageLineArray.reverse(), label: 'Line'}
            ];
            let coverageResponse: SonarqubeCoverageHistoryResponseInterface = {
                colors: this.COVERAGE_CHART_COLORS,
                options: this.CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: coverageDatas
            };

            let response: SonarqubeDetailScreenInterface = {
                sonarqubeVulneralilitiesHistoryResponse: vResponse,
                sonarqubeBugsHistoryResponse: bugsResponse,
                sonarqubeCodeSmellsHistoryResponse: codeSmellsResponse,
                sonarqubeLocHistoryResponse: locResponse,
                sonarqubeCoverageHistoryResponse: coverageResponse
            }
            this.state.screen = response;
        });

    }
}
