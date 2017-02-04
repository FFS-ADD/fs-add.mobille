import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'sonarqube-detail.html'
})
export class SonarqubeDetailPage {

    public vbc: any;
    public loc: any;
    public coverage: any;
    constructor(public nav: NavController) {
        this.vbc = this.getVBCData();
        this.loc = this.getLOCData();
        this.coverage = this.getCoverageData();
    }

    // vbc
    getVBCData() {
        var lineChartData: Array<any> = [
            {data: [20, 24, 40, 28, 10, 4, 0], label: 'Vulneralilities'},
            {data: [10, 9, 8, 12, 14, 15, 16], label: 'Bugs'},
            {data: [5, 6, 7, 4, 4, 4, 2], label: 'Code Smells'}
        ];
        var lineChartLabels:Array<any> = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'];
        var lineChartOptions:any = {
            responsive: true
        };
        var lineChartColors:Array<any> = [{
            backgroundColor: '#FFF',
            borderColor: '#1EAAF2',
            pointBackgroundColor: '#FFF',
            pointBorderColor: '#1EAAF2',
            fill: false
        }, {
            backgroundColor: '#FFF',
            borderColor: '#51D969',
            pointBackgroundColor: '#FFF',
            pointBorderColor: '#51D969',
            fill: false
        }, {
            backgroundColor: '#FFF',
            borderColor: '#F3E253',
            pointBackgroundColor: '#FFF',
            pointBorderColor: '#F3E253',
            fill: false
        }];
        return {
            lineChartData: lineChartData,
            lineChartLabels: lineChartLabels,
            lineChartOptions: lineChartOptions,
            lineChartColors: lineChartColors
        }
    }

    // LOC
    getLOCData() {
        var lineChartData: Array<any> = [
            {data: [18, 25, 38, 50, 60, 72, 90], label: 'Line'}
        ];
        var lineChartLabels:Array<any> = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'];
        var lineChartColors:Array<any> = [{
            backgroundColor: '#FFF',
            borderColor: '#1EAAF2',
            pointBackgroundColor: '#FFF',
            pointBorderColor: '#1EAAF2',
            fill: false
        }];
        var lineChartOptions:any = {
            responsive: true
        };
        return {
            lineChartData: lineChartData,
            lineChartLabels: lineChartLabels,
            lineChartOptions: lineChartOptions,
            lineChartColors: lineChartColors
        }
    }

    // coverage
    getCoverageData() {
        var lineChartData: Array<any> = [
            {data: [18, 25, 38, 50, 60, 72, 90], label: 'Line'}
        ];
        var lineChartLabels:Array<any> = ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'];
        var lineChartColors:Array<any> = [{
            backgroundColor: '#FFF',
            borderColor: '#3D5363',
            pointBackgroundColor: '#FFF',
            pointBorderColor: '#3D5363',
            fill: false
        }];
        var lineChartOptions:any = {
            responsive: true
        };
        return {
            lineChartData: lineChartData,
            lineChartLabels: lineChartLabels,
            lineChartOptions: lineChartOptions,
            lineChartColors: lineChartColors
        }
    }
}