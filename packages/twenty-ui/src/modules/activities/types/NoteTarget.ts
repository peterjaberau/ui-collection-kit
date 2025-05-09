import { Note } from '@twenty-modules/activities/types/Note';
import { Company } from '@twenty-modules/companies/types/Company';
import { Person } from '@twenty-modules/people/types/Person';

export type NoteTarget = {
  id: string;
  createdAt: string;
  updatedAt: string;
  companyId?: string | null;
  personId?: string | null;
  note: Pick<Note, 'id' | 'createdAt' | 'updatedAt' | '__typename'>;
  person?: Pick<Person, 'id' | 'name' | 'avatarUrl' | '__typename'> | null;
  company?: Pick<Company, 'id' | 'name' | 'domainName' | '__typename'> | null;
  [key: string]: any;
  __typename: 'NoteTarget';
};
