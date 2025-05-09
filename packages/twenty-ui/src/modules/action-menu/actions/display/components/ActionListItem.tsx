import { ActionDisplayProps } from '@twenty-modules/action-menu/actions/display/components/ActionDisplay';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { CommandMenuItem } from '@twenty-modules/command-menu/components/CommandMenuItem';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { useNavigate } from 'react-router-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const ActionListItem = ({
  action,
  onClick,
  to,
}: {
  action: ActionDisplayProps;
  onClick?: () => void;
  to?: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    if (isDefined(to)) {
      navigate(to);
    }
  };

  return (
    <SelectableListItem itemId={action.key} onEnter={handleClick}>
      <CommandMenuItem
        id={action.key}
        Icon={action.Icon}
        label={getActionLabel(action.label)}
        description={getActionLabel(action.description ?? '')}
        to={to}
        onClick={onClick}
        hotKeys={action.hotKeys}
      />
    </SelectableListItem>
  );
};
