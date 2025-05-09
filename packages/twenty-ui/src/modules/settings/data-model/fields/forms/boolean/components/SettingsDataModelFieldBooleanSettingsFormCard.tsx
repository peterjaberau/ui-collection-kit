import { useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { SettingsDataModelPreviewFormCard } from '@twenty-modules/settings/data-model/components/SettingsDataModelPreviewFormCard';
import {
  SettingsDataModelFieldBooleanForm,
  SettingsDataModelFieldBooleanFormValues,
} from '@twenty-modules/settings/data-model/fields/forms/boolean/components/SettingsDataModelFieldBooleanForm';
import { useBooleanSettingsFormInitialValues } from '@twenty-modules/settings/data-model/fields/forms/boolean/hooks/useBooleanSettingsFormInitialValues';
import {
  SettingsDataModelFieldPreviewCard,
  SettingsDataModelFieldPreviewCardProps,
} from '@twenty-modules/settings/data-model/fields/preview/components/SettingsDataModelFieldPreviewCard';

type SettingsDataModelFieldBooleanSettingsFormCardProps = {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'icon' | 'label' | 'type' | 'defaultValue'
  >;
} & Pick<SettingsDataModelFieldPreviewCardProps, 'objectMetadataItem'>;

const StyledFieldPreviewCard = styled(SettingsDataModelFieldPreviewCard)`
  display: grid;
  flex: 1 1 100%;
`;

export const SettingsDataModelFieldBooleanSettingsFormCard = ({
  fieldMetadataItem,
  objectMetadataItem,
}: SettingsDataModelFieldBooleanSettingsFormCardProps) => {
  const { initialDefaultValue } = useBooleanSettingsFormInitialValues({
    fieldMetadataItem,
  });

  const { watch: watchFormValue } =
    useFormContext<SettingsDataModelFieldBooleanFormValues>();

  return (
    <SettingsDataModelPreviewFormCard
      preview={
        <StyledFieldPreviewCard
          fieldMetadataItem={{
            ...fieldMetadataItem,
            defaultValue: watchFormValue('defaultValue', initialDefaultValue),
          }}
          objectMetadataItem={objectMetadataItem}
        />
      }
      form={
        <SettingsDataModelFieldBooleanForm
          fieldMetadataItem={fieldMetadataItem}
        />
      }
    />
  );
};
