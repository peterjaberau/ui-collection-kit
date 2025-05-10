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

export function FontCopyPreview() {
  // const [styles, setStyles] = useState<any>(initialStyles);

  return (
    <>
      <Stack
        id='font-size'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm'>Inputs.FontSize</Heading>
        <Center
          height='150px'
          fontWeight='900'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          {/*<styled.p styles={styles}>*/}
          {/*  <chakra.span>Aa</chakra.span>*/}
          {/*</styled.p>*/}
        </Center>
        <Box height='150px' padding={3}>
          {/*<Editor styles={styles} onChange={setStyles} theme={defaultTheme}>*/}
          {/*  <Inputs.FontSize />*/}
          {/*</Editor>*/}
        </Box>
        {/*<Code>{codegen.css(styles)}</Code>*/}
      </Stack>
    </>
  );
}
