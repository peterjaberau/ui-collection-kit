import { RecordSort } from '@twenty-modules/object-record/record-sort/types/RecordSort';
import { ViewSort } from '../types/ViewSort';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const mapViewSortsToSorts = (viewSorts: ViewSort[]): RecordSort[] => {
  return viewSorts
    .map((viewSort) => {
      return {
        id: viewSort.id,
        fieldMetadataId: viewSort.fieldMetadataId,
        direction: viewSort.direction,
      };
    })
    .filter(isDefined);
};
