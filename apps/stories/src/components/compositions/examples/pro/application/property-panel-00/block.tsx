'use client'

import { type ButtonProps, Container, IconButton, Stack } from '@chakra-ui/react'
import { forwardRef } from 'react'
import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuAlignVerticalDistributeCenter,
  LuAlignVerticalDistributeEnd,
  LuAlignVerticalDistributeStart,
  LuArrowLeftRight,
  LuArrowUpDown,
  LuPlus,
} from 'react-icons/lu'
import {
  ColorField,
  NumberField,
  NumberFieldWithUnit,
  SegmentField,
  SelectField,
  TextField,
} from './fields'
import { PropertySection } from './property-section'

export const Block = () => {
  return (
    <Container maxW="sm" py="20">
      <Stack boxShadow="inset" px="4" pt="4" pb="6">
        <PropertySection title="Position" action={<AddButton />}>
          <SelectField
            label="Type"
            options={[
              { label: 'Relative', value: 'relative' },
              { label: 'Absolute', value: 'absolute' },
              { label: 'Fixed', value: 'fixed' },
              { label: 'Sticky', value: 'sticky' },
            ]}
          />
        </PropertySection>
        <PropertySection title="Layout" action={<AddButton />}>
          <SelectField
            label="Type"
            defaultValue="stack"
            options={[
              { label: 'Stack', value: 'stack' },
              { label: 'Grid', value: 'grid' },
            ]}
          />
          <SegmentField
            label="Direction"
            defaultValue="horizontal"
            options={[
              { label: <LuArrowLeftRight />, value: 'horizontal' },
              { label: <LuArrowUpDown />, value: 'vertical' },
            ]}
          />
          <SelectField
            label="Distribution"
            options={[
              { label: 'Center', value: 'center' },
              { label: 'Start', value: 'flex-start' },
              { label: 'End', value: 'flex-end' },
              { label: 'Between', value: 'space-between' },
              { label: 'Around', value: 'space-around' },
            ]}
          />
          <SegmentField
            label="Align"
            defaultValue="center"
            options={[
              { label: <LuAlignVerticalDistributeCenter />, value: 'center' },
              { label: <LuAlignVerticalDistributeStart />, value: 'start' },
              { label: <LuAlignVerticalDistributeEnd />, value: 'end' },
            ]}
          />
        </PropertySection>
        <PropertySection title="Text" action={<AddButton />}>
          <TextField label="Content" defaultValue="Chakra UI" />
          <NumberField label="Spacing" defaultValue="10" />
          <ColorField label="Color" defaultValue="#eb5e41" />
          <NumberFieldWithUnit
            label="Size"
            defaultValue="16"
            units={[
              { label: 'Pixels', value: 'px' },
              { label: 'Rem', value: 'rem' },
              { label: 'Em', value: 'em' },
            ]}
          />
          <NumberFieldWithUnit
            label="Letter"
            defaultValue="1"
            units={[
              { label: 'Pixels', value: 'px' },
              { label: 'Rem', value: 'rem' },
              { label: 'Em', value: 'em' },
            ]}
          />
          <SegmentField
            label="Align"
            options={[
              { label: <LuAlignCenter />, value: 'center' },
              { label: <LuAlignLeft />, value: 'start' },
              { label: <LuAlignRight />, value: 'end' },
              { label: <LuAlignJustify />, value: 'justify' },
            ]}
          />
        </PropertySection>
      </Stack>
    </Container>
  )
}

const AddButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <IconButton variant="ghost" size="xs" ref={ref} colorPalette="gray" {...props}>
      <LuPlus />
    </IconButton>
  )
})
