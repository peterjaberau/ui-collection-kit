import { ComponentStateKeyV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentStateKeyV2';
import { createComponentInstanceContext } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentInstanceContext';

type RecordFieldComponentInstanceContextProps = ComponentStateKeyV2;

export const RecordFieldComponentInstanceContext =
  createComponentInstanceContext<RecordFieldComponentInstanceContextProps>();
