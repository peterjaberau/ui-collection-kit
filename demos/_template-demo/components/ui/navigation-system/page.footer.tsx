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
