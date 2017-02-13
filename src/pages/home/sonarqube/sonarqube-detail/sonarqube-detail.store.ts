import {Injectable}from "@angular/core";
import {Dispatcher}from "../../../../core/Dispatcher";
import Rx from 'rxjs/Rx';
import { SonarqubeDetailState }from "./sonarqube-detail.state";
import { SonarqubeDetailActionType }from "./sonarqube-detail.action.type";
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
        'responsive': true,
        'scales': {
            yAxes: [{
                display: true
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
    private LOC_CHART_OPTIONS: any = {
        responsive: true
    };
    private LOC_CHART_COLORS:Array<any> = [{
        backgroundColor: '#FFF',
        borderColor: '#1EAAF2',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#1EAAF2',
        fill: false
    }];

    // coverage
    private COVERAGE_CHART_OPTIONS: any = {
        responsive: true
    };
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

    public init(data) {
        var source = Rx.Observable.from(data.sonardashboardlList);
        var count = source.map(function(value: any) {
            return {
                'dates': value.createDate.substring(5, 8),
                'vNumber': parseInt(value.vulneralilities, 10),
                'bNumber': parseInt(value.bugs, 10),
                'cNumber': parseInt(value.codeSmells, 10),
                'v': value.vulneralilities,
                'b': value.bugs,
                'c': value.codeSmells,
                'locLine': value.line,
                'coverageLine': value.dLine
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
                {data: c.vArray, label: 'Vulneralilities'}
            ];
            let vResponse: SonarqubeVulneralilitiesHistoryResponseInterface = {
                colors: this.V_CHART_COLORS,
                options: this.VBC_CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: vDatas
            };

            // bugs
            var bugsDatas: Array<any> = [
                {data: c.bArray, label: 'Bugs'}
            ];
            let bugsResponse: SonarqubeBugsHistoryResponseInterface = {
                colors: this.B_CHART_COLORS,
                options: this.VBC_CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: bugsDatas
            };

            // CodeSmells
            var codeSmellsDatas: Array<any> = [
                {data: c.cArray, label: 'Code Smells'}
            ];
            let codeSmellsResponse: SonarqubeCodeSmellsHistoryResponseInterface = {
                colors: this.C_CHART_COLORS,
                options: this.VBC_CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: bugsDatas
            };

            // loc
            var locDatas: Array<any> = [
                {data: c.locLineArray, label: 'Line'}
            ];
            let locResponse: SonarqubeLocHistoryResponseInterface = {
                colors: this.LOC_CHART_COLORS,
                options: this.LOC_CHART_OPTIONS,
                labels: c.dates.reverse(),
                datas: locDatas
            };
            // coverage
            var coverageDatas: Array<any> = [
                {data: c.coverageLineArray, label: 'Line'}
            ];
            let coverageResponse: SonarqubeCoverageHistoryResponseInterface = {
                colors: this.COVERAGE_CHART_COLORS,
                options: this.COVERAGE_CHART_OPTIONS,
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
