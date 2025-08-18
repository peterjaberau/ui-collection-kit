'use client'

import {
  ColorPicker,
  createListCollection,
  Field,
  HStack,
  Input,
  NumberInput,
  parseColor,
  SegmentGroup,
  Select,
  Span,
} from '@chakra-ui/react'
import { useMemo } from 'react'

interface BaseFieldProps {
  label: string
  name?: string
  invalid?: boolean
  disabled?: boolean
}

const FieldLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Field.Label
      color="fg.muted"
      textStyle="xs"
      fontWeight="normal"
      minWidth="var(--field-label-width)"
    >
      {children}
    </Field.Label>
  )
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
      <FieldLabel>{label}</FieldLabel>
      <Input
        name={name}
        size="sm"
        flex="1"
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </Field.Root>
  )
}

type Options = Array<{ label: React.ReactNode; value: string }>

interface SelectFieldProps extends BaseFieldProps {
  options: Options
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function SelectField(props: SelectFieldProps) {
  const {
    name,
    label,
    invalid,
    disabled,
    defaultValue,
    onChange,
    options,
    value,
    placeholder = 'Select',
  } = props

  const collection = useMemo(() => {
    return createListCollection({ items: options })
  }, [options])

  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <FieldLabel>{label}</FieldLabel>
      <Select.Root
        collection={collection}
        name={name}
        size="xs"
        defaultValue={defaultValue ? [defaultValue] : undefined}
        value={value ? [value] : undefined}
        onValueChange={(e) => onChange?.(e.value[0])}
        flex="1"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger minHeight="6">
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
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
  onChange?: (value: string) => void
}

export function SegmentField(props: SegmentFieldProps) {
  const { name, label, invalid, disabled, options, defaultValue, onChange, value } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <FieldLabel>{label}</FieldLabel>
      <SegmentGroup.Root
        name={name}
        defaultValue={defaultValue}
        size="xs"
        flex="1"
        p="0.5"
        onValueChange={(e) => onChange?.(e.value as string)}
        value={value}
      >
        <SegmentGroup.Items
          items={options}
          flex="1"
          justifyContent="center"
          px="2"
          rounded="l1"
          _checked={{ bg: 'bg.panel', shadow: 'xs' }}
        />
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
  const { name, label, invalid, disabled, defaultValue, onChange, min, max, step, value } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <FieldLabel>{label}</FieldLabel>
      <NumberInput.Root
        name={name}
        defaultValue={defaultValue}
        flex="1"
        size="xs"
        value={value}
        onValueChange={(e) => onChange?.(e.value)}
        min={min}
        max={max}
        step={step}
      >
        <NumberInput.Input height="6" />
      </NumberInput.Root>
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
      <FieldLabel>{label}</FieldLabel>
      <ColorPicker.Root
        name={name}
        defaultValue={defaultValue ? parseColor(defaultValue) : undefined}
        value={value ? parseColor(value) : undefined}
        flex="1"
        size="xs"
        onValueChange={(e) => onChange?.(e.valueAsString)}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <ColorPicker.Trigger px="1" flex="1" minH="6" justifyContent="flex-start">
            <ColorPicker.ValueSwatch boxSize="3.5" />
            <Span textStyle="xs">
              <ColorPicker.Context>{(api) => api.value.toString('hex')}</ColorPicker.Context>
            </Span>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content colorPalette="gray" maxW="240px">
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="sm" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </ColorPicker.Root>
    </Field.Root>
  )
}
