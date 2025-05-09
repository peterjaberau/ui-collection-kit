import styled from '@emotion/styled';
import { DropResult } from '@hello-pangea/dnd';
import { MouseEvent, useCallback } from 'react';

import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { prefetchViewsFromObjectMetadataItemFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewsFromObjectMetadataItemFamilySelector';
import { DraggableItem } from '@twenty-modules/ui/layout/draggable-list/components/DraggableItem';
import { DraggableList } from '@twenty-modules/ui/layout/draggable-list/components/DraggableList';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useChangeView } from '@twenty-modules/views/hooks/useChangeView';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { useUpdateView } from '@twenty-modules/views/hooks/useUpdateView';
import { ViewPickerOptionDropdown } from '@twenty-modules/views/view-picker/components/ViewPickerOptionDropdown';
import { VIEW_PICKER_DROPDOWN_ID } from '@twenty-modules/views/view-picker/constants/ViewPickerDropdownId';
import { useViewPickerMode } from '@twenty-modules/views/view-picker/hooks/useViewPickerMode';
import { viewPickerReferenceViewIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerReferenceViewIdComponentState';
import { useLingui } from '@lingui/react/macro';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconPlus } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';
import { moveArrayItem } from '@twenty-ui/front/utils/array/moveArrayItem';

const StyledBoldDropdownMenuItemsContainer = styled(DropdownMenuItemsContainer)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const ViewPickerListContent = () => {
  const { t } = useLingui();

  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const viewsOnCurrentObject = useRecoilValue(
    prefetchViewsFromObjectMetadataItemFamilySelector({
      objectMetadataItemId: objectMetadataItem.id,
    }),
  );

  const { currentView } = useGetCurrentViewOnly();

  const setViewPickerReferenceViewId = useSetRecoilComponentStateV2(
    viewPickerReferenceViewIdComponentState,
  );

  const { setViewPickerMode } = useViewPickerMode();

  const { updateView } = useUpdateView();
  const { changeView } = useChangeView();

  const { closeDropdown } = useDropdown(VIEW_PICKER_DROPDOWN_ID);

  const handleViewSelect = (viewId: string) => {
    changeView(viewId);
    closeDropdown();
  };

  const handleAddViewButtonClick = () => {
    if (isDefined(currentView?.id)) {
      setViewPickerReferenceViewId(currentView.id);
      setViewPickerMode('create-empty');
    }
  };

  const handleEditViewButtonClick = (
    event: MouseEvent<HTMLElement>,
    viewId: string,
  ) => {
    event.stopPropagation();
    setViewPickerReferenceViewId(viewId);
    setViewPickerMode('edit');
  };

  const handleDragEnd = useCallback(
    async (result: DropResult) => {
      if (!result.destination) return;

      const viewsReordered = moveArrayItem(viewsOnCurrentObject, {
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });

      Promise.all(
        viewsReordered.map(async (view, index) => {
          if (view.position !== index) {
            await updateView({ ...view, position: index });
          }
        }),
      );
    },
    [updateView, viewsOnCurrentObject],
  );

  return (
    <>
      <DropdownMenuItemsContainer>
        <DraggableList
          onDragEnd={handleDragEnd}
          draggableItems={viewsOnCurrentObject.map((view, index) => {
            const isIndexView = view.key === 'INDEX';
            return (
              <DraggableItem
                key={view.id}
                draggableId={view.id}
                index={index}
                isDragDisabled={viewsOnCurrentObject.length === 1}
                itemComponent={
                  <ViewPickerOptionDropdown
                    view={{ ...view, __typename: 'View' }}
                    handleViewSelect={handleViewSelect}
                    isIndexView={isIndexView}
                    onEdit={handleEditViewButtonClick}
                  />
                }
              />
            );
          })}
        />
      </DropdownMenuItemsContainer>
      <DropdownMenuSeparator />
      <StyledBoldDropdownMenuItemsContainer scrollable={false}>
        <MenuItem
          onClick={handleAddViewButtonClick}
          LeftIcon={IconPlus}
          text={t`Add view`}
        />
      </StyledBoldDropdownMenuItemsContainer>
    </>
  );
};
