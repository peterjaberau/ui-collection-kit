import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Stat",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { StatBasic as Basic } from "../__compositions__/examples/components/stat/stat-basic"
export { StatWithFormatOptions as FormatOptions } from "../__compositions__/examples/components/stat/stat-with-format-options"
export { StatWithGroup as StatGroup } from "../__compositions__/examples/components/stat/stat-with-group"
export { StatWithIcon as Icon } from "../__compositions__/examples/components/stat/stat-with-icon"
export { StatWithIndicator as Indicator } from "../__compositions__/examples/components/stat/stat-with-indicator"
export { StatWithInfoTip as InfoTip } from "../__compositions__/examples/components/stat/stat-with-info-tip"
export { StatWithProgressBar as ProgressBar } from "../__compositions__/examples/components/stat/stat-with-progress-bar"
export { StatWithTrend as Trend } from "../__compositions__/examples/components/stat/stat-with-trend"
export { StatWithValueUnit as ValueUnit } from "../__compositions__/examples/components/stat/stat-with-value-unit"
