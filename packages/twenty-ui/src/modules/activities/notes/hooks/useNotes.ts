import { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { useActivities } from '@twenty-modules/activities/hooks/useActivities';
import { currentNotesQueryVariablesState } from '@twenty-modules/activities/notes/states/currentNotesQueryVariablesState';
import { FIND_MANY_TIMELINE_ACTIVITIES_ORDER_BY } from '@twenty-modules/activities/timeline-activities/constants/FindManyTimelineActivitiesOrderBy';
import { Note } from '@twenty-modules/activities/types/Note';
import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ActivityTargetableObject } from '../../types/ActivityTargetableEntity';

export const useNotes = (targetableObject: ActivityTargetableObject) => {
  const notesQueryVariables = useMemo(
    () =>
      ({
        filter: {},
        orderBy: FIND_MANY_TIMELINE_ACTIVITIES_ORDER_BY,
      }) as RecordGqlOperationVariables,
    [],
  );

  const { activities, loading } = useActivities<Note>({
    objectNameSingular: CoreObjectNameSingular.Note,
    activitiesFilters: notesQueryVariables.filter ?? {},
    activitiesOrderByVariables: notesQueryVariables.orderBy ?? [{}],
    targetableObjects: [targetableObject],
  });

  const [currentNotesQueryVariables, setCurrentNotesQueryVariables] =
    useRecoilState(currentNotesQueryVariablesState);

  // TODO: fix useEffect, remove with better pattern
  useEffect(() => {
    if (!isDeeplyEqual(notesQueryVariables, currentNotesQueryVariables)) {
      setCurrentNotesQueryVariables(notesQueryVariables);
    }
  }, [
    notesQueryVariables,
    currentNotesQueryVariables,
    setCurrentNotesQueryVariables,
  ]);

  return {
    notes: activities as Note[],
    loading,
  };
};
