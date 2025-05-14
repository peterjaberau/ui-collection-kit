'use client';
import { useState } from 'react';
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui';
// import { initialStyles } from '../../data/initial-styles-font-size-preview';
import { defaultTheme } from '../../data/default-theme';
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';


export function TextAlignPreview() {
  const [styles, setStyles] = useState<any>({})

  return (
    <>
      <Stack
        id='text-align'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.TextAlign</Heading>
        <Center
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <styled.p styles={styles} >
            <chakra.span > The parameters comprise sequences which are theoretically infinite
              but limits are, of course, set to them in practice.</chakra.span>
          </styled.p>
        </Center>
        <Box height='150px' padding={3}>
          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.TextAlign />
          </Editor>
        </Box>
        <Code> {codegen.css(styles)}</Code>
      </Stack>
    </>


  )
}
