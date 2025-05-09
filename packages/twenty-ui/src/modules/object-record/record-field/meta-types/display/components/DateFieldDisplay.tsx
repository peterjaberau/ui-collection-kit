import { useDateFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useDateFieldDisplay';
import { DateDisplay } from '@twenty-modules/ui/field/display/components/DateDisplay';

export const DateFieldDisplay = () => {
  const { fieldValue, fieldDefinition } = useDateFieldDisplay();

  const dateFieldSettings = fieldDefinition.metadata?.settings;

  return (
    <DateDisplay value={fieldValue} dateFieldSettings={dateFieldSettings} />
  );
};
