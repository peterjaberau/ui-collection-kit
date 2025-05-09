import groupBy from 'lodash.groupby';

import { ActivityTargetsInlineCell } from '@twenty-modules/activities/inline-cell/components/ActivityTargetsInlineCell';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { formatFieldMetadataItemAsColumnDefinition } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useIsRecordReadOnly } from '@twenty-modules/object-record/record-field/hooks/useIsRecordReadOnly';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { isFieldValueReadOnly } from '@twenty-modules/object-record/record-field/utils/isFieldValueReadOnly';
import { RecordInlineCell } from '@twenty-modules/object-record/record-inline-cell/components/RecordInlineCell';
import { PropertyBox } from '@twenty-modules/object-record/record-inline-cell/property-box/components/PropertyBox';
import { PropertyBoxSkeletonLoader } from '@twenty-modules/object-record/record-inline-cell/property-box/components/PropertyBoxSkeletonLoader';
import { useRecordShowContainerActions } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerActions';
import { useRecordShowContainerData } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerData';
import { RecordDetailDuplicatesSection } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailDuplicatesSection';
import { RecordDetailRelationSection } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRelationSection';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { isFieldCellSupported } from '@twenty-modules/object-record/utils/isFieldCellSupported';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';

type FieldsCardProps = {
  objectNameSingular: string;
  objectRecordId: string;
};

export const FieldsCard = ({
  objectNameSingular,
  objectRecordId,
}: FieldsCardProps) => {
  const { recordLoading, labelIdentifierFieldMetadataItem, isPrefetchLoading } =
    useRecordShowContainerData({
      objectNameSingular,
      objectRecordId,
    });

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });
  const { objectMetadataItems } = useObjectMetadataItems();

  const { useUpdateOneObjectRecordMutation } = useRecordShowContainerActions({
    objectNameSingular,
    objectRecordId,
  });

  const availableFieldMetadataItems = objectMetadataItem.fields
    .filter(
      (fieldMetadataItem) =>
        isFieldCellSupported(fieldMetadataItem, objectMetadataItems) &&
        fieldMetadataItem.id !== labelIdentifierFieldMetadataItem?.id,
    )
    .sort((fieldMetadataItemA, fieldMetadataItemB) =>
      fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
    );

  const { inlineFieldMetadataItems, relationFieldMetadataItems } = groupBy(
    availableFieldMetadataItems
      .filter(
        (fieldMetadataItem) =>
          fieldMetadataItem.name !== 'createdAt' &&
          fieldMetadataItem.name !== 'deletedAt',
      )
      .filter(
        (fieldMetadataItem) =>
          fieldMetadataItem.type !== FieldMetadataType.RICH_TEXT_V2,
      ),
    (fieldMetadataItem) =>
      fieldMetadataItem.type === FieldMetadataType.RELATION
        ? 'relationFieldMetadataItems'
        : 'inlineFieldMetadataItems',
  );

  const inlineRelationFieldMetadataItems = relationFieldMetadataItems?.filter(
    (fieldMetadataItem) =>
      (objectNameSingular === CoreObjectNameSingular.Note &&
        fieldMetadataItem.name === 'noteTargets') ||
      (objectNameSingular === CoreObjectNameSingular.Task &&
        fieldMetadataItem.name === 'taskTargets'),
  );

  const boxedRelationFieldMetadataItems = relationFieldMetadataItems?.filter(
    (fieldMetadataItem) =>
      !(
        (objectNameSingular === CoreObjectNameSingular.Note &&
          fieldMetadataItem.name === 'noteTargets') ||
        (objectNameSingular === CoreObjectNameSingular.Task &&
          fieldMetadataItem.name === 'taskTargets')
      ),
  );

  const isRecordReadOnly = useIsRecordReadOnly({
    recordId: objectRecordId,
  });

  return (
    <>
      <PropertyBox>
        {isPrefetchLoading ? (
          <PropertyBoxSkeletonLoader />
        ) : (
          <>
            {inlineRelationFieldMetadataItems?.map(
              (fieldMetadataItem, index) => (
                <FieldContext.Provider
                  key={objectRecordId + fieldMetadataItem.id}
                  value={{
                    recordId: objectRecordId,
                    maxWidth: 200,
                    isLabelIdentifier: false,
                    fieldDefinition: formatFieldMetadataItemAsColumnDefinition({
                      field: fieldMetadataItem,
                      position: index,
                      objectMetadataItem,
                      showLabel: true,
                      labelWidth: 90,
                    }),
                    useUpdateRecord: useUpdateOneObjectRecordMutation,
                    isDisplayModeFixHeight: true,
                    isReadOnly: isFieldValueReadOnly({
                      objectNameSingular,
                      fieldName: fieldMetadataItem.name,
                      fieldType: fieldMetadataItem.type,
                      isRecordReadOnly,
                    }),
                  }}
                >
                  <ActivityTargetsInlineCell
                    componentInstanceId={getRecordFieldInputId(
                      objectRecordId,
                      fieldMetadataItem.name,
                      'fields-card',
                    )}
                    activityObjectNameSingular={
                      objectNameSingular as
                        | CoreObjectNameSingular.Note
                        | CoreObjectNameSingular.Task
                    }
                    activityRecordId={objectRecordId}
                    showLabel={true}
                    maxWidth={200}
                  />
                </FieldContext.Provider>
              ),
            )}
            {inlineFieldMetadataItems?.map((fieldMetadataItem, index) => (
              <FieldContext.Provider
                key={objectRecordId + fieldMetadataItem.id}
                value={{
                  recordId: objectRecordId,
                  maxWidth: 200,
                  isLabelIdentifier: false,
                  fieldDefinition: formatFieldMetadataItemAsColumnDefinition({
                    field: fieldMetadataItem,
                    position: index,
                    objectMetadataItem,
                    showLabel: true,
                    labelWidth: 90,
                  }),
                  useUpdateRecord: useUpdateOneObjectRecordMutation,
                  isDisplayModeFixHeight: true,
                  isReadOnly: isFieldValueReadOnly({
                    objectNameSingular,
                    fieldName: fieldMetadataItem.name,
                    fieldType: fieldMetadataItem.type,
                    isRecordReadOnly,
                  }),
                }}
              >
                <RecordFieldComponentInstanceContext.Provider
                  value={{
                    instanceId: getRecordFieldInputId(
                      objectRecordId,
                      fieldMetadataItem.name,
                      'fields-card',
                    ),
                  }}
                >
                  <RecordInlineCell loading={recordLoading} />
                </RecordFieldComponentInstanceContext.Provider>
              </FieldContext.Provider>
            ))}
          </>
        )}
      </PropertyBox>
      <RecordDetailDuplicatesSection
        objectRecordId={objectRecordId}
        objectNameSingular={objectNameSingular}
      />
      {boxedRelationFieldMetadataItems?.map((fieldMetadataItem, index) => (
        <FieldContext.Provider
          key={objectRecordId + fieldMetadataItem.id}
          value={{
            recordId: objectRecordId,
            isLabelIdentifier: false,
            fieldDefinition: formatFieldMetadataItemAsColumnDefinition({
              field: fieldMetadataItem,
              position: index,
              objectMetadataItem,
            }),
            useUpdateRecord: useUpdateOneObjectRecordMutation,
            isDisplayModeFixHeight: true,
            isReadOnly: isRecordReadOnly,
          }}
        >
          <RecordDetailRelationSection
            loading={isPrefetchLoading || recordLoading}
          />
        </FieldContext.Provider>
      ))}
    </>
  );
};
