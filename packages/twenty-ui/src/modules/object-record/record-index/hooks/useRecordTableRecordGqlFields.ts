import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { generateDepthOneWithoutRelationsRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneWithoutRelationsRecordGqlFields';
import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const useRecordTableRecordGqlFields = ({
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const visibleTableColumns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
  );

  const { objectMetadataItem: noteTargetObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.NoteTarget,
    });

  const { objectMetadataItem: taskTargetObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.TaskTarget,
    });

  const allDepthOneWithoutRelationsRecordGqlFields =
    generateDepthOneWithoutRelationsRecordGqlFields({
      objectMetadataItem,
    });

  const recordGqlFields: Record<string, any> = {
    ...allDepthOneWithoutRelationsRecordGqlFields,
    ...Object.fromEntries(
      visibleTableColumns.map((column) => [column.metadata.fieldName, true]),
    ),
    noteTargets: generateDepthOneRecordGqlFields({
      objectMetadataItem: noteTargetObjectMetadataItem,
    }),
    taskTargets: generateDepthOneRecordGqlFields({
      objectMetadataItem: taskTargetObjectMetadataItem,
    }),
  };

  return recordGqlFields;
};
