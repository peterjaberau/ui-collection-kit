import { getNodeTypename } from '@twenty-modules/object-record/cache/utils/getNodeTypename';

export const getRefName = (objectNameSingular: string, id: string) => {
  const nodeTypeName = getNodeTypename(objectNameSingular);

  return `${nodeTypeName}:${id}`;
};
