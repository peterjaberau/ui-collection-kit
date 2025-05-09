import { atom } from 'recoil';

import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';

export const currentNotesQueryVariablesState =
  atom<RecordGqlOperationVariables | null>({
    default: null,
    key: 'currentNotesQueryVariablesState',
  });
