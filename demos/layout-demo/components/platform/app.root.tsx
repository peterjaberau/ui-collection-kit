import { Container, VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'

export const AppRoot = (props: GenericLayoutProps) => {
  return (
    <Container
      fluid={true}
      css={{
        height: '100vh',
        width: '100vw',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
      }}
    >
      <VStack
        gap={0}
        css={{
          width: 'full',
          backgroundColor: 'gray.50',
          height: 'full',
        }}
      >
        {props.children}
      </VStack>
    </Container>
  );
};
