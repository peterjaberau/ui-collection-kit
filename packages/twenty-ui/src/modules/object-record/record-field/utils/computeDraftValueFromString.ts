import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldInputDraftValue } from '@twenty-modules/object-record/record-field/types/FieldInputDraftValue';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldAddress } from '@twenty-modules/object-record/record-field/types/guards/isFieldAddress';
import { isFieldCurrency } from '@twenty-modules/object-record/record-field/types/guards/isFieldCurrency';
import { isFieldDateTime } from '@twenty-modules/object-record/record-field/types/guards/isFieldDateTime';
import { isFieldEmails } from '@twenty-modules/object-record/record-field/types/guards/isFieldEmails';
import { isFieldFullName } from '@twenty-modules/object-record/record-field/types/guards/isFieldFullName';
import { isFieldLinks } from '@twenty-modules/object-record/record-field/types/guards/isFieldLinks';
import { isFieldNumber } from '@twenty-modules/object-record/record-field/types/guards/isFieldNumber';
import { isFieldPhones } from '@twenty-modules/object-record/record-field/types/guards/isFieldPhones';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { isFieldText } from '@twenty-modules/object-record/record-field/types/guards/isFieldText';
import { isFieldUuid } from '@twenty-modules/object-record/record-field/types/guards/isFieldUuid';

type computeDraftValueFromStringParams = {
  fieldDefinition: Pick<FieldDefinition<FieldMetadata>, 'type'>;
  value: string;
};

export const computeDraftValueFromString = <FieldValue>({
  fieldDefinition,
  value,
}: computeDraftValueFromStringParams):
  | FieldInputDraftValue<FieldValue>
  | undefined => {
  // Todo: improve typing
  if (
    isFieldUuid(fieldDefinition) ||
    isFieldText(fieldDefinition) ||
    isFieldDateTime(fieldDefinition) ||
    isFieldNumber(fieldDefinition) ||
    isFieldRelation(fieldDefinition)
  ) {
    return value as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldCurrency(fieldDefinition)) {
    return {
      amount: value,
      currenyCode: CurrencyCode.USD,
    } as unknown as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldFullName(fieldDefinition)) {
    return {
      firstName: value,
      lastName: '',
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldAddress(fieldDefinition)) {
    return {
      addressStreet1: value,
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldLinks(fieldDefinition)) {
    return {
      primaryLinkUrl: value,
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldEmails(fieldDefinition)) {
    return {
      primaryEmail: value,
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldPhones(fieldDefinition)) {
    return {
      primaryPhoneNumber: value,
    } as FieldInputDraftValue<FieldValue>;
  }

  throw new Error(`Record field type not supported : ${fieldDefinition.type}}`);
};
