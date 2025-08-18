import { FloatingPanel as ArkFloatingPanel, floatingPanelAnatomy } from "@ark-ui/react"
import { Portal, HStack, Button, IconButton, Icon, useSlotRecipe, defineSlotRecipe } from "@chakra-ui/react"
import { LuArrowDownLeft, LuGripVertical, LuMaximize2, LuMinus, LuX } from "react-icons/lu"

const floatingPanelSlotRecipe = defineSlotRecipe({
  className: "floating-panel",
  slots: [
    "trigger",
    "positioner",
    "content",
    "header",
    "body",
    "title",
    "resizeTrigger",
    "dragTrigger",
    "stageTrigger",
    "closeTrigger",
    "control",
  ],
  base: {
    positioner: {
      zIndex: "overlay",
    },
    content: {
      bg: "bg.default",
      borderRadius: "lg",
      borderWidth: "1px",
      width: "full",
      boxShadow: "md",
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "1",
    },
    header: {
      paddingBlock: "2",
      paddingInline: "4",
      bg: "bg.subtle",
      borderBottomWidth: "1px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopRadius: "lg",
    },
    title: {
      fontWeight: "medium",
    },
    resizeTrigger: {
      '&[data-axis="n"], &[data-axis="s"]': {
        height: "6px",
        maxWidth: "90%",
      },
      '&[data-axis="e"], &[data-axis="w"]': {
        width: "6px",
        maxHeight: "90%",
      },
      '&[data-axis="ne"], &[data-axis="nw"], &[data-axis="se"], &[data-axis="sw"]': {
        width: "10px",
        height: "10px",
      },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gap: "4",
      padding: "4",
    },
  },
})

const axes = ["n", "s", "e", "w", "ne", "nw", "se", "sw"] as const

export const FloatingPanel: any = (props: any) => {
  const recipe: any = useSlotRecipe({ recipe: floatingPanelSlotRecipe })
  const styles: any = recipe(recipe)

  return (
    <ArkFloatingPanel.Root {...props} strategy="fixed">
      <ArkFloatingPanel.Trigger asChild>
        <Button variant="outline">Open Panel</Button>
      </ArkFloatingPanel.Trigger>
      <Portal>
        <ArkFloatingPanel.Positioner className={styles.positioner}>
          <ArkFloatingPanel.Content className={styles.content}>
            <ArkFloatingPanel.DragTrigger>
              <ArkFloatingPanel.Header className={styles.header}>
                <HStack gap="2">
                  <Icon size='sm'>
                    <LuGripVertical />
                  </Icon>
                  <ArkFloatingPanel.Title className={styles.title}>Floating Panel</ArkFloatingPanel.Title>
                </HStack>
                <ArkFloatingPanel.Control className={styles.control}>
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
                </ArkFloatingPanel.Control>
              </ArkFloatingPanel.Header>
            </ArkFloatingPanel.DragTrigger>
            <FloatingPanel.Body className={styles.body}>
              <p>Drag me around</p>
            </FloatingPanel.Body>

            {axes.map((axis) => (
              <ArkFloatingPanel.ResizeTrigger key={axis} axis={axis} className={styles.resizeTrigger} />
            ))}
          </ArkFloatingPanel.Content>
        </ArkFloatingPanel.Positioner>
      </Portal>
    </ArkFloatingPanel.Root>
  )
}
