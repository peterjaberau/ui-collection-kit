'use client';
import { useState } from 'react';
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui';
import { defaultTheme } from '../../data/default-theme';
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react"
import {initialStyles} from "../../data/initial-styles-flex-wrap-preview"


export function FlexWrapPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='flex-wrap'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
      >
        <Heading size='sm' padding={3}>Inputs.FlexWrap</Heading>
          <Center
            height='150px'
            fontWeight='900'
            fontSize='10px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <styled.p styles={styles}>
              <Flex>
                <chakra.span>Aa</chakra.span>
                <chakra.span>Aa</chakra.span>
                <chakra.span>Aa</chakra.span>
                <chakra.span>Aa</chakra.span>
              </Flex>
            </styled.p>
          </Center>
          <Box height='150px' padding={3}>
            <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
              <Inputs.FlexWrap />
            </Editor>
          </Box>
          <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
);
}

