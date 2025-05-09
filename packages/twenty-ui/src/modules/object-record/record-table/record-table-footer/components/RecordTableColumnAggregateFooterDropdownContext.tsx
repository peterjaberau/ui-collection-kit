import { RecordTableFooterAggregateContentId } from '@twenty-modules/object-record/record-table/record-table-footer/types/RecordTableFooterAggregateContentId';
import { createContext } from 'react';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export type RecordTableColumnAggregateFooterDropdownContextValue = {
  currentContentId: RecordTableFooterAggregateContentId | null;
  onContentChange: (key: RecordTableFooterAggregateContentId) => void;
  resetContent: () => void;
  dropdownId: string;
  fieldMetadataId: string;
  fieldMetadataType?: FieldMetadataType;
};

export const RecordTableColumnAggregateFooterDropdownContext =
  createContext<RecordTableColumnAggregateFooterDropdownContextValue>(
    {} as RecordTableColumnAggregateFooterDropdownContextValue,
  );
