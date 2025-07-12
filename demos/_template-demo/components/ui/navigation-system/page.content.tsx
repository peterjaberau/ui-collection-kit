import { Stack } from "@chakra-ui/react"


export const PageContent = ({children}: any) => {

  return (
    <Stack
      data-name="page-content"
      flex={1}
      css={{
        width: "full",
        height: "full",
      }}
    >
      {children}
    </Stack>
  )
}
