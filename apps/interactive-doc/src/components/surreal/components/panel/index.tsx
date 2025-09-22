"use client"

import { PanelRoot, PanelRootProps } from "./panel.root"
import { PanelHeader, PanelHeaderProps } from "./panel.header"
import { PanelContent, PanelContentProps } from "./panel.content"

export interface PanelProps extends PanelRootProps, PanelHeaderProps, PanelContentProps {
  [key: string]: any
}

export const Panel = ({
  children,
  title,
  icon,
  leftSection,
  infoSection,
  rightSection,
  withDivider,
  disabled = false,
  ...rest
}: PanelProps) => {
  return (
    <PanelRoot disabled={disabled}>
      <PanelHeader
        title={title}
        icon={icon}
        leftSection={leftSection}
        infoSection={infoSection}
        rightSection={rightSection}
        withDivider
      />
      <PanelContent>{children}</PanelContent>
    </PanelRoot>
  )
}
