'use client'

import { Container, Stack } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'
import { ColorField, NumberFieldWithUnit, SelectField } from './fields'
import { PropertySection } from './property-section'
import { type Theme, ThemeSelector } from './theme-selector'

export const Block = () => {
  const [theme, setTheme] = useState<Theme | null>(themes[0])
  const setThemeKey = useCallback((key: keyof Theme['config'], value: string) => {
    flushSync(() => {
      setTheme((prev) => {
        if (!prev) return null
        return { ...prev, config: { ...prev.config, [key]: value } }
      })
    })
  }, [])
  const setThemeValue = useCallback((value: string) => {
    const newTheme = themes.find((t) => t.value === value)
    if (newTheme) setTheme(newTheme)
  }, [])

  return (
    <Container maxW="420px" py="20">
      <Stack boxShadow="inset" p="6" gap="6" rounded="l3">
        <ThemeSelector
          items={themes}
          defaultValue={themes[0].value}
          value={theme?.value}
          onChange={(value) => setThemeValue(value)}
        />
        <PropertySection title="Body" info="The style of the property panel">
          <ColorField
            label="Background Color"
            defaultValue={theme?.config.backgroundColor}
            onChange={(value) => setThemeKey('backgroundColor', value)}
          />
          <NumberFieldWithUnit label="Max Width" unit="px" defaultValue="600" />
        </PropertySection>
        <PropertySection title="Elements" info="How the button should look">
          <SelectField
            label="Font Family"
            value={theme?.config.fontFamily}
            onChange={(value) => setThemeKey('fontFamily', value)}
            orientation="vertical"
            options={[
              { label: 'Helvetica', value: 'helvetica' },
              { label: 'Arial', value: 'arial' },
              { label: 'Sans-serif', value: 'sans-serif' },
              { label: 'Inter', value: 'inter' },
              { label: 'Roboto', value: 'roboto' },
              { label: 'Poppins', value: 'poppins' },
              { label: 'Montserrat', value: 'montserrat' },
              { label: 'Open Sans', value: 'open-sans' },
              { label: 'Lato', value: 'lato' },
              { label: 'Raleway', value: 'raleway' },
            ]}
            helperText="Helvetica, Arial, sans-serif"
          />
          <ColorField
            label="Font Color"
            value={theme?.config.fontColor}
            onChange={(value) => setThemeKey('fontColor', value)}
          />
          <ColorField
            label="Link Color"
            value={theme?.config.buttonColor}
            onChange={(value) => setThemeKey('buttonColor', value)}
          />
          <ColorField
            label="Button Color"
            value={theme?.config.buttonColor}
            onChange={(value) => setThemeKey('buttonColor', value)}
          />
          <ColorField
            label="Button Text Color"
            value={theme?.config.buttonTextColor}
            onChange={(value) => setThemeKey('buttonTextColor', value)}
          />
          <ColorField
            label="Section Background"
            value={theme?.config.backgroundColor}
            onChange={(value) => setThemeKey('backgroundColor', value)}
          />
        </PropertySection>
      </Stack>
    </Container>
  )
}

export const themes: Theme[] = [
  {
    label: 'Pale',
    value: 'pale',
    config: {
      fontFamily: 'sans-serif',
      fontColor: '#212529',
      linkColor: '#4361EE',
      buttonColor: '#7209B7',
      buttonTextColor: '#FFFFFF',
      backgroundColor: '#F8F9FA',
    },
  },
  {
    label: 'Soft',
    value: 'soft',
    config: {
      fontFamily: 'inter',
      fontColor: '#ADB5BD',
      linkColor: '#7209B7',
      buttonColor: '#F72585',
      buttonTextColor: '#FFFFFF',
      backgroundColor: '#F8F9FA',
    },
  },
  {
    label: 'Bold',
    value: 'bold',
    config: {
      fontFamily: 'poppins',
      fontColor: '#4361EE',
      linkColor: '#F72585',
      backgroundColor: '#F8F9FA',
      buttonColor: '#3A0CA3',
      buttonTextColor: '#FFFFFF',
    },
  },
  {
    label: 'Vivid',
    value: 'vivid',
    config: {
      fontFamily: 'montserrat',
      fontColor: '#F72585',
      linkColor: '#3A0CA3',
      backgroundColor: '#F8F9FA',
      buttonColor: '#4361EE',
      buttonTextColor: '#FFFFFF',
    },
  },
]
