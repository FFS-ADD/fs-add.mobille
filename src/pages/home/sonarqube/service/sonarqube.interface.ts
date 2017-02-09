export interface SonarqubeScreenInterface {
  sonarqubeResponse: SonarqubeResponseInterface;
}

export interface SonarqubeResponseInterface {
  qualityGateStatus: string,
  vulneralilities: string,
  bugs: string,
  codeSmells: string
}