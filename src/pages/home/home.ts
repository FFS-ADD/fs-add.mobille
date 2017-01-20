import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomeService } from './home.service';
import { HomeModel } from '../../models/home.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ HomeService ]
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private homeService: HomeService) {
    // homeService.dataList.subscribe((list: HomeModel[]) => {
    //     // TODO
    // });
  }

}
