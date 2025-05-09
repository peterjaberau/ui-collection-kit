import { isAppWaitingForFreshObjectMetadataState } from '@twenty-modules/object-metadata/states/isAppWaitingForFreshObjectMetadataState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { useRecoilCallback } from 'recoil';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

export const useLoadMockedObjectMetadataItems = () => {
  const loadMockedObjectMetadataItems = useRecoilCallback(
    ({ set, snapshot }) =>
      () => {
        if (
          !isDeeplyEqual(
            snapshot.getLoadable(objectMetadataItemsState).getValue(),
            generatedMockObjectMetadataItems,
          )
        ) {
          set(objectMetadataItemsState, generatedMockObjectMetadataItems);
        }

        if (
          snapshot
            .getLoadable(isAppWaitingForFreshObjectMetadataState)
            .getValue() === true
        ) {
          set(isAppWaitingForFreshObjectMetadataState, false);
        }
      },
    [],
  );
  return {
    loadMockedObjectMetadataItems,
  };
};
