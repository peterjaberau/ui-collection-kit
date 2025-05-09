import { RecordSortDirection } from '@twenty-modules/object-record/record-sort/types/RecordSortDirection';

export type ViewSort = {
  __typename: 'ViewSort';
  id: string;
  fieldMetadataId: string;
  direction: RecordSortDirection;
};
