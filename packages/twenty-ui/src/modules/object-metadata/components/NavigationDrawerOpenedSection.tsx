import { useParams } from 'react-router-dom';

import { useWorkspaceFavorites } from '@twenty-modules/favorites/hooks/useWorkspaceFavorites';
import { NavigationDrawerSectionForObjectMetadataItems } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItems';
import { NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader } from '@twenty-modules/object-metadata/components/NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader';
import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { useIsPrefetchLoading } from '@twenty-modules/prefetch/hooks/useIsPrefetchLoading';
import { useLingui } from '@lingui/react/macro';

export const NavigationDrawerOpenedSection = () => {
  const { t } = useLingui();

  const { activeObjectMetadataItems } = useFilteredObjectMetadataItems();
  const filteredActiveObjectMetadataItems = activeObjectMetadataItems.filter(
    (item) => !item.isRemote,
  );

  const loading = useIsPrefetchLoading();

  const { workspaceFavoritesObjectMetadataItems } = useWorkspaceFavorites();

  const {
    objectNamePlural: currentObjectNamePlural,
    objectNameSingular: currentObjectNameSingular,
  } = useParams();

  if (!currentObjectNamePlural && !currentObjectNameSingular) {
    return;
  }

  const objectMetadataItem = filteredActiveObjectMetadataItems.find(
    (item) =>
      item.namePlural === currentObjectNamePlural ||
      item.nameSingular === currentObjectNameSingular,
  );

  if (!objectMetadataItem) {
    return;
  }

  const shouldDisplayObjectInOpenedSection =
    !workspaceFavoritesObjectMetadataItems
      .map((item) => item.id)
      .includes(objectMetadataItem.id);

  if (loading) {
    return <NavigationDrawerSectionForObjectMetadataItemsSkeletonLoader />;
  }

  return (
    shouldDisplayObjectInOpenedSection && (
      <NavigationDrawerSectionForObjectMetadataItems
        sectionTitle={t`Opened`}
        objectMetadataItems={[objectMetadataItem]}
        isRemote={false}
      />
    )
  );
};
