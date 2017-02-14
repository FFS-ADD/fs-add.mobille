import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './home.service';
import { DataSettingInterface } from "../signIn/datasetting/datasetting.Interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage implements OnInit{
  private form: DataSettingInterface;

  constructor(public navCtrl: NavController,
    private homeService: HomeService) {
    // homeService.dataList.subscribe((list: HomeModel[]) => {
    //     // TODO
    // });
  }

  public ngOnInit() {
     this.form = {
        backlog: false,
        task: false,
        bug: false,
        qa: false,
        qualityGate: false,
        loc: false,
        coverage: false,
        duplication: false
      }
      let observable = this.homeService.getInitDataSetting();
      observable.subscribe(
      (data) => {
        this.form = data.result;
      });
     
  }

}
