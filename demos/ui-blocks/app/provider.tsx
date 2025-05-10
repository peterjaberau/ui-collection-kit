'use client';
import { AppInstanceRenderer } from '#machines/renderers';
import { Button, ChakraProvider, Flex } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';
import { useAppActorRef, useAppActorSelector } from '#machines/context';
import { cookies } from 'next/headers';
import { system } from '#presets/themePreset'
import { configOptions, getConfigFromOptions, getThemeConfigFromOptions } from "#machines/configOptions"
import { useState } from "react"

const activeThemeSelector = (snapshot: any) =>
  snapshot.context?.theme?.activeTheme;
const isIdleSelector = (snapshot: any) => snapshot.matches('idle');
const isReadySelector = (snapshot: any) => snapshot.matches('ready');

export const Provider = (props: { children: React.ReactNode }) => {
  const activeTheme = useAppActorSelector(activeThemeSelector);
  const isIdle = useAppActorSelector(isIdleSelector);
  const isReady = useAppActorSelector(isReadySelector);

  return (
    isReady && (
      <ChakraProvider value={activeTheme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Stack>{props.children}</Stack>
        </ThemeProvider>
      </ChakraProvider>
    )
  );
};
