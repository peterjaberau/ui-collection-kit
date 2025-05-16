import { Container, VStack } from "@chakra-ui/react"
import { GenericLayoutProps } from './common.types'

export const PageRoot = (props: GenericLayoutProps) => {
  return (
    <Container
      fluid={true}
      css={{
        height: 'full',
        width: 'full',
        padding: '0',
        margin: '0',
        overflow: 'auto',
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
