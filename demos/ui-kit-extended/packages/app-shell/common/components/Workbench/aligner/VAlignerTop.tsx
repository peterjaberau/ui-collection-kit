import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const VAlignerTop = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="flex-start"
      data-name="VAlignerTop"
    >
      {children}

    </Stack>
  )
}
