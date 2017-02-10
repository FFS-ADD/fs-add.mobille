export interface SonarqubeScreenInterface {
  sonarqubeResponse?: SonarqubeResponseInterface;
  sonarqubeLocResponse?: SonarqubeLocResponseInterface;
  sonarqubeCoverageResponse?: SonarqubeCoverageResponseInterface;
  sonarqubeDuplicationResponse?: SonarqubeDuplicationResponseInterface;
}

// Quality response
export interface SonarqubeResponseInterface {
  qualityGateStatus: string,
  vulneralilities: string,
  bugs: string,
  codeSmells: string
}

// Loc response
export interface SonarqubeLocResponseInterface {
  codeLines: string;
	line: string;
	statement: string;
	file: string;
}

// Coverage response
export interface SonarqubeCoverageResponseInterface {
  coverage: string;
  tests: string;
	success: string;
	failures: string;
}

// Duplication response
export interface SonarqubeDuplicationResponseInterface {
  duplication: string;
	line: string;
  blocks: string;
  file: string;
}
