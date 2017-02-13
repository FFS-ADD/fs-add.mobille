import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarometerDetailPage } from './barometer-detail/barometer-detail'
import { LastUpdateStatusInfo } from './barometer.lastProInfo'

@Component({
    selector: 'barometer-area',
    providers: [LastUpdateStatusInfo],
    templateUrl: 'barometer.html',
})
export class BarometerComponent {

    constructor(public nav: NavController,
                private lastStatus: LastUpdateStatusInfo) {
      this.lastStatus.faceIcon = 'md-happy';
      this.lastStatus.infoText = 'this is a test log';
      this.lastStatus.statusColor = '2';
      this.lastStatus.updateData = '2017/12/17';
    }

    detail() {
         this.nav.push(BarometerDetailPage);
    }
}
