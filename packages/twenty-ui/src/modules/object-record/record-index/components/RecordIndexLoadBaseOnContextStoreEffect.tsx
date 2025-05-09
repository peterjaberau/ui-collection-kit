import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useLoadRecordIndexStates } from '@twenty-modules/object-record/record-index/hooks/useLoadRecordIndexStates';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RecordIndexLoadBaseOnContextStoreEffect = () => {
  const { loadRecordIndexStates } = useLoadRecordIndexStates();
  const contextStoreCurrentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  const [loadedViewId, setLoadedViewId] = useState<string | undefined>(
    undefined,
  );

  const view = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: contextStoreCurrentViewId ?? '',
    }),
  );

  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  useEffect(() => {
    if (loadedViewId === contextStoreCurrentViewId) {
      return;
    }

    if (!isDefined(objectMetadataItem)) {
      return;
    }

    if (isDefined(view)) {
      loadRecordIndexStates(view, objectMetadataItem);
      setLoadedViewId(contextStoreCurrentViewId);
    }
  }, [
    contextStoreCurrentViewId,
    loadRecordIndexStates,
    loadedViewId,
    objectMetadataItem,
    view,
  ]);

  return <></>;
};
