import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getDestroyManyRecordsMutationResponseField = (
  objectNamePlural: string,
) => `destroy${capitalize(objectNamePlural)}`;
