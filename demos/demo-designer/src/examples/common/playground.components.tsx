import * as Playground from "./playground"
import {
  RadioGroup,
  Rating,
  Switch,
  Blockquote,
  Radio,
  Slider,
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@ui-kit/components"
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuCheck, LuPackage, LuShip } from "react-icons/lu"
import {
  Avatar,
  Box,
  Button,
  Code,
  Checkbox,
  Container,
  For,
  HStack,
  Kbd,
  Steps,
  SimpleGrid,
  Spinner,
  Stack,
  Tabs,
  Text,
  Timeline,
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react"

const buttonVariants = ["solid", "outline", "ghost", "subtle", "surface", "plain"] as const
const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]

export const PlaygroundComponents = () => {
  return (
    <Container display="flex" gap="10" maxW="8xl">
      <Box maxW="5xl" width="full" flex="1" minHeight="var(--content-height)" overflow="auto">
        <Playground.Section>
          <Playground.SectionTitle id="button">Button</Playground.SectionTitle>
          <Playground.SectionContent>
            <Playground.DemoList
              items={[
                {
                  label: "Accent Colors",
                  component: (
                    <HStack>
                      <For each={buttonVariants}>
                        {(variant: any) => (
                          <Button key={variant} variant={variant}>
                            Click <LuArrowRight />
                          </Button>
                        )}
                      </For>
                    </HStack>
                  ),
                },
                {
                  label: "Gray",
                  component: (
                    <HStack colorPalette="gray">
                      <For each={buttonVariants}>
                        {(variant) => (
                          <Button key={variant} variant={variant}>
                            Click <LuArrowRight />
                          </Button>
                        )}
                      </For>
                    </HStack>
                  ),
                },
              ]}
            />
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="code">Code</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack wrap="wrap" gap="4">
              <For each={["subtle", "surface", "outline", "solid"]}>
                {(variant) => (
                  <Code size="md" variant={variant} key={variant}>
                    console.log()
                  </Code>
                )}
              </For>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="avatar">Avatar</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack wrap="wrap" gap="4">
              <For each={["subtle", "solid"]}>
                {(variant) => (
                  <HStack key={variant}>
                    <Avatar.Root variant={variant} size="lg" shape="rounded">
                      {/* @ts-ignore */}
                      <Avatar.Image src="https://avatars.githubusercontent.com/u/18587765?v=4&size=64" />
                      <Avatar.Fallback name="Peter J" />
                    </Avatar.Root>
                    <Avatar.Root variant={variant} size="lg" shape="rounded">
                      <Avatar.Fallback name="Peter J" />
                    </Avatar.Root>
                    <Avatar.Root variant={variant} size="lg" shape="rounded">
                      <Avatar.Fallback />
                    </Avatar.Root>
                  </HStack>
                )}
              </For>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="tabs">Tabs</Playground.SectionTitle>
          <Playground.SectionContent>
            <SimpleGrid columns={2} gapX="4" gapY="8">
              <For each={["line", "subtle", "enclosed", "outline"]}>
                {(variant) => (
                  <HStack key={variant}>
                    <Tabs.Root variant={variant} defaultValue="components">
                      <Tabs.List>
                        <Tabs.Trigger value="components">
                          <>Components</>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="hooks">
                          <>Hooks</>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="utilities">
                          <>Utilities</>
                        </Tabs.Trigger>
                      </Tabs.List>
                    </Tabs.Root>
                  </HStack>
                )}
              </For>
            </SimpleGrid>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="checkbox">
            <>Checkbox</>
          </Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack wrap="wrap" gap="8">
              <For each={["solid", "outline", "subtle"]}>
                {(variant: any) => (
                  <Stack key={variant} gap="5">
                    <Checkbox.Root variant={variant}>
                      <>Accept terms</>
                    </Checkbox.Root>
                    <Checkbox.Root defaultChecked variant={variant}>
                      <>Accept terms</>
                    </Checkbox.Root>
                  </Stack>
                )}
              </For>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="pagination">Pagination</Playground.SectionTitle>
          <Playground.SectionContent>
            <Pagination.Root count={20} pageSize={2} defaultPage={1}>
              <ButtonGroup variant="ghost" size="sm">
                <Pagination.PrevTrigger asChild>
                  <IconButton>
                    <LuChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>{page.value}</IconButton>
                  )}
                />

                <Pagination.NextTrigger asChild>
                  <IconButton>
                    <LuChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="radio">Radio</Playground.SectionTitle>
          <Playground.SectionContent>
            <Stack wrap="wrap" gap="6">
              <For each={["solid", "outline", "subtle"]}>
                {(variant) => (
                  <RadioGroup defaultValue="two" variant={variant} key={variant}>
                    <HStack gap="5">
                      <Radio value="one">Radio one</Radio>
                      <Radio value="two">Radio second</Radio>
                    </HStack>
                  </RadioGroup>
                )}
              </For>
            </Stack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="rating">Rating</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack wrap="wrap" gap="8">
              <Rating defaultValue={3} size="sm" />
              <Rating defaultValue={3} size="sm" colorPalette="gray" />
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="switch">Switch</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack wrap="wrap" gap="8">
              <Switch />
              <Switch defaultChecked />
              <Switch defaultChecked colorPalette="gray" />
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="blockquote">Blockquote</Playground.SectionTitle>
          <Playground.SectionContent>
            <Stack gap="8">
              <For each={["subtle", "solid"]}>
                {(variant) => (
                  <Blockquote key={variant} showDash cite="Uzumaki Naruto" variant={variant}>
                    If anyone thinks he is something when he is nothing, he deceives himself. Each one should test his
                    own actions. Then he can take pride in himself, without comparing himself to anyone else.
                  </Blockquote>
                )}
              </For>
            </Stack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="slider">Slider</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack gap="8" maxW="400px" w="full">
              <For each={["outline", "solid"]}>
                {(variant) => <Slider key={variant} flex="1" variant={variant} defaultValue={[50]} />}
              </For>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="progress-circle">Progress Circle</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack gap="8" maxW="400px" w="full">
              <ProgressCircleRoot size="md" value={30}>
                <ProgressCircleRing cap="round" />
              </ProgressCircleRoot>
              <ProgressCircleRoot size="md" value={30} colorPalette="gray">
                <ProgressCircleRing cap="round" />
              </ProgressCircleRoot>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="kbd">Kbd</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack gap="4" maxW="400px" w="full">
              <Kbd size="sm">⌘ C</Kbd>
              <Kbd size="md">⌘ C</Kbd>
              <Kbd size="lg">⌘ C</Kbd>
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="spinner">Spinner</Playground.SectionTitle>
          <Playground.SectionContent>
            <HStack gap="8" ps="4">
              <Spinner size="sm" color="colorPalette.solid" />
              <Spinner size="md" color="colorPalette.solid" />
              <Spinner size="lg" color="colorPalette.solid" />
            </HStack>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="steps">Steps</Playground.SectionTitle>
          <Playground.SectionContent>
            <Steps.Root defaultStep={1} count={steps.length}>
              <Steps.List>
                {steps.map((step, index) => (
                  <Steps.Item key={index} index={index} title={step.title}>
                    <Steps.Indicator />
                    <Steps.Title>{step.title}</Steps.Title>
                    <Steps.Separator />
                  </Steps.Item>
                ))}
              </Steps.List>

              {steps.map((step, index) => (
                <Steps.Content key={index} index={index}>
                  {step.description}
                </Steps.Content>
              ))}
              <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

              <ButtonGroup size="sm" variant="outline">
                <Steps.PrevTrigger asChild>
                  <Button>Prev</Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                  <Button>Next</Button>
                </Steps.NextTrigger>
              </ButtonGroup>
            </Steps.Root>
          </Playground.SectionContent>
        </Playground.Section>

        <Playground.Section>
          <Playground.SectionTitle id="timeline">Timeline</Playground.SectionTitle>
          <Playground.SectionContent>
            <Timeline.Root maxW="400px">
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuShip />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>Product Shipped</Timeline.Title>
                  <Timeline.Description>13th May 2021</Timeline.Description>
                  <Text textStyle="sm">
                    We shipped your product via <strong>FedEx</strong> and it should arrive within 3-5 business days.
                  </Text>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuCheck />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title textStyle="sm">Order Confirmed</Timeline.Title>
                  <Timeline.Description>18th May 2021</Timeline.Description>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuPackage />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title textStyle="sm">Order Delivered</Timeline.Title>
                  <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline.Root>
          </Playground.SectionContent>
        </Playground.Section>
      </Box>
    </Container>
  )
}
