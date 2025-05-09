import { Activity } from '@twenty-modules/activities/types/Activity';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';

export type Note = Activity & {
  noteTargets?: NoteTarget[];
  __typename: 'Note';
};
