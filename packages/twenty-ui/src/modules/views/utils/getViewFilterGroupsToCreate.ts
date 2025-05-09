import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewFilterGroupsToCreate = (
  currentViewFilterGroups: ViewFilterGroup[],
  newViewFilterGroups: ViewFilterGroup[],
) => {
  return newViewFilterGroups.filter((newViewFilterGroup) => {
    const correspondingViewFilterGroup = currentViewFilterGroups.find(
      (currentViewFilterGroup) =>
        compareStrictlyExceptForNullAndUndefined(
          currentViewFilterGroup.id,
          newViewFilterGroup.id,
        ),
    );

    const shouldCreateBecauseViewFilterGroupIsNew = !isDefined(
      correspondingViewFilterGroup,
    );

    return shouldCreateBecauseViewFilterGroupIsNew;
  });
};
