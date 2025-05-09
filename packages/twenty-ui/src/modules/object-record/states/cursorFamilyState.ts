import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const cursorFamilyState = createFamilyState<string, string | undefined>({
  key: 'cursorFamilyState',
  defaultValue: '',
});
