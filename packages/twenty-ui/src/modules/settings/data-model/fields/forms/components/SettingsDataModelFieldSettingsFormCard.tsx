import styled from '@emotion/styled';
import omit from 'lodash.omit';
import { z } from 'zod';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { SettingsDataModelPreviewFormCard } from '@twenty-modules/settings/data-model/components/SettingsDataModelPreviewFormCard';
import { SETTINGS_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsFieldTypeConfigs';
import { settingsDataModelFieldAddressFormSchema } from '@twenty-modules/settings/data-model/fields/forms/address/components/SettingsDataModelFieldAddressForm';
import { SettingsDataModelFieldAddressSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/address/components/SettingsDataModelFieldAddressSettingsFormCard';
import { settingsDataModelFieldBooleanFormSchema } from '@twenty-modules/settings/data-model/fields/forms/boolean/components/SettingsDataModelFieldBooleanForm';
import { SettingsDataModelFieldBooleanSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/boolean/components/SettingsDataModelFieldBooleanSettingsFormCard';
import { settingsDataModelFieldtextFormSchema } from '@twenty-modules/settings/data-model/fields/forms/components/text/SettingsDataModelFieldTextForm';
import { SettingsDataModelFieldTextSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/components/text/SettingsDataModelFieldTextSettingsFormCard';
import { settingsDataModelFieldCurrencyFormSchema } from '@twenty-modules/settings/data-model/fields/forms/currency/components/SettingsDataModelFieldCurrencyForm';
import { SettingsDataModelFieldCurrencySettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/currency/components/SettingsDataModelFieldCurrencySettingsFormCard';
import { settingsDataModelFieldDateFormSchema } from '@twenty-modules/settings/data-model/fields/forms/date/components/SettingsDataModelFieldDateForm';
import { SettingsDataModelFieldDateSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/date/components/SettingsDataModelFieldDateSettingsFormCard';
import { settingsDataModelFieldNumberFormSchema } from '@twenty-modules/settings/data-model/fields/forms/number/components/SettingsDataModelFieldNumberForm';
import { SettingsDataModelFieldNumberSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/number/components/SettingsDataModelFieldNumberSettingsFormCard';
import { settingsDataModelFieldPhonesFormSchema } from '@twenty-modules/settings/data-model/fields/forms/phones/components/SettingsDataModelFieldPhonesForm';
import { SettingsDataModelFieldPhonesSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/phones/components/SettingsDataModelFieldPhonesSettingsFormCard';
import { settingsDataModelFieldRelationFormSchema } from '@twenty-modules/settings/data-model/fields/forms/relation/components/SettingsDataModelFieldRelationForm';
import { SettingsDataModelFieldRelationSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/relation/components/SettingsDataModelFieldRelationSettingsFormCard';
import {
  settingsDataModelFieldMultiSelectFormSchema,
  settingsDataModelFieldSelectFormSchema,
} from '@twenty-modules/settings/data-model/fields/forms/select/components/SettingsDataModelFieldSelectForm';
import { SettingsDataModelFieldSelectSettingsFormCard } from '@twenty-modules/settings/data-model/fields/forms/select/components/SettingsDataModelFieldSelectSettingsFormCard';
import {
  SettingsDataModelFieldPreviewCard,
  SettingsDataModelFieldPreviewCardProps,
} from '@twenty-modules/settings/data-model/fields/preview/components/SettingsDataModelFieldPreviewCard';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

const booleanFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.BOOLEAN) })
  .merge(settingsDataModelFieldBooleanFormSchema);

const currencyFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.CURRENCY) })
  .merge(settingsDataModelFieldCurrencyFormSchema);

const dateFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.DATE) })
  .merge(settingsDataModelFieldDateFormSchema);

const dateTimeFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.DATE_TIME) })
  .merge(settingsDataModelFieldDateFormSchema);

const relationFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.RELATION) })
  .merge(settingsDataModelFieldRelationFormSchema);

const selectFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.SELECT) })
  .merge(settingsDataModelFieldSelectFormSchema);

const multiSelectFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.MULTI_SELECT) })
  .merge(settingsDataModelFieldMultiSelectFormSchema);

const numberFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.NUMBER) })
  .merge(settingsDataModelFieldNumberFormSchema);

const textFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.TEXT) })
  .merge(settingsDataModelFieldtextFormSchema);

const addressFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.ADDRESS) })
  .merge(settingsDataModelFieldAddressFormSchema);

const phonesFieldFormSchema = z
  .object({ type: z.literal(FieldMetadataType.PHONES) })
  .merge(settingsDataModelFieldPhonesFormSchema);

const otherFieldsFormSchema = z.object({
  type: z.enum(
    Object.keys(
      omit(SETTINGS_FIELD_TYPE_CONFIGS, [
        FieldMetadataType.BOOLEAN,
        FieldMetadataType.CURRENCY,
        FieldMetadataType.RELATION,
        FieldMetadataType.SELECT,
        FieldMetadataType.MULTI_SELECT,
        FieldMetadataType.DATE,
        FieldMetadataType.DATE_TIME,
        FieldMetadataType.NUMBER,
        FieldMetadataType.ADDRESS,
        FieldMetadataType.PHONES,
        FieldMetadataType.TEXT,
      ]),
    ) as [FieldMetadataType, ...FieldMetadataType[]],
  ),
});

export const settingsDataModelFieldSettingsFormSchema = z.discriminatedUnion(
  'type',
  [
    booleanFieldFormSchema,
    currencyFieldFormSchema,
    dateFieldFormSchema,
    dateTimeFieldFormSchema,
    relationFieldFormSchema,
    selectFieldFormSchema,
    multiSelectFieldFormSchema,
    numberFieldFormSchema,
    textFieldFormSchema,
    addressFieldFormSchema,
    phonesFieldFormSchema,
    otherFieldsFormSchema,
  ],
);

type SettingsDataModelFieldSettingsFormCardProps = {
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'icon' | 'label' | 'type' | 'isCustom' | 'settings'
  > &
    Partial<Omit<FieldMetadataItem, 'icon' | 'label' | 'type'>>;
} & Pick<SettingsDataModelFieldPreviewCardProps, 'objectMetadataItem'>;

const StyledFieldPreviewCard = styled(SettingsDataModelFieldPreviewCard)`
  flex: 1 1 100%;
`;

const previewableTypes = [
  FieldMetadataType.ARRAY,
  FieldMetadataType.ADDRESS,
  FieldMetadataType.BOOLEAN,
  FieldMetadataType.CURRENCY,
  FieldMetadataType.DATE,
  FieldMetadataType.DATE_TIME,
  FieldMetadataType.EMAILS,
  FieldMetadataType.FULL_NAME,
  FieldMetadataType.LINKS,
  FieldMetadataType.MULTI_SELECT,
  FieldMetadataType.NUMBER,
  FieldMetadataType.PHONES,
  FieldMetadataType.RATING,
  FieldMetadataType.RAW_JSON,
  FieldMetadataType.RELATION,
  FieldMetadataType.SELECT,
  FieldMetadataType.TEXT,
];

export const SettingsDataModelFieldSettingsFormCard = ({
  fieldMetadataItem,
  objectMetadataItem,
}: SettingsDataModelFieldSettingsFormCardProps) => {
  if (!previewableTypes.includes(fieldMetadataItem.type)) {
    return null;
  }

  if (fieldMetadataItem.type === FieldMetadataType.BOOLEAN) {
    return (
      <SettingsDataModelFieldBooleanSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.CURRENCY) {
    return (
      <SettingsDataModelFieldCurrencySettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (
    fieldMetadataItem.type === FieldMetadataType.DATE ||
    fieldMetadataItem.type === FieldMetadataType.DATE_TIME
  ) {
    return (
      <SettingsDataModelFieldDateSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.RELATION) {
    return (
      <SettingsDataModelFieldRelationSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.NUMBER) {
    return (
      <SettingsDataModelFieldNumberSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.TEXT) {
    return (
      <SettingsDataModelFieldTextSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.ADDRESS) {
    return (
      <SettingsDataModelFieldAddressSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (fieldMetadataItem.type === FieldMetadataType.PHONES) {
    return (
      <SettingsDataModelFieldPhonesSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  if (
    fieldMetadataItem.type === FieldMetadataType.SELECT ||
    fieldMetadataItem.type === FieldMetadataType.MULTI_SELECT
  ) {
    return (
      <SettingsDataModelFieldSelectSettingsFormCard
        fieldMetadataItem={fieldMetadataItem}
        objectMetadataItem={objectMetadataItem}
      />
    );
  }

  return (
    <SettingsDataModelPreviewFormCard
      preview={
        <StyledFieldPreviewCard
          fieldMetadataItem={fieldMetadataItem}
          objectMetadataItem={objectMetadataItem}
        />
      }
    />
  );
};
