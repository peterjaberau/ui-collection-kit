import { PositionType } from '@twenty-modules/action-menu/types/PositionType';
import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';

export const recordIndexActionMenuDropdownPositionComponentState =
  createComponentState<PositionType>({
    key: 'recordIndexActionMenuDropdownPositionComponentState',
    defaultValue: {
      x: null,
      y: null,
    },
  });
