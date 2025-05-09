import { useSelectFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useSelectFieldDisplay';
import { SelectDisplay } from '@twenty-modules/ui/field/display/components/SelectDisplay';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const SelectFieldDisplay = () => {
  const { fieldValue, fieldDefinition } = useSelectFieldDisplay();

  const selectedOption = fieldDefinition.metadata.options?.find(
    (option) => option.value === fieldValue,
  );

  if (!isDefined(selectedOption)) {
    return <></>;
  }

  return (
    <SelectDisplay color={selectedOption.color} label={selectedOption.label} />
  );
};
