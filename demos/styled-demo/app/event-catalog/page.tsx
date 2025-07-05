import {
  Box,
  HStack,
  Button,
  VStack,
  Stack,
  Bleed,
  Flex,
  Grid,
  Heading,
  IconButton,
  ButtonGroup,
  SimpleGrid,
  Card,
  AvatarIcon,
  Code,
  CardBody,
  Separator,

} from "@chakra-ui/react"
import { RiArrowRightSLine, RiFileCopyLine } from "react-icons/ri"
import { PiLightningLight } from "react-icons/pi"
import { LuChevronDown } from "react-icons/lu"
import { FaRegHardDrive } from "react-icons/fa6"
import { CiSearch } from "react-icons/ci"
import { FiMessageSquare } from "react-icons/fi"
import { yellow } from "next/dist/lib/picocolors"

export default function Page() {
  return (
    <>
      <Flex border="2px solid" borderColor={"border.emphasized"} maxW={"1800px"} rounded="md"  padding={"10"} >
      <SimpleGrid columns={3}  gap="4">
        <Card.Root border="2px dashed" borderColor={"border.emphasized"} width="2xl" >
          <Card.Header>
            <Card.Title as="h2">Event Service</Card.Title>
            <Card.Description as="p">Service that handles the inventory</Card.Description>
          </Card.Header>
          <Card.Body>
            <HStack >
              <Box>
                <VStack borderWidth={"1px"} borderColor={"border.subtle"} padding="4" gap="4" rounded="md">
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <CiSearch />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      List inventory list
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order Amended
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <FiMessageSquare />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Update inventory
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Box>


              <Box>
                <Stack>
                  <Separator flex="1" variant="solid" />
                  <VStack flexShrink="0" borderWidth={"1px"} borderColor={"border.subtle"} padding="4" gap="4" rounded="md">
                      <IconButton variant={"plain"}>
                        <FaRegHardDrive />
                      </IconButton>
                      <Button variant="plain" colorPalette="gray">
                        Invertory service
                      </Button>
                      <Code variant="plain" colorPalette="gray" size="xs">
                        v0.0.2
                      </Code>
                   </VStack>
                  <Separator flex="1" variant="solid" />
                </Stack>
              </Box>

              <Box>
                <VStack borderWidth={"1px"} borderColor="border.subtle" padding="4" gap="4" rounded="md">
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <LuChevronDown />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <LuChevronDown />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Box>
            </HStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
      <SimpleGrid  columns={3} gap="4">
        <Card.Root border="2px dashed" borderColor={"border.emphasized"} width="2xl">
          <Card.Header>
            <Card.Title as="h2">Event Service</Card.Title>
            <Card.Description as="p">Service that handles the inventory</Card.Description>
          </Card.Header>
          <Card.Body>
            <HStack justifyContent="space-between">
              <Box>
                <VStack borderWidth={"1px"} borderColor={"border.subtle"} padding="4" gap="4" rounded="md">
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <CiSearch />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      List inventory list
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order Amended
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <FiMessageSquare />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Update inventory
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Box>


              <Box>
                <Stack>
                  <Separator flex="1" variant="solid" />
                  <VStack flexShrink="0" borderWidth={"1px"} borderColor={"border.subtle"} padding="4" gap="4" rounded="md">
                    <IconButton variant={"plain"}>
                      <FaRegHardDrive />
                    </IconButton>
                    <Button variant="plain" colorPalette="gray">
                      Invertory service
                    </Button>
                    <Code variant="plain" colorPalette="gray" size="xs">
                      v0.0.2
                    </Code>
                  </VStack>
                  <Separator flex="1" variant="solid" />
                </Stack>
              </Box>

              <Box>
                <VStack borderWidth={"1px"} borderColor="border.subtle" padding="4" gap="4" rounded="md">
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <PiLightningLight />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <LuChevronDown />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" colorPalette="gray" variant={"outline"} attached>
                    <IconButton variant={"outline"} borderColor="gray.300" bg="white">
                      <LuChevronDown />
                    </IconButton>
                    <Button variant={"outline"} borderColor="gray.300" bg="white">
                      Order confirmed
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Box>
            </HStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
     </Flex>

    </>
  )
}
