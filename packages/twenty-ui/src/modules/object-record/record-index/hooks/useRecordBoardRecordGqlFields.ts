import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { generateDepthOneWithoutRelationsRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneWithoutRelationsRecordGqlFields';
import { recordBoardVisibleFieldDefinitionsComponentSelector } from '@twenty-modules/object-record/record-board/states/selectors/recordBoardVisibleFieldDefinitionsComponentSelector';
import { recordGroupFieldMetadataComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupFieldMetadataComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useRecordBoardRecordGqlFields = ({
  objectMetadataItem,
  recordBoardId,
}: {
  recordBoardId: string;
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const visibleFieldDefinitions = useRecoilComponentValueV2(
    recordBoardVisibleFieldDefinitionsComponentSelector,
    recordBoardId,
  );

  const recordGroupFieldMetadata = useRecoilComponentValueV2(
    recordGroupFieldMetadataComponentState,
    recordBoardId,
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
      visibleFieldDefinitions.map((visibleFieldDefinition) => [
        visibleFieldDefinition.metadata.fieldName,
        true,
      ]),
    ),
    noteTargets: generateDepthOneRecordGqlFields({
      objectMetadataItem: noteTargetObjectMetadataItem,
    }),
    taskTargets: generateDepthOneRecordGqlFields({
      objectMetadataItem: taskTargetObjectMetadataItem,
    }),
  };

  if (isDefined(recordGroupFieldMetadata?.name)) {
    recordGqlFields[recordGroupFieldMetadata.name] = true;
  }

  return recordGqlFields;
};
