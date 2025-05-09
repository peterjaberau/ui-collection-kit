import { PageFavoriteButton } from '@twenty-modules/favorites/components/PageFavoriteButton';
import { PageFavoriteFoldersDropdown } from '@twenty-modules/favorites/components/PageFavoriteFolderDropdown';
import { FAVORITE_FOLDER_PICKER_DROPDOWN_ID } from '@twenty-modules/favorites/favorite-folder-picker/constants/FavoriteFolderPickerDropdownId';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { PageHeaderToggleCommandMenuButton } from '@twenty-modules/ui/layout/page-header/components/PageHeaderToggleCommandMenuButton';
import { ShowPageAddButton } from '@twenty-modules/ui/layout/show-page/components/ShowPageAddButton';
import { useIsMobile } from '@twenty-ui//utilities';

type RecordShowPageBaseHeaderProps = {
  isFavorite: boolean;
  record: ObjectRecord | undefined;
  objectMetadataItem: ObjectMetadataItem;
  objectNameSingular: string;
  handleFavoriteButtonClick: () => void;
};

export const RecordShowPageBaseHeader = ({
  isFavorite,
  record,
  objectMetadataItem,
  objectNameSingular,
  handleFavoriteButtonClick,
}: RecordShowPageBaseHeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <>
          {isFavorite ? (
            <PageFavoriteFoldersDropdown
              key={FAVORITE_FOLDER_PICKER_DROPDOWN_ID}
              dropdownId={FAVORITE_FOLDER_PICKER_DROPDOWN_ID}
              isFavorite={isFavorite}
              record={record}
              objectNameSingular={objectNameSingular}
            />
          ) : (
            <PageFavoriteButton
              isFavorite={isFavorite}
              onClick={handleFavoriteButtonClick}
            />
          )}
          <ShowPageAddButton
            key="add"
            activityTargetObject={{
              id: record?.id ?? '0',
              targetObjectNameSingular: objectMetadataItem.nameSingular,
            }}
          />
        </>
      )}
      <PageHeaderToggleCommandMenuButton key="more" />
    </>
  );
};
