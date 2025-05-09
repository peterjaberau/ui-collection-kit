import { RecordSort } from '@twenty-modules/object-record/record-sort/types/RecordSort';
import { ViewSort } from '@twenty-modules/views/types/ViewSort';

export const mapRecordSortToViewSort = (recordSort: RecordSort): ViewSort => {
  return {
    __typename: 'ViewSort',
    ...recordSort,
  } satisfies ViewSort;
};
