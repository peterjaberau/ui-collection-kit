import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';

export const getViewFiltersToDelete = (
  currentViewFilters: ViewFilter[],
  newViewFilters: ViewFilter[],
) => {
  return currentViewFilters.filter(
    (currentViewFilter) =>
      !newViewFilters.some((newViewFilter) =>
        compareStrictlyExceptForNullAndUndefined(
          currentViewFilter.id,
          newViewFilter.id,
        ),
      ),
  );
};
