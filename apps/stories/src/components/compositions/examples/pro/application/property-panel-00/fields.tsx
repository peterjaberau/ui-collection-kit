'use client'

import {
  ColorPicker,
  Field,
  HStack,
  Input,
  NativeSelect,
  NumberInput,
  parseColor,
  SegmentGroup,
  Span,
  useNumberInput,
} from '@chakra-ui/react'

interface BaseFieldProps {
  label: string
  name?: string
  invalid?: boolean
  disabled?: boolean
}

interface TextFieldProps extends BaseFieldProps {
  placeholder?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TextField(props: TextFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <Input
        name={name}
        size="sm"
        maxW="var(--max-width)"
        flex="1"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Field.Root>
  )
}

type Options = Array<{ label: React.ReactNode; value: string }>

interface SelectFieldProps extends BaseFieldProps {
  options: Options
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function SelectField(props: SelectFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, options, ...rest } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <NativeSelect.Root size="sm" maxW="var(--max-width)" flex="1" {...rest}>
        <NativeSelect.Field name={name} defaultValue={defaultValue} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  )
}

interface SegmentFieldProps extends BaseFieldProps {
  options: Options
  defaultValue?: string
  onChange?: (event: string) => void
}

export function SegmentField(props: SegmentFieldProps) {
  const { name, label, invalid, disabled, options, defaultValue, onChange } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <SegmentGroup.Root
        name={name}
        defaultValue={defaultValue}
        size="sm"
        flex="1"
        maxW="var(--max-width)"
        onValueChange={(e) => onChange?.(e.value ?? '')}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={options} flex="1" justifyContent="center" px="2" />
      </SegmentGroup.Root>
    </Field.Root>
  )
}

interface NumberFieldProps extends BaseFieldProps {
  defaultValue?: string
  onChange?: (value: string) => void
  min?: number
  max?: number
  step?: number
}

export function NumberField(props: NumberFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, min, max, step } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <NumberInput.Root
        name={name}
        defaultValue={defaultValue}
        flex="1"
        maxW="var(--max-width)"
        size="sm"
        className="group"
        onValueChange={(e) => onChange?.(e.value)}
        min={min}
        max={max}
        step={step}
      >
        <NumberInput.Control opacity={{ base: '0', _groupHover: '1' }} />
        <NumberInput.Input />
      </NumberInput.Root>
    </Field.Root>
  )
}

interface NumberFieldWithUnitProps extends NumberFieldProps {
  units?: Options
}

export function NumberFieldWithUnit(props: NumberFieldWithUnitProps) {
  const { name, label, invalid, disabled, defaultValue, onChange, units, min, max, step } = props

  const store = useNumberInput({
    name,
    defaultValue,
    min,
    max,
    step,
    onValueChange(details) {
      onChange?.(details.value)
    },
  })

  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <HStack flex="1" maxW="var(--max-width)">
        <NumberInput.RootProvider value={store} size="sm" flex="1" className="group">
          <NumberInput.Control opacity={{ base: '0', _groupHover: '1' }} />
          <NumberInput.Input />
        </NumberInput.RootProvider>
        <NativeSelect.Root size="sm" flex="1" alignSelf="stretch">
          <NativeSelect.Field pe="1" height="9">
            {units?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>
    </Field.Root>
  )
}

interface ColorFieldProps extends BaseFieldProps {
  defaultValue?: string
  onChange?: (value: string) => void
}

export function ColorField(props: ColorFieldProps) {
  const { name, label, invalid, disabled, defaultValue, onChange } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label color="fg.muted">{label}</Field.Label>
      <ColorPicker.Root
        name={name}
        defaultValue={defaultValue ? parseColor(defaultValue) : undefined}
        flex="1"
        maxW="var(--max-width)"
        size="sm"
        onValueChange={(e) => onChange?.(e.valueAsString)}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <ColorPicker.Trigger px="2" flex="1" justifyContent="flex-start">
            <ColorPicker.ValueSwatch boxSize="4.5" />
            <Span textStyle="sm">
              <ColorPicker.Context>
                {(api) => api.value.toString('hex').slice(1)}
              </ColorPicker.Context>
            </Span>
          </ColorPicker.Trigger>
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
