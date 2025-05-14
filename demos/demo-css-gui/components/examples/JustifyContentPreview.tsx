'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-justify-content-preview'
import { defaultTheme } from '../../data/default-theme'
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box,
  Flex,
} from '@chakra-ui/react';

export function JustifyContentPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>

        <Stack
          id='justify-content'
          borderRadius='6px'
          borderWidth='1px'
          borderColor='black'
        >
          <Heading size='sm' padding={3}>Inputs.JustifyContent</Heading>
          <Center
            height='150px'
            fontWeight='900'
            fontSize='10px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
             <styled.p styles={styles}>
               <Flex gap="4">
              <chakra.span height={"auto"} minHeight={32} outline={1} p={2}  bgColor={"blue.300"}>Aa</chakra.span>
                 <chakra.span height={"auto"} minHeight={32} outline={1} p={2}  bgColor={"blue.300"}>Aa</chakra.span>
                 <chakra.span height={"auto"} minHeight={32} outline={1} p={2}  bgColor={"blue.300"}>Aa</chakra.span>
                 <chakra.span height={"auto"} minHeight={32} outline={1} p={2}  bgColor={"blue.300"}>Aa</chakra.span>
               </Flex>
            </styled.p>
          </Center>
          <Box height='150px' padding={3}>
            <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
              <Inputs.JustifyContent />
            </Editor>
          </Box>
          <Code>{codegen.css(styles)}</Code>
        </Stack>
      </>
      );
      }