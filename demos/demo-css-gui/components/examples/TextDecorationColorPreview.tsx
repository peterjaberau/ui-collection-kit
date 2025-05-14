'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-text-decoration-color-preview'
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
import { underline } from "next/dist/lib/picocolors"

export function TextDecorationColorPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='text-decoration-color'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'

      >
        <Heading size='sm' padding={3}>Inputs.TextDecorationColor</Heading>
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
            <chakra.span textDecoration={4} textDecorationStyle={"wavy"} textDecorationLine={"underline overline"} >Aa</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme} >
            <Inputs.TextDecorationColor />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

