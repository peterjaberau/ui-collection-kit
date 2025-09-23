"use client"
import { Box, Drawer, Flex, Group, Stack, Container, Skeleton, ClientOnly, chakra } from "@chakra-ui/react"
import { type FC, Fragment, memo, Suspense, useLayoutEffect, useMemo, useState, useEffect } from "react"
import { createHtmlPortalNode, HtmlPortalNode, InPortal, OutPortal } from "react-reverse-portal"
import { Sidebar } from "./sidebar"
import AuthenticationView from "./views/authentication/authentication-view"
import DashboardView from "./views/dashboard/dashboard-view"
import DesignerView from "./views/designer/designer-view"
import DocumentationView from "./views/documentation/documentation-view"
import ExplorerView from "./views/explorer/explorer-view"
import FunctionsView from "./views/functions/functions-view"
import GraphqlView from "./views/graphql/graphql-view"
import MonitorView from "./views/monitor/monitor-view"
import ParametersView from "./views/parameters/parameters-view"
import QueryView from "./views/query/query-view"
import { VIEW_PAGES } from "#app/sureal/screens/constants"
import { useCurrentViewStore } from "#app/sureal/store/current-view"
import { useDatabaseStore } from "#app/sureal/store/database"

const SidebarLazy = memo(Sidebar)

const PORTAL_OPTIONS = {
  attributes: {
    style: "height: 100%; display: flex; flex-direction: column;",
  },
}

const VIEW_COMPONENTS: Record<any, FC> = {
  dashboard: memo(DashboardView),
  monitor: memo(MonitorView),
  query: memo(QueryView),
  explorer: memo(ExplorerView),
  graphql: memo(GraphqlView),
  designer: memo(DesignerView),
  authentication: memo(AuthenticationView),
  functions: memo(FunctionsView),
  parameters: memo(ParametersView),
  documentation: memo(DocumentationView),
}

export function Screen() {
  const [viewId] = useCurrentViewStore((s: any) => s.context.viewId)


  const views: any = useMemo(() => {
    return { ...VIEW_PAGES } as const
  }, [])

  // viewPortals state for dynamically created portals
  const [viewPortals, setViewPortals]: any = useState<Record<any, HtmlPortalNode>>({})

  // Fill viewPortals on mount
  useEffect(() => {
    const portals: Record<any, HtmlPortalNode> | any = {}
    Object.keys(VIEW_COMPONENTS).forEach((key) => {
      portals[key] = createHtmlPortalNode(PORTAL_OPTIONS)
    })
    setViewPortals(portals)
    // We want to run this only once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid css={{ height: "100%", bg: "bg.emphasized" }}>
      <Stack flex={1} position={"relative"} h={'full'}>
        <SidebarLazy />

        <Stack flex={1} gap={8} marginLeft={'350px'} py={4}  flexWrap={"nowrap"}>
          <Stack flex={1} position={"relative"}>
            <ClientOnly fallback={<div>...loading</div>}>
              {() => {
                // Early fallback if viewPortals not ready (avoid SSR document access)
                if (!viewPortals || Object.keys(viewPortals).length === 0) {
                  return <div>...loading</div>
                }
                const _view = viewId as any
                const portal = views[_view] ? viewPortals[_view] : undefined

                return (
                  <>
                    {Object.values(views).map((mode: any) => {
                      const Content: any = VIEW_COMPONENTS[mode.id]

                      return (
                        <InPortal key={mode.id} node={viewPortals[mode.id]}>
                          <Content />
                        </InPortal>
                      )
                    })}

                    {portal && (
                      <Stack flex={1} gap={0}>
                        <OutPortal node={portal} />
                      </Stack>
                    )}
                  </>
                )
              }}
            </ClientOnly>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
