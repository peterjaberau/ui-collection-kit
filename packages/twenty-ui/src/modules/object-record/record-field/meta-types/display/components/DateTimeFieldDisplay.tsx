import { useDateTimeFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useDateTimeFieldDisplay';
import { DateTimeDisplay } from '@twenty-modules/ui/field/display/components/DateTimeDisplay';

export const DateTimeFieldDisplay = () => {
  const { fieldValue, fieldDefinition } = useDateTimeFieldDisplay();

  const dateFieldSettings = fieldDefinition.metadata?.settings;

  return (
    <DateTimeDisplay value={fieldValue} dateFieldSettings={dateFieldSettings} />
  );
};
