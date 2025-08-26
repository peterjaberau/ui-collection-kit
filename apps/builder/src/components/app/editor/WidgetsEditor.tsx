'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"
import { useUiActor } from "#actors/hooks/useUiActor"

export const WidgetEditor: any = ({ children, ...rest }: any) => {

  const { currentPageId, currentPageName } = useEntitiesActor()
  const { currentApplication } = useUiActor()

  return (
    <DevLayer tagName="WidgetEditor">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
