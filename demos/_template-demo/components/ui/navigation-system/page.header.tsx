import { HStack } from '@chakra-ui/react';

export const PageHeader = ({ children }: any) => {
  return (
    <HStack
      data-name='page-header'
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
