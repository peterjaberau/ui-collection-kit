import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';
import { Role } from '@twenty-ui/front/generated/graphql';

export const settingsPersistedRoleFamilyState = createFamilyState<
  Role | undefined,
  string
>({
  key: 'settingsPersistedRoleFamilyState',
  defaultValue: undefined,
});
