import { useRecoilValue } from 'recoil';

import { Icon123 } from '../../../display/icon/components/TablerIcons';
import { iconsState } from '../../../display/icon/states/iconsState';

export const useIcons = () => {
  const icons = useRecoilValue(iconsState);
  const defaultIcon = Icon123;

  const getIcons = () => {
    return icons;
  };

  const getIcon = (iconKey?: string | null) => {
    if (!iconKey) {
      return defaultIcon;
    }

    return icons[iconKey] ?? defaultIcon;
  };

  return { getIcons, getIcon };
};
