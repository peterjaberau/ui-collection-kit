import { HStack } from '@chakra-ui/react';

export const PageHeader = ({
  start,
  center,
  end,
}: {
  children?: any;
  start?: any;
  center?: any;
  end?: any;
}) => {
  return (
    <HStack
      data-name='page-header'
      justify='space-between'
      css={{
        width: 'full',
        height: '40px',
        bg: 'bg.panel',
      }}
    >
      {start && <PageHeaderStart>{start}</PageHeaderStart>}
      {center && <PageHeaderCenter>{center}</PageHeaderCenter>}
      {end && <PageHeaderEnd>{end}</PageHeaderEnd>}
    </HStack>
  );
};

export const PageHeaderStart = ({ children }: any) => {
  return (
    <HStack flex={1} justify='flex-start' data-name='PageHeaderStart'>
      {children}
    </HStack>
  );
};

export const PageHeaderCenter = ({ children }: any) => {
  return (
    <HStack flex={1} justify='center' data-name='PageHeaderCenter'>
      {children}
    </HStack>
  );
};

export const PageHeaderEnd = ({ children }: any) => {
  return (
    <HStack flex={1} justify='flex-end' data-name='PageHeaderEnd'>
      {children}
    </HStack>
  );
};
