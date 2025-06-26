import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Skeleton",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SkeletonBasic as Basic } from "../__compositions__/examples/components/skeleton/skeleton-basic"
export { SkeletonForFeed as Feed } from "../__compositions__/examples/components/skeleton/skeleton-for-feed"
export { SkeletonForText as Text } from "../__compositions__/examples/components/skeleton/skeleton-for-text"
export { SkeletonWithChildren as WithChildren } from "../__compositions__/examples/components/skeleton/skeleton-with-children"
export { SkeletonWithLoaded as WithLoaded } from "../__compositions__/examples/components/skeleton/skeleton-with-loaded"
export { SkeletonWithStartEndColor as StartEndColor } from "../__compositions__/examples/components/skeleton/skeleton-with-start-end-color"
export { SkeletonWithVariants as Variants } from "../__compositions__/examples/components/skeleton/skeleton-with-variants"
