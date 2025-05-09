import { settingsDataModelFieldDescriptionFormSchema } from '@twenty-modules/settings/data-model/fields/forms/components/SettingsDataModelFieldDescriptionForm';
import { settingsDataModelFieldIconLabelFormSchema } from '@twenty-modules/settings/data-model/fields/forms/components/SettingsDataModelFieldIconLabelForm';
import { settingsDataModelFieldSettingsFormSchema } from '@twenty-modules/settings/data-model/fields/forms/components/SettingsDataModelFieldSettingsFormCard';
import { z } from 'zod';
import { settingsDataModelFieldTypeFormSchema } from '@twenty-ui/front/pages/settings/data-model/SettingsObjectNewField/SettingsObjectNewFieldSelect';

export const settingsFieldFormSchema = (existingOtherLabels?: string[]) => {
  return z
    .object({})
    .merge(settingsDataModelFieldIconLabelFormSchema(existingOtherLabels))
    .merge(settingsDataModelFieldDescriptionFormSchema())
    .merge(settingsDataModelFieldTypeFormSchema)
    .and(settingsDataModelFieldSettingsFormSchema);
};
