import { ActionDisplayProps } from '@twenty-modules/action-menu/actions/display/components/ActionDisplay';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { isSelectedItemIdComponentFamilySelector } from '@twenty-modules/ui/layout/selectable-list/states/selectors/isSelectedItemIdComponentFamilySelector';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { useNavigate } from 'react-router-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { MenuItem } from '@twenty-ui/navigation';

export const ActionDropdownItem = ({
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

  const selectableListInstanceId = useAvailableComponentInstanceIdOrThrow(
    SelectableListComponentInstanceContext,
  );

  const isSelected = useRecoilComponentFamilyValueV2(
    isSelectedItemIdComponentFamilySelector,
    action.key,
    selectableListInstanceId,
  );

  return (
    <SelectableListItem itemId={action.key} onEnter={handleClick}>
      <MenuItem
        focused={isSelected}
        key={action.key}
        LeftIcon={action.Icon}
        onClick={handleClick}
        text={getActionLabel(action.label)}
      />
    </SelectableListItem>
  );
};
