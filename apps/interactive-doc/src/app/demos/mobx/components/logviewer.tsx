"use client"

import { useEffect, useRef, useState } from "react"
import { Stack, ScrollArea, VStack, Box, IconButton } from "@chakra-ui/react"
import { LuArrowDown } from "react-icons/lu"
import { useStickToBottom } from "use-stick-to-bottom"

import { globalEvents } from "@/src/app/events"

// Single log entry component
const LogEntry = ({ data }: { data: any }) => (
  <div style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", padding: "2px 0" }}>
    {JSON.stringify(data, null, 2)}
  </div>
)

export const useEventListener = (eventName: string) => {
  const [data, setData] = useState<any[]>([])
  const listenerRef: any = useRef<(newData: any) => void>(null)

  // Keep latest callback
  listenerRef.current = (newData: any) => {
    setData(prev => [...prev, newData]) // append new data
  }

  useEffect(() => {
    const handler = (newData: any) => listenerRef.current?.(newData)

    globalEvents.on(eventName, handler)

    return () => globalEvents.off(eventName, handler) as any
  }, [eventName]) // subscribe once, re-subscribe only if eventName changes

  return data
}

export const LogViewer = ({ eventName }: { eventName: string }) => {
  const sticky = useStickToBottom()
  const data: any = useEventListener(eventName)

  return (
    <ScrollArea.Root maxHeight="470px" width="470px" bg={"bg.panel"} borderWidth="1px" rounded="l2" size="xs">
      <ScrollArea.Viewport ref={sticky.scrollRef}>
        <ScrollArea.Content ref={sticky.contentRef}>
          <VStack gap="2" p="3" align="stretch">
            {data.map((log: any, index: any) => (
              <LogEntry key={index} data={log} />
            ))}
          </VStack>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      {!sticky.isAtBottom && (
        <Box position="absolute" bottom="4" right="4" zIndex="10">
          <IconButton
            size="sm"
            onClick={() => {
              sticky.scrollToBottom()
            }}
            colorScheme="blue"
            variant="solid"
          >
            <LuArrowDown />
          </IconButton>
        </Box>
      )}
    </ScrollArea.Root>
  )
}
