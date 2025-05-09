import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { AppPath } from '@twenty-modules/types/AppPath';
import {
  ConfirmationModal,
  StyledCenteredButton,
} from '@twenty-modules/ui/layout/modal/components/ConfirmationModal';
import { useCreateDraftFromWorkflowVersion } from '@twenty-modules/workflow/hooks/useCreateDraftFromWorkflowVersion';
import { openOverrideWorkflowDraftConfirmationModalState } from '@twenty-modules/workflow/states/openOverrideWorkflowDraftConfirmationModalState';
import { useRecoilState } from 'recoil';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { getAppPath } from '@twenty-ui/front/utils/navigation/getAppPath';

export const OverrideWorkflowDraftConfirmationModal = ({
  workflowId,
  workflowVersionIdToCopy,
}: {
  workflowId: string;
  workflowVersionIdToCopy: string;
}) => {
  const [
    openOverrideWorkflowDraftConfirmationModal,
    setOpenOverrideWorkflowDraftConfirmationModal,
  ] = useRecoilState(openOverrideWorkflowDraftConfirmationModalState);

  const { createDraftFromWorkflowVersion } =
    useCreateDraftFromWorkflowVersion();

  const navigate = useNavigateApp();

  const handleOverrideDraft = async () => {
    await createDraftFromWorkflowVersion({
      workflowId,
      workflowVersionIdToCopy,
    });

    navigate(AppPath.RecordShowPage, {
      objectNameSingular: CoreObjectNameSingular.Workflow,
      objectRecordId: workflowId,
    });
  };

  return (
    <>
      <ConfirmationModal
        isOpen={openOverrideWorkflowDraftConfirmationModal}
        setIsOpen={setOpenOverrideWorkflowDraftConfirmationModal}
        title="A draft already exists"
        subtitle="A draft already exists for this workflow. Are you sure you want to erase it?"
        onConfirmClick={handleOverrideDraft}
        confirmButtonText={'Override Draft'}
        AdditionalButtons={
          <StyledCenteredButton
            to={getAppPath(AppPath.RecordShowPage, {
              objectNameSingular: CoreObjectNameSingular.Workflow,
              objectRecordId: workflowId,
            })}
            onClick={() => {
              setOpenOverrideWorkflowDraftConfirmationModal(false);
            }}
            variant="secondary"
            title="Go to Draft"
            fullWidth
          />
        }
      />
    </>
  );
};
