"use client"
import { HStack, Box } from "@chakra-ui/react"
import { ComponentType } from "react"

interface Props {
  preview?: ComponentType<{ value: string }>
  text: string
}

/**
 * A header component for use with editors/layers that displays
 * a visual preview and text.
 */
export default function LayerHeader({ preview: Preview, text }: Props) {
  return (
    <HStack height="3rem">
      {Preview && (
        <Box
          width="2rem"
          height="2rem"
          border="1px solid"
          borderColor="border"
          borderRadius={8}
          overflow="hidden"
          mr={2}
        >
          <Preview value={text} />
        </Box>
      )}
      <Box
        position="relative"
        width="100%"
        height="1rem"
        overflow="hidden"
        textOverflow="ellipsis"
        pr="2rem"
        wordBreak="break-all"
        color="text"
        css={{
          webkitTextFillColor: "transparent",
          webkitBackgroundClip: "text",
          backgroundImage: ({ rawColors }: any) =>
            `linear-gradient(90deg, ${rawColors?.text} 0%, ${rawColors?.text} 80%, rgba(0, 0, 0, 0) 90%)`,
        }}
      >
        {text}
      </Box>
    </HStack>
  )
}
