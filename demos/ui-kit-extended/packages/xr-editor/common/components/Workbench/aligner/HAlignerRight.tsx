import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, HStack } from "@chakra-ui/react"


export const HAlignerRight = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-end"
      data-name="HAlignerRight"
    >
      {children}

    </HStack>
  )
}
