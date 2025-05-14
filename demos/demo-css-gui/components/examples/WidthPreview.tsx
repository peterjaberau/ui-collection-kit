'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-width-preview'
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

export function WidthPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='width'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.Width</Heading>
        <Center
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          maxWidth={"100%"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          mb={"3"}
        >
          <styled.p styles={styles}>
            <chakra.span transition={'width .2s ease-in-out'} height={'32px'} background={"#6465ff"}>Aa</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.Width />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}
