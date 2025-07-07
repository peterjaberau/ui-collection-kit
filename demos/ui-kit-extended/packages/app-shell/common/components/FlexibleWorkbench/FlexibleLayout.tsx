import React, { useContext } from "react"
import { Stack, For, Container } from "@chakra-ui/react"
import { FlexibleComponent } from "./FlexibleComponent"
import { FlexibleSplit } from "./FlexibleSplit"

export interface IFlexibleLayoutProps {
  className?: string
  style?: React.CSSProperties
}

export const FlexibleLayout = ({
  type,
  direction,
  defaultSize,
  children,
  items = [],
}: {
  type?: "split" | "component"
  direction?: "column" | "row"
  defaultSize?: number[]
  children?: any
  items?: any[]
}) => {

  const RenderFlexibleSplit = () => {
    return (
      <FlexibleSplit direction={direction} defaultSize={defaultSize}>
        {children}
      </FlexibleSplit>
    )
  }

  const RenderFlexibleComponent = () => {
    return <FlexibleComponent direction={direction}>{children}</FlexibleComponent>
  }
  return (
    <Stack
      // flex={1}
      css={{
        width: "full",
        height: "full",
      }}
      data-name="FlexibleLayout"
    >
      {type === "split" ? <RenderFlexibleSplit /> : <RenderFlexibleComponent />}
    </Stack>
  )
}
