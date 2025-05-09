import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const getEdgeTypename = (objectNameSingular: string) => {
  return `${capitalize(getObjectTypename(objectNameSingular))}Edge`;
};
