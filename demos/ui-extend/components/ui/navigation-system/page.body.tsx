import { HStack } from "@chakra-ui/react"

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
