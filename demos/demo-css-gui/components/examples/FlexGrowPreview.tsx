'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-flex-grow-preview'
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

export function FlexGrowPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='flex-grow'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'

      >


        <Heading size='sm' padding={3}>Inputs.FlexGrow</Heading>
        <Center
          height='150px'
          fontWeight='900'
          fontSize='10px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
          display={"flex"}
          >


          <styled.p styles={styles}>

              <chakra.span maxHeight={100} minHeight={48} outline={1} p={2}  >1</chakra.span>
              <chakra.span flexGrow={1} flexBasis={0} width={100} maxHeight={100} minHeight={48} outline={1} p={2}>2</chakra.span>
              <chakra.span flexGrow={1} flexBasis={0} width={100} maxHeight={100} minHeight={48} outline={1} p={2}>3</chakra.span>

          </styled.p>
        </Center>

        <Box height='150px' padding={3}>

          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.FlexGrow  />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

