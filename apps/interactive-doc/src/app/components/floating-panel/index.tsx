"use client"
import { floatingPanelSlotRecipe, axes } from "./floatingPanelSlotRecipe"
import { FloatingPanel as ArkFloatingPanel } from "@ark-ui/react/floating-panel"
import { Portal } from "@ark-ui/react/portal"
import { Button, IconButton, chakra, HStack, Box, Stack, useSlotRecipe, Icon } from "@chakra-ui/react"
import { ScrollArea } from '@chakra-ui/react'
import { LuMessageCircle, LuX, LuSend, LuMinus, LuMaximize2, LuArrowDownLeft, LuBug } from "react-icons/lu"
import { useState } from "react"
import { GripVertical } from "lucide-react"

export type FloatingPanelProps = {
  trigger: any
  title: any
  children: any
}

export function FloatingPanel(props: ArkFloatingPanel.RootProps | FloatingPanelProps) {
  const { title, trigger, children }: any = props

  const recipe = useSlotRecipe({ recipe: floatingPanelSlotRecipe })
  const styles: any = recipe()

  return (
    <ArkFloatingPanel.Root
      {...props}
      // strategy={'fixed'}
    >
      <ArkFloatingPanel.Trigger asChild>{trigger}</ArkFloatingPanel.Trigger>
      <Portal>
        <ArkFloatingPanel.Positioner >
          <Box css={styles.positioner}>
            <ArkFloatingPanel.Content asChild>
              <Box css={styles.content}>
                <ArkFloatingPanel.DragTrigger>
                  <ArkFloatingPanel.Header >
                    <HStack css={styles.header}>
                      <HStack gap="2">
                        <Icon size={"md"}>
                          <GripVertical />
                        </Icon>
                        <ArkFloatingPanel.Title css={styles.title}>{title}</ArkFloatingPanel.Title>
                      </HStack>
                      <ArkFloatingPanel.Control asChild>
                        <HStack css={styles.control}>
                          <ArkFloatingPanel.StageTrigger stage="minimized" asChild>
                            <IconButton variant="outline" size="xs">
                              <LuMinus />
                            </IconButton>
                          </ArkFloatingPanel.StageTrigger>
                          <ArkFloatingPanel.StageTrigger stage="maximized" asChild>
                            <IconButton variant="outline" size="xs">
                              <LuMaximize2 />
                            </IconButton>
                          </ArkFloatingPanel.StageTrigger>
                          <ArkFloatingPanel.StageTrigger stage="default" asChild>
                            <IconButton variant="outline" size="xs">
                              <LuArrowDownLeft />
                            </IconButton>
                          </ArkFloatingPanel.StageTrigger>
                          <ArkFloatingPanel.CloseTrigger asChild>
                            <IconButton variant="outline" size="xs">
                              <LuX />
                            </IconButton>
                          </ArkFloatingPanel.CloseTrigger>
                        </HStack>
                      </ArkFloatingPanel.Control>
                    </HStack>
                  </ArkFloatingPanel.Header>
                </ArkFloatingPanel.DragTrigger>
                <ArkFloatingPanel.Body  asChild>
                  <Box css={styles.body} border={'1px solid'} h={'full'}>
                  <ScrollArea.Root  width={'full'}>
                    <ScrollArea.Viewport>
                      <ScrollArea.Content spaceY="4" textStyle="sm">
                        {children}
                      </ScrollArea.Content>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar>
                      <ScrollArea.Thumb />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Corner />
                  </ScrollArea.Root>
                  </Box>
                </ArkFloatingPanel.Body>

                {axes.map((axis) => (
                  <Box key={axis} css={styles.resizeTrigger} asChild>
                  <ArkFloatingPanel.ResizeTrigger key={axis} axis={axis}>

                  </ArkFloatingPanel.ResizeTrigger>
                  </Box>
                ))}
              </Box>
            </ArkFloatingPanel.Content>
          </Box>
        </ArkFloatingPanel.Positioner>
      </Portal>
    </ArkFloatingPanel.Root>
  )
}
