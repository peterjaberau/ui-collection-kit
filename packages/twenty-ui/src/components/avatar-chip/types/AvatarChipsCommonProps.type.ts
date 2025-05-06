import { AvatarChipsLeftComponentProps } from '../AvatarChipLeftComponent';
import { ChipSize, ChipVariant } from '../../chip/Chip';

export type AvatarChipsCommonProps = {
  size?: ChipSize;
  className?: string;
  maxWidth?: number;
  variant?: ChipVariant;
} & AvatarChipsLeftComponentProps;
