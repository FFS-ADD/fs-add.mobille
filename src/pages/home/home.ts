import { Component , OnInit , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './home.service';
import { DataSettingInterface } from "../signIn/datasetting/datasetting.Interface";
import { SonarqubeComponent } from "./sonarqube/sonarqube";
import { BackLogComponent } from "../redmine/backlog/backlog-master";
import { UserService } from "../../core/UserService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  private form: DataSettingInterface = {
        email: null,
        backlog: false,
        task: false,
        bug: false,
        qa: false,
        qualitygate: false,
        loc: false,
        coverage: false,
        duplication: false
  };
  @ViewChild(SonarqubeComponent) sq: SonarqubeComponent;
  @ViewChild(BackLogComponent) bl:BackLogComponent;

  constructor(public navCtrl: NavController,
    private homeService: HomeService, private userService: UserService) {
      let observable = this.homeService.getInitDataSetting(this.userService.getMail());
      observable.subscribe(
      (data) => {
        this.form = data.data;
        this.sq.setDisplayFlg(this.form.qualitygate,this.form.loc,this.form.coverage,this.form.duplication);
        this.bl.setDisplayFlg(this.form.backlog);
      });
  }

}
