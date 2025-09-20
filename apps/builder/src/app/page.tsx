"use client"
import JsonView from "react18-json-view"
import { useRootActor } from "#illa/hooks/useRootActor"
import {
  Stack,
  Container,
  HStack,
  Box,
  Card,
  Button,
  Grid,
  SimpleGrid,
  Wrap,
  GridItem,
  Flex,
  Center,
  SegmentGroup,
  CodeBlock,
  ClientOnly,
  ScrollArea,
  createShikiAdapter,
} from "@chakra-ui/react"
import { currentAppSelector } from "#illa/actors/currentApp/currentApp.selector"
import { aiAgentSelector } from "#illa/actors/aiAgent/aiAgent.selector"
import { builderInfoSelector } from "#illa/actors/builderInfo/builderInfo.selector"
import { configSelector } from "#illa/actors/config/config.selector"
import { currentAppHistorySelector } from "#illa/actors/currentAppHistory/currentAppHistory.selector"
import { guideSelector } from "#illa/actors/guide/guide.selector"
import { resourceSelector } from "#illa/actors/resource/resource.selector"
import { currentUserSelector } from "#illa/actors/userInfo/currentUser/currentUser.selector"
import { teamSelector } from "#illa/actors/userInfo/team/team.selector"
// import { setExecutionResultReducer, handleStartExecution, startExecutionHandler } from "#illa/orchestrator"
// import { setExecutionResultReduce } from "#illa/orchestrator"
import { startExecutionHandler, setExecutionResultReducer, handleStartExecution } from "#illa/orchestrator"
import { useState } from "react"
import { RiCodeLine, RiEye2Line } from "react-icons/ri"
import { HighlighterGeneric } from "shiki"

const renderWidgetIds = [
  { widgetId: "bvqcrxkaum", type: "BUTTON_WIDGET", widgetName: "btn_left_left" },
  { widgetId: "v68er04mr2", type: "BUTTON_WIDGET", widgetName: "btn_left_reset" },
  { widgetId: "250dog341d", type: "BUTTON_WIDGET", widgetName: "btn_right_reset" },
  { widgetId: "5trspcxhy2", type: "BUTTON_WIDGET", widgetName: "btn_right_right" },
  { widgetId: "ydlupoo8k2", type: "BUTTON_WIDGET", widgetName: "btn_left_right" },
  { widgetId: "ltfsabiaq1", type: "BUTTON_WIDGET", widgetName: "btn_right_left" },
  { widgetId: "ujgcje0omy", type: "TEXT_WIDGET", widgetName: "txt_static_left" },
  { widgetId: "is0fwucchq", type: "TEXT_WIDGET", widgetName: "txt_dynamic_left" },
  { widgetId: "weq4w5wk5m", type: "TEXT_WIDGET", widgetName: "txt_dynamic_right" },
  { widgetId: "k1j5882wmt", type: "BUTTON_WIDGET", widgetName: "txt_static_right" },
  { widgetId: "y3s2g1c5zz", type: "BUTTON_WIDGET", widgetName: "txt_log_left" },
  { widgetId: "5m3vf11p5u", type: "BUTTON_WIDGET", widgetName: "txt_log_right" },
]

export default function Page() {
  const [orchestrationState, setOrchestrationState] = useState<any>({
    setExecutionResultReducer: {},
    handleStartExecution: {},
    executionTreeFactory: {},
  })

  const { rootActorRef } = useRootActor()
  const currentAppContext = currentAppSelector(rootActorRef)
  const { getAiAgentContext } = aiAgentSelector(rootActorRef)
  const { getBuilderInfoContext } = builderInfoSelector(rootActorRef)
  const { getConfigContext } = configSelector(rootActorRef)
  const { getCurrentAppHistoryContext } = currentAppHistorySelector(rootActorRef)
  const { getGuideContext } = guideSelector(rootActorRef)
  const { getResourceContext } = resourceSelector(rootActorRef)
  const { getCurrentUserContext } = currentUserSelector(rootActorRef)
  const { getTeamContext } = teamSelector(rootActorRef)

  return (
    <>
      <Container fluid>
        <Grid
          templateColumns={"repeat(auto-fill,minmax(360px,1fr))"}
          width={"full"}
          alignItems={"start"}
          justifyContent={"center"}
          gap={6}
          overflowY={"hidden"}
        >
          <GridItemRenderer title={"Actors"} rowSpan={3}>
            <Stack h={'full'} >
              <SimpleGrid columns={3} gap={2}>
                <Button size="xs" onClick={() => startExecutionHandler()}>Start</Button>
                <Button size="xs" onClick={() => handleStartExecution()}>Handler</Button>
                <Button size="xs" onClick={() => setExecutionResultReducer()}>Reducer</Button>
                <Button size="xs" onClick={() => setOrchestrationState({...orchestrationState, ...startExecutionHandler()})}>Tree</Button>
              </SimpleGrid>
              <ScrollArea.Root maxW="full" height={600}  >
                <ScrollArea.Viewport>
                  <ScrollArea.Content spaceY="4" textStyle="sm" >
                    <JsonView
                      src={{
                        rootActorRef: rootActorRef,
                        aiAgent: getAiAgentContext,
                        builderInfo: getBuilderInfoContext,
                        config: getConfigContext,
                        currentApp: currentAppContext,
                        currentAppHistory: getCurrentAppHistoryContext,
                        guide: getGuideContext,
                        resource: getResourceContext,
                        team: getTeamContext,
                        currentUser: getCurrentUserContext,
                      }}
                      collapsed={1}
                      theme="github"
                      displaySize
                      displayArrayIndex
                      style={{ fontSize: 13, fontWeight: "bold" }}
                    />
                  </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
              </ScrollArea.Root>
            </Stack>
          </GridItemRenderer>

          <GridItemRenderer
            title={"Canvas - currentApp.Components"}
            colSpan={2}
            rowSpan={2}
            preview={{ enabled: true, code: JSON.stringify(currentAppContext.components, null, 2), language: "json" }}
          >
            <Button>{currentAppContext.components["btn_1"]?.props.text}</Button>
          </GridItemRenderer>
          <GridItemRenderer title={"Actors"}>
            <JsonView
              src={{
                ___orchestrationState: orchestrationState,
                getWidgets: {},
                getWidget_tl8xbeqhua: {},
                getWidget_od1swmzxxq: {},
                devTools: {
                  context: {},
                  state: {},
                },
              }}
              collapsed={1}
              theme="github"
              displaySize
              displayArrayIndex
              style={{ fontSize: 13, fontWeight: "bold" }}
            />
          </GridItemRenderer>

          <GridItemRenderer title={"Canvas - currentApp.execution.result"}
                            colSpan={2} rowSpan={2}
                            preview={{
                              enabled: true, code:
                                `
  # Evaluation Tree  
  const actions = getActionList()
  const widgets = getAllComponentDisplayNameMapProps()
  const currentUserInfo = getCurrentUser()
  const builderInfo = getBuilderInfo()
  const globalData = getOriginalGlobalData()
  
  
  # Evaluation Tree  >>> more logic details
  1. from currentApp get target:
      a. actions from state.currentApp.action
      b. widgets from state.currentApp.components
      c. currentUserInfo from state.currentUser
      d. builderInfo from state.builderInfo
      e. globalData from state.currentApp.globalData.originalData
  2. pass these target to execution engine to get the result:
      a. { rawTree: executionTreeFactory(actions, widgets, currentUserInfo, builderInfo, globalData))
  
                                `, language: "javascript" }}
          >
            <Button>{currentAppContext.execution.result["btn_1"]?.text}</Button>
          </GridItemRenderer>
        </Grid>
      </Container>
    </>
  )
}
// @ts-ignore
export const GridItemRenderer: any = ({
  children,
  title,
  colSpan = 1,
  rowSpan = 1,
  colStart = 0,
  preview = { enabled: false, code: null, language: "json" },
}: any) => {
  const [value, setValue] = useState<string | null>("preview")

  return (
    <GridItem height={`${300 * rowSpan}px`} colSpan={colSpan} rowSpan={rowSpan} colStart={colStart}>
      <Card.Root>
        <Card.Header>
          <HStack justifyContent={"space-between"}>
            <Card.Title>{title}</Card.Title>
          </HStack>
        </Card.Header>
        <Card.Body gap={2}>
          <Center py={6}>{children}</Center>

          {preview.enabled && (
            <SegmentGroup.Root defaultValue="preview" value={value} onValueChange={(e) => setValue(e.value)}>
              <SegmentGroup.Indicator />
              <SegmentGroup.Items
                items={[
                  {
                    value: "preview",
                    label: (
                      <HStack>
                        <RiEye2Line /> Preview
                      </HStack>
                    ),
                  },
                  {
                    value: "code",
                    label: (
                      <HStack>
                        <RiCodeLine /> Code
                      </HStack>
                    ),
                  },
                ]}
              />
            </SegmentGroup.Root>
          )}

          {preview.enabled && value === "code" && (
            <CodeBlock.AdapterProvider value={shikiAdapter}>
              <CodeBlock.Root code={preview.code || `{}`} language={preview.language || "json"} colorPalette={"yellow"}>
                <ScrollArea.Root maxW="full" height={`${300 * rowSpan - 250}px`}>
                  <ScrollArea.Viewport>
                    <ScrollArea.Content spaceY="4" textStyle="sm">
                      <CodeBlock.Content>
                        <CodeBlock.Code>
                          <CodeBlock.CodeText />
                        </CodeBlock.Code>
                      </CodeBlock.Content>
                    </ScrollArea.Content>
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                  </ScrollArea.Scrollbar>
                  <ScrollArea.Corner />
                </ScrollArea.Root>
              </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
          )}
        </Card.Body>
      </Card.Root>
    </GridItem>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: {
    dark: "github-dark",
    // dark:  "github-light",
  },
})
