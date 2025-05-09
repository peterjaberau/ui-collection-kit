import { isNonEmptyString } from '@sniptt/guards';
import { useContext } from 'react';

import { PreComputedChipGeneratorsContext } from '@twenty-modules/object-metadata/contexts/PreComputedChipGeneratorsContext';
import { isFieldFullName } from '@twenty-modules/object-record/record-field/types/guards/isFieldFullName';
import { isFieldNumber } from '@twenty-modules/object-record/record-field/types/guards/isFieldNumber';
import { isFieldText } from '@twenty-modules/object-record/record-field/types/guards/isFieldText';
import { useRecordValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { isFieldActor } from '@twenty-modules/object-record/record-field/types/guards/isFieldActor';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldContext } from '../../contexts/FieldContext';

export const useChipFieldDisplay = () => {
  const {
    recordId,
    fieldDefinition,
    isLabelIdentifier,
    labelIdentifierLink,
    isLabelIdentifierCompact,
    disableChipClick,
  } = useContext(FieldContext);

  const { chipGeneratorPerObjectPerField } = useContext(
    PreComputedChipGeneratorsContext,
  );

  if (!isDefined(chipGeneratorPerObjectPerField)) {
    throw new Error('Chip generator per object per field is not defined');
  }

  const objectNameSingular =
    isFieldText(fieldDefinition) ||
    isFieldFullName(fieldDefinition) ||
    isFieldNumber(fieldDefinition) ||
    isFieldActor(fieldDefinition)
      ? fieldDefinition.metadata.objectMetadataNameSingular
      : undefined;

  const recordValue = useRecordValue(recordId);

  if (!isNonEmptyString(objectNameSingular)) {
    throw new Error('Object metadata name singular is not a non-empty string');
  }

  return {
    objectNameSingular,
    recordValue,
    isLabelIdentifier,
    labelIdentifierLink,
    isLabelIdentifierCompact,
    disableChipClick,
  };
};
