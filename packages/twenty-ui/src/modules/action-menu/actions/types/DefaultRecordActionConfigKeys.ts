import { MultipleRecordsActionKeys } from '@twenty-modules/action-menu/actions/record-actions/multiple-records/types/MultipleRecordsActionKeys';
import { NoSelectionRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/no-selection/types/NoSelectionRecordActionsKeys';
import { SingleRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';

export type DefaultRecordActionConfigKeys =
  | NoSelectionRecordActionKeys
  | SingleRecordActionKeys
  | MultipleRecordsActionKeys;
