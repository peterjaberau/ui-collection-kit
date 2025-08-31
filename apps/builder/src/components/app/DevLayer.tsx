'use client'
import React, { useEffect } from "react"
import { Stack, HStack, Box, Badge, Center } from "@chakra-ui/react"

// type = layer | widget
export const DevLayer: any = ({ children, tagName, variant = 'solid', type = 'layer' }: any) => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    isMounted && (
      <Stack
        gap={0}
        css={{
          bg: variant === "solid" ? "bg.warning" : "bg.surface",
          w: "full",
          h: "full",
          p: 2,
          borderRadius: 'md',
          shadow: 'md'
        }}
      >
        <HStack>
          <Badge variant={variant} borderBottomRadius='none' >
            {tagName}
          </Badge>
        </HStack>
        {
          type === 'layer' && (
            <Box flex={1} h="full" bg='bg.panel' borderRadius='md' borderTopLeftRadius='none' border='1px dashed'>
              {children}
            </Box>
          )
        }

        {
          type === 'widget' && (
            <Box
              flex={1}
              h="full"
              bg='bg.panel'
              px={4}
              borderRadius='md'
              minH='50px'
              borderTopLeftRadius='none'
              border='1px dashed'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              {children}
            </Box>
          )
        }
      </Stack>
    )
  )
}
