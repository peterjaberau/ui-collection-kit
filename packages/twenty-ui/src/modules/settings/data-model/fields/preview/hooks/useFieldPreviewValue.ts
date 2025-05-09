import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useRelationFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/hooks/useRelationFieldPreviewValue';
import { getAddressFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getAddressFieldPreviewValue';
import { getCurrencyFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getCurrencyFieldPreviewValue';
import { getFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getFieldPreviewValue';
import { getMultiSelectFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getMultiSelectFieldPreviewValue';
import { getPhonesFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getPhonesFieldPreviewValue';
import { getSelectFieldPreviewValue } from '@twenty-modules/settings/data-model/fields/preview/utils/getSelectFieldPreviewValue';
import {
  FieldMetadataType,
  RelationDefinitionType,
} from '@twenty-ui/front/generated-metadata/graphql';

type UseFieldPreviewParams = {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'type' | 'options' | 'defaultValue' | 'relationDefinition'
  >;
  relationObjectMetadataItem?: ObjectMetadataItem;
  skip?: boolean;
};

export const useFieldPreviewValue = ({
  fieldMetadataItem,
  relationObjectMetadataItem,
  skip,
}: UseFieldPreviewParams) => {
  const relationFieldPreviewValue = useRelationFieldPreviewValue({
    relationObjectMetadataItem: relationObjectMetadataItem ?? {
      fields: [],
      labelSingular: '',
      labelIdentifierFieldMetadataId: '20202020-1000-4629-87e5-9a1fae1cc2fd',
      nameSingular: CoreObjectNameSingular.Company,
    },
    skip:
      skip ||
      fieldMetadataItem.type !== FieldMetadataType.RELATION ||
      !relationObjectMetadataItem,
  });

  if (skip === true) return null;

  switch (fieldMetadataItem.type) {
    case FieldMetadataType.CURRENCY:
      return getCurrencyFieldPreviewValue({ fieldMetadataItem });
    case FieldMetadataType.RELATION:
      return fieldMetadataItem.relationDefinition?.direction ===
        RelationDefinitionType.MANY_TO_ONE
        ? relationFieldPreviewValue
        : [relationFieldPreviewValue];
    case FieldMetadataType.SELECT:
      return getSelectFieldPreviewValue({ fieldMetadataItem });
    case FieldMetadataType.MULTI_SELECT:
      return getMultiSelectFieldPreviewValue({ fieldMetadataItem });
    case FieldMetadataType.ADDRESS:
      return getAddressFieldPreviewValue({ fieldMetadataItem });
    case FieldMetadataType.PHONES:
      return getPhonesFieldPreviewValue({ fieldMetadataItem });
    default:
      return getFieldPreviewValue({
        fieldMetadataItem,
      });
  }
};
