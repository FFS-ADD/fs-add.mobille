import { Injectable } from "@angular/core";
import { SonarqubeScreenInterface } from './sonarqube.interface';

@Injectable()
export class SonarqubeState {
  screen: SonarqubeScreenInterface;
}
