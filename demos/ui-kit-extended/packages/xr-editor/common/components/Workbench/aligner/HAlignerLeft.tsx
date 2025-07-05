import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, HStack } from "@chakra-ui/react"


export const HAlignerLeft = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-start"
      data-name="HAlignerLeft"
    >
      {children}

    </HStack>
  )
}
