import { FieldArrayValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ExpandableList } from '@twenty-modules/ui/layout/expandable-list/components/ExpandableList';
import { Chip, ChipVariant } from '@twenty-ui/components';

type ArrayDisplayProps = {
  value: FieldArrayValue;
};

export const ArrayDisplay = ({ value }: ArrayDisplayProps) => {
  return (
    <ExpandableList>
      {value?.map((item, index) => (
        <Chip
          key={`${item}-${index}`}
          variant={ChipVariant.Highlighted}
          label={item}
        />
      ))}
    </ExpandableList>
  );
};
