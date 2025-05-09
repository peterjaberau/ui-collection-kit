import { lastVisitedObjectMetadataItemIdState } from '@twenty-modules/navigation/states/lastVisitedObjectMetadataItemIdState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSetLastVisitedObjectMetadataId = () => {
  const setLastVisitedObjectMetadataId = useRecoilCallback(
    ({ set, snapshot }) =>
      ({ objectMetadataItemId }: { objectMetadataItemId: string }) => {
        const objectMetadataItems = snapshot
          .getLoadable(objectMetadataItemsState)
          .getValue();

        const objectMetadataItem = objectMetadataItems.find(
          (item) => item.id === objectMetadataItemId,
        );

        const lastVisitedObjectMetadataItemId = snapshot
          .getLoadable(lastVisitedObjectMetadataItemIdState)
          .getValue();

        if (
          isDefined(objectMetadataItem) &&
          lastVisitedObjectMetadataItemId !== objectMetadataItemId
        ) {
          set(lastVisitedObjectMetadataItemIdState, objectMetadataItemId);
        }
      },
    [],
  );

  return {
    setLastVisitedObjectMetadataId,
  };
};
