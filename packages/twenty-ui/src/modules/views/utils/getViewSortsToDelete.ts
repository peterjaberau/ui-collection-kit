import { ViewSort } from '@twenty-modules/views/types/ViewSort';

export const getViewSortsToDelete = (
  currentViewSorts: ViewSort[],
  newViewSorts: ViewSort[],
) => {
  return currentViewSorts.filter(
    (currentViewSort) =>
      !newViewSorts.some(
        (newViewSort) =>
          newViewSort.fieldMetadataId === currentViewSort.fieldMetadataId,
      ),
  );
};
