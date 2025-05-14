'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-border-style-preview'
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

export function BorderStylePreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='border-style'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'

      >
        <Heading size='sm' padding={3}>Inputs.BorderStyle</Heading>
        <Center
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          position="relative"

        >
          <styled.p styles={styles}>
            <chakra.span borderColor={"#6465ff"}   padding={16}  borderWidth="12px" >Aa</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme} >
            <Inputs.BorderStyle />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}
