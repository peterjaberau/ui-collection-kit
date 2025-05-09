import { useBooleanFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useBooleanFieldDisplay';
import { BooleanDisplay } from '@twenty-modules/ui/field/display/components/BooleanDisplay';

export const BooleanFieldDisplay = () => {
  const { fieldValue } = useBooleanFieldDisplay();

  return <BooleanDisplay value={fieldValue} />;
};
