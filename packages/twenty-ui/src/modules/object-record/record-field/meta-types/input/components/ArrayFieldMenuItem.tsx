import { MultiItemFieldMenuItem } from '@twenty-modules/object-record/record-field/meta-types/input/components/MultiItemFieldMenuItem';
import { ArrayDisplay } from '@twenty-modules/ui/field/display/components/ArrayDisplay';

type ArrayFieldMenuItemProps = {
  dropdownId: string;
  onEdit?: () => void;
  onDelete?: () => void;
  value: string;
};

export const ArrayFieldMenuItem = ({
  dropdownId,
  onEdit,
  onDelete,
  value,
}: ArrayFieldMenuItemProps) => {
  return (
    <MultiItemFieldMenuItem
      dropdownId={dropdownId}
      value={value}
      onEdit={onEdit}
      onDelete={onDelete}
      DisplayComponent={() => <ArrayDisplay value={[value]} />}
      hasPrimaryButton={false}
    />
  );
};
