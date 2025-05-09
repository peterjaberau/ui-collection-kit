import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
export const getAggregateQueryName = (
  objectMetadataNamePlural: string,
): string => {
  if (!isDefined(objectMetadataNamePlural)) {
    throw new Error('objectMetadataNamePlural is required');
  }
  return `Aggregate${capitalize(objectMetadataNamePlural)}`;
};
