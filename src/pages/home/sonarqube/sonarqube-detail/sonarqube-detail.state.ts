import { Injectable } from "@angular/core";
import { SonarqubeDetailScreenInterface } from './sonarqube-detail.interface';

@Injectable()
export class SonarqubeDetailState {
  screen: SonarqubeDetailScreenInterface;
}
