import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const viewableRecordIdComponentState = createComponentStateV2<
  string | null
>({
  key: 'command-menu/viewable-record-id',
  defaultValue: null,
  componentInstanceContext: CommandMenuPageComponentInstanceContext,
});
