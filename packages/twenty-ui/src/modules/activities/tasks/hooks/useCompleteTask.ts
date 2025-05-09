import { useCallback } from 'react';

import { Task } from '@twenty-modules/activities/types/Task';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';

export const useCompleteTask = (task: Task) => {
  const { updateOneRecord: updateOneActivity } = useUpdateOneRecord<Task>({
    objectNameSingular: CoreObjectNameSingular.Task,
  });

  const completeTask = useCallback(
    async (value: boolean) => {
      const status = value ? 'DONE' : 'TODO';
      await updateOneActivity?.({
        idToUpdate: task.id,
        updateOneRecordInput: {
          status,
        },
      });
    },
    [task.id, updateOneActivity],
  );

  return {
    completeTask,
  };
};
