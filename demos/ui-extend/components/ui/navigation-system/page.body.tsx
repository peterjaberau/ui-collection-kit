import { Stack, HStack } from "@chakra-ui/react"
import { PageSidePanel } from '#components/ui/navigation-system/page.sidepanel';

export const PageBody = ({ children }: any) => {
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


export const PageBodyInner = ({ children }: any) => {
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
      <PageSidePanel actorId={'panelBottom'}>bottom side panel</PageSidePanel>
    </Stack>
  )
}
