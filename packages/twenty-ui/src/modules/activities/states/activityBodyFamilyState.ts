import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const activityBodyFamilyState = createFamilyState<
  string,
  { activityId: string }
>({
  key: 'activityBodyFamilyState',
  defaultValue: '',
});
