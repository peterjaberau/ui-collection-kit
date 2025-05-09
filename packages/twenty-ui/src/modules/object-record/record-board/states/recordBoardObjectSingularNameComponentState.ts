import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';

export const recordBoardObjectSingularNameComponentState = createComponentState<
  string | undefined
>({
  key: 'recordBoardObjectSingularNameComponentState',
  defaultValue: undefined,
});
