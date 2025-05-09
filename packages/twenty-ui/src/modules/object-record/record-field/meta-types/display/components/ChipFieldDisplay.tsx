import { RecordChip } from '@twenty-modules/object-record/components/RecordChip';
import { useChipFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useChipFieldDisplay';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ChipSize } from '@twenty-ui/components';

export const ChipFieldDisplay = () => {
  const {
    recordValue,
    objectNameSingular,
    labelIdentifierLink,
    isLabelIdentifierCompact,
    disableChipClick,
  } = useChipFieldDisplay();

  if (!isDefined(recordValue)) {
    return null;
  }

  return (
    <RecordChip
      objectNameSingular={objectNameSingular}
      record={recordValue}
      size={ChipSize.Small}
      to={labelIdentifierLink}
      isLabelHidden={isLabelIdentifierCompact}
      forceDisableClick={disableChipClick}
    />
  );
};
