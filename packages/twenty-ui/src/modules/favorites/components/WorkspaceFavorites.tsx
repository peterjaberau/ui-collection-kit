import { useWorkspaceFavorites } from '@twenty-modules/favorites/hooks/useWorkspaceFavorites';
import { NavigationDrawerSectionForObjectMetadataItems } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItems';
import { NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader';
import { useIsPrefetchLoading } from '@twenty-modules/prefetch/hooks/useIsPrefetchLoading';
import { useLingui } from '@lingui/react/macro';

export const WorkspaceFavorites = () => {
  const { workspaceFavoritesObjectMetadataItems } = useWorkspaceFavorites();

  const loading = useIsPrefetchLoading();
  const { t } = useLingui();

  if (loading) {
    return <NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader />;
  }

  return (
    <NavigationDrawerSectionForObjectMetadataItems
      sectionTitle={t`Workspace`}
      objectMetadataItems={workspaceFavoritesObjectMetadataItems}
      isRemote={false}
    />
  );
};
