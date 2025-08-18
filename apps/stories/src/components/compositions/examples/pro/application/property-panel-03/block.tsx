'use client'

import { Container, HStack, Stack } from '@chakra-ui/react'
import {
  RxArrowDown,
  RxBorderAll,
  RxBorderBottom,
  RxBorderDashed,
  RxBorderDotted,
  RxBorderLeft,
  RxBorderRight,
  RxBorderSolid,
  RxBorderTop,
  RxCross2,
  RxEyeClosed,
  RxEyeOpen,
  RxOverline,
  RxStrikethrough,
  RxTextAlignCenter,
  RxTextAlignJustify,
  RxTextAlignLeft,
  RxTextAlignRight,
  RxUnderline,
} from 'react-icons/rx'
import { ColorField, NumberField, SegmentField, SelectField } from './fields'
import { PropertySection } from './property-section'

export const Block = () => {
  return (
    <Container width="256px" py="20" px="0">
      <Stack boxShadow="inset" gap="0">
        <PropertySection title="Size">
          <HStack>
            <NumberField label="Width" defaultValue="16" />
            <NumberField label="Height" defaultValue="18" />
          </HStack>
          <HStack>
            <NumberField label="Min W" defaultValue="16" />
            <NumberField label="Min H" defaultValue="18" />
          </HStack>
          <HStack>
            <NumberField label="Max W" defaultValue="16" />
            <NumberField label="Max H" defaultValue="18" />
          </HStack>
          <SegmentField
            label="Overflow"
            defaultValue="hidden"
            options={[
              { label: <RxEyeOpen />, value: 'visible' },
              { label: <RxEyeClosed />, value: 'hidden' },
              { label: <RxArrowDown />, value: 'scroll' },
              { label: 'Auto', value: 'auto' },
            ]}
          />
        </PropertySection>

        <PropertySection title="Typography">
          <SelectField
            label="Font"
            defaultValue="Arial"
            options={[
              { label: 'Arial', value: 'Arial' },
              { label: 'Helvetica', value: 'Helvetica' },
              { label: 'Times New Roman', value: 'Times New Roman' },
              { label: 'Courier New', value: 'Courier New' },
              { label: 'Verdana', value: 'Verdana' },
              { label: 'Georgia', value: 'Georgia' },
              { label: 'Garamond', value: 'Garamond' },
              { label: 'Palatino', value: 'Palatino' },
              { label: 'Bookman', value: 'Bookman' },
              { label: 'Comic Sans MS', value: 'Comic Sans MS' },
            ]}
          />
          <SelectField
            label="Weight"
            defaultValue="400"
            options={[
              { label: '100 - Thin', value: '100' },
              { label: '200 - Extra Light', value: '200' },
              { label: '300 - Light', value: '300' },
              { label: '400 - Normal', value: '400' },
              { label: '500 - Medium', value: '500' },
              { label: '600 - Semi Bold', value: '600' },
              { label: '700 - Bold', value: '700' },
              { label: '800 - Extra Bold', value: '800' },
              { label: '900 - Black', value: '900' },
            ]}
          />
          <HStack>
            <NumberField label="Size" defaultValue="16" />
            <NumberField label="Height" defaultValue="18" />
          </HStack>
          <ColorField label="Color" defaultValue="#333" />
          <SegmentField
            label="Align"
            defaultValue="left"
            options={[
              { label: <RxTextAlignLeft />, value: 'left' },
              { label: <RxTextAlignCenter />, value: 'center' },
              { label: <RxTextAlignRight />, value: 'right' },
              { label: <RxTextAlignJustify />, value: 'justify' },
            ]}
          />
          <SegmentField
            label="Decor"
            defaultValue="none"
            options={[
              { label: <RxCross2 />, value: 'none' },
              { label: <RxUnderline />, value: 'underline' },
              { label: <RxStrikethrough />, value: 'line-through' },
              { label: <RxOverline />, value: 'overline' },
            ]}
          />
        </PropertySection>

        <PropertySection title="Border">
          <SegmentField
            label="Side"
            defaultValue="all"
            options={[
              { label: <RxBorderAll />, value: 'all' },
              { label: <RxBorderTop />, value: 'top' },
              { label: <RxBorderRight />, value: 'right' },
              { label: <RxBorderBottom />, value: 'bottom' },
              { label: <RxBorderLeft />, value: 'left' },
            ]}
          />
          <NumberField label="Width" defaultValue="1" min={0} max={20} step={1} />
          <SegmentField
            label="Style"
            defaultValue="solid"
            options={[
              { label: <RxBorderSolid />, value: 'solid' },
              { label: <RxBorderDashed />, value: 'dashed' },
              { label: <RxBorderDotted />, value: 'dotted' },
            ]}
          />
          <ColorField label="Color" defaultValue="#000000" />
        </PropertySection>
      </Stack>
    </Container>
  )
}
