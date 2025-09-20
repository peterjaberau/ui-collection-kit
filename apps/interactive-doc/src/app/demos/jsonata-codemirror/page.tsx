"use client"
import { Flex, Container, SimpleGrid, Center } from "@chakra-ui/react"

import { JsonataPlayground } from "./JsonataPlayground";


export default function Page() {
  return (



    <Container fluid>
    <Center w={'full'} gap={4} >
      <SimpleGrid w={'full'} columns={3} bg={'red'} gap={4}>
        <JsonataPlayground id={1} />
      </SimpleGrid>


    </Center>
    </Container>
  )
}
