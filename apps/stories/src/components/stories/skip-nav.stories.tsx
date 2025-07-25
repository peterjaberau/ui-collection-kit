import type { Meta } from "@storybook/react-vite"
import { Box, SkipNavContent, SkipNavLink } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Skip Nav",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export const BasicExample = () => (
  <>
    <SkipNavLink>Skip to Content</SkipNavLink>
    <SkipNavContent />
  </>
)
