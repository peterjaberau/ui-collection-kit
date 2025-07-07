import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, HStack } from "@chakra-ui/react"

export const WorkbenchBody = ({ children }: any) => {
  return (
    <HStack
      justify="space-between"
      alignItems="flex-start"
      data-name="WorkbenchBody"
      overflow="hidden"
      flex={1}
    >
      {children}
    </HStack>
  )
}
