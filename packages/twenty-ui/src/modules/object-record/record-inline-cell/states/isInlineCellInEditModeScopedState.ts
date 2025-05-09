import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const isInlineCellInEditModeScopedState = createFamilyState<
  boolean,
  string
>({
  key: 'isInlineCellInEditModeScopedState',
  defaultValue: false,
});
