'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-cursor-preview'
import { defaultTheme } from '../../data/default-theme'
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';

export function CursorPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='cursor'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.Cursor</Heading>
        <Center
          height='100%'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <styled.p styles={styles}>
            <chakra.span fontSize={"24px"}  fontWeight={"500"}>Hover for cursor preview</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.Cursor />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

