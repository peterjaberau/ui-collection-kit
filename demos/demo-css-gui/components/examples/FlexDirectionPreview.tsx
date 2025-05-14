'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-flex-direction-preview'
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

export function FlexDirectionPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='flex-direction'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.FlexDirection</Heading>
        <Center
          height='150px'
          fontWeight='900'
          fontSize='10px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          display={"flex"}
        >
          <styled.p styles={styles}>

            <chakra.span maxHeight={100} minHeight={48} outline={1} padding={8}  flexGrow={1} flexBasis={100} >1</chakra.span>
            <chakra.span flexGrow={1} flexShrink={1} flexBasis={100} width={100} maxHeight={100} minHeight={48} outline={1} p={2}>2</chakra.span>
            <chakra.span flexGrow={1} flexShrink={1}  flexBasis={100} width={100} maxHeight={100} minHeight={48} outline={1} p={2}>3</chakra.span>

          </styled.p>
        </Center>

        <Box height='150px' padding={3}>

          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.FlexDirection />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}



