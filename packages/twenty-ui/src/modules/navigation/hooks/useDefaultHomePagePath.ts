import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { lastVisitedObjectMetadataItemIdState } from '@twenty-modules/navigation/states/lastVisitedObjectMetadataItemIdState';
import { ObjectPathInfo } from '@twenty-modules/navigation/types/ObjectPathInfo';
import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { getAppPath } from '@twenty-ui/front/utils/navigation/getAppPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDefaultHomePagePath = () => {
  const currentUser = useRecoilValue(currentUserState);
  const { activeObjectMetadataItems, alphaSortedActiveObjectMetadataItems } =
    useFilteredObjectMetadataItems();
  const prefetchViews = useRecoilValue(prefetchViewsState);
  const lastVisitedObjectMetadataItemId = useRecoilValue(
    lastVisitedObjectMetadataItemIdState,
  );

  const getActiveObjectMetadataItemMatchingId = useCallback(
    (objectMetadataId: string) => {
      return activeObjectMetadataItems.find(
        (item) => item.id === objectMetadataId,
      );
    },
    [activeObjectMetadataItems],
  );

  const getFirstView = useCallback(
    (objectMetadataItemId: string | undefined | null) =>
      prefetchViews.find(
        (view) => view.objectMetadataId === objectMetadataItemId,
      ),
    [prefetchViews],
  );

  const firstObjectPathInfo = useMemo<ObjectPathInfo | null>(() => {
    const [firstObjectMetadataItem] = alphaSortedActiveObjectMetadataItems;

    if (!isDefined(firstObjectMetadataItem)) {
      return null;
    }

    const view = getFirstView(firstObjectMetadataItem?.id);

    return { objectMetadataItem: firstObjectMetadataItem, view };
  }, [alphaSortedActiveObjectMetadataItems, getFirstView]);

  const defaultObjectPathInfo = useMemo<ObjectPathInfo | null>(() => {
    if (!isDefined(lastVisitedObjectMetadataItemId)) {
      return firstObjectPathInfo;
    }

    const lastVisitedObjectMetadataItem = getActiveObjectMetadataItemMatchingId(
      lastVisitedObjectMetadataItemId,
    );

    if (isDefined(lastVisitedObjectMetadataItem)) {
      return {
        view: getFirstView(lastVisitedObjectMetadataItemId),
        objectMetadataItem: lastVisitedObjectMetadataItem,
      };
    }

    return firstObjectPathInfo;
  }, [
    firstObjectPathInfo,
    getActiveObjectMetadataItemMatchingId,
    getFirstView,
    lastVisitedObjectMetadataItemId,
  ]);

  const defaultHomePagePath = useMemo(() => {
    if (!isDefined(currentUser)) {
      return AppPath.SignInUp;
    }

    if (!isDefined(defaultObjectPathInfo)) {
      return AppPath.NotFound;
    }

    const namePlural = defaultObjectPathInfo.objectMetadataItem?.namePlural;
    const viewId = defaultObjectPathInfo.view?.id;

    return getAppPath(
      AppPath.RecordIndexPage,
      { objectNamePlural: namePlural },
      viewId ? { viewId } : undefined,
    );
  }, [currentUser, defaultObjectPathInfo]);

  return { defaultHomePagePath };
};
