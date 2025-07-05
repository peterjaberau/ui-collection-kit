import { Box, HStack, Stack, Button } from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <Stack gap='4' p='10'>
        <HStack>
          <Button variant={'solid'} >Solid</Button>
          <Button variant={'subtle'}>Subtle</Button>
          <Button variant={'surface'}>Surface</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'plain'}>Plain</Button>

        </HStack>
      </Stack>
    </>
  );
}
