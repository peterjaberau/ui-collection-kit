import { FieldPhonesValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const createPhonesFromFieldValue = (fieldValue: FieldPhonesValue) => {
  return !isDefined(fieldValue)
    ? []
    : [
        fieldValue.primaryPhoneNumber
          ? {
              number: fieldValue.primaryPhoneNumber,
              callingCode: fieldValue.primaryPhoneCallingCode
                ? fieldValue.primaryPhoneCallingCode
                : fieldValue.primaryPhoneCountryCode,
              countryCode: fieldValue.primaryPhoneCountryCode,
            }
          : null,
        ...(fieldValue.additionalPhones ?? []),
      ].filter(isDefined);
};
