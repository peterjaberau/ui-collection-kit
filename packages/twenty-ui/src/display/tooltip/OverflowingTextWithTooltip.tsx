import { chakra } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { createPortal } from "react-dom"

import { THEME_COMMON } from "../../theme"
import { isDefined } from "@ui-collection-kit/twenty-shared/src/utils"
import { AppTooltip, TooltipDelay } from "./AppTooltip"

const spacing4 = THEME_COMMON.spacing(4)

export type StyledOverflowingMultilineTextProps = {
  cursorPointer: boolean
  size: "large" | "small"
  displayedMaxRows: number
  [key: string]: any
  children: React.ReactNode
}

const StyledOverflowingMultilineText = ({ children, ...props }: StyledOverflowingMultilineTextProps) => {
  return (
    <chakra.div
      fontFamily="inherit"
      fontSize="inherit"
      fontWeight="inherit"
      maxWidth="100%"
      overflow="hidden"
      textDecoration="inherit"
      textOverflow="ellipsis"
      height={props.size === "large" ? spacing4 : "auto"}
      whiteSpace="pre-wrap"
      css={{
        "-webkit-line-clamp": props.displayedMaxRows ? props.displayedMaxRows.toString() : "1",
        "-webkit-box-orient": "vertical",
      }}
      display="-webkit-box"
      _hover={{
        textOverflow: props.cursorPointer ? "clip" : "ellipsis",
        whiteSpace: props.cursorPointer ? "normal" : "nowrap",
      }}
      {...props}
    >
      {children}
    </chakra.div>
  )
}

export type StyledOverflowingTextProps = {
  cursorPointer: boolean
  size: "large" | "small"
  [key: string]: any
  children: React.ReactNode
}

const StyledOverflowingText = ({ children, ...props }: StyledOverflowingTextProps) => {
  return (
    <chakra.div
      cursor={props.cursorPointer ? "pointer" : "inherit"}
      fontFamily="inherit"
      fontSize="inherit"
      fontWeight="inherit"
      maxWidth="100%"
      textDecoration="inherit"
      textOverflow="ellipsis"
      overflow="hidden"
      height={props.size === "large" ? spacing4 : "auto"}
      whiteSpace="nowrap"
      _hover={{
        textOverflow: props.cursorPointer ? "clip" : "ellipsis",
        whiteSpace: props.cursorPointer ? "normal" : "nowrap",
      }}
    >
      {children}
    </chakra.div>
  )
}

const Styledpre = chakra("pre", {
  base: {
    fontFamily: "inherit",
    whiteSpace: "pre-wrap",
  },
})

export const OverflowingTextWithTooltip = ({
  size = "small",
  text,
  isTooltipMultiline,
  displayedMaxRows,
  hideTooltip,
}: {
  size?: "large" | "small"
  text: string | null | undefined
  isTooltipMultiline?: boolean
  displayedMaxRows?: number
  hideTooltip?: boolean
}) => {
  const textElementId = `title-id-${+new Date()}`

  const textRef = useRef<HTMLDivElement>(null)

  const [isTitleOverflowing, setIsTitleOverflowing] = useState(false)
  const [shouldRenderTooltip, setShouldRenderTooltip] = useState(false)

  const handleMouseEnter = () => {
    const isOverflowing =
      (text?.length ?? 0) > 0 && textRef.current
        ? textRef.current?.scrollHeight > textRef.current?.clientHeight ||
          textRef.current.scrollWidth > textRef.current.clientWidth
        : false

    setIsTitleOverflowing(isOverflowing)
    setShouldRenderTooltip(true)
  }

  const handleMouseLeave = () => {
    setIsTitleOverflowing(false)
    setShouldRenderTooltip(false)
  }

  const handleTooltipClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }
  return (
    <>
      {isDefined(displayedMaxRows) ? (
        <StyledOverflowingMultilineText
          data-testid="tooltip"
          cursorPointer={isTitleOverflowing}
          size={size}
          displayedMaxRows={displayedMaxRows}
          ref={textRef}
          id={textElementId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </StyledOverflowingMultilineText>
      ) : (
        <StyledOverflowingText
          data-testid="tooltip"
          cursorPointer={isTitleOverflowing}
          size={size}
          ref={textRef}
          id={textElementId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </StyledOverflowingText>
      )}
      {shouldRenderTooltip &&
        isTitleOverflowing &&
        createPortal(
          <div onClick={handleTooltipClick}>
            <AppTooltip
              anchorSelect={`#${textElementId}`}
              offset={5}
              hidden={!isTitleOverflowing || hideTooltip}
              noArrow
              place="bottom"
              positionStrategy="absolute"
              delay={TooltipDelay.mediumDelay}
              isOpen={true}
            >
              {isTooltipMultiline ? <Styledpre>{text}</Styledpre> : `${text || ""}`}
            </AppTooltip>
          </div>,
          document.body,
        )}
    </>
  )
}
