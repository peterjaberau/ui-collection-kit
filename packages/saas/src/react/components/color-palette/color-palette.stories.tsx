import React from 'react'

import { Box, HStack, Stack, Text } from "@chakra-ui/react"

export default {
  title: 'SaasUI/Components/Color Palette',
}

const ColorPaletteItem: any = ({bgColor, color}: any) => {
  return (
    <Stack gap="2">
      <Box h={12} w={12} bgColor={bgColor} color={color || 'black'}/>
      <Text fontSize={10} fontWeight={500} color={color || 'black'}>{bgColor}</Text>

    </Stack>
  )
}

export const Default = {
  render: () => (
    <Stack gap="8">
      <HStack>
        <ColorPaletteItem bgColor={'gray.950'} />
        <ColorPaletteItem bgColor={'gray.900'} />
        <ColorPaletteItem bgColor={'gray.800'} />
        <ColorPaletteItem bgColor={'gray.700'} />
        <ColorPaletteItem bgColor={'gray.600'} />
        <ColorPaletteItem bgColor={'gray.500'} />
        <ColorPaletteItem bgColor={'gray.400'} />
        <ColorPaletteItem bgColor={'gray.300'} />
        <ColorPaletteItem bgColor={'gray.200'} />
        <ColorPaletteItem bgColor={'gray.100'} />
        <ColorPaletteItem bgColor={'gray.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'zinc.950'} />
        <ColorPaletteItem bgColor={'zinc.900'} />
        <ColorPaletteItem bgColor={'zinc.800'} />
        <ColorPaletteItem bgColor={'zinc.700'} />
        <ColorPaletteItem bgColor={'zinc.600'} />
        <ColorPaletteItem bgColor={'zinc.500'} />
        <ColorPaletteItem bgColor={'zinc.400'} />
        <ColorPaletteItem bgColor={'zinc.300'} />
        <ColorPaletteItem bgColor={'zinc.200'} />
        <ColorPaletteItem bgColor={'zinc.100'} />
        <ColorPaletteItem bgColor={'zinc.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'neutral.950'} />
        <ColorPaletteItem bgColor={'neutral.900'} />
        <ColorPaletteItem bgColor={'neutral.800'} />
        <ColorPaletteItem bgColor={'neutral.700'} />
        <ColorPaletteItem bgColor={'neutral.600'} />
        <ColorPaletteItem bgColor={'neutral.500'} />
        <ColorPaletteItem bgColor={'neutral.400'} />
        <ColorPaletteItem bgColor={'neutral.300'} />
        <ColorPaletteItem bgColor={'neutral.200'} />
        <ColorPaletteItem bgColor={'neutral.100'} />
        <ColorPaletteItem bgColor={'neutral.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'stone.950'} />
        <ColorPaletteItem bgColor={'stone.900'} />
        <ColorPaletteItem bgColor={'stone.800'} />
        <ColorPaletteItem bgColor={'stone.700'} />
        <ColorPaletteItem bgColor={'stone.600'} />
        <ColorPaletteItem bgColor={'stone.500'} />
        <ColorPaletteItem bgColor={'stone.400'} />
        <ColorPaletteItem bgColor={'stone.300'} />
        <ColorPaletteItem bgColor={'stone.200'} />
        <ColorPaletteItem bgColor={'stone.100'} />
        <ColorPaletteItem bgColor={'stone.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'red.950'} />
        <ColorPaletteItem bgColor={'red.900'} />
        <ColorPaletteItem bgColor={'red.800'} />
        <ColorPaletteItem bgColor={'red.700'} />
        <ColorPaletteItem bgColor={'red.600'} />
        <ColorPaletteItem bgColor={'red.500'} />
        <ColorPaletteItem bgColor={'red.400'} />
        <ColorPaletteItem bgColor={'red.300'} />
        <ColorPaletteItem bgColor={'red.200'} />
        <ColorPaletteItem bgColor={'red.100'} />
        <ColorPaletteItem bgColor={'red.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'orange.950'} />
        <ColorPaletteItem bgColor={'orange.900'} />
        <ColorPaletteItem bgColor={'orange.800'} />
        <ColorPaletteItem bgColor={'orange.700'} />
        <ColorPaletteItem bgColor={'orange.600'} />
        <ColorPaletteItem bgColor={'orange.500'} />
        <ColorPaletteItem bgColor={'orange.400'} />
        <ColorPaletteItem bgColor={'orange.300'} />
        <ColorPaletteItem bgColor={'orange.200'} />
        <ColorPaletteItem bgColor={'orange.100'} />
        <ColorPaletteItem bgColor={'orange.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'amber.950'} />
        <ColorPaletteItem bgColor={'amber.900'} />
        <ColorPaletteItem bgColor={'amber.800'} />
        <ColorPaletteItem bgColor={'amber.700'} />
        <ColorPaletteItem bgColor={'amber.600'} />
        <ColorPaletteItem bgColor={'amber.500'} />
        <ColorPaletteItem bgColor={'amber.400'} />
        <ColorPaletteItem bgColor={'amber.300'} />
        <ColorPaletteItem bgColor={'amber.200'} />
        <ColorPaletteItem bgColor={'amber.100'} />
        <ColorPaletteItem bgColor={'amber.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'yellow.950'} />
        <ColorPaletteItem bgColor={'yellow.900'} />
        <ColorPaletteItem bgColor={'yellow.800'} />
        <ColorPaletteItem bgColor={'yellow.700'} />
        <ColorPaletteItem bgColor={'yellow.600'} />
        <ColorPaletteItem bgColor={'yellow.500'} />
        <ColorPaletteItem bgColor={'yellow.400'} />
        <ColorPaletteItem bgColor={'yellow.300'} />
        <ColorPaletteItem bgColor={'yellow.200'} />
        <ColorPaletteItem bgColor={'yellow.100'} />
        <ColorPaletteItem bgColor={'yellow.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'lime.950'} />
        <ColorPaletteItem bgColor={'lime.900'} />
        <ColorPaletteItem bgColor={'lime.800'} />
        <ColorPaletteItem bgColor={'lime.700'} />
        <ColorPaletteItem bgColor={'lime.600'} />
        <ColorPaletteItem bgColor={'lime.500'} />
        <ColorPaletteItem bgColor={'lime.400'} />
        <ColorPaletteItem bgColor={'lime.300'} />
        <ColorPaletteItem bgColor={'lime.200'} />
        <ColorPaletteItem bgColor={'lime.100'} />
        <ColorPaletteItem bgColor={'lime.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'green.950'} />
        <ColorPaletteItem bgColor={'green.900'} />
        <ColorPaletteItem bgColor={'green.800'} />
        <ColorPaletteItem bgColor={'green.700'} />
        <ColorPaletteItem bgColor={'green.600'} />
        <ColorPaletteItem bgColor={'green.500'} />
        <ColorPaletteItem bgColor={'green.400'} />
        <ColorPaletteItem bgColor={'green.300'} />
        <ColorPaletteItem bgColor={'green.200'} />
        <ColorPaletteItem bgColor={'green.100'} />
        <ColorPaletteItem bgColor={'green.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'emerald.950'} />
        <ColorPaletteItem bgColor={'emerald.900'} />
        <ColorPaletteItem bgColor={'emerald.800'} />
        <ColorPaletteItem bgColor={'emerald.700'} />
        <ColorPaletteItem bgColor={'emerald.600'} />
        <ColorPaletteItem bgColor={'emerald.500'} />
        <ColorPaletteItem bgColor={'emerald.400'} />
        <ColorPaletteItem bgColor={'emerald.300'} />
        <ColorPaletteItem bgColor={'emerald.200'} />
        <ColorPaletteItem bgColor={'emerald.100'} />
        <ColorPaletteItem bgColor={'emerald.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'teal.950'} />
        <ColorPaletteItem bgColor={'teal.900'} />
        <ColorPaletteItem bgColor={'teal.800'} />
        <ColorPaletteItem bgColor={'teal.700'} />
        <ColorPaletteItem bgColor={'teal.600'} />
        <ColorPaletteItem bgColor={'teal.500'} />
        <ColorPaletteItem bgColor={'teal.400'} />
        <ColorPaletteItem bgColor={'teal.300'} />
        <ColorPaletteItem bgColor={'teal.200'} />
        <ColorPaletteItem bgColor={'teal.100'} />
        <ColorPaletteItem bgColor={'teal.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'sky.950'} />
        <ColorPaletteItem bgColor={'sky.900'} />
        <ColorPaletteItem bgColor={'sky.800'} />
        <ColorPaletteItem bgColor={'sky.700'} />
        <ColorPaletteItem bgColor={'sky.600'} />
        <ColorPaletteItem bgColor={'sky.500'} />
        <ColorPaletteItem bgColor={'sky.400'} />
        <ColorPaletteItem bgColor={'sky.300'} />
        <ColorPaletteItem bgColor={'sky.200'} />
        <ColorPaletteItem bgColor={'sky.100'} />
        <ColorPaletteItem bgColor={'sky.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'blue.950'} />
        <ColorPaletteItem bgColor={'blue.900'} />
        <ColorPaletteItem bgColor={'blue.800'} />
        <ColorPaletteItem bgColor={'blue.700'} />
        <ColorPaletteItem bgColor={'blue.600'} />
        <ColorPaletteItem bgColor={'blue.500'} />
        <ColorPaletteItem bgColor={'blue.400'} />
        <ColorPaletteItem bgColor={'blue.300'} />
        <ColorPaletteItem bgColor={'blue.200'} />
        <ColorPaletteItem bgColor={'blue.100'} />
        <ColorPaletteItem bgColor={'blue.50'} />

      </HStack>




      <HStack>
        <ColorPaletteItem bgColor={'pink.950'} />
        <ColorPaletteItem bgColor={'pink.900'} />
        <ColorPaletteItem bgColor={'pink.800'} />
        <ColorPaletteItem bgColor={'pink.700'} />
        <ColorPaletteItem bgColor={'pink.600'} />
        <ColorPaletteItem bgColor={'pink.500'} />
        <ColorPaletteItem bgColor={'pink.400'} />
        <ColorPaletteItem bgColor={'pink.300'} />
        <ColorPaletteItem bgColor={'pink.200'} />
        <ColorPaletteItem bgColor={'pink.100'} />
        <ColorPaletteItem bgColor={'pink.50'} />

      </HStack>

      <HStack>
        <ColorPaletteItem bgColor={'purple.950'} />
        <ColorPaletteItem bgColor={'purple.900'} />
        <ColorPaletteItem bgColor={'purple.800'} />
        <ColorPaletteItem bgColor={'purple.700'} />
        <ColorPaletteItem bgColor={'purple.600'} />
        <ColorPaletteItem bgColor={'purple.500'} />
        <ColorPaletteItem bgColor={'purple.400'} />
        <ColorPaletteItem bgColor={'purple.300'} />
        <ColorPaletteItem bgColor={'purple.200'} />
        <ColorPaletteItem bgColor={'purple.100'} />
        <ColorPaletteItem bgColor={'purple.50'} />

      </HStack>





      <HStack>
        <Box h={6} w={6} colorScheme={'color.gray.50'}></Box>
      </HStack>

    </Stack>
  ),
}


