import { useGetRelationMetadata } from '@twenty-modules/object-metadata/hooks/useGetRelationMetadata';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { FieldType } from '@twenty-modules/settings/data-model/types/FieldType';
import { SettingsFieldType } from '@twenty-modules/settings/data-model/types/SettingsFieldType';
import { getFieldIdentifierType } from '@twenty-modules/settings/data-model/utils/getFieldIdentifierType';
import { getSettingsFieldTypeConfig } from '@twenty-modules/settings/data-model/utils/getSettingsFieldTypeConfig';
import { isFieldTypeSupportedInSettings } from '@twenty-modules/settings/data-model/utils/isFieldTypeSupportedInSettings';
import { SettingsObjectDetailTableItem } from '@twenty-ui/front/pages/settings/data-model/types/SettingsObjectDetailTableItem';
import { getSettingsObjectFieldType } from '@twenty-ui/front/pages/settings/data-model/utils/getSettingsObjectFieldType';

export const useMapFieldMetadataItemToSettingsObjectDetailTableItem = (
  objectMetadataItem: ObjectMetadataItem,
) => {
  const getRelationMetadata = useGetRelationMetadata();

  const mapFieldMetadataItemToSettingsObjectDetailTableItem = (
    fieldMetadataItem: FieldMetadataItem,
  ): SettingsObjectDetailTableItem => {
    const fieldType = getSettingsObjectFieldType(
      objectMetadataItem,
      fieldMetadataItem,
    );

    const { relationObjectMetadataItem } =
      getRelationMetadata({
        fieldMetadataItem,
      }) ?? {};

    const identifierType = getFieldIdentifierType(
      fieldMetadataItem,
      objectMetadataItem,
    );

    const fieldMetadataType = fieldMetadataItem.type as FieldType;

    return {
      fieldMetadataItem,
      fieldType: fieldType ?? '',
      dataType:
        (relationObjectMetadataItem?.labelPlural ??
        isFieldTypeSupportedInSettings(fieldMetadataType))
          ? getSettingsFieldTypeConfig(fieldMetadataType as SettingsFieldType)
              ?.label
          : '',
      label: fieldMetadataItem.label,
      identifierType: identifierType,
      objectMetadataItem,
    } satisfies SettingsObjectDetailTableItem;
  };

  return { mapFieldMetadataItemToSettingsObjectDetailTableItem };
};
