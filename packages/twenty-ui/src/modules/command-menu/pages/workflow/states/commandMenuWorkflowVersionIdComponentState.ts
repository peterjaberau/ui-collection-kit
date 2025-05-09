import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const commandMenuWorkflowVersionIdComponentState =
  createComponentStateV2<string | undefined>({
    key: 'command-menu/workflow-version-id',
    defaultValue: undefined,
    componentInstanceContext: CommandMenuPageComponentInstanceContext,
  });
