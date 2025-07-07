import { useSystemRegistry } from "#packages/actors/hooks/useSystemRegistry"
import { Box, chakra, defineSlotRecipe, Stack, useSlotRecipe } from "@chakra-ui/react"
import { Container, VStack, Button } from "@chakra-ui/react"
import { FlexibleWorkbench } from "./common/components/FlexibleWorkbench/FlexibleWorkbench"
import { WorkbenchHeader } from "./common/components/Workbench/WorkbenchHeader"
import { WorkbenchFooter } from "./common/components/Workbench/WorkbenchFooter"
import { WorkbenchBody } from "./common/components/Workbench/WorkbenchBody"
import { WorkbenchToolbar } from "./common/components/Workbench/WorkbenchToolbar"
import { FlexibleEdge } from "./common/components/FlexibleWorkbench/FlexibleEdge"
import { FlexibleLayout } from "./common/components/FlexibleWorkbench/FlexibleLayout"
import { LeftActionPanel } from "./common/blocks/LeftActionPanel"
import { LeftActionPanelTop } from "./common/blocks/LeftActionPanelTop"
import { LeftActionPanelBottom } from "./common/blocks/LeftActionPanelBottom"
import { LeftActionPanelMiddle } from "./common/blocks/LeftActionPanelMiddle"
import {
  LeftActionPanelDemosBottom,
  LeftActionPanelDemosCenter,
  LeftActionPanelDemosTop,
} from "./common/demos/LeftActionPanelDemos"
import { HAligner } from "./common/components/Workbench/aligner/HAligner"
import { HAlignerLeft } from "./common/components/Workbench/aligner/HAlignerLeft"
import { HAlignerRight } from "./common/components/Workbench/aligner/HAlignerRight"
import { HAlignerCenter } from "./common/components/Workbench/aligner/HAlignerCenter"
import { VAligner } from "./common/components/Workbench/aligner/VAligner"
import { VAlignerTop } from "./common/components/Workbench/aligner/VAlignerTop"
import { VAlignerBottom } from "./common/components/Workbench/aligner/VAlignerBottom"
import { VAlignerMiddle } from "./common/components/Workbench/aligner/VAlignerMiddle"
import { DebuggerDemo } from "./common/demos/DebuggerDemo"
import { DemoRegistryList, DemoIconsRegistryList } from "#packages/app-shell/common/demos/DemoRegistryList"

const appSlotRecipe = defineSlotRecipe({
  slots: ["root", "workbench"],
  base: {
    root: {
      height: "100vh",
      width: "100vw",
      maxHeight: "100vh",
      scrollbarWidth: "none", // Firefox
      "&::-webkit-scrollbar": {
        display: 'none', // Safari and Chrome
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

export const AppRoot = () => {
  const recipe = useSlotRecipe({ recipe: appSlotRecipe })
  const styles = recipe()

  const { registryNames, registryComponent }: any = useSystemRegistry()

  console.log("registryNames", registryNames)

  return (
    <Container
      data-name="app-root"
      fluid
      css={{
        width: "100vw",
        height: "100vh",

        p: 0,
        background: "bg.emphasized",
      }}
    >
      <FlexibleWorkbench>
        <WorkbenchHeader>
          <HAligner>
            <HAlignerLeft>
              <LeftActionPanelDemosTop />
            </HAlignerLeft>
            <HAlignerCenter>
              <LeftActionPanelDemosCenter />
            </HAlignerCenter>
            <HAlignerRight>
              <LeftActionPanelDemosBottom />
            </HAlignerRight>
          </HAligner>
        </WorkbenchHeader>
        <WorkbenchBody>
          <FlexibleEdge>
            <VAligner>
              <VAlignerTop>
                <LeftActionPanelDemosTop />
              </VAlignerTop>
              <VAlignerMiddle>
                <LeftActionPanelDemosCenter />
              </VAlignerMiddle>
              <VAlignerBottom>
                <LeftActionPanelDemosBottom />
              </VAlignerBottom>
            </VAligner>
          </FlexibleEdge>

          <FlexibleLayout type="split" defaultSize={[15, 70, 15]}>
            <FlexibleLayout>
              <DemoIconsRegistryList />

            </FlexibleLayout>



            <FlexibleLayout direction="column">
              <WorkbenchToolbar>
                <HAligner>
                  <HAlignerLeft>
                    <LeftActionPanelDemosTop />
                  </HAlignerLeft>
                  <HAlignerCenter>
                    <LeftActionPanelDemosCenter />
                  </HAlignerCenter>
                  <HAlignerRight>
                    <LeftActionPanelDemosBottom />
                  </HAlignerRight>
                </HAligner>
              </WorkbenchToolbar>

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
                <FlexibleLayout>

                  <DebuggerDemo />

                </FlexibleLayout>
              </FlexibleLayout>
            </FlexibleLayout>

            <FlexibleLayout>
              <DemoRegistryList />
            </FlexibleLayout>
          </FlexibleLayout>
          <FlexibleEdge>
            <VAligner>
              <VAlignerTop>
                <LeftActionPanelDemosTop />
              </VAlignerTop>
              <VAlignerMiddle>
                <LeftActionPanelDemosCenter />
              </VAlignerMiddle>
              <VAlignerBottom>
                <LeftActionPanelDemosBottom />
              </VAlignerBottom>
            </VAligner>
          </FlexibleEdge>
        </WorkbenchBody>
        <WorkbenchFooter>
          <HAligner>
            <HAlignerLeft>
              <LeftActionPanelDemosTop />
            </HAlignerLeft>
            <HAlignerCenter>
              <LeftActionPanelDemosCenter />
            </HAlignerCenter>
            <HAlignerRight>
              <LeftActionPanelDemosBottom />
            </HAlignerRight>
          </HAligner>
        </WorkbenchFooter>
      </FlexibleWorkbench>
    </Container>
  )
}
