import { ActionConfig } from '@twenty-modules/action-menu/actions/types/ActionConfig';
import { ActionConfigContext } from '@twenty-modules/action-menu/contexts/ActionConfigContext';

export const ActionComponent = ({ action }: { action: ActionConfig }) => {
  return (
    <ActionConfigContext.Provider value={action}>
      {action.component}
    </ActionConfigContext.Provider>
  );
};
