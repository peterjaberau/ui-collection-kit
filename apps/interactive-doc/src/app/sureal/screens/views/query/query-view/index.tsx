"use client"
import type { SelectionRange } from "@codemirror/state"
import { SetQueryEvent } from "#app/sureal/utils/global-events"
import { useEventSubscription } from "#app/sureal/hooks/event";
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
import { setEditorText } from "#app/sureal/editor/helpers"
import { executeEditorQuery } from "#app/sureal/editor/query"
import { useStable } from "#app/sureal/hooks/stable"
import { useSetting } from "#app/sureal/hooks/config"
import { useActiveQuery, useConnection } from "#app/sureal/hooks/connection"
import { useConfigStore } from '#app/sureal/store/config'

const QueryPaneLazy = memo(QueryPane)
const VariablesPaneLazy = memo(VariablesPane)
const ResultPaneLazy = memo(ResultPane)

export function QueryView() {
  const [configContext, configStoreRef] = useConfigStore()

  const connection = useConnection({
    state: { config: configContext.context }
  })
  // const activeQuery = useActiveQuery({
  //   state: { connection }
  // })

  const [showVariables, setShowVariables]: any = useState(true);


  const [orientation] = useSetting(configContext.context, { category: "appearance", key: "queryOrientation" });
  const [editor, setEditor] = useState(new EditorView())
  const [variablesValid, setVariablesValid] = useState(true);

  const variablesOrientation = orientation === "horizontal" ? "vertical" : "horizontal";

  const closeVariables = useStable(() => {
    setShowVariables(false);
  });




  const [minSidebarSize, rootRef] = usePanelMinSize(350)
  const [minResultHeight, wrapperRef] = usePanelMinSize(48, "height")


  useEventSubscription(SetQueryEvent, (query) => {
    if (editor) {
      setEditorText(editor, query);
    }
  });



  const queryEditor = (
    <Box flex={1} h="100%" ref={wrapperRef}>
      <PanelGroup direction={orientation}>
        <Panel minSize={15}>
          <PanelGroup direction={variablesOrientation}>
            <Panel id="query" order={0} minSize={35}>
              <QueryPaneLazy />
            </Panel>

            <>
              <PanelDragger />
              <Panel id="variables" order={1} defaultSize={40} minSize={35}>
                <VariablesPaneLazy
                  editor={editor}
                  isValid={variablesValid}
                  setIsValid={setVariablesValid}
                  closeVariables={closeVariables}
                  lineNumbers={true}
                />
              </Panel>
            </>
          </PanelGroup>
        </Panel>
        <PanelDragger />
        <Panel minSize={orientation === "horizontal" ? 35 : minResultHeight} defaultSize={50}>
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
