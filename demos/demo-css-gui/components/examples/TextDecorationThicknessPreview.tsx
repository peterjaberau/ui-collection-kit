'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-text-decoration-thickness-preview'
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

export function TextDecorationThicknessPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
       <Stack
        id='text-decoration-thickness'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'

      >
        <Heading size='sm' padding={3}>Inputs.TextDecorationThickness</Heading>
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
            <chakra.span textDecorationStyle={'wavy'} textDecorationLine={'underline overline'} textDecorationColor={"#6465ff"}>Aa</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme} >
            <Inputs.TextDecorationThickness />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
      </>
      );
      }

