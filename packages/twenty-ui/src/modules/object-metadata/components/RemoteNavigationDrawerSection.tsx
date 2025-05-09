import { useRecoilValue } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { NavigationDrawerSectionForObjectMetadataItems } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItems';
import { NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader';
import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { useIsPrefetchLoading } from '@twenty-modules/prefetch/hooks/useIsPrefetchLoading';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RemoteNavigationDrawerSection = () => {
  const currentUser = useRecoilValue(currentUserState);

  const { activeObjectMetadataItems } = useFilteredObjectMetadataItems();
  const filteredActiveObjectMetadataItems = activeObjectMetadataItems.filter(
    (item) => item.isRemote,
  );
  const loading = useIsPrefetchLoading();

  if (loading && isDefined(currentUser)) {
    return <NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader />;
  }

  return (
    <NavigationDrawerSectionForObjectMetadataItems
      sectionTitle={'Remote'}
      objectMetadataItems={filteredActiveObjectMetadataItems}
      isRemote={true}
    />
  );
};
