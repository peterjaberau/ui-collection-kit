import {
  Avatar,
  Box,
  Button,
  Code,
  Text,
  chakra,
  Flex,
  Container,
  For,
  HStack,
  Kbd,
  SimpleGrid,
  Spinner,
  Stack,
  Tabs,
} from '@chakra-ui/react';
import { ThemePanel } from '#components/system/theme-panel';
import { cookies } from 'next/headers';
import { LuArrowRight } from 'react-icons/lu';

const buttonVariants = [
  'solid',
  'outline',
  'ghost',
  'subtle',
  'surface',
  'plain',
] as const;

export default async function Page() {

  const cookieStore = await cookies();
  const accentColor = cookieStore.get('chakra-accent-color');
  const fontFamily = cookieStore.get('chakra-font');
  const radius = cookieStore.get('chakra-radius');

  return (
    <Container display='flex' gap='10'>
      <Box flex='1' minHeight='var(--content-height)' overflow='auto'>
        {/*Playground Section*/}
        <Flex direction='column' gap='5' mb={{ base: '5', sm: '8' }}>
          <Stack align={'flex-start'} gap='5'>
            <Text color='fg.muted' textStyle='sm' fontWeight='medium'>
              Accent Colors
            </Text>
            <HStack>
              <For each={buttonVariants}>
                {(variant) => (
                  <Button key={variant} variant={variant}>
                    Click <LuArrowRight />
                  </Button>
                )}
              </For>
            </HStack>
          </Stack>

          <Stack align={'flex-start'} gap='5'>
            <Text color='fg.muted' textStyle='sm' fontWeight='medium'>
              Gray
            </Text>
            <HStack colorPalette='gray'>
              <For each={buttonVariants}>
                {(variant) => (
                  <Button key={variant} variant={variant}>
                    Click <LuArrowRight />
                  </Button>
                )}
              </For>
            </HStack>
          </Stack>
        </Flex>
      </Box>

      <Box pt='8' top='24' right='12' hideBelow='md'>
        <ThemePanel
          accentColor={accentColor?.value}
          fontFamily={fontFamily?.value}
          radius={radius?.value}
        />
      </Box>
    </Container>
  );
}
