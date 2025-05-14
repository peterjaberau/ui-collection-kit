'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-filter-preview'
import { defaultTheme } from '../../data/default-theme'
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box, Flex,
} from "@chakra-ui/react"

export function FilterPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='filter-blur'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.Filter</Heading>
        <Center
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          position='relative'
        >

          <styled.p styles={styles}>
            <chakra.span >
              <img src='https://source.unsplash.com/random' />
            </chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.Filter />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

