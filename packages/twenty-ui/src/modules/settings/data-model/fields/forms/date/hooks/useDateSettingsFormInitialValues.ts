import { useFormContext } from 'react-hook-form';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { FieldDateDisplayFormat } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { SettingsDataModelFieldDateFormValues } from '@twenty-modules/settings/data-model/fields/forms/date/components/SettingsDataModelFieldDateForm';

export const useDateSettingsFormInitialValues = ({
  fieldMetadataItem,
}: {
  fieldMetadataItem?: Pick<FieldMetadataItem, 'settings'>;
}) => {
  const initialDisplayFormat = fieldMetadataItem?.settings
    ?.displayFormat as FieldDateDisplayFormat;
  const initialCustomUnicodeDateFormat = fieldMetadataItem?.settings
    ?.customUnicodeDateFormat as string;

  const { resetField } = useFormContext<SettingsDataModelFieldDateFormValues>();

  const resetDefaultValueField = () =>
    resetField('settings', {
      defaultValue: {
        displayFormat: initialDisplayFormat,
        customUnicodeDateFormat: initialCustomUnicodeDateFormat,
      },
    });

  return {
    initialDisplayFormat,
    initialCustomUnicodeDateFormat,
    resetDefaultValueField,
  };
};
