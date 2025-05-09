import { ViewSort } from '@twenty-modules/views/types/ViewSort';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewSortsToCreate = (
  currentViewSorts: ViewSort[],
  newViewSorts: ViewSort[],
) => {
  return newViewSorts.filter((newViewSort) => {
    const correspondingViewSort = currentViewSorts.find(
      (currentViewSort) =>
        currentViewSort.fieldMetadataId === newViewSort.fieldMetadataId,
    );

    const shouldCreateBecauseViewSortIsNew = !isDefined(correspondingViewSort);

    return shouldCreateBecauseViewSortIsNew;
  });
};
