'use client';
import { Box, HStack, Stack, Button } from '@chakra-ui/react';
import { useRouter } from "next/navigation"

export function NavigationBarTop() {
  const navigate = useRouter();
  return (
    <>
      <Stack gap='4' p='10'>
        <HStack>
          <Button onClick={() => navigate.push('/chakra')}>Chakra Theme</Button>
          <Button onClick={() => navigate.push('/saas')}>SaaS Theme</Button>
          <Button onClick={() => navigate.push('/twenty')}>Twenty Theme</Button>
          <Button onClick={() => navigate.push('/webstudio')}>Webstudio Theme</Button>
          <Button onClick={() => navigate.push('/alignui')}>AlignUi Theme</Button>
        </HStack>

      </Stack>
    </>
  );
}
