import { MessageThread } from '@twenty-modules/activities/emails/types/MessageThread';
import { CommandMenuPageComponentInstanceContext } from '@twenty-modules/command-menu/states/contexts/CommandMenuPageComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const messageThreadComponentState =
  createComponentStateV2<MessageThread | null>({
    key: 'messageThreadComponentState',
    defaultValue: null,
    componentInstanceContext: CommandMenuPageComponentInstanceContext,
  });
