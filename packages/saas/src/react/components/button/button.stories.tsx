import React from 'react'

import { Box, HStack, Stack, Text } from '@chakra-ui/react'

import { Button } from './index'

export default {
  title: 'SaasUI/Components/Button',
  component: Button,
}

export const Default = {
  args: {
    children: 'Default button',
  },
}

export const Variants = {
  render: () => (
    <Stack gap="4">
      <HStack>

        <Button
          // @ts-ignore
          variant="glass" colorPalette="indigo">
          Primary
        </Button>
        <Button variant="surface">Secondary</Button>
      </HStack>
      <HStack>
        <Button variant="solid">Solid</Button>
        <Button
          // @ts-ignore
          variant="glass">Glass</Button>
        <Button variant="surface">Surface</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
      </HStack>
      <HStack>
        <Button variant="solid" colorPalette="neutral">
          Solid
        </Button>
        <Button
          // @ts-ignore
          variant="glass" colorPalette="neutral">
          Glass
        </Button>
        <Button variant="surface" colorPalette="neutral">
          Surface
        </Button>
        <Button variant="outline" colorPalette="neutral">
          Outline
        </Button>
        <Button variant="subtle" colorPalette="neutral">
          Subtle
        </Button>
        <Button variant="ghost" colorPalette="neutral">
          Ghost
        </Button>
      </HStack>
      <HStack>
        <Button variant="solid" colorPalette="blue">
          Solid
        </Button>
        <Button
          // @ts-ignore
          variant="glass" colorPalette="blue">
          Glass
        </Button>
        <Button variant="surface" colorPalette="blue">
          Surface
        </Button>
        <Button variant="outline" colorPalette="blue">
          Outline
        </Button>
        <Button variant="subtle" colorPalette="blue">
          Subtle
        </Button>
        <Button variant="ghost" colorPalette="blue">
          Ghost
        </Button>
      </HStack>

      <HStack>
        <Button variant="solid" colorPalette="red">
          Solid
        </Button>
        <Button
          // @ts-ignore
          variant="glass" colorPalette="red">
          Glass
        </Button>
        <Button variant="surface" colorPalette="red">
          Surface
        </Button>
        <Button variant="outline" colorPalette="red">
          Outline
        </Button>
        <Button variant="subtle" colorPalette="red">
          Subtle
        </Button>
        <Button variant="ghost" colorPalette="red">
          Ghost
        </Button>
      </HStack>

      <HStack>
        <Button variant="solid" colorPalette="green">Sign in</Button>
      </HStack>


    </Stack>
  ),
}

export const Sizes = {
  render: () => (
    <Stack>
      <Text textStyle="xl">default</Text>
      <HStack>
        <Button size="xl">Large</Button>
        <Button size="lg">Medium</Button>
        <Button size="md">Small</Button>
        <Button size="sm">XSmall</Button>
        <Button size="xs">XXSmall</Button>

      </HStack>
      <Text textStyle="xl">outline = stroke</Text>
      <HStack>
        <Button size="xl" variant={"outline"}>Large</Button>
        <Button size="lg" variant={"outline"}>Medium</Button>
        <Button size="md" variant={"outline"}>Small</Button>
        <Button size="sm" variant={"outline"}>XSmall</Button>
        <Button size="xs" variant={"outline"}>XXSmall</Button>
      </HStack>
      <Text textStyle="xl">subtle = lighter</Text>
      <HStack>

        <Button size="xl" variant={"subtle"}>Large</Button>
        <Button size="lg" variant={"subtle"}>Medium</Button>
        <Button size="md" variant={"subtle"}>Small</Button>
        <Button size="sm" variant={"subtle"}>XSmall</Button>
        <Button size="xs" variant={"subtle"}>XXSmall</Button>
      </HStack>
      <Text textStyle="xl">ghost = ghost</Text>
      <HStack>
        <Button size="xl" variant={"ghost"}>Large</Button>
        <Button size="lg" variant={"ghost"}>Medium</Button>
        <Button size="md" variant={"ghost"}>Small</Button>
        <Button size="sm" variant={"ghost"}>XSmall</Button>
        <Button size="xs" variant={"ghost"}>XXSmall</Button>
      </HStack>
    </Stack>




  ),




  }
