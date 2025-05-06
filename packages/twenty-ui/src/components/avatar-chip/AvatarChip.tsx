import { AvatarChipsLeftComponent } from './AvatarChipLeftComponent';
import { AvatarChipsCommonProps } from './types/AvatarChipsCommonProps.type';
import { Chip, ChipVariant } from '../chip/Chip';

export type AvatarChipProps = AvatarChipsCommonProps;
export const AvatarChip = ({
  name,
  LeftIcon,
  LeftIconColor,
  avatarType,
  avatarUrl,
  className,
  isIconInverted,
  maxWidth,
  placeholderColorSeed,
  size,
  variant = ChipVariant.Transparent,
}: AvatarChipProps) => (
  <Chip
    label={name}
    variant={variant}
    size={size}
    leftComponent={
      <AvatarChipsLeftComponent
        name={name}
        LeftIcon={LeftIcon}
        LeftIconColor={LeftIconColor}
        avatarType={avatarType}
        avatarUrl={avatarUrl}
        isIconInverted={isIconInverted}
        placeholderColorSeed={placeholderColorSeed}
      />
    }
    clickable={false}
    className={className}
    maxWidth={maxWidth}
  />
);
