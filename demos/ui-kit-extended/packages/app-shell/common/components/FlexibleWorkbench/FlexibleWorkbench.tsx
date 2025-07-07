import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, VStack, Stack } from "@chakra-ui/react"


export const FlexibleWorkbench = ({children}: any) => {

  return (
      <Stack
        data-name="FlexibleWorkbench"
        // gap={0}
        css={{
          width: "full",
          height: "full",
          overflow: "hidden",
        }}
      >
        {children}
      </Stack>
  )
}
