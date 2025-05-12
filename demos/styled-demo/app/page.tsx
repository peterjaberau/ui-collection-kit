'use client';
import React, { useState } from 'react';
import { Box, HStack, Stack, Button } from '@chakra-ui/react';
import { Button as SaasButton } from '@ui-collection-kit/saas/react';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack gap='4' p='10'>
        <HStack>
          <SaasButton>Default SaaS Button</SaasButton>
          <Button>Default Chakra Button</Button>
        </HStack>

        <HStack>
          <Button
            // @ts-ignore
            variant='glass'
            colorPalette='indigo'
          >
            Primary
          </Button>
          <Button variant='surface'>Secondary</Button>
        </HStack>
        <HStack>
          <Button variant='solid'>Solid</Button>
          <Button
            // @ts-ignore
            variant='glass'
          >
            Glass
          </Button>
          <Button variant='surface'>Surface</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='subtle'>Subtle</Button>
          <Button variant='ghost'>Ghost Chakra</Button>
          <SaasButton variant='ghost'>Ghost Saas</SaasButton>
        </HStack>
        <HStack>
          <Button variant='solid' colorPalette='neutral'>
            Solid
          </Button>
          <Button
            // @ts-ignore
            variant='glass'
            colorPalette='neutral'
          >
            Glass
          </Button>
          <Button variant='surface' colorPalette='neutral'>
            Surface
          </Button>
          <Button variant='outline' colorPalette='neutral'>
            Outline
          </Button>
          <Button variant='subtle' colorPalette='neutral'>
            Subtle
          </Button>
          <Button variant='ghost' colorPalette='neutral'>
            Ghost
          </Button>
        </HStack>
        <HStack>
          <Button variant='solid' colorPalette='blue'>
            Solid
          </Button>
          <Button
            // @ts-ignore
            variant='glass'
            colorPalette='blue'
          >
            Glass
          </Button>
          <Button variant='surface' colorPalette='blue'>
            Surface
          </Button>
          <Button variant='outline' colorPalette='blue'>
            Outline
          </Button>
          <Button variant='subtle' colorPalette='blue'>
            Subtle
          </Button>
          <Button variant='ghost' colorPalette='blue'>
            Ghost
          </Button>
        </HStack>
      </Stack>
    </>
  );
}
