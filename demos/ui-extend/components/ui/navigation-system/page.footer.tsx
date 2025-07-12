import { HStack } from '@chakra-ui/react';


export const PageFooter = ({ children }: any) => {
  return (
    <HStack
      data-name='page-footer'
      css={{
        width: 'full',
        height: '40px',
        bg: 'bg.panel',
      }}
    >
      {children}
    </HStack>
  );
};

export const PageFooterStart = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-start"
      data-name="PageFooterStart"
    >
      {children}

    </HStack>
  )
}

export const PageFooterCenter = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="center"
      data-name="PageFooterCenter"
    >
      {children}

    </HStack>
  )
}

export const PageFooterEnd = ({children}: any) => {

  return (
    <HStack
      flex={1}
      justify="flex-end"
      data-name="PageFooterEnd"
    >
      {children}

    </HStack>
  )
}
