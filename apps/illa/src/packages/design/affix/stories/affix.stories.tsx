import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"
import { Affix } from "../affix"

// import { useNotification } from "@illa-design/react"
import { Button } from "@chakra-ui/react"
import { useRef } from "react"

export default {
  title: "Illa / Design / Affix",
  component: Affix,
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

const loremIpsum = Array(10)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n\n")

export const Basic = (args: any) => {
  return (
    <>
      <Affix {...args}>
        <Button>Affix Top</Button>
      </Affix>
      <Box
        css={{
          width: "500px",
          whiteSpace: "pre-wrap",
        }}
      >
        {loremIpsum}
      </Box>
    </>
  )
}

export const Offset = () => {
  const offset = 200

  // const notification = useNotification()

  return (
    <>
      <Box
        style={{
          width: "500px",
          whiteSpace: "pre-wrap",
        }}
      >
        {loremIpsum}
      </Box>
      <Affix
        offsetTop={offset}
        onChange={(isFixed: boolean) => {
          // notification.info({
          //   content: isFixed ? `Fixed ${offset}px from top!` : "Not fixed.",
          // })
        }}
      >
        <Button>{offset}px to affix top</Button>
      </Affix>
      <Box
        css={{
          width: "500px",
          whiteSpace: "pre-wrap",
        }}
      >
        {loremIpsum}
      </Box>
      <Affix offsetBottom={offset}>
        <Button>{offset}px to affix bottom</Button>
      </Affix>
    </>
  )
}

export const TargetContainer = () => {
  const container = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Box css={{ overflow: "auto", height: 300, width: 500 }} ref={container}>
        <Box
          css={{
            background: "rgba(0, 0, 0, 0.3)",
            padding: "20px",
          }}
        >
          <Affix target={() => container.current} targetContainer={() => window}>
            <Button>Affix in scrolling container</Button>
          </Affix>
          {loremIpsum}
        </Box>
      </Box>
      <Box
        css={{
          width: "500px",
          whiteSpace: "pre-wrap",
        }}
      >
        {loremIpsum}
      </Box>
    </>
  )
}
