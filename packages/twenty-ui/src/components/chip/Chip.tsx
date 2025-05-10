import { useTheme } from "@emotion/react"
import { ReactNode } from "react"
import { chakra } from "@chakra-ui/react"
import { OverflowingTextWithTooltip } from "../../display/tooltip/OverflowingTextWithTooltip"

export enum ChipSize {
  Large = "large",
  Small = "small",
}

export enum ChipAccent {
  TextPrimary = "text-primary",
  TextSecondary = "text-secondary",
}

export enum ChipVariant {
  Highlighted = "highlighted",
  Regular = "regular",
  Transparent = "transparent",
  Rounded = "rounded",
  Static = "static",
}

export type ChipProps = {
  size?: ChipSize
  disabled?: boolean
  clickable?: boolean
  label: string
  isLabelHidden?: boolean
  maxWidth?: number
  variant?: ChipVariant
  accent?: ChipAccent
  leftComponent?: ReactNode | null
  rightComponent?: (() => ReactNode) | null
  className?: string
}

export type StyledDivProps = {
  [key: string]: any
  children?: React.ReactNode
}

const StyledDiv = ({ children, ...props }: StyledDivProps) => {
  const theme = useTheme()
  return <chakra.div color={theme.font.color.tertiary}>{children}</chakra.div>
}


export type StyledContainerProps = {
  accent?: ChipAccent
  disabled?: boolean
  clickable?: boolean
  variant?: ChipVariant
  size?: ChipSize
  maxWidth?: number
  [key: string]: any
  children?: React.ReactNode
}
const StyledContainer = ({ children, ...props }: StyledContainerProps) => {
  const theme = useTheme()
  return <chakra.div
    textDecoration="none"
    alignItems="center"
    color={`${
      props.disabled
        ? theme.font.color.light
        : props.accent === ChipAccent.TextPrimary
          ? theme.font.color.primary
          : theme.font.color.secondary
    }`}
    cursor={`${
      props.variant === ChipVariant.Transparent ? "inherit" : props.clickable ? "pointer" : props.disabled ? "not-allowed" : "inherit"};
    }`}
    display="inline-flex"
    justifyContent="flex-start"
    overflow="hidden"
    userSelect="none"
    gap={theme.spacing(1)}
    height={props.size === ChipSize.Large ? theme.spacing(4) : theme.spacing(3)}
    maxWidth={props.maxWidth ? `calc(${props.maxWidth}px - 2 * var(--chip-horizontal-padding))` : "200px"}
    padding={`var(--chip-vertical-padding) var(--chip-horizontal-padding)`}
    fontWeight={`${
      props.accent === ChipAccent.TextSecondary ? theme.font.weight.medium : "inherit"
    }`}
    _hover={{
      backgroundColor: `${
        props.variant === ChipVariant.Regular && !props.disabled
          ? theme.background.transparent.light
          : props.variant === ChipVariant.Highlighted
            ? theme.background.transparent.medium
            : props.variant === ChipVariant.Static
              ? theme.background.transparent.light
              : "inherit"
      }`,
    }}
    _active={{
      backgroundColor: `${
        props.variant === ChipVariant.Regular && !props.disabled
          ? theme.background.transparent.medium
          : props.variant === ChipVariant.Highlighted
            ? theme.background.transparent.strong
            : props.variant === ChipVariant.Static
              ? theme.background.transparent.light
              : "inherit"
      }`,
    }}
    backgroundColor={`${
      props.variant === ChipVariant.Highlighted || props.variant === ChipVariant.Static
        ? theme.background.transparent.light
        : props.variant === ChipVariant.Rounded
          ? theme.background.transparent.lighter
          : "inherit"
    }`}
    border={`${
      props.variant === ChipVariant.Rounded ? `1px solid ${theme.border.color.medium}` : "none"
    }`}
    borderRadius={`${
      props.variant === ChipVariant.Rounded ? "50px" : theme.border.radius.sm
    }`}
    css={{
      "--chip-horizontal-padding": theme.spacing(1),
      "--chip-vertical-padding": theme.spacing(1),
      "& > svg": {
        flexShrink: 0,
      },
    }}
    paddingLeft={`${
      props.variant === ChipVariant.Transparent ? theme.spacing(0) : "var(--chip-horizontal-padding)"
    }`}
  >
    {children}
  </chakra.div>
}



export const Chip = ({
  size = ChipSize.Small,
  label,
  isLabelHidden = false,
  disabled = false,
  clickable = true,
  variant = ChipVariant.Regular,
  leftComponent = null,
  rightComponent = null,
  accent = ChipAccent.TextPrimary,
  className,
  maxWidth,
}: ChipProps) => {
  return (
    <StyledContainer
      data-testid="chip"
      accent={accent}
      clickable={clickable}
      disabled={disabled}
      size={size}
      variant={variant}
      className={className}
      maxWidth={maxWidth}
    >
      {leftComponent}
      {!isLabelHidden && label && label.trim() ? (
        <OverflowingTextWithTooltip size={size} text={label} />
      ) : (
        <StyledDiv>Untitled</StyledDiv>
      )}
      {rightComponent?.()}
    </StyledContainer>
  )
}
