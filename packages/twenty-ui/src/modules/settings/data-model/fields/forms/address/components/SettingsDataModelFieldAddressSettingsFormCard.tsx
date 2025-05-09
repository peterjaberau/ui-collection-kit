import styled from '@emotion/styled';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';

import { SettingsDataModelPreviewFormCard } from '@twenty-modules/settings/data-model/components/SettingsDataModelPreviewFormCard';
import { SettingsDataModelFieldAddressForm } from '@twenty-modules/settings/data-model/fields/forms/address/components/SettingsDataModelFieldAddressForm';
import {
  SettingsDataModelFieldPreviewCard,
  SettingsDataModelFieldPreviewCardProps,
} from '@twenty-modules/settings/data-model/fields/preview/components/SettingsDataModelFieldPreviewCard';

type SettingsDataModelFieldAddressSettingsFormCardProps = {
  disabled?: boolean;
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'icon' | 'label' | 'type' | 'defaultValue'
  >;
} & Pick<SettingsDataModelFieldPreviewCardProps, 'objectMetadataItem'>;

const StyledFieldPreviewCard = styled(SettingsDataModelFieldPreviewCard)`
  flex: 1 1 100%;
`;

export const SettingsDataModelFieldAddressSettingsFormCard = ({
  disabled,
  fieldMetadataItem,
  objectMetadataItem,
}: SettingsDataModelFieldAddressSettingsFormCardProps) => {
  return (
    <SettingsDataModelPreviewFormCard
      preview={
        <StyledFieldPreviewCard
          fieldMetadataItem={fieldMetadataItem}
          objectMetadataItem={objectMetadataItem}
        />
      }
      form={
        <SettingsDataModelFieldAddressForm
          disabled={disabled}
          fieldMetadataItem={fieldMetadataItem}
        />
      }
    />
  );
};
