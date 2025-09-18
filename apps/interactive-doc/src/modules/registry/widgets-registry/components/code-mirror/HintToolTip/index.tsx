import { chakra } from "@chakra-ui/react"
import copy from "copy-to-clipboard"
import { FC, useCallback, useState } from "react"
import { Trigger } from "#components/ui/trigger"
import { applyEditorWrapperStyle } from "../CodeMirror/style"
import { HintTooltipContentProps, HintTooltipProps } from "./interface"
import { MdErrorOutline as ErrorIcon } from "react-icons/md"
import { LuCopy as CopyIcon } from "react-icons/lu"

import {
  applyHintTooltipContentMainWrapperStyle,
  applyHintTooltipContentWrapperStyle,
  copyIconStyle,
  hintTooltipContentTitleStyle,
  hintTooltipContentTitleWrapperStyle,
  hintTooltipResultStyle,
} from "./style"

export const HintTooltipContent: FC<HintTooltipContentProps> = (props) => {
  const { hasError = false, resultType, result, setIsHovered } = props

  const handleClickCopy = useCallback(() => {
    if (result) {
      copy(result)
    }
  }, [result])

  return (
    <chakra.div
      css={applyHintTooltipContentWrapperStyle(hasError)}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <chakra.div css={applyHintTooltipContentMainWrapperStyle(hasError)}>
        <chakra.div css={hintTooltipContentTitleWrapperStyle}>
          {hasError && <ErrorIcon size="12px" />}
          <chakra.span css={hintTooltipContentTitleStyle}>{hasError ? "Error" : resultType}</chakra.span>
        </chakra.div>
        <chakra.span css={hintTooltipResultStyle}>{result}</chakra.span>
      </chakra.div>
      <CopyIcon style={copyIconStyle} onClick={handleClickCopy} />
    </chakra.div>
  )
}

export const HintToolTip: FC<HintTooltipProps> = (props) => {
  const { isEditorFocused, result, hasError, resultType, children, toolTipContainer } = props
  const [isHovered, setIsHovered] = useState(false)

  // return (
  //   <Popover.Root
  //     autoFocus={false}
  //     open={isEditorFocused || isHovered}
  //   >
  //     {/* @ts-ignore */}
  //     <Popover.Trigger asChild>{children}</Popover.Trigger>
  //     <Portal>
  //       <Popover.Positioner>
  //         <Popover.Content>
  //           <Popover.Arrow />
  //           <Popover.Body>
  //             <HintTooltipContent
  //               hasError={hasError}
  //               resultType={resultType}
  //               result={result}
  //               setIsHovered={setIsHovered}
  //             />
  //           </Popover.Body>
  //         </Popover.Content>
  //       </Popover.Positioner>
  //     </Portal>
  //   </Popover.Root>
  // )

  return (
    <>
      <Trigger
        withoutPadding
        withoutOffset
        withoutShadow
        autoAlignPopupWidth
        showArrow={false}
        popupVisible={isEditorFocused || isHovered}
        position="bottom-start"
        colorScheme="white"
        popupContainer={toolTipContainer}
        content={
          <HintTooltipContent hasError={hasError} resultType={resultType} result={result} setIsHovered={setIsHovered} />
        }
      >
        {children}
      </Trigger>
    </>
  )
}
