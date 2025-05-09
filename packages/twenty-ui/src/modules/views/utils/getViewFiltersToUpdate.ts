import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { areViewFiltersEqual } from '@twenty-modules/views/utils/areViewFiltersEqual';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewFiltersToUpdate = (
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

    if (!isDefined(correspondingViewFilter)) {
      return false;
    }

    const shouldUpdateBecauseViewFilterIsDifferent = !areViewFiltersEqual(
      newViewFilter,
      correspondingViewFilter,
    );

    return shouldUpdateBecauseViewFilterIsDifferent;
  });
};
