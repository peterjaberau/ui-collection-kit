import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const commandMenuWorkflowIdComponentState = createComponentStateV2<
  string | undefined
>({
  key: 'command-menu/workflow-id',
  defaultValue: undefined,
  componentInstanceContext: CommandMenuPageComponentInstanceContext,
});
