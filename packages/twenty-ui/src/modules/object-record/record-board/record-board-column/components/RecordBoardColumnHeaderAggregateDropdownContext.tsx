import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordBoardColumnHeaderAggregateContentId } from '@twenty-modules/object-record/record-board/types/RecordBoardColumnHeaderAggregateContentId';
import { createContext } from 'react';

export type RecordBoardColumnHeaderAggregateDropdownContextValue = {
  objectMetadataItem: ObjectMetadataItem;
  currentContentId: RecordBoardColumnHeaderAggregateContentId | null;
  onContentChange: (key: RecordBoardColumnHeaderAggregateContentId) => void;
  resetContent: () => void;
  previousContentId: RecordBoardColumnHeaderAggregateContentId | null;
  dropdownId: string;
};

export const RecordBoardColumnHeaderAggregateDropdownContext =
  createContext<RecordBoardColumnHeaderAggregateDropdownContextValue>(
    {} as RecordBoardColumnHeaderAggregateDropdownContextValue,
  );
