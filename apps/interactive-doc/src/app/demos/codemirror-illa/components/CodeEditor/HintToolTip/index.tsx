"use client"
import copy from "copy-to-clipboard"
import { FC, useCallback, useState } from "react"
import { LuCopy as CopyIcon } from "react-icons/lu"
import * as React from "react"
import { Alert, IconButton } from "@chakra-ui/react"
import { Tooltip } from "#codemirror-illa/ui/ToolTip"
import { HintTooltipContentProps, HintTooltipProps } from "./interface"

export const HintTooltipContent: FC<HintTooltipContentProps> = (props) => {
  const { hasError = false, resultType, result, setIsHovered } = props

  const handleClickCopy = useCallback(() => {
    if (result) {
      copy(result)
    }
  }, [result])

  return (
    <>
      <Alert.Root
        width={"100%"}
        status={hasError ? "error" : "success"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{hasError ? "Error" : resultType}</Alert.Title>
          <Alert.Description>{result}</Alert.Description>
        </Alert.Content>
        <IconButton pos="relative" size={"sm"} onClick={handleClickCopy}>
          <CopyIcon />
        </IconButton>
      </Alert.Root>
    </>
  )
}

export const HintToolTip: FC<HintTooltipProps> = (props) => {
  const { isEditorFocused, result, hasError, resultType, children, toolTipContainer } = props
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Tooltip
      open={isEditorFocused || isHovered}
      positioning={{ placement: "bottom-start" }}
      unstyled={true}
      css={{
        width: "100%",
      }}
      content={
        <HintTooltipContent hasError={hasError} resultType={resultType} result={result} setIsHovered={setIsHovered} />
      }
    >
      {children}
    </Tooltip>
  )
}
