"use client"
import './dev-tools.css'
import { FloatingPanel } from "@ark-ui/react/floating-panel"
import { Portal, useSlotRecipe } from "@chakra-ui/react"
import { LuArrowDownLeft, LuBug, LuGripVertical, LuMaximize2, LuMinus, LuX } from "react-icons/lu"
import { HStack, Button, IconButton, Icon, defineSlotRecipe } from "@chakra-ui/react"
import { useDevToolsActor } from "#actors-hook/useDevToolsActor"
import { useActionsActor } from "#actors-hook/actions/useActionsActor"

import JsonView from "react18-json-view"
const axes = ["n", "s", "e", "w", "ne", "nw", "se", "sw"] as const

export const DevTools = () => {
  const { devToolsContext } = useDevToolsActor()
  const { actionsContext } = useActionsActor()

  return (
    <FloatingPanel.Root
      // minSize={{
      //   height:900,
      //   width: 500
      // }}
      defaultSize={{
        height: 700,
        width: 500
      }}

    >
      <FloatingPanel.Trigger asChild>
        <IconButton>
          <LuBug />
        </IconButton>
      </FloatingPanel.Trigger>
       <Portal>
         <FloatingPanel.Positioner >
           <FloatingPanel.Content >
             <FloatingPanel.DragTrigger>
               <FloatingPanel.Header>
                 <HStack justifyContent={"space-between"}  width={"full"}>
                   <HStack  flex={1}>
                     <Icon>
                       <LuGripVertical />
                     </Icon>
                     <FloatingPanel.Title >{devToolsContext.path}</FloatingPanel.Title>
                   </HStack>
                   <FloatingPanel.Control >
                     <HStack>
                       <FloatingPanel.StageTrigger stage="minimized" asChild>
                         <IconButton variant="outline" size="xs">
                           <LuMinus />
                         </IconButton>
                       </FloatingPanel.StageTrigger>
                       <FloatingPanel.StageTrigger stage="maximized" asChild>
                         <IconButton variant="outline" size="xs">
                           <LuMaximize2 />
                         </IconButton>
                       </FloatingPanel.StageTrigger>
                       <FloatingPanel.StageTrigger stage="default" asChild>
                         <IconButton variant="outline" size="xs">
                           <LuArrowDownLeft />
                         </IconButton>
                       </FloatingPanel.StageTrigger>
                       <FloatingPanel.CloseTrigger asChild>
                         <IconButton variant="outline" size="xs">
                           <LuX />
                         </IconButton>
                       </FloatingPanel.CloseTrigger>
                     </HStack>
                   </FloatingPanel.Control>
                 </HStack>
               </FloatingPanel.Header>
             </FloatingPanel.DragTrigger>
             <FloatingPanel.Body >
               <JsonView
                 src={{
                   ...devToolsContext.payload,
                   actions: actionsContext
                 }}
                 collapsed={1}
                 theme="github"
                 displaySize
                 displayArrayIndex
                 style={{ fontSize: 13, fontWeight: "bold" }}
               />
             </FloatingPanel.Body>

             {axes.map((axis) => (
               <FloatingPanel.ResizeTrigger key={axis} axis={axis}  />
             ))}
           </FloatingPanel.Content>
         </FloatingPanel.Positioner>
       </Portal>
    </FloatingPanel.Root>
  )
}
