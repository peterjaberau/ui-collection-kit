import { Stack, Box } from '@chakra-ui/react';

export const PageContent = ({
  children,
  sideContent,
  toolbar,
}: {
  children?: any;
  sideContent?: any;
  toolbar?: any;
}) => {
  return (
    <Stack
      data-name='page-content'
      flex={1}
      gap={1}
      css={{
        width: 'full',
        height: 'full',
        // overflowY:'auto',
        // overflowX:'hidden',
        paddingX: 1,
      }}
    >
      {toolbar || null}
      <Box
        // flex={1}
        width='full'
        height='full'
        css={{
          overflowY:'auto',
          overflowX:'hidden',
        }}
      >
        <Box
          width='full'
          height='100%'
          // height='full'
        >
        {children}
        </Box>
      </Box>
      {sideContent || null}
    </Stack>
  );
};
