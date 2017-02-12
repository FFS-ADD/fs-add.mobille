import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarometerDetailPage } from './barometer-detail/barometer-detail'

@Component({
    selector: 'barometer-area',
    providers: [],
    templateUrl: 'barometer.html',
})
export class BarometerComponent {

    constructor(public nav: NavController) {
        // this.action.init();
    }

    detail() {
         this.nav.push(BarometerDetailPage);
    }
}