import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { FieldIdentifierType } from '@twenty-modules/settings/data-model/types/FieldIdentifierType';

export type SettingsObjectDetailTableItem = {
  fieldMetadataItem: FieldMetadataItem;
  objectMetadataItem: ObjectMetadataItem;
  fieldType: string | boolean;
  label: string;
  dataType: string;
  identifierType?: FieldIdentifierType;
};
