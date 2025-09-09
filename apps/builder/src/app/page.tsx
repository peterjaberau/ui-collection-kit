"use client"
import JsonView from "react18-json-view"
import { useRootActor } from "#illa/hooks/useRootActor"
import { Stack, Container, HStack, Box, Card, Button, SimpleGrid, Wrap, GridItem, Text } from "@chakra-ui/react"
import { currentAppSelector } from "#illa/actors/currentApp/currentApp.selector"
import { aiAgentSelector } from "#illa/actors/aiAgent/aiAgent.selector"
import { builderInfoSelector } from "#illa/actors/builderInfo/builderInfo.selector"
import { configSelector } from "#illa/actors/config/config.selector"
import { currentAppHistorySelector } from "#illa/actors/currentAppHistory/currentAppHistory.selector"
import { guideSelector } from "#illa/actors/guide/guide.selector"
import { resourceSelector } from "#illa/actors/resource/resource.selector"
import { currentUserSelector } from "#illa/actors/userInfo/currentUser/currentUser.selector"
import { teamSelector } from "#illa/actors/userInfo/team/team.selector"
import { setExecutionResultReducer, handleStartExecution, startExecutionHandler } from "#illa/orchestrator"
import { useState } from "react"

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
        <SimpleGrid columns={6} gap={4}>
          <GridItem colSpan={1}>
            <Card.Root>
              <Card.Header>
                <Card.Title>Actors</Card.Title>
              </Card.Header>
              <Card.Body minH={"500px"} maxH={"calc(100vh - 100px"} overflowY={"auto"}>
                <SimpleGrid columns={3} gap={2}>
                  <Button size="xs" onClick={() => setExecutionResultReducer()}>
                    setExecResult
                  </Button>
                  <Button size="xs" onClick={() => handleStartExecution()}>
                    handleExec
                  </Button>
                  <Button
                    size="xs"
                    onClick={() =>
                      setOrchestrationState({
                        ...orchestrationState,
                        ...startExecutionHandler(),
                      })
                    }
                  >
                    startTreeFactory
                  </Button>
                </SimpleGrid>
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
                    ___orchestrationState: orchestrationState,
                  }}
                  collapsed={1}
                  theme="github"
                  displaySize
                  displayArrayIndex
                  style={{ fontSize: 13, fontWeight: "bold" }}
                />
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem colSpan={4}>
            <SimpleGrid columns={2} gap={4} height={"100%"}>
              <RenderCurrentAppCanvas title={"Canvas - currentApp.Components"}>
                <Button>{currentAppContext.components["btn_1"]?.props.text}</Button>
              </RenderCurrentAppCanvas>
              <RenderCurrentAppCanvas title={"Canvas - currentApp.execution.result"}>
                <Button>{currentAppContext.execution.result["btn_1"]?.text}</Button>
              </RenderCurrentAppCanvas>
            </SimpleGrid>
          </GridItem>

          <GridItem colSpan={1}>
            <Card.Root>
              <Card.Header>
                <Card.Title>Actors</Card.Title>
              </Card.Header>
              <Card.Body minH={"500px"} maxH={"calc(100vh - 100px)"} overflowY={"auto"}>
                <JsonView
                  src={{
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
              </Card.Body>
            </Card.Root>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  )
}
// @ts-ignore
export const RenderCurrentAppCanvas: any = ({ children, title }: any) => {
  return (
    <GridItem>
      <Card.Root height={"100%"}>
        <Card.Header>
          <HStack justifyContent={"space-between"} width={"full"}>
            <Card.Title flex={1}>{title}</Card.Title>
          </HStack>
        </Card.Header>
        <Card.Body maxH={"2000px"} overflowY={"auto"}>
          <Box w="full" h="full">
            {children}
          </Box>
        </Card.Body>
      </Card.Root>
    </GridItem>
  )
}
