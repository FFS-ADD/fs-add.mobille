import { Injectable } from "@angular/core";
import { SonarqubeScreenInterface } from './sonarqube.interface';

@Injectable()
export class SonarqubeState {
  qualityLoading: boolean = true;
  locLoading: boolean = true;
  coverageLoading: boolean = true;
  duplicationLoading: boolean = true;
  screen: SonarqubeScreenInterface;
}
