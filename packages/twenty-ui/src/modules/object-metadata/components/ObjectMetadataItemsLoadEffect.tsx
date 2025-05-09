import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { useLoadMockedObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useLoadMockedObjectMetadataItems';
import { useRefreshObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useRefreshObjectMetadataItem';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';
import { isWorkspaceActiveOrSuspended } from '@ui-collection-kit/twenty-shared/src/workspace';

export const ObjectMetadataItemsLoadEffect = () => {
  const currentUser = useRecoilValue(currentUserState);
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  const { refreshObjectMetadataItems } = useRefreshObjectMetadataItems();
  const { loadMockedObjectMetadataItems } = useLoadMockedObjectMetadataItems();

  useEffect(() => {
    if (
      isUndefinedOrNull(currentUser) ||
      !isWorkspaceActiveOrSuspended(currentWorkspace)
    ) {
      loadMockedObjectMetadataItems();
    } else {
      refreshObjectMetadataItems();
    }
  }, [
    currentUser,
    currentWorkspace,
    loadMockedObjectMetadataItems,
    refreshObjectMetadataItems,
  ]);

  return <></>;
};
