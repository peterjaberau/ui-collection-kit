import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldInputDraftValue } from '@twenty-modules/object-record/record-field/types/FieldInputDraftValue';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldAddress } from '@twenty-modules/object-record/record-field/types/guards/isFieldAddress';
import { isFieldCurrency } from '@twenty-modules/object-record/record-field/types/guards/isFieldCurrency';
import { isFieldDateTime } from '@twenty-modules/object-record/record-field/types/guards/isFieldDateTime';
import { isFieldFullName } from '@twenty-modules/object-record/record-field/types/guards/isFieldFullName';
import { isFieldLinks } from '@twenty-modules/object-record/record-field/types/guards/isFieldLinks';
import { isFieldNumber } from '@twenty-modules/object-record/record-field/types/guards/isFieldNumber';
import { isFieldRawJson } from '@twenty-modules/object-record/record-field/types/guards/isFieldRawJson';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { isFieldText } from '@twenty-modules/object-record/record-field/types/guards/isFieldText';
import { isFieldUuid } from '@twenty-modules/object-record/record-field/types/guards/isFieldUuid';

type computeEmptyDraftValueParams = {
  fieldDefinition: Pick<FieldDefinition<FieldMetadata>, 'type'>;
};

export const computeEmptyDraftValue = <FieldValue>({
  fieldDefinition,
}: computeEmptyDraftValueParams): FieldInputDraftValue<FieldValue> => {
  // Todo: improve typing
  if (
    isFieldUuid(fieldDefinition) ||
    isFieldText(fieldDefinition) ||
    isFieldDateTime(fieldDefinition) ||
    isFieldNumber(fieldDefinition) ||
    isFieldRelation(fieldDefinition) ||
    isFieldRawJson(fieldDefinition)
  ) {
    return '' as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldLinks(fieldDefinition)) {
    return {
      primaryLinkUrl: '',
      primaryLinkLabel: '',
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldAddress(fieldDefinition)) {
    return {
      addressStreet1: '',
      addressStreet2: '',
      addressCity: '',
      addressState: '',
      addressCountry: '',
      addressPostcode: '',
    } as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldCurrency(fieldDefinition)) {
    return {
      amount: '',
      currenyCode: CurrencyCode.USD,
    } as unknown as FieldInputDraftValue<FieldValue>;
  }

  if (isFieldFullName(fieldDefinition)) {
    return {
      firstName: '',
      lastName: '',
    } as FieldInputDraftValue<FieldValue>;
  }

  throw new Error(`Record field type not supported : ${fieldDefinition.type}}`);
};
