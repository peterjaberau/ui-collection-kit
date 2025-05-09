import { FavoriteFolderPicker } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPicker';
import { FavoriteFolderPickerEffect } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPickerEffect';
import { FavoriteFolderPickerComponentInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/scopes/FavoriteFolderPickerScope';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { DropdownScope } from '@twenty-modules/ui/layout/dropdown/scopes/DropdownScope';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { VIEW_PICKER_DROPDOWN_ID } from '@twenty-modules/views/view-picker/constants/ViewPickerDropdownId';
import { viewPickerReferenceViewIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerReferenceViewIdComponentState';
import { useRecoilValue } from 'recoil';

export const ViewPickerFavoriteFoldersDropdown = () => {
  const [viewPickerReferenceViewId] = useRecoilComponentStateV2(
    viewPickerReferenceViewIdComponentState,
  );

  const view = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: viewPickerReferenceViewId ?? '',
    }),
  );

  return (
    <FavoriteFolderPickerComponentInstanceContext
      favoriteFoldersScopeId={VIEW_PICKER_DROPDOWN_ID}
    >
      <DropdownScope dropdownScopeId={VIEW_PICKER_DROPDOWN_ID}>
        <>
          <FavoriteFolderPickerEffect record={view} />
          <FavoriteFolderPicker
            record={view}
            objectNameSingular="view"
            dropdownId={VIEW_PICKER_DROPDOWN_ID}
          />
        </>
      </DropdownScope>
    </FavoriteFolderPickerComponentInstanceContext>
  );
};
