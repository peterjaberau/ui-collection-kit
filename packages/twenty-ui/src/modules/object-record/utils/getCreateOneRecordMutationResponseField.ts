import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getCreateOneRecordMutationResponseField = (
  objectNameSingular: string,
) => `create${capitalize(objectNameSingular)}`;
