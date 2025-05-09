import { useTheme } from '@emotion/react';

import { FieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { SETTINGS_FIELD_CURRENCY_CODES } from '@twenty-modules/settings/data-model/constants/SettingsFieldCurrencyCodes';
import { EllipsisDisplay } from '@twenty-modules/ui/field/display/components/EllipsisDisplay';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { formatAmount } from '@twenty-ui/front/utils/format/formatAmount';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

type CurrencyDisplayProps = {
  currencyValue: FieldCurrencyValue | null | undefined;
};

export const CurrencyDisplay = ({ currencyValue }: CurrencyDisplayProps) => {
  const theme = useTheme();

  const shouldDisplayCurrency = isDefined(currencyValue?.currencyCode);

  const CurrencyIcon = isDefined(currencyValue?.currencyCode)
    ? SETTINGS_FIELD_CURRENCY_CODES[currencyValue?.currencyCode]?.Icon
    : null;

  const amountToDisplay = isUndefinedOrNull(currencyValue?.amountMicros)
    ? null
    : currencyValue?.amountMicros / 1000000;

  if (!shouldDisplayCurrency) {
    return <EllipsisDisplay>{0}</EllipsisDisplay>;
  }

  return (
    <EllipsisDisplay>
      {isDefined(CurrencyIcon) && amountToDisplay !== null && (
        <>
          <CurrencyIcon
            color={theme.font.color.primary}
            size={theme.icon.size.md}
            stroke={theme.icon.stroke.sm}
          />{' '}
        </>
      )}
      {amountToDisplay !== null ? formatAmount(amountToDisplay) : ''}
    </EllipsisDisplay>
  );
};
