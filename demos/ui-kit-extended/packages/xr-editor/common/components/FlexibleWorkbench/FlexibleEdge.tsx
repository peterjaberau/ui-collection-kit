import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, HStack } from "@chakra-ui/react"


export const FlexibleEdge = ({children}: any) => {

  return (
    <Box
      data-name="FlexibleEdge"
      css={{
        height: "full",
        width: "50px",
        bg: "bg.panel",
      }}
    >
      {children}
    </Box>
  )
}
