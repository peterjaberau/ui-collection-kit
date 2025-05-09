import { isNonEmptyArray } from '@sniptt/guards';

import { ActivityForEditor } from '@twenty-modules/activities/types/ActivityForEditor';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { getRecordConnectionFromRecords } from '@twenty-modules/object-record/cache/utils/getRecordConnectionFromRecords';
import { modifyRecordFromCache } from '@twenty-modules/object-record/cache/utils/modifyRecordFromCache';
import { useCreateManyRecords } from '@twenty-modules/object-record/hooks/useCreateManyRecords';
import { useCreateOneRecord } from '@twenty-modules/object-record/hooks/useCreateOneRecord';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { useApolloClient } from '@apollo/client';

import { createOneActivityOperationSignatureFactory } from '@twenty-modules/activities/graphql/operation-signatures/factories/createOneActivityOperationSignatureFactory';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { getJoinObjectNameSingular } from '@twenty-modules/activities/utils/getJoinObjectNameSingular';
import { useRecoilCallback } from 'recoil';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateActivityInDB = ({
  activityObjectNameSingular,
}: {
  activityObjectNameSingular:
    | CoreObjectNameSingular.Task
    | CoreObjectNameSingular.Note;
}) => {
  const createOneActivityOperationSignature =
    createOneActivityOperationSignatureFactory({
      objectNameSingular: activityObjectNameSingular,
    });

  const { createOneRecord: createOneActivity } = useCreateOneRecord({
    objectNameSingular: activityObjectNameSingular,
    recordGqlFields: createOneActivityOperationSignature.fields,
    shouldMatchRootQueryFilter: true,
  });

  const { createManyRecords: createManyActivityTargets } = useCreateManyRecords<
    TaskTarget | NoteTarget
  >({
    objectNameSingular: getJoinObjectNameSingular(activityObjectNameSingular),
    shouldMatchRootQueryFilter: true,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const { objectMetadataItem: objectMetadataItemActivityTarget } =
    useObjectMetadataItem({
      objectNameSingular: getJoinObjectNameSingular(activityObjectNameSingular),
    });

  const { objectMetadataItem: objectMetadataItemActivity } =
    useObjectMetadataItem({
      objectNameSingular: activityObjectNameSingular,
    });

  const cache = useApolloClient().cache;

  const createActivityInDB = useRecoilCallback(
    ({ set }) =>
      async (activityToCreate: ActivityForEditor) => {
        const createdActivity = await createOneActivity?.({
          ...activityToCreate,
          updatedAt: new Date().toISOString(),
        });

        const activityTargetsToCreate =
          activityToCreate.noteTargets ?? activityToCreate.taskTargets ?? [];

        if (isNonEmptyArray(activityTargetsToCreate)) {
          await createManyActivityTargets(activityTargetsToCreate);
        }

        const activityTargetsConnection = getRecordConnectionFromRecords({
          objectMetadataItems,
          objectMetadataItem: objectMetadataItemActivityTarget,
          records: activityTargetsToCreate.map((activityTarget) => ({
            ...activityTarget,
            __typename: capitalize(
              objectMetadataItemActivityTarget.nameSingular,
            ),
          })),
          withPageInfo: false,
          computeReferences: true,
          isRootLevel: false,
        });

        modifyRecordFromCache({
          recordId: createdActivity.id,
          cache,
          fieldModifiers: {
            activityTargets: () => activityTargetsConnection,
          },
          objectMetadataItem: objectMetadataItemActivity,
        });

        set(recordStoreFamilyState(createdActivity.id), {
          ...createdActivity,
          activityTargets: activityTargetsToCreate,
        });
      },
    [
      cache,
      createManyActivityTargets,
      createOneActivity,
      objectMetadataItemActivity,
      objectMetadataItemActivityTarget,
      objectMetadataItems,
    ],
  );

  return {
    createActivityInDB,
  };
};
