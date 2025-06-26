import type { Meta } from "@storybook/react"
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react"

export default {
  title: "Styled / Hooks / useBreakpointValue",

} 

export const Basic = () => {
  const value = useBreakpointValue({ base: false, lg: true }, { ssr: false })
  return <Flex>{value ? "true" : "false"}</Flex>
}
