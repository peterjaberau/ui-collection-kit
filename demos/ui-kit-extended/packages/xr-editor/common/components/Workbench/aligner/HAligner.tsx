import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, HStack } from "@chakra-ui/react"


export const HAligner = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="space-between"
      data-name="Header"
    >
      {children}

    </HStack>
  )
}

