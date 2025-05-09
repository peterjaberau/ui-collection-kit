import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getDeleteOneRecordMutationResponseField = (
  objectNameSingular: string,
) => `delete${capitalize(objectNameSingular)}`;
