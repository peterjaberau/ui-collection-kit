"use client"
import JsonView from "react18-json-view"
import { Stack, Container, HStack, Box, Card, Button, SimpleGrid, Wrap, GridItem } from "@chakra-ui/react"

import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"
import { useGitActor } from "#actors/hooks/useGitActor"
import { useFormActor } from "#actors/hooks/useFormActor"
import { useEvaluationsActor } from "#actors/hooks/useEvaluationsActor"
import { useLintingActor } from "#actors/hooks/useLinitingActor"
import { useOrganizationActor } from "#actors/hooks/useOrganizationActor"
import { useSettingsActor } from "#actors/hooks/useSettingsActor"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useRef } from "react"

export default function Page() {
  const { entitiesActorState, currentPageName, widgetsStructure, isPageHasWidgets } = useEntitiesActor()

  const { gitActorState } = useGitActor()
  const { formActorState } = useFormActor()
  const { evaluationsActorState } = useEvaluationsActor()
  const { lintingActorState } = useLintingActor()
  const { organizationActorState } = useOrganizationActor()
  const { settingsActorState } = useSettingsActor()
  const { uiActorState, currentApplication } = useUiActor()

  return (
    <>
      <Container>
        <SimpleGrid columns={3} gap={4}>
          <GridItem colSpan={1}>
            <Card.Root>
              <Card.Header>
                <Card.Title>Actors</Card.Title>
              </Card.Header>
              <Card.Body maxH={"500px"} overflowY={"auto"}>
                <JsonView
                  src={{
                    entities: entitiesActorState.context,
                    git: gitActorState.context,
                    form: formActorState.context,
                    evaluations: evaluationsActorState.context,
                    linting: lintingActorState.context,
                    organization: organizationActorState.context,
                    settings: settingsActorState.context,
                    ui: uiActorState.context,
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

          <GridItem colSpan={1}>
            <Card.Root height={"100%"}>
              <Card.Header>
                <Card.Title>View Selectors</Card.Title>
              </Card.Header>
              <Card.Body maxH={"500px"} overflowY={"auto"}>
                <JsonView
                  src={{
                    currentPageName: currentPageName,
                    widgetsStructure: widgetsStructure,
                    currentApplication: currentApplication,
                    isPreviewMode: uiActorState.context.editor.isPreviewMode,
                    canvasWidget: entitiesActorState.context.canvasWidgets,


                    isPageHasWidgets: isPageHasWidgets,
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
  const { entitiesActorState, currentPageName, widgetsStructure, isPageHasWidgets } = useEntitiesActor()

  const pageViewWrapperRef = useRef<HTMLDivElement>(null)
}
