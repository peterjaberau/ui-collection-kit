import { Note } from '@twenty-modules/activities/types/Note';
import { Task } from '@twenty-modules/activities/types/Task';

export type ActivityForEditor = Partial<Task | Note> &
  Partial<Pick<Task, 'status' | 'dueAt' | 'assignee' | 'taskTargets'>> &
  Partial<Pick<Note, 'noteTargets'>>;
