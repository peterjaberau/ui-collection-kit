import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const LeftActionPanelTop = ({children}: any) => {

  return (
    <Stack
      data-name="LeftActionPanelTop"
      flex={1}
    >
      {children}
    </Stack>
  )
}
