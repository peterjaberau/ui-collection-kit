import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getRestoreManyRecordsMutationResponseField = (
  objectNamePlural: string,
) => `restore${capitalize(objectNamePlural)}`;
