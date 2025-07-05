import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Container, VStack, Button } from "@chakra-ui/react"
import { FlexibleWorkbench } from "./common/components/FlexibleWorkbench/FlexibleWorkbench"
import { WorkbenchHeader } from "./common/components/Workbench/WorkbenchHeader"
import { WorkbenchFooter } from "./common/components/Workbench/WorkbenchFooter"
import { WorkbenchBody } from "./common/components/Workbench/WorkbenchBody"
import { FlexibleEdge } from "./common/components/FlexibleWorkbench/FlexibleEdge"
import { FlexibleLayout } from "./common/components/FlexibleWorkbench/FlexibleLayout"

const appSlotRecipe = defineSlotRecipe({
  slots: ["root", "workbench"],
  base: {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    workbench: {
      position: "relative",
      background: "bg.muted",
    },
  },
})

export const AppRoot = ({ children }: any) => {
  const recipe = useSlotRecipe({ recipe: appSlotRecipe })
  const styles = recipe()

  return (
    <Container
      data-name="app-root"
      fluid
      css={{
        width: "100vw",
        height: "100vh",
        p: 0,
        background: 'bg.emphasized'
      }}
    >
      {children}
    </Container>
  )
}

export const XREditorApp = () => {
  return (
    <AppRoot>
      <FlexibleWorkbench>
        <WorkbenchHeader>workbench header</WorkbenchHeader>

        <WorkbenchBody>
          <FlexibleEdge>edge</FlexibleEdge>
          <FlexibleLayout type="split" defaultSize={[15, 70, 15]}>
            <FlexibleLayout>layout.component</FlexibleLayout>

            <FlexibleLayout type="split" direction="column" defaultSize={[70, 30]}>
              <FlexibleLayout type="split" defaultSize={[20, 20, 60]}>
                <FlexibleLayout type="component">layout.split.layout.component</FlexibleLayout>
                <FlexibleLayout>layout.split.layout.component</FlexibleLayout>
                <FlexibleLayout>
                  <FlexibleLayout type="split" direction="column" defaultSize={[20, 20, 60]}>
                    <FlexibleLayout type="component">layout.split.layout.component</FlexibleLayout>
                    <FlexibleLayout>layout.split.layout.component</FlexibleLayout>
                    <FlexibleLayout>layout.split.layout.component</FlexibleLayout>
                  </FlexibleLayout>
                </FlexibleLayout>
              </FlexibleLayout>
              <FlexibleLayout>layout.component</FlexibleLayout>
            </FlexibleLayout>

            <FlexibleLayout>layout.component</FlexibleLayout>
          </FlexibleLayout>
          <FlexibleEdge>edge</FlexibleEdge>
        </WorkbenchBody>
        <WorkbenchFooter>workbench footer</WorkbenchFooter>
      </FlexibleWorkbench>
    </AppRoot>
  )
}
