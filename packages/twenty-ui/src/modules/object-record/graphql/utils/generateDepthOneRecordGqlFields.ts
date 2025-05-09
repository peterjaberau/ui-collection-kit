import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export type GenerateDepthOneRecordGqlFields = {
  objectMetadataItem: ObjectMetadataItem;
};

export const generateDepthOneRecordGqlFields = ({
  objectMetadataItem,
}: GenerateDepthOneRecordGqlFields) =>
  objectMetadataItem.fields.reduce<Record<string, true>>((acc, field) => {
    return {
      ...acc,
      ...(isDefined(field.settings?.joinColumnName)
        ? {
            [field.settings.joinColumnName]: true,
          }
        : {}),
      [field.name]: true,
    };
  }, {});
