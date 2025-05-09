import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { MultiWorkspaceDropdownClickableComponent } from '@twenty-modules/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/internal/MultiWorkspaceDropdownClickableComponent';
import { MultiWorkspaceDropdownDefaultComponents } from '@twenty-modules/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/internal/MultiWorkspaceDropdownDefaultComponents';
import { MultiWorkspaceDropdownThemesComponents } from '@twenty-modules/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/internal/MultiWorkspaceDropdownThemesComponents';
import { MultiWorkspaceDropdownWorkspacesListComponents } from '@twenty-modules/ui/navigation/navigation-drawer/components/MultiWorkspaceDropdown/internal/MultiWorkspaceDropdownWorkspacesListComponents';
import { MULTI_WORKSPACE_DROPDOWN_ID } from '@twenty-modules/ui/navigation/navigation-drawer/constants/MultiWorkspaceDropdownId';
import { multiWorkspaceDropdownState } from '@twenty-modules/ui/navigation/navigation-drawer/states/multiWorkspaceDropdownState';
import { NavigationDrawerHotKeyScope } from '@twenty-modules/ui/navigation/navigation-drawer/types/NavigationDrawerHotKeyScope';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';

export const MultiWorkspaceDropdownButton = () => {
  const [multiWorkspaceDropdown, setMultiWorkspaceDropdown] = useRecoilState(
    multiWorkspaceDropdownState,
  );

  const DropdownComponents = useMemo(() => {
    switch (multiWorkspaceDropdown) {
      case 'themes':
        return MultiWorkspaceDropdownThemesComponents;
      case 'workspaces-list':
        return MultiWorkspaceDropdownWorkspacesListComponents;
      default:
        return MultiWorkspaceDropdownDefaultComponents;
    }
  }, [multiWorkspaceDropdown]);

  return (
    <Dropdown
      dropdownId={MULTI_WORKSPACE_DROPDOWN_ID}
      dropdownHotkeyScope={{
        scope: NavigationDrawerHotKeyScope.MultiWorkspaceDropdownButton,
      }}
      dropdownOffset={{ y: -35, x: -5 }}
      clickableComponent={<MultiWorkspaceDropdownClickableComponent />}
      dropdownComponents={<DropdownComponents />}
      onClose={() => {
        setMultiWorkspaceDropdown('default');
      }}
    />
  );
};
