'use client';
import { useState } from 'react'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-flex-shrink-preview'
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
import { text } from "node:stream/consumers"


export function FlexShrinkPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='flex-shrink'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
        width='100%'

      >


        <Heading size='sm' padding={3}>Inputs.FlexShrink</Heading>

          <Center
            height='150px'
            fontWeight='900'
            fontSize='10px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
            display={"flex"}
          >



            <styled.p styles={styles}>

              <chakra.span maxHeight={100} minHeight={48} outline={1} flexBasis={100} flexGrow={1} flexShrink={1} width={100} padding={8}  >1</chakra.span>
              <chakra.span maxHeight={100} minHeight={48} outline={1} p={2} flexBasis={100} flexGrow={1} flexShrink={1} width={100}  >2</chakra.span>
              <chakra.span maxHeight={100} minHeight={48} outline={1} p={2} flexBasis={100} flexGrow={1} flexShrink={1} width={100}  >3</chakra.span>

            </styled.p>
          </Center>

        <Box height='150px' padding={3}>

          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.FlexShrink  />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}








