import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
export const getObjectTypename = (objectNameSingular: string) => {
  return capitalize(objectNameSingular);
};
