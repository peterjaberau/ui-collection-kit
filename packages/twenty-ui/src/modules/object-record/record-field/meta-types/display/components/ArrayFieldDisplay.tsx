import { useArrayFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useArrayFieldDisplay';
import { ArrayDisplay } from '@twenty-modules/ui/field/display/components/ArrayDisplay';

export const ArrayFieldDisplay = () => {
  const { fieldValue } = useArrayFieldDisplay();

  if (!Array.isArray(fieldValue)) {
    return <></>;
  }

  return <ArrayDisplay value={fieldValue} />;
};
