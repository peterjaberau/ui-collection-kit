import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, HStack } from "@chakra-ui/react"


export const WorkbenchHeader = ({children}: any) => {

  return (
    <HStack
      data-name="WorkbenchHeader"
      css={{
        width: "full",
        height: "40px",
        bg: "bg.panel",
        // bg: "gray.solid",
        // color: "fg.inverted"
      }}
    >
      {children}
    </HStack>
  )
}
