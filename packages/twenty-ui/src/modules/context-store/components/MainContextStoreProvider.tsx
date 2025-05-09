import { MainContextStoreProviderEffect } from '@twenty-modules/context-store/components/MainContextStoreProviderEffect';
import { useIsSettingsPage } from '@twenty-modules/navigation/hooks/useIsSettingsPage';
import { useLastVisitedView } from '@twenty-modules/navigation/hooks/useLastVisitedView';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { prefetchIndexViewIdFromObjectMetadataItemFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchIndexViewIdFromObjectMetadataItemFamilySelector';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useShowAuthModal } from '@twenty-modules/ui/layout/hooks/useShowAuthModal';
import { useParams, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';

const getViewId = (
  viewIdFromQueryParams: string | null,
  indexViewId?: string,
  lastVisitedViewId?: string,
) => {
  if (isDefined(viewIdFromQueryParams)) {
    return viewIdFromQueryParams;
  }

  if (isDefined(lastVisitedViewId)) {
    return lastVisitedViewId;
  }

  if (isDefined(indexViewId)) {
    return indexViewId;
  }

  return undefined;
};

export const MainContextStoreProvider = () => {
  const { isMatchingLocation } = useIsMatchingLocation();
  const isRecordIndexPage = isMatchingLocation(AppPath.RecordIndexPage);
  const isRecordShowPage = isMatchingLocation(AppPath.RecordShowPage);
  const isSettingsPage = useIsSettingsPage();

  const objectNamePlural = useParams().objectNamePlural ?? '';
  const objectNameSingular = useParams().objectNameSingular ?? '';

  const [searchParams] = useSearchParams();
  const viewIdQueryParam = searchParams.get('viewId');

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) =>
      objectMetadataItem.namePlural === objectNamePlural ||
      objectMetadataItem.nameSingular === objectNameSingular,
  );

  const { getLastVisitedViewIdFromObjectNamePlural } = useLastVisitedView();

  const lastVisitedViewId = getLastVisitedViewIdFromObjectNamePlural(
    objectMetadataItem?.namePlural ?? '',
  );

  const indexViewId = useRecoilValue(
    prefetchIndexViewIdFromObjectMetadataItemFamilySelector({
      objectMetadataItemId: objectMetadataItem?.id,
    }),
  );

  const viewId = getViewId(viewIdQueryParam, indexViewId, lastVisitedViewId);
  const showAuthModal = useShowAuthModal();

  const shouldComputeContextStore =
    (isRecordIndexPage || isRecordShowPage || isSettingsPage) && !showAuthModal;

  if (!shouldComputeContextStore) {
    return null;
  }

  return (
    <MainContextStoreProviderEffect
      viewId={viewId}
      objectMetadataItem={objectMetadataItem}
      isRecordIndexPage={isRecordIndexPage}
      isRecordShowPage={isRecordShowPage}
      isSettingsPage={isSettingsPage}
    />
  );
};
