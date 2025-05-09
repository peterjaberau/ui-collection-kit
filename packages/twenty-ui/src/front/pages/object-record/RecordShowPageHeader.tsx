import { getObjectMetadataIdentifierFields } from '@twenty-modules/object-metadata/utils/getObjectMetadataIdentifierFields';
import { ObjectRecordShowPageBreadcrumb } from '@twenty-modules/object-record/record-show/components/ObjectRecordShowPageBreadcrumb';
import { useRecordShowPagePagination } from '@twenty-modules/object-record/record-show/hooks/useRecordShowPagePagination';
import { PageHeader } from '@twenty-modules/ui/layout/page/components/PageHeader';

export const RecordShowPageHeader = ({
  objectNameSingular,
  objectRecordId,
  children,
}: {
  objectNameSingular: string;
  objectRecordId: string;
  children?: React.ReactNode;
}) => {
  const { objectMetadataItem } = useRecordShowPagePagination(
    objectNameSingular,
    objectRecordId,
  );

  const { labelIdentifierFieldMetadataItem } =
    getObjectMetadataIdentifierFields({ objectMetadataItem });

  return (
    <PageHeader
      title={
        <ObjectRecordShowPageBreadcrumb
          objectNameSingular={objectNameSingular}
          objectRecordId={objectRecordId}
          objectLabelPlural={objectMetadataItem.labelPlural}
          labelIdentifierFieldMetadataItem={labelIdentifierFieldMetadataItem}
        />
      }
    >
      {children}
    </PageHeader>
  );
};
