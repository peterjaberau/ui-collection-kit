import { DEFAULT_RECORD_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-actions/constants/DefaultRecordActionsConfig';
import { ActionConfig } from '@twenty-modules/action-menu/actions/types/ActionConfig';
import { DefaultRecordActionConfigKeys } from '@twenty-modules/action-menu/actions/types/DefaultRecordActionConfigKeys';

export const inheritActionsFromDefaultConfig = ({
  config,
  actionKeys,
  propertiesToOverwrite,
}: {
  config: Record<string, ActionConfig>;
  actionKeys: DefaultRecordActionConfigKeys[];
  propertiesToOverwrite: Partial<
    Record<DefaultRecordActionConfigKeys, Partial<ActionConfig>>
  >;
}): Record<string, ActionConfig> => {
  const actionsFromDefaultConfig = actionKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        ...DEFAULT_RECORD_ACTIONS_CONFIG[key],
        ...propertiesToOverwrite[key],
      },
    }),
    {} as Record<string, ActionConfig>,
  );

  return {
    ...actionsFromDefaultConfig,
    ...config,
  };
};
