import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormFieldInputInnerContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputInnerContainer';
import { FormFieldInputRowContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputRowContainer';
import { TextVariableEditor } from '@twenty-modules/object-record/record-field/form-types/components/TextVariableEditor';
import { useTextVariableEditor } from '@twenty-modules/object-record/record-field/form-types/hooks/useTextVariableEditor';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { InputErrorHelper } from '@twenty-modules/ui/input/components/InputErrorHelper';
import { InputHint } from '@twenty-modules/ui/input/components/InputHint';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';
import { parseEditorContent } from '@twenty-modules/workflow/workflow-variables/utils/parseEditorContent';
import { useId } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type FormTextFieldInputProps = {
  label?: string;
  error?: string;
  hint?: string;
  defaultValue: string | undefined;
  onChange: (value: string) => void;
  onBlur?: () => void;
  multiline?: boolean;
  readonly?: boolean;
  placeholder?: string;
  VariablePicker?: VariablePickerComponent;
};

export const FormTextFieldInput = ({
  label,
  error,
  hint,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  multiline,
  readonly,
  VariablePicker,
}: FormTextFieldInputProps) => {
  const inputId = useId();

  const editor = useTextVariableEditor({
    placeholder: placeholder ?? 'Enter text',
    multiline,
    readonly,
    defaultValue,
    onUpdate: (editor) => {
      const jsonContent = editor.getJSON();
      const parsedContent = parseEditorContent(jsonContent);

      onChange(parsedContent);
    },
  });

  const handleVariableTagInsert = (variableName: string) => {
    if (!isDefined(editor)) {
      throw new Error(
        'Expected the editor to be defined when a variable is selected',
      );
    }

    editor.commands.insertVariableTag(variableName);
  };

  if (!isDefined(editor)) {
    return null;
  }

  return (
    <FormFieldInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}

      <FormFieldInputRowContainer multiline={multiline}>
        <FormFieldInputInnerContainer
          hasRightElement={isDefined(VariablePicker) && !readonly}
          multiline={multiline}
          onBlur={onBlur}
        >
          <TextVariableEditor
            editor={editor}
            multiline={multiline}
            readonly={readonly}
          />
        </FormFieldInputInnerContainer>

        {VariablePicker && !readonly ? (
          <VariablePicker
            inputId={inputId}
            multiline={multiline}
            onVariableSelect={handleVariableTagInsert}
          />
        ) : null}
      </FormFieldInputRowContainer>
      {hint && <InputHint>{hint}</InputHint>}
      <InputErrorHelper>{error}</InputErrorHelper>
    </FormFieldInputContainer>
  );
};
