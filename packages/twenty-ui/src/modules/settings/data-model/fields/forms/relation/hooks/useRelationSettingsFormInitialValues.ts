import { useMemo } from 'react';

import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { useGetRelationMetadata } from '@twenty-modules/object-metadata/hooks/useGetRelationMetadata';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isObjectMetadataAvailableForRelation } from '@twenty-modules/object-metadata/utils/isObjectMetadataAvailableForRelation';
import { SettingsDataModelFieldPreviewCardProps } from '@twenty-modules/settings/data-model/fields/preview/components/SettingsDataModelFieldPreviewCard';
import { RelationDefinitionType } from '@twenty-ui/front/generated-metadata/graphql';

export const useRelationSettingsFormInitialValues = ({
  fieldMetadataItem,
  objectMetadataItem,
}: {
  fieldMetadataItem?: Pick<FieldMetadataItem, 'type' | 'relationDefinition'>;
  objectMetadataItem?: SettingsDataModelFieldPreviewCardProps['objectMetadataItem'];
}) => {
  const { objectMetadataItems } = useFilteredObjectMetadataItems();

  const getRelationMetadata = useGetRelationMetadata();
  const {
    relationFieldMetadataItem,
    relationObjectMetadataItem: relationObjectMetadataItemFromFieldMetadata,
    relationType: relationTypeFromFieldMetadata,
  } = useMemo(
    () =>
      fieldMetadataItem ? getRelationMetadata({ fieldMetadataItem }) : null,
    [fieldMetadataItem, getRelationMetadata],
  ) ?? {};

  const initialRelationObjectMetadataItem = useMemo(
    () =>
      relationObjectMetadataItemFromFieldMetadata ??
      objectMetadataItem ??
      objectMetadataItems.filter(isObjectMetadataAvailableForRelation)[0],
    [
      objectMetadataItem,
      objectMetadataItems,
      relationObjectMetadataItemFromFieldMetadata,
    ],
  );

  const initialRelationType =
    relationTypeFromFieldMetadata ?? RelationDefinitionType.ONE_TO_MANY;

  return {
    disableFieldEdition:
      relationFieldMetadataItem && !relationFieldMetadataItem.isCustom,
    disableRelationEdition: !!relationFieldMetadataItem,
    initialRelationFieldMetadataItem: relationFieldMetadataItem ?? {
      icon: initialRelationObjectMetadataItem.icon ?? 'IconUsers',
      label: [
        RelationDefinitionType.MANY_TO_MANY,
        RelationDefinitionType.MANY_TO_ONE,
      ].includes(initialRelationType)
        ? initialRelationObjectMetadataItem.labelPlural
        : initialRelationObjectMetadataItem.labelSingular,
    },
    initialRelationObjectMetadataItem,
    initialRelationType,
  };
};
