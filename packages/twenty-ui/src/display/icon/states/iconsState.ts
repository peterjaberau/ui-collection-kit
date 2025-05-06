import { IconComponent } from '../../../display/icon/types/IconComponent';
import { createState } from '../../../utilities/state/utils/createState';

export const iconsState = createState<Record<string, IconComponent>>({
  key: 'iconsState',
  defaultValue: {},
});
