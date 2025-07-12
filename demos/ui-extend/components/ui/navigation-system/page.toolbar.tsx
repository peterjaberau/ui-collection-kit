import { HStack } from "@chakra-ui/react"


export const PageToolbar = ({children}: any) => {
  return (
    <HStack
      data-name="page-toolbar"
      css={{
        width: "full",
        height: "50px",
        bg: "bg.panel",
        borderBottom: "1px solid",
        borderBottomColor: "border"
      }}
    >
      {children}
    </HStack>
  )
}
