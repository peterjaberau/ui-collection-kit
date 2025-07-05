import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, HStack } from "@chakra-ui/react"


export const WorkbenchFooter = ({children}: any) => {

  return (
    <HStack
      data-name="WorkbenchFooter"
      css={{
        width: "full",
        height: "40px",
        bg: "bg.panel",
      }}
    >
      {children}
    </HStack>
  )
}
