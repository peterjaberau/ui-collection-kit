import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { availableFieldDefinitionsComponentState } from '@twenty-modules/views/states/availableFieldDefinitionsComponentState';
import { viewObjectMetadataIdComponentState } from '@twenty-modules/views/states/viewObjectMetadataIdComponentState';

export const useInitViewBar = (viewBarInstanceId?: string) => {
  const setAvailableFieldDefinitions = useSetRecoilComponentStateV2(
    availableFieldDefinitionsComponentState,
    viewBarInstanceId,
  );

  const setViewObjectMetadataId = useSetRecoilComponentStateV2(
    viewObjectMetadataIdComponentState,
    viewBarInstanceId,
  );

  return {
    setAvailableFieldDefinitions,
    setViewObjectMetadataId,
  };
};
