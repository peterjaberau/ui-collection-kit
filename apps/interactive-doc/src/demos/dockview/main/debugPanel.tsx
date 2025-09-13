"use client"
import { DockviewGroupLocation, DockviewPanelApi, DockviewPanelRenderer } from "#dockview"
import { Table as ChakraTable } from "@chakra-ui/react"
import * as React from "react"
import { useDockPanel } from './hooks/useDockPanel'


export const Table = (props: { data: any, id?: string }) => {



  return (
    <ChakraTable.Root size="sm">
      <ChakraTable.Header>
        <ChakraTable.Row>
          <ChakraTable.ColumnHeader>Key</ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader>Count</ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader>Value</ChakraTable.ColumnHeader>
        </ChakraTable.Row>
      </ChakraTable.Header>
      <ChakraTable.Body>
        {Object.entries(props.data).map(([key, value]: any) => {
          return (
            <ChakraTable.Row key={key}>
              <ChakraTable.Cell>{key}</ChakraTable.Cell>
              <ChakraTable.Cell>{value.count}</ChakraTable.Cell>
              <ChakraTable.Cell>{JSON.stringify(value.value, null, 4)}</ChakraTable.Cell>
            </ChakraTable.Row>
          )
        })}
      </ChakraTable.Body>
    </ChakraTable.Root>
  )
}

function useSmartState(initial: any) {
  const [state, setState] = React.useState(initial);

  const updateKey = React.useCallback(
    (key: string, newValue: any) => {
      setState((prev: any) => {
        const prevEntry = prev[key];
        if (!prevEntry) return prev;

        // handle nested "value" case
        const prevValue =
          typeof prevEntry === "object" && "value" in prevEntry
            ? prevEntry.value
            : undefined;

        if (prevValue === newValue) return prev;

        return {
          ...prev,
          [key]: {
            ...prevEntry,
            value: newValue,
            count: (prevEntry.count ?? 0) + 1,
          },
        };
      });
    },
    [setState]
  );

  return [state, updateKey] as const;
}


export function usePanelApiMetadata(api: DockviewPanelApi): any {

  const {
    isActive,
    isVisible,
    renderer,
    isGroupActive,
    location,
    height,
    width
  } = useDockPanel({ panelId: api.id})

  const [state, updateKey] = useSmartState({
    isActive: { value: isActive, count: 0 },
    isVisible: { value: isVisible, count: 0 },
    renderer: { value: renderer, count: 0 },
    isGroupActive: { value: isGroupActive, count: 0 },
    groupChanged: { count: 0 },
    location: { value: location, count: 0 },
    didFocus: { count: 0 },
    dimensions: {
      count: 0,
      value: { height: height, width: width },
    },
  });

  React.useEffect(() => updateKey("isActive", isActive), [isActive]);
  React.useEffect(() => updateKey("isVisible", isVisible), [isVisible]);
  React.useEffect(() => updateKey("renderer", renderer), [renderer]);
  React.useEffect(() => updateKey("isGroupActive", isGroupActive), [isGroupActive]);
  React.useEffect(() => updateKey("location", location), [location]);
  React.useEffect(
    () => updateKey("dimensions", { height, width }),
    [height, width]
  );


  return state
}
