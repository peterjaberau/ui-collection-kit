import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, HStack } from "@chakra-ui/react"


export const WorkbenchToolbar = ({children}: any) => {
  return (
    <HStack
      data-name="WorkbenchToolbar"
      css={{
        width: "full",
        height: "50px",
        bg: "bg.panel",
        borderBottom: "1px solid",
        borderBottomColor: "border"
      }}
    >
      {children}
    </HStack>
  )
}
