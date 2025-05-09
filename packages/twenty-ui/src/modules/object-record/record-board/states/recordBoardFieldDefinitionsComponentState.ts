import { RecordBoardComponentInstanceContext } from '@twenty-modules/object-record/record-board/states/contexts/RecordBoardComponentInstanceContext';
import { RecordBoardFieldDefinition } from '@twenty-modules/object-record/record-board/types/RecordBoardFieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const recordBoardFieldDefinitionsComponentState = createComponentStateV2<
  RecordBoardFieldDefinition<FieldMetadata>[]
>({
  key: 'recordBoardFieldDefinitionsComponentState',
  defaultValue: [],
  componentInstanceContext: RecordBoardComponentInstanceContext,
});
