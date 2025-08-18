import { Field, HStack, Input, Slider, Stack, Text } from '@chakra-ui/react'

export const ModelParamaters = () => {
  return (
    <Stack gap="6" width="full" px="8" py="6">
      <Text fontWeight="semibold">Model parameters</Text>
      {items.map(({ label, defaultValue, min, max, step }) => (
        <Slider.Root
          key={label}
          thumbAlignment="center"
          size="sm"
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
        >
          <HStack justify="space-between">
            <Slider.Label fontWeight="medium">{label}</Slider.Label>
            <Slider.ValueText />
          </HStack>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>
      ))}
      <Field.Root>
        <Field.Label>Stop sequences</Field.Label>
        <Input bg="bg" placeholder="Enter stop sequences" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Pre response text</Field.Label>
        <Input bg="bg" placeholder="Enter pre response text" />
      </Field.Root>
    </Stack>
  )
}

const items = [
  { label: 'Max tokens', defaultValue: [794], min: 50, max: 2048, step: 24 },
  { label: 'Temperature', defaultValue: [0.8], min: 0, max: 2.4, step: 0.01 },
  { label: 'Top probability', defaultValue: [0.64], min: 0, max: 1, step: 0.01 },
  { label: 'Frequency penalty', defaultValue: [0.5], min: 0, max: 2, step: 0.01 },
]
