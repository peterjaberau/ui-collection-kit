import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { createScopeInternalContext } from '@twenty-modules/ui/utilities/recoil-scope/scopes-internal/utils/createScopeInternalContext';
import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

type RecordBoardScopeInternalContextProps = RecoilComponentStateKey & {
  onFieldsChange: (fields: FieldDefinition<FieldMetadata>[]) => void;
  onColumnsChange: (column: RecordGroupDefinition[]) => void;
};

export const RecordBoardScopeInternalContext =
  createScopeInternalContext<RecordBoardScopeInternalContextProps>();
