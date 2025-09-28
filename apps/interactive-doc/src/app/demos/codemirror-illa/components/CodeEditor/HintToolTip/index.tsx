'use client'
import copy from "copy-to-clipboard"
import { FC, useCallback, useRef, useState } from "react"
import { Trigger, TriggerRefHandler } from "#codemirror-illa/ui/trigger"
import { CopyIcon, ErrorIcon } from "#codemirror-illa/ui/icon"

import { applyEditorWrapperStyle } from "../CodeMirror/style"
import {
  HintTooltipContentProps,
  HintTooltipProps,
} from "./interface"
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
    <div
      css={applyHintTooltipContentWrapperStyle(hasError)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div css={applyHintTooltipContentMainWrapperStyle(hasError)}>
        <div css={hintTooltipContentTitleWrapperStyle}>
          {hasError && <ErrorIcon size="12px" />}
          <span css={hintTooltipContentTitleStyle}>
            {hasError ? "Error" : resultType}
          </span>
        </div>
        <span css={hintTooltipResultStyle}>{result}</span>
      </div>
      <CopyIcon css={copyIconStyle} onClick={handleClickCopy} />
    </div>
  )
}

export const HintToolTip: FC<HintTooltipProps> = (props) => {
  const {
    isEditorFocused,
    result,
    hasError,
    resultType,
    children,
    toolTipContainer,
  } = props
  const [isHovered, setIsHovered] = useState(false)

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
          <HintTooltipContent
            hasError={hasError}
            resultType={resultType}
            result={result}
            setIsHovered={setIsHovered}
          />
        }
      >
        {children}
      </Trigger>
    </>
  )
}
