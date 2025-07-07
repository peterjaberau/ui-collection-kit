import React, { useMemo } from "react"
import { Box, Stack, Center } from "@chakra-ui/react"
import { Splitter } from "@ui-collection-kit/unstyled-react/splitter"

const configCache = new Map<
  number,
  {
    panels: Array<{ id: string }>
    resizeTriggerIds: string[]
  }
>()

const getCachedSplitterConfig = (childrenCount: number) => {
  // Check if configuration already exists in cache
  if (configCache.has(childrenCount)) {
    return configCache.get(childrenCount)!
  }

  const config: any = {
    panels: Array.from({ length: childrenCount }, (_, index) => ({ id: `panel-${index}` })),
    resizeTriggerIds: Array.from({ length: childrenCount - 1 }, (_, i) => `panel-${i}:panel-${i + 1}`),
  }

  configCache.set(childrenCount, config)
  return config
}

export const FlexibleSplit = ({
  children,
  direction,
  defaultSize,
}: {
  children: any
  direction?: "row" | "column"
  defaultSize?: number[]
}) => {
  const childrenArray: any = React.Children.toArray(children)

  const config = getCachedSplitterConfig(childrenArray.length)

  const orientation = useMemo(() => (direction === "column" ? "vertical" : "horizontal"), [direction])

  return (
    <Box
      data-name="FlexibleSplit"
      css={{
        width: "full",
        height: "full",
        // bg: "bg.emphasized",
        background: 'bg.panel',
      }}
    >
      <Splitter.Root
        defaultSize={defaultSize || []}
        data-name="FlexibleSplit"
        panels={config.panels}
        orientation={orientation}
      >
        {childrenArray.map((child: any, index: number) => (
          <React.Fragment key={index}>
            <Splitter.Panel id={`panel-${index}`}>
              {React.isValidElement(child)
                ? React.cloneElement(child, {
                  ...(child.props || {}), // Preserve original props
                })
                : child
              }
            </Splitter.Panel>



            {/* handler */}
            {index < childrenArray.length - 1 && (
              <Splitter.ResizeTrigger id={config.resizeTriggerIds[index]} aria-label={`Resize panel ${index + 1}`}>
                <Stack height="full" width="full" justify="center" align="center"
                css={{
                  bg: "bg.emphasized",
                }}
                >
                  <Stack
                    css={{
                      h: direction === "column" ? "6px" : "100px",
                      w: direction === "column" ? "100px" : "6px",

                    }}
                  />
                </Stack>
              </Splitter.ResizeTrigger>
            )}
          </React.Fragment>
        ))}
      </Splitter.Root>
    </Box>
  )
}
