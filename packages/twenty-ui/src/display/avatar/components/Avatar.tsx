import { chakra } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { isNonEmptyString, isNull, isUndefined } from "@sniptt/guards"

import { invalidAvatarUrlsState } from "../../../display/avatar/components/states/isInvalidAvatarUrlState"
import { AVATAR_PROPERTIES_BY_SIZE } from "../../../display/avatar/constants/AvatarPropertiesBySize"
import type { AvatarSize } from "../../../display/avatar/types/AvatarSize"
import type { AvatarType } from "../../../display/avatar/types/AvatarType"
import type { IconComponent } from "../../../display/icon/types/IconComponent"
import { ThemeContext } from "../../../theme"
import { Nullable, stringToHslColor } from "../../../utilities"
import { REACT_APP_SERVER_BASE_URL } from "../../../utilities/config"
import { getImageAbsoluteURI } from "@ui-collection-kit/twenty-shared/src/utils"

export type StyledAvatarProps = {
  size: AvatarSize
  rounded?: boolean
  clickable?: boolean
  color: string
  backgroundColor: string
  backgroundTransparentLight: string
  type?: Nullable<AvatarType>
  [key: string]: any
  children?: React.ReactNode
}

const StyledAvatar = ({ children, ...props }: StyledAvatarProps) => (
  <chakra.div
    alignItems={"center"}
    flexShrink={0}
    overflow={"hidden"}
    userSelect={"none"}
    display={"flex"}
    justifyContent={"center"}
    borderRadius={props.rounded ? "50%" : props.type === "icon" ? "4px" : "2px"}
    fontSize={AVATAR_PROPERTIES_BY_SIZE[props.size].fontSize}
    height={AVATAR_PROPERTIES_BY_SIZE[props.size].width}
    width={AVATAR_PROPERTIES_BY_SIZE[props.size].width}
    color={props.color}
    backgroundColor={props.backgroundColor}
    _hover={{
      boxShadow: props.clickable ? `0 0 0 4px ${props.backgroundTransparentLight}` : "none",
    }}
  >
    {children}
  </chakra.div>
)
const StyledImage = chakra("img", {
  base: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
})

export type AvatarProps = {
  avatarUrl?: string | null;
  className?: string;
  size?: AvatarSize;
  placeholder: string | undefined;
  placeholderColorSeed?: string;
  Icon?: IconComponent;
  iconColor?: string;
  type?: Nullable<AvatarType>;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
};

export const Avatar = ({
  avatarUrl,
  size = "md",
  placeholder,
  placeholderColorSeed = placeholder,
  Icon,
  iconColor,
  onClick,
  type = "squared",
  color,
  backgroundColor,
}: AvatarProps) => {
  const { theme } = useContext(ThemeContext)

  const [invalidAvatarUrls, setInvalidAvatarUrls] = useState(invalidAvatarUrlsState.default)

  const avatarImageURI = isNonEmptyString(avatarUrl)
    ? getImageAbsoluteURI({
        imageUrl: avatarUrl,
        baseUrl: REACT_APP_SERVER_BASE_URL,
      })
    : null

  const placeholderFirstChar = placeholder?.trim()?.charAt(0)
  const isPlaceholderFirstCharEmpty = !placeholderFirstChar || placeholderFirstChar === ""
  const placeholderChar = placeholderFirstChar?.toUpperCase() || "-"

  const showPlaceholder = isNull(avatarImageURI) || invalidAvatarUrls.includes(avatarImageURI)

  const handleImageError = () => {
    if (isNonEmptyString(avatarImageURI)) {
      setInvalidAvatarUrls((prev: any) => [...prev, avatarImageURI])
    }
  }

  const fixedColor = isPlaceholderFirstCharEmpty
    ? theme.font.color.tertiary
    : (color ?? stringToHslColor(placeholderColorSeed ?? "", 75, 25))
  const fixedBackgroundColor = isPlaceholderFirstCharEmpty
    ? theme.background.transparent.light
    : (backgroundColor ?? stringToHslColor(placeholderColorSeed ?? "", 75, 85))

  const showBackgroundColor = showPlaceholder

  return (
    <StyledAvatar
      size={size}
      backgroundColor={
        Icon ? 'inherit' : showBackgroundColor ? fixedBackgroundColor : 'none'
      }
      color={fixedColor}
      clickable={!isUndefined(onClick)}
      rounded={type === 'rounded'}
      type={type}
      onClick={onClick}
      backgroundTransparentLight={theme.background.transparent.light}
    >
      {Icon ? (
        <Icon color={iconColor ? iconColor : "currentColor"} size={theme.icon.size.xl} />
      ) : showPlaceholder ? (
        placeholderChar
      ) : (
        <StyledImage src={avatarImageURI} onError={handleImageError} alt="" />
      )}
    </StyledAvatar>
  )
}
