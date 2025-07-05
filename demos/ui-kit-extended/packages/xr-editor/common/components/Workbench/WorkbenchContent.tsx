import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Container, VStack, Stack } from "@chakra-ui/react"


export const WorkbenchContent = ({children}: any) => {

  return (
      <Stack
        data-name="WorkbenchContent"
        flex={1}
        css={{
          width: "full",
          height: "full",
        }}
      >
        {children}
      </Stack>
  )
}
