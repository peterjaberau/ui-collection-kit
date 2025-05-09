import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getCreateManyRecordsMutationResponseField = (
  objectNamePlural: string,
) => `create${capitalize(objectNamePlural)}`;
