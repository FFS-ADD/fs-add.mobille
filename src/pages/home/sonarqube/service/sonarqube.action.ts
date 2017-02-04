import {Injectable} from "@angular/core";
import {Dispatcher} from "../../../../core/Dispatcher";
import {HttpService} from "../../../../core/HttpService";
import { SonarqubeActionType } from './sonarqube.action.type';

@Injectable()
export default class SonarqubeAction {
  constructor(private dispatcher:Dispatcher, private httpService:HttpService) {
  }

  public init() {
    let observable = this.httpService.get('/assets/data/sonarqube/datas.json', {});
    observable.subscribe(
       data => {
        if (data.status === 1) {
          this.dispatcher.dispatch(SonarqubeActionType.INIT, data)
        }
    });
  }
}
