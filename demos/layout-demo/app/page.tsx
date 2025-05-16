'use client';
import { Box, Flex, VStack, HStack, Container, Center } from '@chakra-ui/react';
import { AppIndex } from '#platform/app.index';
import { PageIndex } from '#platform/page.index';

export default function Page() {
  return (
    <>
      <AppIndex>
        <PageIndex>
          PageContent
        </PageIndex>
      </AppIndex>
    </>
  );
}
