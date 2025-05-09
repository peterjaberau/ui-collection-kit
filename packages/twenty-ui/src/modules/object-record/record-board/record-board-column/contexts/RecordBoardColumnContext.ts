import { createContext } from 'react';

import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';

type RecordBoardColumnContextProps = {
  columnDefinition: RecordGroupDefinition;
  columnId: string;
  recordIds: string[];
};

export const RecordBoardColumnContext =
  createContext<RecordBoardColumnContextProps>(
    {} as RecordBoardColumnContextProps,
  );
