import { HStack } from "@chakra-ui/react"


export const PageToolbar = ({start, center, end}: any) => {
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
      { start && <PageToolbarStart>{start}</PageToolbarStart> }
      { center && <PageToolbarCenter>{center}</PageToolbarCenter> }
      { end && <PageToolbarEnd>{end}</PageToolbarEnd> }
    </HStack>
  )
}

export const PageToolbarStart = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-start"
      data-name="PageToolbarStart"
    >
      {children}

    </HStack>
  )
}

export const PageToolbarCenter = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="center"
      data-name="PageToolbarCenter"
    >
      {children}

    </HStack>
  )
}

export const PageToolbarEnd = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-end"
      data-name="PageToolbarEnd"
    >
      {children}

    </HStack>
  )
}
