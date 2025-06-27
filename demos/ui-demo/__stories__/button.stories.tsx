import { Box, Button } from "@chakra-ui/react"
import { ButtonBasic } from "../__compositions__/examples/components/button/button-basic"
import { StoryObj } from '@storybook/react-vite'
import { action } from 'storybook/actions';

export default {
  title: "Styled / Components / Button",
  component: Button,
  a11y: {
    context: '#storybook-root',
  },

}

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
  },
}
type Story
  = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => <Button {...args} />,
}

// export { ButtonBasic as Basic } from "../__compositions__/examples/components/button/button-basic"
export { ButtonSizeTable as Sizes } from "../__compositions__/examples/components/button/button-size-table"
export { ButtonVariantTable as Variants } from "../__compositions__/examples/components/button/button-variant-table"
export { ButtonWithDisabled as Disabled } from "../__compositions__/examples/components/button/button-with-disabled"
export { ButtonWithDisabledLink as DisabledLink } from "../__compositions__/examples/components/button/button-with-disabled-link"
export { ButtonWithGroup as Group } from "../__compositions__/examples/components/button/button-with-group"
export { ButtonWithGroupFlushed as GroupFlushed } from "../__compositions__/examples/components/button/button-with-group-flushed"
export { ButtonWithIconComposition as IconComposition } from "../__compositions__/examples/components/button/button-with-icon-composition"
export { ButtonWithIcons as Icon } from "../__compositions__/examples/components/button/button-with-icons"
export { ButtonWithLoading as Loading } from "../__compositions__/examples/components/button/button-with-loading"
export { ButtonWithLoadingToggle as LoadingToggle } from "../__compositions__/examples/components/button/button-with-loading-toggle"
export { ButtonWithCustomSpinner as CustomSpinner } from "../__compositions__/examples/components/button/button-with-custom-spinner"
export { ButtonWithSpinnerPlacement as SpinnerPlacement } from "../__compositions__/examples/components/button/button-with-spinner-placement"
export { ButtonWithMenu as Menu } from "../__compositions__/examples/components/button/button-with-menu"
export { ButtonWithRadius as Radius } from "../__compositions__/examples/components/button/button-with-radius"
export { ButtonWithResponsiveSize as ResponsiveSize } from "../__compositions__/examples/components/button/button-with-responsive-size"
export { ButtonWithStyleOverride as StyleOverrides } from "../__compositions__/examples/components/button/button-with-style-override"
