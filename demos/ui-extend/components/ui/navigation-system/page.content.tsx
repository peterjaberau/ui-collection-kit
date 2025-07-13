import { Stack, Box } from "@chakra-ui/react"
import { PageSidePanel } from '#components/ui/navigation-system/page.sidepanel';


export const PageContent = ({children}: any) => {

  return (
    <Stack
      data-name="page-content"
      flex={1}
      css={{
        width: "full",
        height: "full",
        paddingX: 1,
      }}
    >
      <Box flex={1} width="full" height="full" overflowY="auto" overflowX="hidden">
        {children}
      </Box>
      <PageSidePanel actorId={'panelContentBottom'}>Content bottom  panel</PageSidePanel>
    </Stack>
  )
}
