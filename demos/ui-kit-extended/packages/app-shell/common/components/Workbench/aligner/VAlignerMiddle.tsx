import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const VAlignerMiddle = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="center"
      data-name="VAlignerMiddle"
    >
      {children}

    </Stack>
  )
}
