import { v4 } from 'uuid';

import { FieldMetadataItemOption } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { generateNewSelectOptionLabel } from '@twenty-modules/settings/data-model/fields/forms/select/utils/generateNewSelectOptionLabel';
import { computeOptionValueFromLabel } from '@twenty-ui/front/pages/settings/data-model/utils/compute-option-value-from-label.utils';
import { getNextThemeColor } from '@twenty-ui/theme';

export const generateNewSelectOption = (
  options: FieldMetadataItemOption[],
): FieldMetadataItemOption => {
  const newOptionLabel = generateNewSelectOptionLabel(options);

  return {
    color: getNextThemeColor(options[options.length - 1]?.color),
    id: v4(),
    label: newOptionLabel,
    position: options.length,
    value: computeOptionValueFromLabel(newOptionLabel),
  };
};
