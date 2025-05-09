import { GoToHotkeyItemEffect } from '@twenty-modules/app/effect-components/GoToHotkeyItemEffect';
import { useNonSystemActiveObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useNonSystemActiveObjectMetadataItems';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { navigationDrawerExpandedMemorizedState } from '@twenty-modules/ui/navigation/states/navigationDrawerExpandedMemorizedState';
import { navigationMemorizedUrlState } from '@twenty-modules/ui/navigation/states/navigationMemorizedUrlState';
import { useGoToHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useGoToHotkeys';
import { useLocation } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

export const GotoHotkeysEffectsProvider = () => {
  const { nonSystemActiveObjectMetadataItems } =
    useNonSystemActiveObjectMetadataItems();

  const location = useLocation();

  useGoToHotkeys({
    key: 's',
    location: '/settings/profile',
    preNavigateFunction: useRecoilCallback(
      ({ set }) =>
        () => {
          set(isNavigationDrawerExpandedState, true);
          set(navigationDrawerExpandedMemorizedState, true);
          set(navigationMemorizedUrlState, location.pathname + location.search);
        },
      [location.pathname, location.search],
    ),
  });

  return nonSystemActiveObjectMetadataItems.map((objectMetadataItem) => {
    if (!objectMetadataItem.shortcut) {
      return null;
    }

    return (
      <GoToHotkeyItemEffect
        key={`go-to-hokey-item-${objectMetadataItem.id}`}
        hotkey={objectMetadataItem.shortcut}
        pathToNavigateTo={`/objects/${objectMetadataItem.namePlural}`}
      />
    );
  });
};
