"use client"
import type { SelectionRange } from "@codemirror/state"
import { EditorView } from "@codemirror/view"
import { memo, useState } from "react"
import { Panel, PanelGroup } from "react-resizable-panels"
import { PanelDragger } from "#app/sureal/components/pane/dragger"
import { Box } from "@chakra-ui/react"
import { QueryPane } from "../query-pane"
import { VariablesPane } from "../variables-pane"
import { ResultPane } from "../result-pane"
import { TabsPane } from "../tabs-pane"
import { usePanelMinSize } from "#app/sureal/hooks/panels"
import { useCurrentViewStore } from "#app/sureal/store/current-view"
import { setEditorText } from "#components/ui/code-mirror/editor/helpers"
import { executeEditorQuery } from "#components/ui/code-mirror/editor/query"

const QueryPaneLazy = memo(QueryPane)
const VariablesPaneLazy = memo(VariablesPane)
const ResultPaneLazy = memo(ResultPane)

export function QueryView() {
  const [queryOrientation, variablesOrientation, store] = useCurrentViewStore((s: any) => s.context.queryOrientation)
  const [editor, setEditor] = useState(new EditorView())

  const [minSidebarSize, rootRef] = usePanelMinSize(350)
  const [minResultHeight, wrapperRef] = usePanelMinSize(48, "height")

  const queryEditor = (
    <Box flex={1} h="100%" ref={wrapperRef}>
      <PanelGroup direction={queryOrientation}>
        <Panel minSize={15}>
          <PanelGroup direction={variablesOrientation}>
            <Panel id="query" order={0} minSize={35}>
              <QueryPaneLazy />
            </Panel>

            <>
              <PanelDragger />
              <Panel id="variables" order={1} defaultSize={40} minSize={35}>
                <VariablesPaneLazy editor={editor} />
              </Panel>
            </>
          </PanelGroup>
        </Panel>
        <PanelDragger />
        <Panel minSize={queryOrientation === "horizontal" ? 35 : minResultHeight} defaultSize={50}>
          <ResultPaneLazy />
        </Panel>
      </PanelGroup>
    </Box>
  )

  return (
    <Box height={"100%"} ref={rootRef}>
      <PanelGroup direction={"horizontal"} style={{ opacity: minSidebarSize === 0 ? 0 : 1 }}>
        <>
          <Panel defaultSize={minSidebarSize} minSize={minSidebarSize} maxSize={35} id="tabs" order={1}>
            <TabsPane />
          </Panel>
          <PanelDragger />
        </>

        <Panel id="content" order={2}>
          {queryEditor}
        </Panel>
      </PanelGroup>
    </Box>
  )
}

export default QueryView
