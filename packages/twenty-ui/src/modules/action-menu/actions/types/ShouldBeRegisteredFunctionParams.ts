import { ActionViewType } from '@twenty-modules/action-menu/actions/types/ActionViewType';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { WorkflowWithCurrentVersion } from '@twenty-modules/workflow/types/Workflow';

export type ShouldBeRegisteredFunctionParams = {
  objectMetadataItem?: ObjectMetadataItem;
  hasObjectReadOnlyPermission?: boolean;
  isWorkflowEnabled: boolean;
  recordFilters?: RecordFilter[];
  isShowPage?: boolean;
  isSoftDeleteFilterActive?: boolean;
  isInRightDrawer?: boolean;
  isFavorite?: boolean;
  isRemote?: boolean;
  isNoteOrTask?: boolean;
  selectedRecord?: ObjectRecord;
  numberOfSelectedRecords?: number;
  workflowWithCurrentVersion?: WorkflowWithCurrentVersion;
  viewType?: ActionViewType;
};
