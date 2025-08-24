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
  const { entitiesContext, currentPageName, entitiesWidgetsStructure, entitiesCanvasWidgets, isPageHasWidgets } =
    useEntitiesActor()

  const { gitContext } = useGitActor()
  const { formContext } = useFormActor()
  const { evaluationsContext } = useEvaluationsActor()
  const { lintingContext } = useLintingActor()
  const { orgContext } = useOrganizationActor()
  const { settingsContext } = useSettingsActor()
  const { uiContext, currentApplication, isPreviewMode } = useUiActor()

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

          <GridItem colSpan={1}>
            <Card.Root height={"100%"}>
              <Card.Header>
                <Card.Title>View Selectors</Card.Title>
              </Card.Header>
              <Card.Body maxH={"500px"} overflowY={"auto"}>
                <JsonView
                  src={{
                    widgetsStructure: entitiesWidgetsStructure,
                    currentPageName: currentPageName,
                    currentApplication: currentApplication,
                    isPreviewMode: isPreviewMode,
                    canvasWidget: entitiesCanvasWidgets,

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
  const { currentPageName, entitiesWidgetsStructure, isPageHasWidgets } = useEntitiesActor()

  const pageViewWrapperRef = useRef<HTMLDivElement>(null)
}
