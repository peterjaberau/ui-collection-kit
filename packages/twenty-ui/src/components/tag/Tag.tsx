import { chakra } from "@chakra-ui/react"
import { useContext } from "react"
import { useTheme } from "@emotion/react"

// TODO prastoin We should forbid barrel import within the twenty-ui package
import { IconComponent } from "../../display/icon/types/IconComponent"
import { OverflowingTextWithTooltip } from "../../display/tooltip/OverflowingTextWithTooltip"
import { BORDER_COMMON, THEME_COMMON, ThemeColor, ThemeContext, ThemeType } from "../../theme"
import { isDefined } from "@ui-collection-kit/twenty-shared/src/utils"

const spacing5 = THEME_COMMON.spacing(5)
const spacing2 = THEME_COMMON.spacing(2)
const spacing1 = THEME_COMMON.spacing(1)

type StyledTagProps = {
  color: TagColor
  weight: TagWeight
  variant: TagVariant
  preventShrink?: boolean
  preventPadding?: boolean
  [key: string]: any
  children?: React.ReactNode
}

const StyledTag = ({ children, ...props }: StyledTagProps) => {
  const theme: any = useTheme()

  return (
    <chakra.div
      alignItems={"center"}
      background={
        props.color === "transparent"
          ? "transparent"
          : isDefined(theme.tag.background[props.color])
            ? theme.tag.background[props.color]
            : (console.warn(`Tag color ${props.color} is not defined in the theme`), theme.tag.background.gray)
      }
      borderRadius={BORDER_COMMON.radius.sm}
      color={props.color === "transparent" ? theme.font.color.secondary : theme.tag.text[props.color]}
      display={"inline-flex"}
      fontSize={theme.font.size.md}
      fontStyle={"normal"}
      fontWeight={props.weight === "regular" ? theme.font.weight.regular : theme.font.weight.medium}
      height={spacing5}
      margin={0}
      overflow={"hidden"}
      padding={props.preventPadding ? "0" : `0 ${spacing2}`}
      border={
        props.variant === "outline" || props.variant === "border"
          ? `1px ${props.variant === "border" ? "solid" : "dashed"} ${theme.border.color.strong}`
          : "none"
      }
      gap={spacing1}
      minWidth={props.preventShrink ? "fit-content" : "none"}
    >
      {children}
    </chakra.div>
  )
}

const StyledContent = chakra("span", {
  base: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})

const StyledNonShrinkableText = chakra("span", {
  base: {
    whiteSpace: "nowrap",
    width: "fit-content",
  },
})

const StyledIconContainer = chakra("div", {
  base: {
    display: "flex",
  },
})

type TagWeight = "regular" | "medium"
type TagVariant = "solid" | "outline" | "border"
export type TagColor = ThemeColor | "transparent"

type TagProps = {
  className?: string
  color: TagColor
  text: string
  Icon?: IconComponent
  onClick?: () => void
  weight?: TagWeight
  variant?: TagVariant
  preventShrink?: boolean
  preventPadding?: boolean
}

// TODO: Find a way to have ellipsis and shrinkable tag in tag list while keeping good perf for table cells
export const Tag = ({
  className,
  color,
  text,
  Icon,
  onClick,
  weight = "regular",
  variant = "solid",
  preventShrink,
  preventPadding,
}: TagProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <StyledTag
      theme={theme}
      className={className}
      color={color}
      onClick={onClick}
      weight={weight}
      variant={variant}
      preventShrink={preventShrink}
      preventPadding={preventPadding}
    >
      {isDefined(Icon) ? (
        <StyledIconContainer>
          <Icon size={theme.icon.size.sm} stroke={theme.icon.stroke.sm} />
        </StyledIconContainer>
      ) : (
        <></>
      )}
      {preventShrink ? (
        <StyledNonShrinkableText>{text}</StyledNonShrinkableText>
      ) : (
        <StyledContent>
          <OverflowingTextWithTooltip text={text} />
        </StyledContent>
      )}
    </StyledTag>
  )
}
