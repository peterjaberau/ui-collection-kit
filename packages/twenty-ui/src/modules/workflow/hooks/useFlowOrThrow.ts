import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { flowComponentState } from '@twenty-modules/workflow/states/flowComponentState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFlowOrThrow = () => {
  const flow = useRecoilComponentValueV2(flowComponentState);

  if (!isDefined(flow)) {
    throw new Error('Expected the flow to be defined');
  }

  return flow;
};
