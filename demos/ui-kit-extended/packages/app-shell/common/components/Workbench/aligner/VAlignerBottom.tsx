import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const VAlignerBottom = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="flex-end"
      data-name="VAlignerBottom"
    >
      {children}

    </Stack>
  )
}
