import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';
import { Role } from '@twenty-ui/front/generated-metadata/graphql';

export const settingsValidateRoleFamilyState = createFamilyState<
  Record<keyof Pick<Role, 'label'>, boolean>,
  string
>({
  key: 'settingsValidateRoleFamilyState',
  defaultValue: {
    label: false,
  },
});
