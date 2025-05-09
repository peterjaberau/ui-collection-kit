import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { useObjectMetadataItemById } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItemById';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const useContextStoreObjectMetadataItemOrThrow = (
  contextStoreInstanceId?: string,
) => {
  const objectMetadataItemId = useRecoilComponentValueV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
    contextStoreInstanceId,
  );

  const { objectMetadataItem } = useObjectMetadataItemById({
    objectId: objectMetadataItemId ?? '',
  });

  if (!objectMetadataItem) {
    throw new Error('Object metadata item is not set in context store');
  }

  return { objectMetadataItem };
};
