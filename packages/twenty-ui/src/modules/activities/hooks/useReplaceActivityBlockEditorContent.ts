import { BLOCK_SCHEMA } from '@twenty-modules/activities/blocks/constants/Schema';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { isNonEmptyString } from '@sniptt/guards';
import { useRecoilCallback } from 'recoil';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useReplaceActivityBlockEditorContent = (
  editor: typeof BLOCK_SCHEMA.BlockNoteEditor,
) => {
  const replaceBlockEditorContent = useRecoilCallback(
    ({ snapshot }) =>
      (activityId: string) => {
        if (isDefined(editor)) {
          const activityInStore = snapshot
            .getLoadable(recordStoreFamilyState(activityId))
            .getValue();

          const content = isNonEmptyString(activityInStore?.bodyV2.blocknote)
            ? JSON.parse(activityInStore?.bodyV2.blocknote)
            : [{ type: 'paragraph', content: '' }];

          if (!isDeeplyEqual(editor.document, content)) {
            editor.replaceBlocks(editor.document, content);
          }
        }
      },
    [editor],
  );

  return {
    replaceBlockEditorContent,
  };
};
