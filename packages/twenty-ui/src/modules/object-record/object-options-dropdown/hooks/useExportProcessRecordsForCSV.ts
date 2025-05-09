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
    return records.map((record) =>
      objectMetadataItem.fields.reduce(
        (processedRecord, field) => {
          if (!isDefined(record[field.name])) {
            return processedRecord;
          }

          switch (field.type) {
            case FieldMetadataType.CURRENCY:
              return {
                ...processedRecord,
                [field.name]: {
                  amountMicros: convertCurrencyMicrosToCurrencyAmount(
                    record[field.name].amountMicros,
                  ),
                  currencyCode: record[field.name].currencyCode,
                } satisfies FieldCurrencyValue,
              };
            case FieldMetadataType.RAW_JSON:
              return {
                ...processedRecord,
                [field.name]: JSON.stringify(record[field.name]),
              };
            default:
              return processedRecord;
          }
        },
        { ...record },
      ),
    );
  };

  return { processRecordsForCSVExport };
};
