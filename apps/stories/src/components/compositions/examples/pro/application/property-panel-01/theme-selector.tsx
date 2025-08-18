'use client'

import {
  ColorSwatch,
  createListCollection,
  Group,
  HStack,
  Select,
  Span,
  useSelectContext,
} from '@chakra-ui/react'
import { useMemo } from 'react'

interface ThemeSelectorProps {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  items?: Theme[]
}

export function ThemeSelector(props: ThemeSelectorProps) {
  const { defaultValue = 'pale', value, onChange, items = [] } = props
  const themes = useMemo(() => createListCollection({ items }), [items])
  return (
    <Select.Root
      collection={themes}
      size="sm"
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={(e) => onChange?.(e.value[0])}
    >
      <Select.HiddenSelect />
      <Select.Label>Select theme</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <ValueSwatch />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {themes.items.map((theme) => (
            <Select.Item item={theme} key={theme.value}>
              <HStack>
                <Select.ItemIndicator />
                {theme.label}
              </HStack>
              <Group attached maxW="80px" grow>
                <ColorSwatch value={theme.config.fontColor} size="sm" />
                <ColorSwatch value={theme.config.linkColor} size="sm" />
                <ColorSwatch value={theme.config.buttonColor} size="sm" />
              </Group>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

function ValueSwatch() {
  const api = useSelectContext()
  const [theme] = api.selectedItems as Theme[]
  return (
    <HStack gap="3">
      <Span>{theme?.label ?? 'Select theme'}</Span>
      {theme && (
        <HStack gap="1">
          <ColorSwatch value={theme.config.fontColor} size="sm" />
          <ColorSwatch value={theme.config.linkColor} size="sm" />
          <ColorSwatch value={theme.config.buttonColor} size="sm" />
        </HStack>
      )}
    </HStack>
  )
}

export interface Theme {
  label: string
  value: string
  config: {
    fontFamily: string
    fontColor: string
    linkColor: string
    buttonColor: string
    buttonTextColor: string
    backgroundColor: string
  }
}
