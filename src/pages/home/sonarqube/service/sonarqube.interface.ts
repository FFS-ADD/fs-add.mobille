export interface SonarqubeScreenInterface {
  sonarqubeResponse: SonarqubeResponseInterface;
}

export interface SonarqubeResponseInterface {
  vulneralilities: string,
  bugs: string,
  code: string
}