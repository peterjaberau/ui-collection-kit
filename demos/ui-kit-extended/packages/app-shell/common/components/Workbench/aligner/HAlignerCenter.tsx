import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, HStack } from "@chakra-ui/react"


export const HAlignerCenter = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="center"
      data-name="HAlignerCenter"
    >
      {children}

    </HStack>
  )
}
