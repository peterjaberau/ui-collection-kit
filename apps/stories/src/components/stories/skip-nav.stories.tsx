import type { Meta } from "@storybook/react-vite"
import { Box, SkipNavContent, SkipNavLink } from "@ui-kit/components"

export default {
  title: "Components / Skip Nav",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const BasicExample = () => (
  <>
    <SkipNavLink>Skip to Content</SkipNavLink>
    <SkipNavContent />
  </>
)
