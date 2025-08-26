'use client'
import React from "react"
import { Container } from "@chakra-ui/react"

import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"
import { useUiActor } from "#actors/hooks/useUiActor"
import { DevLayer } from "#components/app/DevLayer"

export const WidgetEditorContent: any = ({ children, ...rest }: any) => {

  const { currentPageId, currentPageName } = useEntitiesActor()
  const { currentApplication } = useUiActor()

  return (
    <DevLayer tagName="WidgetEditorContent">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
