import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const isRecordIndexBoardColumnLoadingFamilyState = createFamilyState<
  boolean,
  string | undefined
>({
  key: 'isRecordIndexBoardColumnLoadingFamilyState',
  defaultValue: false,
});
