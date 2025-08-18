import React, { useCallback, useMemo } from "react";
import { SegmentGroup, HStack, Stack } from "@chakra-ui/react";


interface ITabsConfig {
  key: string;
  title: string;
  icon: any;
  content: any;
}

interface ITabs {
  tabsConfig: Array<ITabsConfig>;
  onChange: (key: string) => void;
  activeKey: string;
}

const Tabs = React.memo((props: ITabs) => {
  const { onChange, tabsConfig, activeKey } = props;

  const activeTab = useMemo(
    () => tabsConfig.find((c) => c.key === activeKey) || tabsConfig[0],
    [tabsConfig, activeKey],
  );

  const handleTabClick = useCallback(
    (key: string) => {
      onChange(key);
    },
    [onChange],
  );

  return (
    <>
      <SegmentGroup.Root
        defaultValue={activeTab}
        onValueChange={(e: any) => handleTabClick(e.value)}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items
          items={tabsConfig.map((tab) => {
            return {
              value: tab.key,
              label: (
                <HStack>
                  {tab.icon}
                  {tab.title}
                </HStack>
              ),
            };
          })}
        />
      </SegmentGroup.Root>
      <Stack
        css={{
          h: "calc(100% - 40px)",
        }}
      >
        {activeTab.content}
      </Stack>
    </>
  );
});

Tabs.displayName = "Tabs";

export { Tabs };
