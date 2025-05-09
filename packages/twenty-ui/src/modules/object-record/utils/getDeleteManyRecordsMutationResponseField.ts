import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getDeleteManyRecordsMutationResponseField = (
  objectNamePlural: string,
) => `delete${capitalize(objectNamePlural)}`;
