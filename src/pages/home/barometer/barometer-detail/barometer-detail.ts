import { Component } from '@angular/core';
import { BarometerDetailAction } from './barometer-detail.action';

@Component({
    templateUrl: 'barometer-detail.html',
    providers: [BarometerDetailAction]
})
export class BarometerDetailPage {

    public barometerDetailLists: Array<any>;

    constructor(private barometerDetail: BarometerDetailAction) {
        this.barometerDetailLists = this.barometerDetail.Init();
    }
}
