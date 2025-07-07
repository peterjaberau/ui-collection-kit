import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"


export const LeftActionPanel = ({children}: any) => {

  return (
    <Stack
      data-name="LeftActionPanel"
      justify="space-between"
      css={{
        height: "full",
      }}
    >
      {children}

    </Stack>
  )
}
