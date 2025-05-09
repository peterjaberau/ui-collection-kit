import { isFavoriteFolderCreatingState } from '@twenty-modules/favorites/states/isFavoriteFolderCreatingState';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useNavigationSection } from '@twenty-modules/ui/navigation/navigation-drawer/hooks/useNavigationSection';
import { isNavigationDrawerExpandedState } from '@twenty-modules/ui/navigation/states/isNavigationDrawerExpanded';
import { useTheme } from '@emotion/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IconPlus } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

export const FavoriteFolderPickerFooter = ({
  dropdownId,
}: {
  dropdownId: string;
}) => {
  const [, setIsFavoriteFolderCreating] = useRecoilState(
    isFavoriteFolderCreatingState,
  );
  const setIsNavigationDrawerExpanded = useSetRecoilState(
    isNavigationDrawerExpandedState,
  );
  const { openNavigationSection } = useNavigationSection('Favorites');
  const theme = useTheme();
  const { closeDropdown } = useDropdown(dropdownId);

  return (
    <DropdownMenuItemsContainer scrollable={false}>
      <MenuItem
        className="add-folder"
        onClick={() => {
          setIsNavigationDrawerExpanded(true);
          openNavigationSection();
          setIsFavoriteFolderCreating(true);
          closeDropdown();
        }}
        text="Add folder"
        LeftIcon={() => <IconPlus size={theme.icon.size.md} />}
      />
    </DropdownMenuItemsContainer>
  );
};
