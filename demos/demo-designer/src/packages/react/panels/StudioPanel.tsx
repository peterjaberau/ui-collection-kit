import React from "react"
import { usePrefix, usePosition } from "../hooks"
import { Layout } from "../containers"
import { HStack, VStack, Box } from "@chakra-ui/react"
import cls from "classnames"
export interface IStudioPanelProps {
  style?: React.CSSProperties
  className?: string
  logo?: React.ReactNode
  actions?: React.ReactNode
  prefixCls?: string
  theme?: string
  position?: React.ComponentProps<typeof Layout>["position"]
}

const StudioPanelInternal: React.FC<IStudioPanelProps> = ({ logo, actions, ...props }: any) => {
  const prefix = usePrefix("main-panel")
  const position = usePosition()
  const classNameBase = cls("root", props.className)


  if (logo || actions) {
    return (
      <Box
        data-id="studio-panel"
        css={{
          h: "100%",
          w: "100%",
          minH: "100px",
          position: "relative",
          outline: "none",
          boxSizing: "border-box",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <HStack data-id="studio-panel-header" css={{ w: "full", justify: 'center', flex: 1 }}>
          {actions}
        </HStack>
        <Box data-id="studio-panel-body">{props.children}</Box>
      </Box>
    )
  }
  return (
    <Box
      data-id="studio-panel"
      css={{
        h: "100%",
        w: "100%",
        minH: "100px",
        position: "relative",
        outline: "none",
        boxSizing: "border-box",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {props.children}
    </Box>
  )
}

export const StudioPanel: React.FC<IStudioPanelProps> | any = (props: any) => {
  return (
    <Layout
      theme={props.theme}
      prefixCls={props.prefixCls}
    >
      <StudioPanelInternal {...props} />
    </Layout>
  )
}
