import { IconComponent } from '../../display';
import { ThemeColor } from '../../theme';

export type SelectOption<
  Value extends string | number | boolean | null = string,
> = {
  Icon?: IconComponent | null;
  label: string;
  value: Value;
  disabled?: boolean;
  color?: ThemeColor | 'transparent';
};
