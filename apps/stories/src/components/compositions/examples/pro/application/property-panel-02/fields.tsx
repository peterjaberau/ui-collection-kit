'use client'

import {
  ColorPicker,
  createListCollection,
  Field,
  Fieldset,
  HStack,
  Input,
  InputGroup,
  NumberInput,
  parseColor,
  SegmentGroup,
  Select,
  Slider,
  useControllableState,
} from '@chakra-ui/react'
import { useMemo } from 'react'

interface BaseFieldProps {
  label?: string
  name?: string
  invalid?: boolean
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
}

interface TextFieldProps extends BaseFieldProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function TextField(props: TextFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, value, orientation } = props
  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <Input
        name={name}
        size="sm"
        flex="1"
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        value={value}
      />
    </Field.Root>
  )
}

type Options = Array<{ label: React.ReactNode; value: string }>

interface SelectFieldProps extends BaseFieldProps {
  options: Options
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  sameWidth?: boolean
}

export function SelectField(props: SelectFieldProps) {
  const {
    name,
    label,
    invalid,
    disabled,
    defaultValue,
    onChange,
    value,
    options,
    orientation,
    placeholder = 'Select',
    sameWidth = false,
  } = props

  const collection = useMemo(() => {
    return createListCollection({ items: options })
  }, [options])

  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <Select.Root
        collection={collection}
        name={name}
        size="sm"
        defaultValue={defaultValue ? [defaultValue] : undefined}
        value={value ? [value] : undefined}
        onValueChange={(e) => onChange?.(e.value[0])}
        positioning={{ sameWidth }}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Positioner>
          <Select.Content minW="48">
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </Field.Root>
  )
}

interface SegmentFieldProps extends BaseFieldProps {
  options: Options
  value?: string
  defaultValue?: string
  onChange?: (event: string) => void
}

export function SegmentField(props: SegmentFieldProps) {
  const { name, label, invalid, disabled, options, defaultValue, onChange, value, orientation } =
    props
  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <SegmentGroup.Root
        name={name}
        defaultValue={defaultValue}
        size="md"
        flex="1"
        w="full"
        value={value}
        onValueChange={(e) => onChange?.(e.value as string)}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={options} minH="8" flex="1" justifyContent="center" />
      </SegmentGroup.Root>
    </Field.Root>
  )
}

interface NumberFieldProps extends BaseFieldProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  min?: number
  max?: number
  step?: number
}

export function NumberField(props: NumberFieldProps) {
  const { name, label, invalid, disabled, defaultValue, value, onChange, min, max, step } = props

  const [valueState, setValueState] = useControllableState({
    defaultValue,
    value,
    onChange,
  })

  return (
    <Fieldset.Root invalid={invalid} disabled={disabled} spaceY="1.5">
      {label && <Fieldset.Legend>{label}</Fieldset.Legend>}
      <Fieldset.Content display="flex" gap="2" flexDirection="row" alignItems="center">
        <Slider.Root
          flex="2"
          min={min}
          max={max}
          step={step}
          value={valueState != null ? [Number.parseFloat(valueState)] : undefined}
          onValueChange={(e) => setValueState(e.value[0].toString())}
          variant="solid"
          size="sm"
          thumbAlignment="center"
          borderWidth="1px"
          px="2"
          rounded="l2"
        >
          <Slider.Control minH="9">
            <Slider.Track bg="bg.emphasized">
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>

        <NumberInput.Root
          name={name}
          flex="1"
          size="sm"
          min={min}
          max={max}
          step={step}
          value={valueState}
          defaultValue={defaultValue}
          onValueChange={(e) => setValueState(e.value)}
        >
          <NumberInput.Input />
        </NumberInput.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

interface ColorFieldProps extends BaseFieldProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function ColorField(props: ColorFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, value, orientation } = props

  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <ColorPicker.Root
        name={name}
        value={value ? parseColor(value) : undefined}
        defaultValue={defaultValue ? parseColor(defaultValue) : undefined}
        format="hsla"
        flex="1"
        width="full"
        size="sm"
        onValueChange={(e) => onChange?.(e.valueAsString)}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <InputGroup
            startElementProps={{ pointerEvents: 'auto' }}
            startElement={
              <ColorPicker.Trigger data-fit-content>
                <ColorPicker.ValueSwatch boxSize="4.5" />
              </ColorPicker.Trigger>
            }
          >
            <ColorPicker.Input />
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content colorPalette="gray">
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="sm" variant="outline" />
              <ColorPicker.Sliders />
              <ColorPicker.ValueSwatch />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </ColorPicker.Root>
    </Field.Root>
  )
}
