import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const LeftActionPanelMiddle = ({children}: any) => {

  return (
    <Stack
      data-name="LeftActionPanelMiddle"
      flex={1}
      justify="center"
    >
      {children}
    </Stack>
  )
}
