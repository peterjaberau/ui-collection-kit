import { useUuidField } from '@twenty-modules/object-record/record-field/meta-types/hooks/useUuidField';
import { TextDisplay } from '@twenty-modules/ui/field/display/components/TextDisplay';

export const UuidFieldDisplay = () => {
  const { fieldValue } = useUuidField();

  return <TextDisplay text={fieldValue} />;
};
