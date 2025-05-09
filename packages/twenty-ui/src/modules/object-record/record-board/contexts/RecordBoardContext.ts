import { createContext } from 'react';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

type RecordBoardContextProps = {
  objectMetadataItem: ObjectMetadataItem;
  selectFieldMetadataItem: FieldMetadataItem;
  createOneRecord: (recordInput: Partial<ObjectRecord>) => void;
  updateOneRecord: ({
    idToUpdate,
    updateOneRecordInput,
  }: {
    idToUpdate: string;
    updateOneRecordInput: Partial<Omit<ObjectRecord, 'id'>>;
  }) => void;
  deleteOneRecord: (idToDelete: string) => Promise<unknown>;
  recordBoardId: string;
};

export const RecordBoardContext = createContext<RecordBoardContextProps>(
  {} as RecordBoardContextProps,
);
