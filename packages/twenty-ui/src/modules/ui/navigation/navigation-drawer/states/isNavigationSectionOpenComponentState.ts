import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';
import { localStorageEffect } from '@twenty-ui/front/utils/recoil-effects';

export const isNavigationSectionOpenComponentState =
  createComponentState<boolean>({
    key: 'isNavigationSectionOpenComponentState',
    defaultValue: true,
    effects: [localStorageEffect()],
  });
