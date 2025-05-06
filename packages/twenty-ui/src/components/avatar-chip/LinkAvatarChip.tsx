import { AvatarChipsLeftComponent } from "./AvatarChipLeftComponent"
import { AvatarChipsCommonProps } from "./types/AvatarChipsCommonProps.type"
import { AvatarChipVariant } from "./types/AvatarChipsVariant.type"
import { ChipVariant } from "../chip/Chip"
import { LinkChip, LinkChipProps } from "../chip/LinkChip"

export type LinkAvatarChipProps = Omit<AvatarChipsCommonProps, "clickable" | "variant"> & {
  to: string
  onClick?: LinkChipProps["onClick"]
  variant?: AvatarChipVariant
  isLabelHidden?: boolean
}

export const LinkAvatarChip = ({
  to,
  onClick,
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
  variant,
  isLabelHidden,
}: LinkAvatarChipProps) => (
  <LinkChip
    to={to}
    onClick={onClick}
    label={name}
    isLabelHidden={isLabelHidden}
    variant={
      //Regular but Highlighted -> missleading
      variant === AvatarChipVariant.Regular ? ChipVariant.Highlighted : ChipVariant.Regular
    }
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
    className={className}
    maxWidth={maxWidth}
  />
)
