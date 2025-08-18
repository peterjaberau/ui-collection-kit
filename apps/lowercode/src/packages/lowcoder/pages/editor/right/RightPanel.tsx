import { Tabs } from "#lowcoder-design/index";
import PropertyView from "./PropertyView";
import InsertView from "./InsertView";
import type UIComp from "#lowcoder/comps/comps/uiComp";
import type { UiLayoutType } from "#lowcoder/comps/comps/uiComp";
import { useEffect, useState } from "react";
import { LuSquarePlus, LuPencilRuler } from "react-icons/lu";
import { trans } from "#lowcoder/i18n";
import { isAggregationApp } from "#lowcoder/util/appUtils";
import React from "react";
import { Stack } from "@chakra-ui/react"

type RightPanelProps = {
  onTabChange: (key: string) => void;
  onCompDrag: (dragCompKey: string) => void;
  showPropertyPane: boolean;
  uiComp?: InstanceType<typeof UIComp>;
};

function RightPanel(props: RightPanelProps) {
  const { onTabChange, showPropertyPane, uiComp }: any = props;
  const uiCompType = uiComp && (uiComp.children.compType.getView() as UiLayoutType);
  const aggregationApp = uiCompType && isAggregationApp(uiCompType);
  const [activeKey, setActiveKey] = useState("insert");
  const tabConfigs = [
    {
      key: "property",
      title: trans("rightPanel.propertyTab"),
      icon: <LuPencilRuler />,
      content: <PropertyView uiComp={uiComp} />,
    },
  ];
  if (!aggregationApp) {
    tabConfigs.push({
      key: "insert",
      title: trans("rightPanel.createTab"),
      icon: <LuSquarePlus />,
      content: <InsertView onCompDrag={props.onCompDrag} />,
    });
  }
  useEffect(() => {
    const key = aggregationApp || showPropertyPane ? "property" : "insert";
    key !== activeKey && setActiveKey(key);
  }, [showPropertyPane, aggregationApp, activeKey]);

  return (
    <Stack
      data-id="editor-right-panel"
      css={{
        w: "313px",
        h: "100%",
        boxSizing: "border-box",
        borderLeft: "1px solid",
        borderLeftColor: "border.emphasized",
        overflow: "hidden",
        zIndex: 500,
        bg: "bg.panel"
      }}
    >
      <>
        <Tabs
          onChange={(key) => {
            onTabChange(key);
          }}
          tabsConfig={tabConfigs}
          activeKey={activeKey}
        />

      </>
    </Stack>
  );
}

export default React.memo(RightPanel);
