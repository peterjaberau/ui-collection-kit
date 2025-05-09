import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { compareStrictlyExceptForNullAndUndefined } from '@twenty-ui/front/utils/compareStrictlyExceptForNullAndUndefined';

export const getViewFilterGroupsToDelete = (
  currentViewFilterGroups: ViewFilterGroup[],
  newViewFilterGroups: ViewFilterGroup[],
) => {
  return currentViewFilterGroups.filter(
    (currentViewFilterGroup) =>
      !newViewFilterGroups.some((newViewFilterGroup) =>
        compareStrictlyExceptForNullAndUndefined(
          newViewFilterGroup.id,
          currentViewFilterGroup.id,
        ),
      ),
  );
};
