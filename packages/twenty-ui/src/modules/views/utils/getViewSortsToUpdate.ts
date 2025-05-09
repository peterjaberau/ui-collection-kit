import { ViewSort } from '@twenty-modules/views/types/ViewSort';
import { areViewSortsEqual } from '@twenty-modules/views/utils/areViewSortsEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewSortsToUpdate = (
  currentViewSorts: ViewSort[],
  newViewSorts: ViewSort[],
) => {
  return newViewSorts.filter((newViewSort) => {
    const correspondingViewSort = currentViewSorts.find(
      (currentViewSort) =>
        currentViewSort.fieldMetadataId === newViewSort.fieldMetadataId,
    );

    if (!isDefined(correspondingViewSort)) {
      return false;
    }

    const shouldUpdateBecauseViewSortIsDifferent = !areViewSortsEqual(
      newViewSort,
      correspondingViewSort,
    );

    return shouldUpdateBecauseViewSortIsDifferent;
  });
};
