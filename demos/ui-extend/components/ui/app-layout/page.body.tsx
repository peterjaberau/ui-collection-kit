import { Stack, HStack } from "@chakra-ui/react"

export const PageBody = ({
                           children
}: any) => {
  return (
      <HStack
        data-name="page-body"
        justify="space-between"
        alignItems="flex-start"
        overflow="hidden"
        gap={0}
        flex={1}
      >
        {children}

      </HStack>
  )
}


export const PageBodyInner = (
  { children, sideBottom }:
  { children?: any; sideBottom?: any; }
) => {
  return (
    <Stack
      flex={1}
      width="full"
      height="full"
    >
      <HStack
        data-name="page-body-inner"
        justify="space-between"
        alignItems="flex-start"
        overflow="hidden"
        gap={0}
        flex={1}
        width="full"
        height="full"
      >
        {children}
      </HStack>
      {sideBottom}

    </Stack>
  )
}
