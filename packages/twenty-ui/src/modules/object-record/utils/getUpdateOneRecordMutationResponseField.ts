import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getUpdateOneRecordMutationResponseField = (
  objectNameSingular: string,
) => `update${capitalize(objectNameSingular)}`;
