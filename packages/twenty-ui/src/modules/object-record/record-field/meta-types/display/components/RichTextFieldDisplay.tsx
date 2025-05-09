import { useRichTextFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useRichTextFieldDisplay';
import { getFirstNonEmptyLineOfRichText } from '@twenty-modules/ui/input/editor/utils/getFirstNonEmptyLineOfRichText';

export const RichTextFieldDisplay = () => {
  const { fieldValue } = useRichTextFieldDisplay();

  return (
    <div>
      <span>{getFirstNonEmptyLineOfRichText(fieldValue)}</span>
    </div>
  );
};
