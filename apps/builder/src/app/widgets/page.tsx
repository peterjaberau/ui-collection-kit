"use client"
import JsonView from "react18-json-view"
import { Stack, Container, HStack, Box, Card, Button, SimpleGrid, Wrap, GridItem, Text } from "@chakra-ui/react"
import ButtonWidget from "./_components/button.widget"
import TextWidget from "./_components/text.widget"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"
import { useGitActor } from "#actors/hooks/useGitActor"
import { useFormActor } from "#actors/hooks/useFormActor"
import { useEvaluationsActor } from "#actors/hooks/useEvaluationsActor"
import { useLintingActor } from "#actors/hooks/useLinitingActor"
import { useOrganizationActor } from "#actors/hooks/useOrganizationActor"
import { useSettingsActor } from "#actors/hooks/useSettingsActor"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useDevToolsActor } from "#actors/hooks/useDevToolsActor"
import { useRef } from "react"
import { AppBuilder } from "#components/app"
import { AppIDE } from "#components/app/ide/AppIDE"
import { WidgetEditor } from "#components/app/editor/WidgetsEditor"
import { WidgetEditorContent } from "#components/app/editor/WidgetEditorContent"
import { Canvas } from "#components/app/editor/Canvas"
import { WrappedPropsComponent } from "#components/app/editor/WrappedPropsComponent"
import { FixedLayoutEditorCanvas } from "#components/app/editor/FixedLayoutEditorCanvas"
import { ContainerComponentWrapper } from "#components/app/editor/ContainerComponentWrapper"
import { AnalyticsWrapper } from "#components/app/layout/AnalyticsWrapper"
import { PropsComponentRenderer } from "#components/app/PropsComponentRenderer"
import { FixedLayoutRenderer } from "#components/app/FixedLayoutRenderer"
import { loadWidget } from "#components/app/widgets"
import { useWidgets } from "#actors-hook/widgets/useWidgets"
import { DevTools } from "#components/ui/DevTools"

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
  const {
    entitiesPageList,
    entitiesContext,
    currentPageName,
    currentPageId,
    entitiesWidgetsStructure,
    entitiesCanvasWidgets,
    isPageHasWidgets,
  } = useEntitiesActor()

  const { devToolsContext, devToolsState } = useDevToolsActor()

  const { getWidgets, getWidget, getDataTreeForActionCreator } = useWidgets()

  const { gitContext } = useGitActor()
  const { formContext } = useFormActor()
  const { evaluationsContext, renderPage, isFirstPageLoad } = useEvaluationsActor()
  const { lintingContext } = useLintingActor()
  const { orgContext, orgConfiguration, orgMyOrganizations } = useOrganizationActor()
  const { settingsContext } = useSettingsActor()
  const { uiContext, uiAppView, uiAppTheming, uiTheme, currentApplication, isPreviewMode } = useUiActor()

  const RenderWidgetFromRegistry = ({ widgetName }: { widgetName: string }) => {
    const WidgetComponent = loadWidget(widgetName)
    return <WidgetComponent />
  }

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
                <JsonView
                  src={{
                    entities: entitiesContext,
                    git: gitContext,
                    form: formContext,
                    evaluations: evaluationsContext,
                    linting: lintingContext,
                    organization: orgContext,
                    settings: settingsContext,
                    ui: uiContext,
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
            <Card.Root height={"100%"}>
              <Card.Header>
                <HStack justifyContent={"space-between"} width={"full"}>
                  <Card.Title flex={1}>Canvas</Card.Title>
                  <DevTools />
                </HStack>
              </Card.Header>
              <Card.Body maxH={"2000px"} overflowY={"auto"}>
                <Stack>
                  <SimpleGrid columns={2} gap={4}>
                    <GridItem colSpan={1}>
                      <HStack>
                        <ButtonWidget widgetId="bvqcrxkaum" text="Left from Left" />
                        <ButtonWidget widgetId="ydlupoo8k2" text="Left from Right" />
                        <ButtonWidget widgetId="v68er04mr2" text="Left Reset" />
                      </HStack>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <HStack>
                        <ButtonWidget widgetId="5trspcxhy2" text="Right from Right" />
                        <ButtonWidget widgetId="ltfsabiaq1" text="Right from Left" />
                        <ButtonWidget widgetId="250dog341d" text="Right Reset" />
                      </HStack>
                    </GridItem>

                    <GridItem colSpan={1}>
                      <Stack>
                        <TextWidget widgetId="ujgcje0omy" text="Static text from Left Container" />
                        <TextWidget widgetId="is0fwucchq" text="Dynamic Left: -" />
                      </Stack>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Stack>
                        <TextWidget widgetId="k1j5882wmt" text="Static text from Right Container" />
                        <TextWidget widgetId="weq4w5wk5m" text="Dynamic Right: -" />
                      </Stack>
                    </GridItem>

                    <GridItem colSpan={1}>
                      <Stack>
                        <TextWidget
                          widgetId="y3s2g1c5zz"
                          text="Left text is:\nSTATIC text from Left Container\nDynamic Left:-"
                        />
                      </Stack>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Stack>
                        <TextWidget
                          widgetId="5m3vf11p5u"
                          text="Right text is:\nSTATIC text from Right Container\nDynamic Right:-"
                        />
                      </Stack>
                    </GridItem>
                  </SimpleGrid>
                </Stack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          <GridItem colSpan={1}>
            <Card.Root>
              <Card.Header>
                <Card.Title>Actors</Card.Title>
              </Card.Header>
              <Card.Body minH={"500px"} maxH={"calc(100vh - 100px)"} overflowY={"auto"}>
                <JsonView
                  src={{
                    getWidgets: getWidgets,
                    getWidget_tl8xbeqhua: getWidget("tl8xbeqhua"),
                    getWidget_od1swmzxxq: getWidget("od1swmzxxq"),
                    devTools: {
                      context: devToolsContext,
                      state: devToolsState
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

const RenderView = () => {
  const { currentPageName, entitiesWidgetsStructure, isPageHasWidgets } = useEntitiesActor()

  const pageViewWrapperRef = useRef<HTMLDivElement>(null)
}
