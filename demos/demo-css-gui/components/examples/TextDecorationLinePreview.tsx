'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-text-decoration-line-preview'
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

export function TextDecorationLinePreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='text-decoration-line'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'

      >
        <Heading size='sm' padding={3}>Inputs.TextDecorationLine</Heading>
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
            <chakra.span textDecorationThickness={4} textDecorationStyle={'wavy'} textDecorationColor={"#6465ff"}>Aa</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme} >
            <Inputs.TextDecorationLine />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}
