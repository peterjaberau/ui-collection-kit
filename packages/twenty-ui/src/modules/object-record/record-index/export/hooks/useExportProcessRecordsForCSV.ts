import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { FieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { convertCurrencyMicrosToCurrencyAmount } from '@twenty-ui/front/utils/convertCurrencyToCurrencyMicros';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useExportProcessRecordsForCSV = (objectNameSingular: string) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const processRecordsForCSVExport = (records: ObjectRecord[]) => {
    return records.map((record) => {
      const currencyFields = objectMetadataItem.fields.filter(
        (field) => field.type === FieldMetadataType.CURRENCY,
      );

      const processedRecord = {
        ...record,
      };

      for (const currencyField of currencyFields) {
        if (isDefined(record[currencyField.name])) {
          processedRecord[currencyField.name] = {
            amountMicros: convertCurrencyMicrosToCurrencyAmount(
              record[currencyField.name].amountMicros,
            ),
            currencyCode: record[currencyField.name].currencyCode,
          } satisfies FieldCurrencyValue;
        }
      }

      return processedRecord;
    });
  };

  return { processRecordsForCSVExport };
};
