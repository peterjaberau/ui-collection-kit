import { chakra } from "@chakra-ui/react"
import { useTheme, css } from "@emotion/react"

import { ThemeColor } from "../../../theme"

export type ColorSampleVariant = "default" | "pipeline"

export type ColorSampleProps = {
  colorName: ThemeColor
  variant?: ColorSampleVariant
}

export type StyledColorSampleProps = {
  colorName: ThemeColor
  variant?: ColorSampleVariant
  [key: string]: any
  children?: React.ReactNode
}

const StyledColorSample = ({ children, ...props }: StyledColorSampleProps) => {
  const theme = useTheme()
  return (
    <chakra.div
      backgroundColor={theme.tag.background[props.colorName]}
      border={`1px solid ${theme.tag.text[props.colorName]}`}
      borderRadius="60px"
      height={theme.spacing(4)}
      width={theme.spacing(3)}
      css={`
      ${props.variant === "pipeline" &&
      `
        align-items: center;
        border: 0;
        display: flex;
        justify-content: center;

        &:after {
          background-color: ${theme.tag.text[props.colorName]};
          border-radius: ${theme.border.radius.rounded};
          content: "";
          display: block;
          height: ${theme.spacing(1)};
          width: ${theme.spacing(1)};
        }
      `}
    `}
    >
      {children}
    </chakra.div>
  )
}

export { StyledColorSample as ColorSample }
