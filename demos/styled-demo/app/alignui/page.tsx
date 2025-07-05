import { Box, HStack, Stack, Button, VStack, Bleed, Flex, Grid, Heading, IconButton, ButtonGroup, } from "@chakra-ui/react"
import { RiArrowRightSLine, RiFileCopyLine } from "react-icons/ri"
import { LuChevronDown } from "react-icons/lu"
import { FiMessageSquare } from "react-icons/fi";



export default function Page() {
  return (
    <>
     <Grid templateColumns="repeat(3, 1fr)" gap="4">
       {/*Primary*/}
       <Stack gap="4" padding='8'>
          <Bleed inlineStart='8' mx='1' my='1'fontWeight="bold">Primary Button</Bleed>
          <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12' >
        <HStack>
          <Button variant={'solid'} >solid</Button>
          <Button variant={'subtle'}>subtle</Button>
          <Button variant={'surface'}>surface</Button>
          <Button variant={'outline'}>outline</Button>
          <Button variant={'ghost'}>ghost</Button>
          <Button variant={'plain'}>plain</Button>
        </HStack>
          </Flex>
        </Stack>

       {/*Neutral*/}
       <Stack gap="4" padding='8'>
        <Bleed inlineStart='8' mx='1' my='1' fontWeight="bold" >Neutral Button</Bleed>
        <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12' >
        <HStack>
          <Button colorPalette='neutral' variant={'solid'} >solid</Button>
          <Button colorPalette='neutral' variant={'subtle'}>subtle</Button>
          <Button colorPalette='neutral' variant={'surface'}>surface</Button>
          <Button colorPalette='neutral' variant={'outline'}>outline</Button>
          <Button colorPalette='neutral' variant={'ghost'}>ghost</Button>
          <Button colorPalette='neutral' variant={'plain'}>plain</Button>
        </HStack>
        </Flex>
        </Stack>

       {/*Error*/}
       < Stack gap="4" padding='8'>
        <Bleed inlineStart='8' mx='1' my='1' fontWeight="bold">Error Button</Bleed>
        <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300"  padding='12' >
          <HStack>
          <Button colorPalette='red' variant={'solid'}  >solid</Button>
          <Button colorPalette='red' variant={'subtle'}>subtle</Button>
          <Button colorPalette='red' variant={'surface'}>surface</Button>
          <Button colorPalette='red' variant={'outline'}>outline</Button>
          <Button colorPalette='red' variant={'ghost'}>ghost</Button>
          <Button colorPalette='red' variant={'plain'}>plain</Button>
        </HStack>
       </Flex>
      </Stack>

       {/*Size*/}
       <Stack gap="4" padding='8'   >
          <Bleed inlineStart='8' mx='1' my='1' fontWeight="bold" >Size Button</Bleed>
          <HStack>
         <Flex rounded={10} gap="8" borderWidth="1px" borderColor="gray.300" padding='12'  >
              <VStack gap="8"   >
              <HStack>
                <Button size='lg' variant={'solid'} >large</Button>
                <Button size='md' variant={'solid'} >md</Button>
                <Button size='sm' variant={'solid'} >small</Button>
                <Button size='xs' variant={'solid'} >xsmall</Button>
              </HStack>
          <HStack>
            <Button size='lg' variant={'subtle'} >large</Button>
            <Button size='md' variant={'subtle'}>md</Button>
            <Button size='sm' variant={'subtle'}>small</Button>
            <Button size='xs' variant={'subtle'}>xsmall</Button>

          </HStack>
                <HStack>
                  <Button size='lg' variant={'surface'} >large</Button>
                  <Button size='md' variant={'surface'}>md</Button>
                  <Button size='sm' variant={'surface'}>small</Button>
                  <Button size='xs' variant={'surface'}>xsmall</Button>
                </HStack>

                <HStack>
                  <Button size='lg' variant={'surface'} >large</Button>
                  <Button size='md' variant={'surface'}>md</Button>
                  <Button size='sm' variant={'surface'}>small</Button>
                  <Button size='xs' variant={'outline'}>xsmall</Button>
                </HStack>
              </VStack>
         </Flex>
          </HStack>
          </Stack>

       {/*Disabled*/}
       <Stack gap="4" padding='8'>
         <Bleed inlineStart='8' mx='1' my='1'fontWeight="bold">Disabled Button</Bleed>
         <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12'>
           <HStack>
             <Button variant={'solid'} disabled colorPalette="gray"  >Disabled</Button>
             <Button variant={'subtle'} disabled colorPalette="gray" >Disabled</Button>
             <Button variant={'surface'}disabled colorPalette="gray" >Disabled</Button>
             <Button variant={'outline'}disabled colorPalette="gray" >Disabled</Button>
             <Button variant={'ghost'}disabled colorPalette="gray" >Disabled</Button>
           </HStack>
         </Flex>
       </Stack>

       {/*With Icon*/}
       <Stack gap="4" padding='8'>
         <Bleed inlineStart='8' mx='1' my='1'fontWeight="bold">With Icon Button</Bleed>
         <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12' >
           <HStack>
             <Button variant={'solid'}  >Button
               <RiArrowRightSLine /></Button>
             <Button variant={'solid'}>
               <RiFileCopyLine />
             </Button>
           </HStack>

         </Flex>
       </Stack>

       {/*Full Width*/}
       <Stack gap="4" padding='8'>
         <Bleed inlineStart='8' mx='1' my='1'fontWeight="bold">Full Width Button</Bleed>
         <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12' >
           <HStack>
             <Button  width='full' variant={'solid'}  >solid</Button>

           </HStack>
         </Flex>
       </Stack>

       {/*asChild*/}
       <Stack gap="4" padding='8'>
         <Bleed inlineStart='8' mx='1' my='1'fontWeight="bold">asChild Button</Bleed>
         <Flex rounded={10} gap="8"  borderWidth="1px" borderColor="gray.300" padding='12' >
           <HStack>
             <Button asChild>
             <a href='#'>As Link</a>
             </Button>

           </HStack>
         </Flex>
       </Stack>

       <Stack >
         <Box borderStyle='dashed' borderColor="red.300" padding='12' borderWidth="2px" rounded="lg" gap="10">
           <HStack>
           <FiMessageSquare />
           <Heading size="lg" fontWeight="semibold" gap="10" >Event Service</Heading>
           </HStack>
           <Heading size="sm" fontWeight="normal" gap="10" >Service that handles the inventory</Heading>
          <Stack direction="row"   marginTop="10" justify="space-between" align="center">

          <VStack borderColor="blue.300" borderWidth="2px" rounded="lg" bg="blue.50" padding='4' >
            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
            <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
              <LuChevronDown />
            </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
              <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
                <LuChevronDown />
              </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>

            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
              <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
                <LuChevronDown />
              </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
              <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
                <LuChevronDown />
              </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
              <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
                <LuChevronDown />
              </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" colorPalette="gray" variant={"outline"}  attached>
              <IconButton variant={'outline'}  borderColor="gray.300" bg="white" >
                <LuChevronDown />
              </IconButton>
              <Button variant={'outline'} borderColor="gray.300" bg="white" >Order confirmed</Button>
            </ButtonGroup>

          </VStack>





          <HStack borderColor="blue.300" padding='12' borderWidth="2px" w="25px" h="25px" rounded={10}>

            Inventory service</HStack>

          <HStack borderColor="blue.300" padding='12' borderWidth="2px"  h="25px"  rounded={10}>1234</HStack>

        </Stack>





      </Box>
       </Stack>




























     </Grid>
    </>
  );
}
