import { useCurrencyFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useCurrencyFieldDisplay';
import { CurrencyDisplay } from '@twenty-modules/ui/field/display/components/CurrencyDisplay';

export const CurrencyFieldDisplay = () => {
  const { fieldValue } = useCurrencyFieldDisplay();

  return <CurrencyDisplay currencyValue={fieldValue} />;
};
