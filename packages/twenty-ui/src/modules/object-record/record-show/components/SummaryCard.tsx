import { useGetStandardObjectIcon } from '@twenty-modules/object-metadata/hooks/useGetStandardObjectIcon';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useIsRecordReadOnly } from '@twenty-modules/object-record/record-field/hooks/useIsRecordReadOnly';
import { useRecordShowContainerActions } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerActions';
import { useRecordShowContainerData } from '@twenty-modules/object-record/record-show/hooks/useRecordShowContainerData';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { recordStoreIdentifierFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreIdentifierSelector';
import { RecordTitleCell } from '@twenty-modules/object-record/record-title-cell/components/RecordTitleCell';
import { RecordTitleCellContainerType } from '@twenty-modules/object-record/record-title-cell/types/RecordTitleCellContainerType';
import { ShowPageSummaryCard } from '@twenty-modules/ui/layout/show-page/components/ShowPageSummaryCard';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';

type SummaryCardProps = {
  objectNameSingular: string;
  objectRecordId: string;
  isInRightDrawer: boolean;
};

// TODO: refactor all this hierarchy of right drawer / show page record to avoid drill down
export const SummaryCard = ({
  objectNameSingular,
  objectRecordId,
  isInRightDrawer,
}: SummaryCardProps) => {
  const { recordLoading, labelIdentifierFieldMetadataItem, isPrefetchLoading } =
    useRecordShowContainerData({
      objectNameSingular,
      objectRecordId,
    });

  const recordCreatedAt = useRecoilValue<string | null>(
    recordStoreFamilySelector({
      recordId: objectRecordId,
      fieldName: 'createdAt',
    }),
  );

  const { onUploadPicture, useUpdateOneObjectRecordMutation } =
    useRecordShowContainerActions({
      objectNameSingular,
      objectRecordId,
    });

  const { Icon, IconColor } = useGetStandardObjectIcon(objectNameSingular);
  const isMobile = useIsMobile() || isInRightDrawer;

  const recordIdentifier = useRecoilValue(
    recordStoreIdentifierFamilySelector({
      objectNameSingular,
      recordId: objectRecordId,
    }),
  );

  const isRecordReadOnly = useIsRecordReadOnly({
    recordId: objectRecordId,
  });

  return (
    <ShowPageSummaryCard
      isMobile={isMobile}
      id={objectRecordId}
      logoOrAvatar={recordIdentifier?.avatarUrl ?? ''}
      icon={Icon}
      iconColor={IconColor}
      avatarPlaceholder={recordIdentifier?.name ?? ''}
      date={recordCreatedAt ?? ''}
      loading={
        isPrefetchLoading || recordLoading || !isDefined(recordCreatedAt)
      }
      title={
        <FieldContext.Provider
          value={{
            recordId: objectRecordId,
            isLabelIdentifier: false,
            fieldDefinition: {
              type:
                labelIdentifierFieldMetadataItem?.type ||
                FieldMetadataType.TEXT,
              iconName: '',
              fieldMetadataId: labelIdentifierFieldMetadataItem?.id ?? '',
              label: labelIdentifierFieldMetadataItem?.label || '',
              metadata: {
                fieldName: labelIdentifierFieldMetadataItem?.name || '',
                objectMetadataNameSingular: objectNameSingular,
              },
              defaultValue: labelIdentifierFieldMetadataItem?.defaultValue,
            },
            useUpdateRecord: useUpdateOneObjectRecordMutation,
            isCentered: !isMobile,
            isDisplayModeFixHeight: true,
            isReadOnly: isRecordReadOnly,
          }}
        >
          <RecordTitleCell
            sizeVariant="md"
            containerType={RecordTitleCellContainerType.ShowPage}
          />
        </FieldContext.Provider>
      }
      avatarType={recordIdentifier?.avatarType ?? 'rounded'}
      onUploadPicture={
        objectNameSingular === CoreObjectNameSingular.Person
          ? onUploadPicture
          : undefined
      }
    />
  );
};
