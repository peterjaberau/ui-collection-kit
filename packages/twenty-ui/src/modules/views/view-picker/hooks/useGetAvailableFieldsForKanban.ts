import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { viewObjectMetadataIdComponentState } from '@twenty-modules/views/states/viewObjectMetadataIdComponentState';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useGetAvailableFieldsForKanban = () => {
  const viewObjectMetadataId = useRecoilComponentValueV2(
    viewObjectMetadataIdComponentState,
  );
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );
  const location = useLocation();

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadata) => objectMetadata.id === viewObjectMetadataId,
  );

  const availableFieldsForKanban =
    objectMetadataItem?.fields.filter(
      (field) => field.type === FieldMetadataType.SELECT,
    ) ?? [];

  const navigate = useNavigateSettings();

  const navigateToSelectSettings = useCallback(() => {
    setNavigationMemorizedUrl(location.pathname + location.search);

    if (isDefined(objectMetadataItem?.namePlural)) {
      navigate(
        SettingsPath.ObjectNewFieldConfigure,
        {
          objectNamePlural: objectMetadataItem.namePlural,
        },
        {
          fieldType: FieldMetadataType.SELECT,
        },
      );
    } else {
      navigate(SettingsPath.Objects);
    }
  }, [
    setNavigationMemorizedUrl,
    location.pathname,
    location.search,
    objectMetadataItem,
    navigate,
  ]);

  return {
    availableFieldsForKanban,
    navigateToSelectSettings,
  };
};
