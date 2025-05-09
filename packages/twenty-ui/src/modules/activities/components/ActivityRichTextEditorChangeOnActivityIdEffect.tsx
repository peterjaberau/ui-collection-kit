import { BLOCK_SCHEMA } from '@twenty-modules/activities/blocks/constants/Schema';
import { useReplaceActivityBlockEditorContent } from '@twenty-modules/activities/hooks/useReplaceActivityBlockEditorContent';
import { useEffect, useState } from 'react';

type ActivityRichTextEditorChangeOnActivityIdEffectProps = {
  activityId: string;
  editor: typeof BLOCK_SCHEMA.BlockNoteEditor;
};

export const ActivityRichTextEditorChangeOnActivityIdEffect = ({
  activityId,
  editor,
}: ActivityRichTextEditorChangeOnActivityIdEffectProps) => {
  const { replaceBlockEditorContent } =
    useReplaceActivityBlockEditorContent(editor);

  const [currentActivityId, setCurrentActivityId] = useState(activityId);

  useEffect(() => {
    if (currentActivityId !== activityId) {
      replaceBlockEditorContent(activityId);
      setCurrentActivityId(activityId);
    }
  }, [activityId, currentActivityId, replaceBlockEditorContent]);

  return <></>;
};
