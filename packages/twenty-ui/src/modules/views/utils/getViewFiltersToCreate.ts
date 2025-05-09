import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewFiltersToCreate = (
  currentViewFilters: ViewFilter[],
  newViewFilters: ViewFilter[],
) => {
  return newViewFilters.filter((newViewFilter) => {
    const correspondingViewFilter = currentViewFilters.find(
      (currentViewFilter) =>
        compareStrictlyExceptForNullAndUndefined(
          currentViewFilter.id,
          newViewFilter.id,
        ),
    );

    const shouldCreateBecauseViewFilterIsNew = !isDefined(
      correspondingViewFilter,
    );

    return shouldCreateBecauseViewFilterIsNew;
  });
};
