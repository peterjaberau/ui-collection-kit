export enum ExecutionErrorType {
  EVALUATED = "EVALUATED",
  LINT = "LINT",
  VALIDATION = "VALIDATION",
}

export const executionInitialState = {
  dependencies: {},
  result: {},
  error: {},
  independencies: {},
}
