import { Meta, StoryObj } from "@storybook/react"

import { ComponentWithRouterDecorator } from "../../../../testing"
import { RawLink } from "../RawLink"

const meta: Meta<typeof RawLink> = {
  title: "Refactor UI/Navigation/Link/RawLink",
  component: RawLink,
  decorators: [ComponentWithRouterDecorator],
  args: {
    className: "RawLink",
    href: "/test",
    children: "Raw Link",
  },
}

export default meta
type Story = StoryObj<typeof RawLink>

export const Default: Story = {
  args: {
  },
}
