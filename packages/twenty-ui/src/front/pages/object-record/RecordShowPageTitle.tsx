import { useLabelIdentifierFieldMetadataItem } from '@twenty-modules/object-metadata/hooks/useLabelIdentifierFieldMetadataItem';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { PageTitle } from '@twenty-modules/ui/utilities/page-title/components/PageTitle';
import { useRecoilValue } from 'recoil';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RecordShowPageTitle = ({
  objectNameSingular,
  objectRecordId,
}: {
  objectNameSingular: string;
  objectRecordId: string;
}) => {
  const { labelIdentifierFieldMetadataItem } =
    useLabelIdentifierFieldMetadataItem({ objectNameSingular });

  const record = useRecoilValue(recordStoreFamilyState(objectRecordId));
  const labelIdentifierFieldValue = record?.labelIdentifierFieldValue;

  const pageName =
    labelIdentifierFieldMetadataItem?.type === FieldMetadataType.FULL_NAME
      ? [
          labelIdentifierFieldValue?.firstName,
          labelIdentifierFieldValue?.lastName,
        ].join(' ')
      : isDefined(labelIdentifierFieldValue)
        ? `${labelIdentifierFieldValue}`
        : '';

  const pageTitle = pageName.trim()
    ? `${pageName} - ${capitalize(objectNameSingular)}`
    : capitalize(objectNameSingular);

  return <PageTitle title={pageTitle} />;
};
