import { PageFavoriteButton } from '@twenty-modules/favorites/components/PageFavoriteButton';
import { FavoriteFolderPicker } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPicker';
import { FavoriteFolderPickerEffect } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPickerEffect';
import { FavoriteFolderPickerComponentInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/scopes/FavoriteFolderPickerScope';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { DropdownScope } from '@twenty-modules/ui/layout/dropdown/scopes/DropdownScope';

type PageFavoriteFoldersDropdownProps = {
  dropdownId: string;
  isFavorite: boolean;
  record?: ObjectRecord;
  objectNameSingular: string;
};

export const PageFavoriteFoldersDropdown = ({
  dropdownId,
  isFavorite,
  record,
  objectNameSingular,
}: PageFavoriteFoldersDropdownProps) => {
  const { closeDropdown } = useDropdown(dropdownId);

  return (
    <FavoriteFolderPickerComponentInstanceContext
      favoriteFoldersScopeId={dropdownId}
    >
      <DropdownScope dropdownScopeId={dropdownId}>
        <Dropdown
          dropdownId={dropdownId}
          dropdownPlacement="bottom-start"
          clickableComponent={<PageFavoriteButton isFavorite={isFavorite} />}
          dropdownComponents={
            <>
              <FavoriteFolderPickerEffect record={record} />
              <FavoriteFolderPicker
                onSubmit={closeDropdown}
                record={record}
                objectNameSingular={objectNameSingular}
                dropdownId={dropdownId}
              />
            </>
          }
          dropdownHotkeyScope={{ scope: dropdownId }}
        />
      </DropdownScope>
    </FavoriteFolderPickerComponentInstanceContext>
  );
};
