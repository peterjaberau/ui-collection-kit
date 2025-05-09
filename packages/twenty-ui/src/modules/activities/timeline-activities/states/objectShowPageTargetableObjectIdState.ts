import { atom } from 'recoil';

import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';

export const objectShowPageTargetableObjectState =
  atom<ActivityTargetableObject | null>({
    key: 'objectShowPageTargetableObjectState',
    default: null,
  });
