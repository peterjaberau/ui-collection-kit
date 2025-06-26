import type { Meta } from "@storybook/react"
import { Box, Center, For, SimpleGrid, Text } from "@chakra-ui/react"

export default {
  title: "Foundations / Tokens",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { TokensAnimationStyle as AnimationStyle } from "../__compositions__/examples/tokens/animation-style"
export { TokensFocusRing as FocusRing } from "../__compositions__/examples/tokens/focus-ring"
export { TokensLayerStyle as LayerStyle } from "../__compositions__/examples/tokens/layer-style"
export { TokensTextStyles as TextStyles } from "../__compositions__/examples/tokens/text-styles"

export { AspectRatioTokenDoc as AspectRatio } from "../__compositions__/lib/aspect-ratio-token-doc"
export { BorderRadiusTokenDoc as Radius } from "../__compositions__/lib/border-radius-token-doc"
export { BreakpointDoc as Breakpoints } from "../__compositions__/lib/breakpoint-doc"
export { EasingTokenDoc as Easings } from "../__compositions__/lib/easing-token-doc"
export {
  ColorTokenDoc as Colors,
  ColorSemanticTokenDoc as SemanticColors,
} from "../__compositions__/lib/color-token-doc"
export {
  DurationTokenDoc as Durations,
  KeyframeDoc as Keyframes,
} from "../__compositions__/lib/keyframe-doc"
export { ShadowTokenDoc as Shadows } from "../__compositions__/lib/shadow-token-doc"
export { SizesTokenDoc as Sizes } from "../__compositions__/lib/sizes-token-doc"
export { SpacingTokenDoc as Spacing } from "../__compositions__/lib/spacing-token-doc"
export {
  FontTokenDoc as Font,
  FontSizeTokenDoc as FontSizes,
  FontWeightTokenDoc as FontWeights,
  LetterSpacingTokenDoc as LetterSpacings,
  LineHeightTokenDoc as LineHeights,
} from "../__compositions__/lib/typography-token-doc"
export { ZIndexTokenDoc as ZIndex } from "../__compositions__/lib/z-index-token-doc"

export const StatusTokens = () => {
  return (
    <SimpleGrid columns={4} gap="10">
      <For each={["bg.error", "bg.warning", "bg.success", "bg.info"]}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color={color.replace("bg.", "fg.")}>{color}</Text>
          </Center>
        )}
      </For>

      <For each={["fg.error", "fg.warning", "fg.success", "fg.info"]}>
        {(color) => (
          <Center bg={color} height="40px">
            <Text color="fg.inverted">{color}</Text>
          </Center>
        )}
      </For>

      <For
        each={[
          "border.error",
          "border.warning",
          "border.success",
          "border.info",
        ]}
      >
        {(color) => (
          <Center borderColor={color} height="40px" borderWidth="2px">
            <Text color="fg">{color}</Text>
          </Center>
        )}
      </For>
    </SimpleGrid>
  )
}
