'use client';
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';


import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-font-weight-preview'
import { defaultTheme } from '../../data/default-theme'

export function FontWeightPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>  <Stack
      id='font-weight'
      borderRadius='6px'
      borderWidth='1px'
      borderColor='black'
    >
      <Heading size='sm' padding={3}>Inputs.FontWeight</Heading>
      <Center
        height='150px'
        fontWeight='900'
        borderTopWidth='1px'
        borderBottomWidth='1px'
      >
        <styled.p styles={styles}>
          <chakra.span>Aa</chakra.span>
        </styled.p>
      </Center>
      <Box height='150px' padding={3}>
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <Inputs.FontWeight />
        </Editor>
      </Box>
      <Code>{codegen.css(styles)}</Code>
    </Stack>
      </>


  )
}
