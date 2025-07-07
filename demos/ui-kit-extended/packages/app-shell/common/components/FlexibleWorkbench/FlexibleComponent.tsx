import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, Flex } from "@chakra-ui/react"

export const FlexibleComponent = ({ children, direction }: any) => {
  return (
    <Flex
      data-name="FlexibleComponent"
      flex={1}
      py={2}
      css={{
        width: "full",
        height: "full",
      }}
    >
      <Flex
        flexDirection={direction}
        css={{
          width: "full",
          height: "full",
          overflow: "auto",

          // scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            // display: "none",
            width: "5px",
            height: "50px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray.100",
            borderRadius: "5px",
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
