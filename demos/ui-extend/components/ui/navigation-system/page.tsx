import { Container, Stack } from '@chakra-ui/react';

export const Page = ({ children }: any) => {
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
        css={{
          width: 'full',
          height: 'full',
        }}
      >
       <>
         {children}
       </>
      </Stack>
    </Container>
  );
};
