"use client"
import { Flex, Container, HStack, Center } from "@chakra-ui/react"
import { Grid } from "./components/grid"
import { LogViewer } from "./components/logviewer"



export default function Page() {
  return (



    <Center css={{ height: "100vh", maxHeight: "100vh", width: "full", bg: "red" }} gap={4}>
      <Grid/>

         <LogViewer eventName={'mobxGridCellChanged'} />

    </Center>
  )
}
