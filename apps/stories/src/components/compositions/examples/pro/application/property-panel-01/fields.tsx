'use client'

import {
  Box,
  ColorPicker,
  Field,
  HStack,
  Input,
  InputGroup,
  NativeSelect,
  NumberInput,
  parseColor,
  SegmentGroup,
} from '@chakra-ui/react'

interface BaseFieldProps {
  label: string
  name?: string
  invalid?: boolean
  disabled?: boolean
}

interface TextFieldProps extends BaseFieldProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function TextField(props: TextFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, value } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <Input
        name={name}
        size="sm"
        maxW="var(--max-width)"
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
  orientation?: 'horizontal' | 'vertical'
  options: Options
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  helperText?: string
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
    orientation = 'horizontal',
    helperText,
  } = props
  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <NativeSelect.Root
        size="sm"
        maxW={orientation === 'horizontal' ? 'var(--max-width)' : 'auto'}
        flex="1"
      >
        <NativeSelect.Field
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.currentTarget.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
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
  const { name, label, invalid, disabled, options, defaultValue, onChange, value } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <SegmentGroup.Root
        name={name}
        defaultValue={defaultValue}
        value={value}
        size="sm"
        flex="1"
        maxW="var(--max-width)"
        onValueChange={(e) => onChange?.(e.value as string)}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={options} flex="1" justifyContent="center" px="2" />
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
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <NumberInput.Root
        name={name}
        flex="1"
        maxW="var(--max-width)"
        size="sm"
        onValueChange={(e) => onChange?.(e.value)}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
      >
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
    </Field.Root>
  )
}

interface NumberFieldWithUnitProps extends NumberFieldProps {
  unit?: React.ReactNode
}

export function NumberFieldWithUnit(props: NumberFieldWithUnitProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, unit, min, max, step, value } =
    props

  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <HStack flex="1" maxW="var(--max-width)">
        <NumberInput.Root
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={defaultValue}
          size="sm"
          flex="1"
          onValueChange={(e) => onChange?.(e.value)}
        >
          <NumberInput.Control />
          <Box pos="absolute" top="1.5" fontSize="sm" right="8" color="fg.muted">
            {unit}
          </Box>
          <NumberInput.Input pe="14" />
        </NumberInput.Root>
      </HStack>
    </Field.Root>
  )
}

interface ColorFieldProps extends BaseFieldProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function ColorField(props: ColorFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, value } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <ColorPicker.Root
        name={name}
        value={value ? parseColor(value) : undefined}
        defaultValue={parseColor(defaultValue || 'rgba(0,0,0,1)')}
        format="hsla"
        flex="1"
        maxW="var(--max-width)"
        size="sm"
        onValueChange={(e) => onChange?.(e.valueAsString)}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <InputGroup
            endElement={
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
