import type { Meta } from "@storybook/react"
import { Box, SkipNavContent, SkipNavLink } from "@chakra-ui/react"

export default {
  title: "Styled / Components / Skip Nav",

} 

export const BasicExample = () => (
  <>
    <SkipNavLink>Skip to Content</SkipNavLink>
    <SkipNavContent />
  </>
)
