import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { getBasePathToShowPage } from '@twenty-modules/object-metadata/utils/getBasePathToShowPage';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const getLinkToShowPage = (
  objectNameSingular: string,
  record: Partial<ObjectRecord>,
) => {
  const basePathToShowPage = getBasePathToShowPage({
    objectNameSingular,
  });

  const isWorkspaceMemberObjectMetadata =
    objectNameSingular === CoreObjectNameSingular.WorkspaceMember;

  if (objectNameSingular === CoreObjectNameSingular.NoteTarget) {
    return (
      getBasePathToShowPage({
        objectNameSingular: CoreObjectNameSingular.Note,
      }) + record.note?.id
    );
  }

  if (objectNameSingular === CoreObjectNameSingular.TaskTarget) {
    return (
      getBasePathToShowPage({
        objectNameSingular: CoreObjectNameSingular.Task,
      }) + record.task?.id
    );
  }

  const linkToShowPage =
    isWorkspaceMemberObjectMetadata || !record.id
      ? ''
      : `${basePathToShowPage}${record.id}`;

  return linkToShowPage;
};
