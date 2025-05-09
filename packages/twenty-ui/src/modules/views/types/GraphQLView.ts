import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { ViewField } from '@twenty-modules/views/types/ViewField';
import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { ViewGroup } from '@twenty-modules/views/types/ViewGroup';
import { ViewKey } from '@twenty-modules/views/types/ViewKey';
import { ViewOpenRecordInType } from '@twenty-modules/views/types/ViewOpenRecordInType';
import { ViewSort } from '@twenty-modules/views/types/ViewSort';
import { ViewType } from '@twenty-modules/views/types/ViewType';

export type GraphQLView = {
  id: string;
  name: string;
  type: ViewType;
  key: ViewKey | null;
  /**
   * @deprecated Use `viewGroups.fieldMetadataId` instead.
   */
  kanbanFieldMetadataId: string;
  kanbanAggregateOperation?: AGGREGATE_OPERATIONS | null;
  kanbanAggregateOperationFieldMetadataId?: string | null;
  objectMetadataId: string;
  isCompact: boolean;
  openRecordIn: ViewOpenRecordInType;
  viewFields: ViewField[];
  viewFilters: ViewFilter[];
  viewFilterGroups?: ViewFilterGroup[];
  viewSorts: ViewSort[];
  viewGroups: ViewGroup[];
  position: number;
  icon: string;
};
