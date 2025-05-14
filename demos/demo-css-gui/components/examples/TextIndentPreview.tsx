'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-text-indent-preview'
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

export function TextIndentPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='text-indent'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.TextIndent</Heading>

        <Center
          fontSize='10px'
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Stack>
          <styled.p styles={styles}>
            <chakra.span> A common stylistic choice for books and printed material. Indenting
              the first line of paragraphs is often used both digitally and in
              print when there is no vertical spacing between paragraphs. </chakra.span>
          </styled.p>
          <styled.p styles={styles}>
            <chakra.span>Indent text forwards or backwards with positive and negative values. Paragraphs that are flush often have indented text.</chakra.span>
          </styled.p>
          </Stack>
        </Center>


        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.TextIndent />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

