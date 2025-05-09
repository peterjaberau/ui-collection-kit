import { useMatch, useResolvedPath } from 'react-router-dom';

import { AdvancedSettingsWrapper } from '@twenty-modules/settings/components/AdvancedSettingsWrapper';
import { SettingsNavigationItem } from '@twenty-modules/settings/hooks/useSettingsNavigationItems';
import { NavigationDrawerItem } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import { NavigationDrawerSubItemState } from '@twenty-modules/ui/navigation/navigation-drawer/types/NavigationDrawerSubItemState';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type SettingsNavigationDrawerItemProps = {
  item: SettingsNavigationItem;
  subItemState?: NavigationDrawerSubItemState;
};

export const SettingsNavigationDrawerItem = ({
  item,
  subItemState,
}: SettingsNavigationDrawerItemProps) => {
  const href = item.path ? getSettingsPath(item.path) : '';
  const pathName = useResolvedPath(href).pathname;
  const isActive = !!useMatch({
    path: pathName,
    end: !item.matchSubPages,
  });

  if (isDefined(item.isHidden) && item.isHidden) {
    return null;
  }

  if (isDefined(item.isAdvanced) && item.isAdvanced) {
    return (
      <AdvancedSettingsWrapper>
        <NavigationDrawerItem
          indentationLevel={item.indentationLevel}
          subItemState={subItemState}
          label={item.label}
          to={href}
          Icon={item.Icon}
          active={isActive}
          soon={item.soon}
          onClick={item.onClick}
        />
      </AdvancedSettingsWrapper>
    );
  }

  return (
    <NavigationDrawerItem
      indentationLevel={item.indentationLevel}
      subItemState={subItemState}
      label={item.label}
      to={href}
      Icon={item.Icon}
      active={isActive}
      soon={item.soon}
      onClick={item.onClick}
    />
  );
};
