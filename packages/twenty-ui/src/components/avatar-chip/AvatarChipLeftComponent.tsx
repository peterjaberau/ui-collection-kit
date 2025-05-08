import { useTheme } from "@emotion/react"
import { chakra } from "@chakra-ui/react"
import { Avatar } from "../../display/avatar/components/Avatar"
import { AvatarType } from "../../display/avatar/types/AvatarType"
import { IconComponent } from "../../display/icon/types/IconComponent"
import { Nullable } from "../../utilities"
import { isDefined } from "@ui-collection-kit/twenty-shared/src/utils"

export type StyledInvertedIconContainerProps = {
  backgroundColor?: string
  [key: string]: any
  children?: React.ReactNode
}

const StyledInvertedIconContainer = ({ children, ...props }: StyledInvertedIconContainerProps) => {

  return (
    <chakra.div
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="14px"
      height="14px"
      borderRadius="4px"
      backgroundColor={props.backgroundColor}
    >{children}</chakra.div>
  )
}

export type AvatarChipsLeftComponentProps = {
  name: string
  avatarUrl?: string
  avatarType?: Nullable<AvatarType>
  LeftIcon?: IconComponent
  LeftIconColor?: string
  isIconInverted?: boolean
  placeholderColorSeed?: string
}

export const AvatarChipsLeftComponent: React.FC<AvatarChipsLeftComponentProps> = ({
  LeftIcon,
  placeholderColorSeed,
  avatarType,
  avatarUrl,
  name,
  isIconInverted = false,
  LeftIconColor,
}) => {
  const theme = useTheme()
  if (!isDefined(LeftIcon)) {
    return (
      <Avatar
        avatarUrl={avatarUrl}
        placeholderColorSeed={placeholderColorSeed}
        placeholder={name}
        size="sm"
        type={avatarType}
      />
    )
  }

  if (isIconInverted) {
    return (
      <StyledInvertedIconContainer backgroundColor={theme.background.invertedSecondary}>
        <LeftIcon color="white" size={theme.icon.size.md} stroke={theme.icon.stroke.sm} />
      </StyledInvertedIconContainer>
    )
  }

  return <LeftIcon size={theme.icon.size.md} stroke={theme.icon.stroke.sm} color={LeftIconColor || "currentColor"} />
}
