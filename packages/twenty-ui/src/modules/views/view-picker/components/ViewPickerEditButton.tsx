import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { useCreateViewFromCurrentState } from '@twenty-modules/views/view-picker/hooks/useCreateViewFromCurrentState';
import { useDeleteViewFromCurrentState } from '@twenty-modules/views/view-picker/hooks/useDeleteViewFromCurrentState';
import { useGetAvailableFieldsForKanban } from '@twenty-modules/views/view-picker/hooks/useGetAvailableFieldsForKanban';
import { useViewPickerMode } from '@twenty-modules/views/view-picker/hooks/useViewPickerMode';
import { viewPickerIsPersistingComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsPersistingComponentState';
import { viewPickerKanbanFieldMetadataIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerKanbanFieldMetadataIdComponentState';
import { viewPickerTypeComponentState } from '@twenty-modules/views/view-picker/states/viewPickerTypeComponentState';
import { Button } from '@twenty-ui/input';

export const ViewPickerEditButton = () => {
  const { availableFieldsForKanban, navigateToSelectSettings } =
    useGetAvailableFieldsForKanban();

  const { viewPickerMode } = useViewPickerMode();
  const viewPickerType = useRecoilComponentValueV2(
    viewPickerTypeComponentState,
  );
  const viewPickerIsPersisting = useRecoilComponentValueV2(
    viewPickerIsPersistingComponentState,
  );
  const viewPickerKanbanFieldMetadataId = useRecoilComponentValueV2(
    viewPickerKanbanFieldMetadataIdComponentState,
  );

  const { createViewFromCurrentState } = useCreateViewFromCurrentState();
  const { deleteViewFromCurrentState } = useDeleteViewFromCurrentState();

  if (viewPickerMode === 'edit') {
    return (
      <Button
        title="Delete"
        onClick={deleteViewFromCurrentState}
        accent="danger"
        fullWidth
        size="small"
        justify="center"
        focus={false}
        variant="secondary"
        disabled={viewPickerIsPersisting}
      />
    );
  }

  if (
    viewPickerType === ViewType.Kanban &&
    availableFieldsForKanban.length === 0
  ) {
    return (
      <Button
        title="Go to Settings"
        onClick={navigateToSelectSettings}
        size="small"
        accent="blue"
        fullWidth
        justify="center"
      />
    );
  }

  if (
    viewPickerType === ViewType.Table ||
    viewPickerKanbanFieldMetadataId !== ''
  ) {
    return (
      <Button
        title="Create"
        onClick={createViewFromCurrentState}
        accent="blue"
        fullWidth
        size="small"
        justify="center"
        disabled={
          viewPickerIsPersisting ||
          (viewPickerType === ViewType.Kanban &&
            viewPickerKanbanFieldMetadataId === '')
        }
      />
    );
  }
};
