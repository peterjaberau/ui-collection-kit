import { Container, Stack, HStack } from '@chakra-ui/react';

export const Page = ({
  children,
  header,
  footer,
}: {
  children?: any;
  header?: any;
  footer?: any;
}) => {
  return (
    <Container
      data-name='page'
      fluid
      css={{
        width: '100vw',
        height: '100vh',
        p: 0,
        background: 'bg.emphasized',
      }}
    >
      <Stack
        gap={1}
        css={{
          width: 'full',
          height: 'full',
        }}
      >
        <>
          {header && <HStack data-name='page-header'>{header}</HStack>}

          {children}

          {footer && <HStack data-name='page-footer'>{footer}</HStack>}
        </>
      </Stack>
    </Container>
  );
};
