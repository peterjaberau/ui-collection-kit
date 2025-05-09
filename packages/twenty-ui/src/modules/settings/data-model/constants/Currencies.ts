import { SETTINGS_FIELD_CURRENCY_CODES } from '@twenty-modules/settings/data-model/constants/SettingsFieldCurrencyCodes';
import { Currency } from '@twenty-modules/ui/input/components/internal/types/Currency';

export const CURRENCIES: Currency[] = Object.entries(
  SETTINGS_FIELD_CURRENCY_CODES,
).map(([key, { Icon, label }]) => ({
  value: key,
  Icon,
  label: `${label} (${key})`,
}));
