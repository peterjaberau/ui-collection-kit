import { Meta, StoryObj } from "@storybook/react"

import { ComponentWithRouterDecorator } from "../../../../testing"
import { ContactLink } from "../ContactLink"

const meta: Meta<typeof ContactLink> = {
  title: "UI/Navigation/Link/ContactLink",
  component: ContactLink,
  decorators: [ComponentWithRouterDecorator],
  args: {
    href: "/test",
    children: "Contact Link",
  },
}

export default meta
type Story = StoryObj<typeof ContactLink>

export const Email: Story = {
  args: {
    href: `mailto:${"email@example.com"}`,
    children: "email@example.com",
  },
}

export const Phone: Story = {
  args: {
    children: "11111111111",
  },
}
