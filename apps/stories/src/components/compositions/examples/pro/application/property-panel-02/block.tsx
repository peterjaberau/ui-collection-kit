'use client'

import { Card, Container, Fieldset } from '@chakra-ui/react'
import { Breadcrumbs } from './breadcrumbs'
import { ColorField, NumberField, SegmentField, SelectField } from './fields'

export const Block = () => {
  return (
    <Container maxW="420px" py="20">
      <Card.Root>
        <Card.Header>
          <Breadcrumbs crumbs={[{ label: 'Design', href: '/' }, { label: 'Heading' }]} />
        </Card.Header>
        <Card.Body gap="6">
          <Fieldset.Root spaceY="1.5">
            <Fieldset.Legend>Font</Fieldset.Legend>
            <Fieldset.Content flexDirection="row" gap="2">
              <SelectField
                placeholder="Select font"
                defaultValue="times-new-roman"
                options={[
                  { label: 'Times New Roman', value: 'times-new-roman' },
                  { label: 'Arial', value: 'arial' },
                  { label: 'Helvetica', value: 'helvetica' },
                  { label: 'Verdana', value: 'verdana' },
                  { label: 'Georgia', value: 'georgia' },
                  { label: 'Garamond', value: 'garamond' },
                  { label: 'Palatino', value: 'palatino' },
                ]}
              />
              <SelectField
                placeholder="Select weight"
                defaultValue="normal"
                options={[
                  { label: 'Normal', value: 'normal' },
                  { label: 'Semi-bold', value: 'semi-bold' },
                  { label: 'Bold', value: 'bold' },
                  { label: 'Extra-bold', value: 'extra-bold' },
                ]}
              />
            </Fieldset.Content>
          </Fieldset.Root>

          <NumberField label="Font Size" defaultValue="32" min={0} max={100} step={1} />

          <ColorField label="Color" defaultValue="#353535" />

          <SelectField
            sameWidth
            label="Casing"
            defaultValue="normal"
            options={[
              { label: 'Normal', value: 'normal' },
              { label: 'Uppercase', value: 'uppercase' },
              { label: 'Lowercase', value: 'lowercase' },
            ]}
          />

          <ColorField label="Link Color" defaultValue="#0000FF" />

          <NumberField label="Line Height" defaultValue="1.5" min={0} max={3} step={0.5} />

          <NumberField label="Letter Spacing" defaultValue="0" min={-2} max={2} step={0.05} />

          <SegmentField
            label="Align"
            defaultValue="left"
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
          />
        </Card.Body>
      </Card.Root>
    </Container>
  )
}
