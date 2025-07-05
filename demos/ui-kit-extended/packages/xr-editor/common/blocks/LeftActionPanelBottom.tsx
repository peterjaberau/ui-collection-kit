import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"

export const LeftActionPanelBottom = ({ children }: any) => {
  return (
    <Stack
      data-name="LeftActionPanelBottom"
      justify="flex-end"
      flex={1}
    >
      {children}
    </Stack>
  )
}
