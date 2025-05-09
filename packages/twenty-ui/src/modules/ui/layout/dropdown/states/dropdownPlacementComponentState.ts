import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';

import { Placement } from '@floating-ui/react';

export const dropdownPlacementComponentState =
  createComponentState<Placement | null>({
    key: 'dropdownPlacementComponentState',
    defaultValue: null,
  });
