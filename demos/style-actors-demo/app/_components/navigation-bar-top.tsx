'use client';
import { Box, HStack, Stack, Button } from '@chakra-ui/react';
import { useStylingActor } from '../../actors/hooks/useStylingActor';

export function NavigationBarTop() {
  const { sendToStyling } = useStylingActor();

  const setActiveStyle = (value: any) => {
    sendToStyling({ type: 'SET_ACTIVE_STYLE', value: value})
  }

  return (
    <>
      <Stack gap='4' p='10'>
        <HStack>
          <Button onClick={() => setActiveStyle('defaut')}>Default Style</Button>
          <Button onClick={() => setActiveStyle('saas')}>SaaS Style</Button>
          <Button onClick={() => setActiveStyle('alignui')}>Alignui Style</Button>
        </HStack>

      </Stack>
    </>
  );
}
