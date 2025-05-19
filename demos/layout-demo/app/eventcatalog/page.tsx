'use client';
import AppLayout from '#platform/app-layout';
import { pageData } from './data';
import {
  chakra,
  SimpleGrid,
  Stack,
  Box,
  For,
  Flex,
  Badge,
  Card,
  Accordion,
  Button,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <AppLayout
        header={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
        footer={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
        leftBar={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
        left={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
        main={
          <Container>
            <Heading size={'xl'}>{pageData.pageIndex.title}</Heading>
            <Stack gap='4' direction='row' wrap='wrap'>
              <For each={pageData.pageIndex.content}>
                {(item, index) => (
                  <Button variant='solid' asChild key={index}>
                    <a href='#'>{`${item.title} (${item.count})`}</a>
                  </Button>
                )}
              </For>
            </Stack>
          </Container>
        }
        rightBar={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
        right={{
          start: <></>,
          center: <></>,
          end: <></>,
        }}
      />
    </>
  );
}
