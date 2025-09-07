export enum SnapshotTriggerMode {
  AUTOMATIC = 1,
  MANUAL = 2,
}


export const currentAppHistoryInitialState = {
  snapshotList: [],
  totalPages: 0,
  currentPage: 0,
  hasMore: false,
}
