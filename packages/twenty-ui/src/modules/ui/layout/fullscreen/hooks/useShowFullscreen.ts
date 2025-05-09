import { useMemo } from 'react';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';

export const useShowFullscreen = () => {
  const { isMatchingLocation } = useIsMatchingLocation();

  return useMemo(() => {
    if (
      isMatchingLocation('settings/' + SettingsPath.RestPlayground + '/*') ||
      isMatchingLocation('settings/' + SettingsPath.GraphQLPlayground)
    ) {
      return true;
    }

    return false;
  }, [isMatchingLocation]);
};
