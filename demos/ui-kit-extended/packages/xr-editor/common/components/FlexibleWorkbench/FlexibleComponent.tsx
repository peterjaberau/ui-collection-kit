import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, Flex } from "@chakra-ui/react"

export const FlexibleComponent = ({ children, direction }: any) => {
  return (
    <Flex
      data-name="FlexibleComponent"
      flex={1}
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
          background: 'bg.panel'
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
