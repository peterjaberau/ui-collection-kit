import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getDestroyOneRecordMutationResponseField = (
  objectNameSingular: string,
) => `destroy${capitalize(objectNameSingular)}`;
