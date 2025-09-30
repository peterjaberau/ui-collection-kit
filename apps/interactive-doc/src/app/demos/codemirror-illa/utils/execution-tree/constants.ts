export const IMMEDIATE_PARENT_REGEX = /^(.*)(\..*|\[.*\])$/

export enum ExecutionErrorType {
  EVALUATED = "EVALUATED",
  LINT = "LINT",
  VALIDATION = "VALIDATION",
}


export const CURRENT_USER_INFO_ACCESS_LIST_KEY = [
  "userID",
  "nickname",
  "email",
  "avatar",
  "language",
  "createdAt",
  "updatedAt",
]


export const IGNORE_ACTION_RUN_ATTR_NAME = [
  "isRunning",
  "startTime",
  "endTime",
  "data",
  "runResult",
  "responseHeaders",
]

export const IGNORE_AUTO_RUN_WITH_RUN_SCRIPT_ATTR_RULES = [
  /events\[\d+\]\.script/,
  /content\.successEvent\[\d+\]\.script/,
  /content\.failedEvent\[\d+\]\.script/,
]

