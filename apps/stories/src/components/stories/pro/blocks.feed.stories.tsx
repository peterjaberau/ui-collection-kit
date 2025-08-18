import type { Meta } from "@storybook/react-vite"
import { Stack } from "@chakra-ui/react"

export default {
  title: "Chakra Pro / Feed",
  decorators: [
    (Story: any) => (
      <Stack p="2"  >
        <Story />
      </Stack>
    ),
  ],
} as Meta

export { FeedWithComments as WithComments } from "../../compositions/examples/pro/feed-with-comments"
export { FeedWithUpvote as WithUpvote } from "../../compositions/examples/pro/feed-with-upvote"

