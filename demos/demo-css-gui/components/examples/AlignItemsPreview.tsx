'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Editor, Inputs, styled, codegen } from '@ui-collection-kit/css-gui'
import { initialStyles } from '../../data/initial-styles-align-items-preview'
import { defaultTheme } from '../../data/default-theme'
import {
  chakra,
  Stack,
  Center,
  Code,
  Text,
  Heading,
  Box, HStack, Flex, VStack,
} from '@chakra-ui/react';

export function AlignItemsPreview() {
  const [styles, setStyles] = useState<any>(initialStyles)

  return (
    <>
      <Stack
        id='align-items'
        borderRadius='6px'
        borderWidth='1px'
        borderColor='black'
        width='100%'

      >

        <Heading size='sm' padding={3}>Inputs.AlignItems</Heading>
        <Stack>

          <Center

            height='150px'
            fontWeight='900'
            fontSize='10px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
            display='flex'
            flexWrap={"wrap"}
          >
          <styled.p styles={styles}>
            <Flex alignItems={"center"}>

              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"}  minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0}  >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0}  >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0}  >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>

            </Flex>
            <Flex alignItems={"center"}>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>
              <chakra.span height={"auto"} minHeight={12} outline={1} p={2}  bgColor={"blue.300"} margin={0} paddingTop={0} >1</chakra.span>
              <chakra.span  height={"auto"} minHeight={38} outline={1} p={2} bgColor={"blue.50"} margin={0} paddingTop={0} >2</chakra.span>


            </Flex>

          </styled.p>


          </Center>

        </Stack>
        <Box height='150px' padding={3}>

          <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
            <Inputs.AlignItems  />
          </Editor>
        </Box>
        <Code>{codegen.css(styles)}</Code>
      </Stack>
    </>
  );
}

/*

<VStack>

  <chakra.span  minHeight={48} outline={1} p={2} color={"blue.500"} bgColor={"blue.300"} >1</chakra.span>
  <chakra.span  minHeight={32} outline={1} p={2}  bgColor={"black"}>2</chakra.span>
  <chakra.span  minHeight={48} outline={1} p={2} color={"blue.500"} bgColor={"blue.300"} >1</chakra.span>
  <chakra.span  minHeight={32} outline={1} p={2} bgColor={"black"}>2</chakra.span>
</VStack>*/

