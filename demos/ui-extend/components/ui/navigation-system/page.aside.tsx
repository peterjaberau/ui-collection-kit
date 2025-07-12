import { Box, HStack, Stack } from '@chakra-ui/react';


export const PageAside = ({children, position}: { children: any, position?: 'left' | 'right'}) => {

  return (
    <Stack
      data-name="page-aside"
      justify="space-between"
      css={{
        height: "full",
        width: "50px",
        bg: "bg.panel",
        ...(!position || position === 'left' ?
          { borderRight: '1px solid', borderRightColor: 'border.muted' } :
          { borderLeft: '1px solid', borderLeftColor: 'border.muted' }
        ),
      }}
    >
      {children}
    </Stack>
  )
}



export const PageAsideStart = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="flex-start"
      data-name="PageAsideStart"
    >
      {children}

    </Stack>
  )
}

export const PageAsideCenter = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="center"
      data-name="PageAsideCenter"
    >
      {children}

    </Stack>
  )
}

export const PageAsideEnd = ({children}: any) => {

  return (
    <Stack
      flex={1}
      justify="flex-end"
      data-name="PageAsideEnd"
    >
      {children}

    </Stack>
  )
}
