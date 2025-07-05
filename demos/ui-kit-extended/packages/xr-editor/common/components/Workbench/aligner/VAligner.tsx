import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const VAligner = ({children}: any) => {

  return (
    <Stack
      height={'full'}
      justify="space-between"
      data-name="VAligner"
    >
      {children}
    </Stack>
  )
}

