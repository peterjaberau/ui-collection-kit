import { ObjectFilterDropdownFilterInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownFilterInput';
import { ObjectFilterDropdownOperandDropdown } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownOperandDropdown';

type ObjectFilterOperandSelectAndInputProps = {
  filterDropdownId?: string;
};

export const ObjectFilterOperandSelectAndInput = ({
  filterDropdownId,
}: ObjectFilterOperandSelectAndInputProps) => {
  return (
    <>
      <ObjectFilterDropdownOperandDropdown
        filterDropdownId={filterDropdownId}
      />
      <ObjectFilterDropdownFilterInput filterDropdownId={filterDropdownId} />
    </>
  );
};
