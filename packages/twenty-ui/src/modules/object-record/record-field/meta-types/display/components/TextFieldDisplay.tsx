import { useTextFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useTextFieldDisplay';
import { isFieldText } from '@twenty-modules/object-record/record-field/types/guards/isFieldText';
import { TextDisplay } from '@twenty-modules/ui/field/display/components/TextDisplay';

export const TextFieldDisplay = () => {
  const { fieldValue, fieldDefinition, displayedMaxRows } =
    useTextFieldDisplay();

  const displayedMaxRowsFromSettings = isFieldText(fieldDefinition)
    ? fieldDefinition.metadata?.settings?.displayedMaxRows
    : undefined;

  const displayMaxRowCalculated = displayedMaxRows
    ? displayedMaxRows
    : displayedMaxRowsFromSettings;

  return (
    <TextDisplay text={fieldValue} displayedMaxRows={displayMaxRowCalculated} />
  );
};
