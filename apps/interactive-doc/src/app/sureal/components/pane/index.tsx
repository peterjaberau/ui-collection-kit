"use client"
import { PaneRoot, PaneRootProps } from "./pane.root"
import { PaneHeader, PaneHeaderProps } from "./pane.header"
import { PaneContent, PaneContentProps } from "./pane.content"

export interface PaneProps extends PaneRootProps, PaneHeaderProps, PaneContentProps {
  [key: string]: any
}

export const Pane = ({
  children,
  title,
  icon,
  leftSection,
  infoSection,
  rightSection,
  withDivider,
  disabled = false,
  ...rest
}: PaneProps) => {
  return (
    <PaneRoot disabled={disabled}>
      <PaneHeader
        title={title}
        icon={icon}
        leftSection={leftSection}
        infoSection={infoSection}
        rightSection={rightSection}
        withDivider
      />
      <PaneContent>{children}</PaneContent>
    </PaneRoot>
  )
}
