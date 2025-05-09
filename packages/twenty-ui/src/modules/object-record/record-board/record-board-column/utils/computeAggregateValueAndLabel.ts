import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { AggregateRecordsData } from '@twenty-modules/object-record/hooks/useAggregateRecords';
import { getAggregateOperationLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/getAggregateOperationLabel';
import { getAggregateOperationShortLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/getAggregateOperationShortLabel';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { COUNT_AGGREGATE_OPERATION_OPTIONS } from '@twenty-modules/object-record/record-table/record-table-footer/constants/countAggregateOperationOptions';
import { PERCENT_AGGREGATE_OPERATION_OPTIONS } from '@twenty-modules/object-record/record-table/record-table-footer/constants/percentAggregateOperationOptions';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { t } from '@lingui/core/macro';
import isEmpty from 'lodash.isempty';
import { FIELD_FOR_TOTAL_COUNT_AGGREGATE_OPERATION } from '@ui-collection-kit/twenty-shared/src/constants';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { formatAmount } from '@twenty-ui/front/utils/format/formatAmount';
import { formatNumber } from '@twenty-ui/front/utils/format/number';
import { formatDateString } from '@twenty-ui/front/utils/string/formatDateString';
import { formatDateTimeString } from '@twenty-ui/front/utils/string/formatDateTimeString';

export const computeAggregateValueAndLabel = ({
  data,
  objectMetadataItem,
  fieldMetadataId,
  aggregateOperation,
  dateFormat,
  timeFormat,
  timeZone,
}: {
  data: AggregateRecordsData;
  objectMetadataItem: ObjectMetadataItem;
  fieldMetadataId?: string | null;
  aggregateOperation?: ExtendedAggregateOperations | null;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  timeZone: string;
}) => {
  if (isEmpty(data)) {
    return {};
  }
  const field = objectMetadataItem.fields?.find(
    (field) => field.id === fieldMetadataId,
  );

  if (!isDefined(field)) {
    return {
      value:
        data?.[FIELD_FOR_TOTAL_COUNT_AGGREGATE_OPERATION]?.[
          AGGREGATE_OPERATIONS.count
        ],
      label: getAggregateOperationLabel(AGGREGATE_OPERATIONS.count),
      labelWithFieldName: getAggregateOperationLabel(
        AGGREGATE_OPERATIONS.count,
      ),
    };
  }

  if (!isDefined(aggregateOperation)) {
    throw new Error('Missing aggregate operation');
  }

  const aggregateValue = data[field.name]?.[aggregateOperation];

  let value;

  const dateFieldSettings = field?.settings;

  if (
    COUNT_AGGREGATE_OPERATION_OPTIONS.includes(
      aggregateOperation as AGGREGATE_OPERATIONS,
    )
  ) {
    value = aggregateValue;
  } else if (!isDefined(aggregateValue)) {
    value = '-';
  } else if (
    PERCENT_AGGREGATE_OPERATION_OPTIONS.includes(
      aggregateOperation as AGGREGATE_OPERATIONS,
    )
  ) {
    value = `${formatNumber(Number(aggregateValue) * 100)}%`;
  } else {
    switch (field.type) {
      case FieldMetadataType.CURRENCY: {
        value = Number(aggregateValue);
        value = formatAmount(value / 1_000_000);
        break;
      }

      case FieldMetadataType.NUMBER: {
        value = Number(aggregateValue);
        const { decimals, type } = field.settings ?? {};
        value =
          type === 'percentage'
            ? `${formatNumber(value * 100, decimals)}%`
            : formatNumber(value, decimals);
        break;
      }

      case FieldMetadataType.DATE_TIME: {
        value = aggregateValue as string;
        value = formatDateTimeString({
          value,
          timeZone,
          dateFormat,
          timeFormat,
          dateFieldSettings,
        });
        break;
      }

      case FieldMetadataType.DATE: {
        value = aggregateValue as string;
        value = formatDateString({
          value,
          timeZone,
          dateFormat,
          dateFieldSettings,
        });
        break;
      }
    }
  }
  const aggregateLabel = t(getAggregateOperationShortLabel(aggregateOperation));
  const fieldLabel = field.label;
  const labelWithFieldName =
    aggregateOperation === AGGREGATE_OPERATIONS.count
      ? `${getAggregateOperationLabel(AGGREGATE_OPERATIONS.count)}`
      : t`${aggregateLabel} of ${fieldLabel}`;

  return {
    value,
    label: aggregateLabel,
    labelWithFieldName,
  };
};
