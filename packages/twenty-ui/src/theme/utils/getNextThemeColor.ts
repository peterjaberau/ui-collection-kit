import { MAIN_COLOR_NAMES, ThemeColor } from '../../theme';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getNextThemeColor = (currentColor?: ThemeColor): ThemeColor | any => {
  if (!isDefined(currentColor)) {
    return MAIN_COLOR_NAMES[0];
  }
  const currentColorIndex = MAIN_COLOR_NAMES.findIndex(
    (color) => color === currentColor,
  );
  const nextColorIndex = (currentColorIndex + 1) % MAIN_COLOR_NAMES.length;
  return MAIN_COLOR_NAMES[nextColorIndex];
};
