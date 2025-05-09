import { RECORD_AGNOSTIC_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-agnostic-actions/constants/RecordAgnosticActionsConfig';
import { ActionViewType } from '@twenty-modules/action-menu/actions/types/ActionViewType';
import { ShouldBeRegisteredFunctionParams } from '@twenty-modules/action-menu/actions/types/ShouldBeRegisteredFunctionParams';
import { getActionConfig } from '@twenty-modules/action-menu/actions/utils/getActionConfig';
import { getActionViewType } from '@twenty-modules/action-menu/actions/utils/getActionViewType';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useRegisteredActions = (
  shouldBeRegisteredParams: ShouldBeRegisteredFunctionParams,
) => {
  const { objectMetadataItem } = shouldBeRegisteredParams;

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const contextStoreCurrentViewType = useRecoilComponentValueV2(
    contextStoreCurrentViewTypeComponentState,
  );

  const viewType = getActionViewType(
    contextStoreCurrentViewType,
    contextStoreTargetedRecordsRule,
  );

  const recordActionConfig = getActionConfig(objectMetadataItem);

  const recordAgnosticActionConfig = RECORD_AGNOSTIC_ACTIONS_CONFIG;

  const actionsConfig = {
    ...recordActionConfig,
    ...recordAgnosticActionConfig,
  };

  const actionsToRegister = isDefined(viewType)
    ? Object.values(actionsConfig).filter(
        (action) =>
          action.availableOn?.includes(viewType) ||
          action.availableOn?.includes(ActionViewType.GLOBAL),
      )
    : [];

  const actions = actionsToRegister
    .filter((action) => action.shouldBeRegistered(shouldBeRegisteredParams))
    .sort((a, b) => a.position - b.position);

  return actions;
};
