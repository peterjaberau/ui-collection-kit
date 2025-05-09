import { createRequiredContext } from '@twenty-ui/front/utils/createRequiredContext';

export type SelectableListContextValue = {
  hotkeyScope: string;
};

export const [SelectableListContextProvider, useSelectableListContextOrThrow] =
  createRequiredContext<SelectableListContextValue>('SelectableListContext');
