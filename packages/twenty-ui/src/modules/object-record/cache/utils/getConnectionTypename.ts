import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const getConnectionTypename = (objectNameSingular: string) => {
  return `${capitalize(getObjectTypename(objectNameSingular))}Connection`;
};
