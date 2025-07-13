import { Stack, Box } from '@chakra-ui/react';

export const PageContent = ({
  children,
  sideContent,
}: {
  children?: any;
  sideContent?: any;
}) => {
  return (
    <Stack
      data-name='page-content'
      flex={1}
      css={{
        width: 'full',
        height: 'full',
        paddingX: 1,
      }}
    >
      <Box
        flex={1}
        width='full'
        height='full'
        overflowY='auto'
        overflowX='hidden'
      >
        {children}
      </Box>
      {sideContent}
    </Stack>
  );
};
