import type { Meta } from "@storybook/react-vite"
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react"

export default {
  title: "Chakra / Hooks / useBreakpointValue",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export const Basic = () => {
  const value = useBreakpointValue({ base: false, lg: true }, { ssr: false })
  return <Flex>{value ? "true" : "false"}</Flex>
}
