import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { areViewFilterGroupsEqual } from '@twenty-modules/views/utils/areViewFilterGroupsEqual';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getViewFilterGroupsToUpdate = (
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

    if (!isDefined(correspondingViewFilterGroup)) {
      return false;
    }

    const shouldUpdateBecauseViewFilterGroupIsDifferent =
      !areViewFilterGroupsEqual(
        newViewFilterGroup,
        correspondingViewFilterGroup,
      );

    return shouldUpdateBecauseViewFilterGroupIsDifferent;
  });
};
